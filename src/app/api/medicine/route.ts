import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "#/prisma/db";
import { getAuthContext } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const medicines = await prisma.medicine.findMany({
      orderBy: { namaObat: "asc" },
    });
    return NextResponse.json(medicines);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch medicines" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: NextRequest) {
  const ctx = await getAuthContext(req);
  if (ctx.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { namaObat, harga } = await req.json();
    if (!namaObat?.trim() || typeof harga !== "number" || harga < 0) {
      return NextResponse.json(
        { error: "namaObat and harga are required" },
        { status: 400 }
      );
    }

    const medicine = await prisma.medicine.create({
      data: { namaObat: namaObat.trim(), harga },
    });

    return NextResponse.json(medicine, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create medicine" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
