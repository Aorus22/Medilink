import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "#/prisma/db";
import { getAuthContext } from "@/lib/auth";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const ctx = await getAuthContext(req);
  if (ctx.role !== "ADMIN" && ctx.role !== "DOCTOR") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      userId,
      medicineId,
      namaObat,
      keteranganPenggunaan,
      dosis,
      usagePerDay,
      usageDay,
      jamPenggunaan,
      tanggalMulaiObat,
      tanggalSelesaiObat,
    } = body;

    if (!userId || !namaObat?.trim()) {
      return NextResponse.json(
        { error: "userId and namaObat are required" },
        { status: 400 }
      );
    }

    if (!keteranganPenggunaan?.trim() || !dosis?.trim()) {
      return NextResponse.json(
        { error: "keteranganPenggunaan and dosis are required" },
        { status: 400 }
      );
    }

    if (!usagePerDay || !usageDay || !tanggalMulaiObat || !tanggalSelesaiObat) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Resolve doctorId
    let doctorId: number | null = null;
    if (ctx.role === "DOCTOR") {
      doctorId = ctx.doctorId!;
    } else if (ctx.role === "ADMIN" && body.doctorId) {
      doctorId = parseInt(body.doctorId);
    }

    // Resolve harga from medicine master data
    let harga: number | null = null;
    if (medicineId) {
      const medicine = await prisma.medicine.findUnique({
        where: { id: parseInt(medicineId) },
      });
      if (medicine) {
        harga = medicine.harga;
      }
    }

    const medication = await prisma.pharmacy.create({
      data: {
        userId: parseInt(userId),
        namaObat: namaObat.trim(),
        keteranganPenggunaan: keteranganPenggunaan.trim(),
        dosis: dosis.trim(),
        usagePerDay: parseInt(usagePerDay),
        usageDay: parseInt(usageDay),
        jamPenggunaan,
        tanggalMulaiObat: new Date(tanggalMulaiObat),
        tanggalSelesaiObat: new Date(tanggalSelesaiObat),
        medicineId: medicineId ? parseInt(medicineId) : null,
        doctorId,
        harga,
      },
    });

    // Call vending machine mock
    try {
      await fetch("http://localhost:3000/api/vending-machine/mock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          medicineName: namaObat,
          quantity: usagePerDay * usageDay,
          patientId: userId,
        }),
      });
    } catch {
      // Vending machine call is non-blocking
    }

    return NextResponse.json(medication, { status: 201 });
  } catch (e) {
    console.error("Error prescribing medication:", e);
    return NextResponse.json(
      { error: "Failed to prescribe medication" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
