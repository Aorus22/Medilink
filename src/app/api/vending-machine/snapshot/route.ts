import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const row = await prisma.vendingMachineSnapshot.findFirst({
      orderBy: { updatedAt: "desc" },
    });

    if (!row) {
      return NextResponse.json(
        { error: "No snapshot available — vending machine has not reported yet." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      machineId: row.machineId,
      state: row.state,
      temperature: row.temperature,
      humidity: row.humidity,
      fan: row.fan,
      light: row.light,
      feeder: row.feeder as { channel: number; medicine: string; stock: number }[],
      updatedAt: row.updatedAt,
    });
  } catch (err) {
    console.error("Failed to fetch vending snapshot:", err);
    return NextResponse.json({ error: "Failed to fetch snapshot" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
