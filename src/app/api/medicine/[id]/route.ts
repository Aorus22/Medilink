import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import { getAuthContext } from "@/lib/auth";

const prisma = new PrismaClient();

export async function PUT(req: NextRequest, { params }: any) {
  const ctx = await getAuthContext(req);
  if (ctx.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const id = parseInt((await params).id);
  if (!id) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const { namaObat, harga } = await req.json();
    const data: any = {};
    if (namaObat?.trim()) data.namaObat = namaObat.trim();
    if (typeof harga === "number" && harga >= 0) data.harga = harga;

    const medicine = await prisma.medicine.update({
      where: { id },
      data,
    });

    return NextResponse.json(medicine);
  } catch {
    return NextResponse.json(
      { error: "Failed to update medicine" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(req: NextRequest, { params }: any) {
  const ctx = await getAuthContext(req);
  if (ctx.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const id = parseInt((await params).id);
  if (!id) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    await prisma.medicine.delete({ where: { id } });
    return NextResponse.json({ message: "Medicine deleted" });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete medicine" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
