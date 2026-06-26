import { PrismaClient } from "#/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { getAuthContext } from "@/lib/auth";

const prisma = new PrismaClient();

export interface MedicationInfo {
  id: number;
  namaObat: string;
  keteranganPenggunaan: string;
  dosis: string;
  usagePerDay: number;
  usageDay: number;
  jamPenggunaan: any;
  tanggalMulaiObat: Date;
  tanggalSelesaiObat: Date;
  userId: number;
  medicineId?: number | null;
  harga?: number | null;
  doctorId?: number | null;
}

export async function GET(req: NextRequest) {
  const ctx = await getAuthContext(req);

  let userId: number | null = null;

  if (ctx.role === "ADMIN") {
    const paramUserId = req.nextUrl.searchParams.get("userId");
    if (paramUserId) userId = parseInt(paramUserId);
  } else if (ctx.role === "DOCTOR") {
    const paramUserId = req.nextUrl.searchParams.get("userId");
    if (paramUserId) {
      userId = parseInt(paramUserId);
    } else {
      // Return all medications prescribed by this doctor
      const medications = await prisma.pharmacy.findMany({
        where: { doctorId: ctx.doctorId },
        orderBy: { id: "desc" },
      });
      return NextResponse.json(medications);
    }
  } else {
    // USER role — only their own
    userId = ctx.userId;
  }

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const medications = await prisma.pharmacy.findMany({
      where: { userId },
      orderBy: { id: "desc" },
    });

    return NextResponse.json(medications);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch pharmacy info" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: NextRequest) {
  const ctx = await getAuthContext(req);

  if (ctx.role !== "ADMIN" && ctx.role !== "DOCTOR") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId =
    ctx.role === "ADMIN"
      ? req.nextUrl.searchParams.get("userId")
      : req.headers.get("x-user-id");

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  try {
    const newMedication = await prisma.pharmacy.create({
      data: {
        userId: parseInt(userId),
        doctorId: ctx.doctorId || body.doctorId || null,
        ...body,
      },
    });

    return NextResponse.json(newMedication, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create medication data" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(req: NextRequest) {
  const ctx = await getAuthContext(req);

  if (ctx.role !== "ADMIN" && ctx.role !== "DOCTOR") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const id = req.nextUrl.searchParams.get("id");
  if (!id || isNaN(parseInt(id))) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    await prisma.pharmacy.delete({
      where: { id: parseInt(id) },
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
