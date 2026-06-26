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

  try {
    if (ctx.role === "ADMIN") {
      const paramUserId = req.nextUrl.searchParams.get("userId");
      const where = paramUserId ? { userId: parseInt(paramUserId) } : {};
      const medications = await prisma.pharmacy.findMany({ where, orderBy: { id: "desc" } });
      return NextResponse.json(medications);
    }

    if (ctx.role === "DOCTOR") {
      const paramUserId = req.nextUrl.searchParams.get("userId");
      const where = paramUserId
        ? { doctorId: ctx.doctorId, userId: parseInt(paramUserId) }
        : { doctorId: ctx.doctorId };
      const medications = await prisma.pharmacy.findMany({ where, orderBy: { id: "desc" } });
      return NextResponse.json(medications);
    }

    // USER role — only their own
    const medications = await prisma.pharmacy.findMany({
      where: { userId: ctx.userId },
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


