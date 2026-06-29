import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "#/prisma/db";
import { getAuthContext } from "@/lib/auth";

const prisma = new PrismaClient();

export async function PUT(req: NextRequest, { params }: any) {
  const ctx = await getAuthContext(req);

  if (ctx.role !== "ADMIN" && ctx.role !== "DOCTOR") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const id = parseInt((await params).id);
  if (!id || isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const body = await req.json();
    const {
      namaObat,
      medicineId,
      keteranganPenggunaan,
      dosis,
      usagePerDay,
      usageDay,
      jamPenggunaan,
      tanggalMulaiObat,
      tanggalSelesaiObat,
    } = body;

    let harga: number | null = null;
    if (medicineId) {
      const medicine = await prisma.medicine.findUnique({
        where: { id: parseInt(medicineId) },
      });
      if (medicine) harga = medicine.harga;
    }

    const updated = await prisma.pharmacy.update({
      where: { id },
      data: {
        namaObat: namaObat?.trim(),
        medicineId: medicineId ? parseInt(medicineId) : null,
        keteranganPenggunaan: keteranganPenggunaan?.trim(),
        dosis: dosis?.trim(),
        usagePerDay: usagePerDay ? parseInt(usagePerDay) : undefined,
        usageDay: usageDay ? parseInt(usageDay) : undefined,
        jamPenggunaan,
        tanggalMulaiObat: tanggalMulaiObat ? new Date(tanggalMulaiObat) : undefined,
        tanggalSelesaiObat: tanggalSelesaiObat ? new Date(tanggalSelesaiObat) : undefined,
        harga,
      },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to update medication data" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(req: NextRequest, { params }: any) {
  const ctx = await getAuthContext(req);

  if (ctx.role !== "ADMIN" && ctx.role !== "DOCTOR") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const id = parseInt((await params).id);
  if (!id || isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    await prisma.pharmacy.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Medication data deleted successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to delete medication data" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
