import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const setting = await prisma.systemSetting.findUnique({
      where: { id: "default" },
    });
    return NextResponse.json({
      vmApiUrl: setting?.vmApiUrl || "",
    });
  } catch (err) {
    console.error("Failed to fetch system settings:", err);
    return NextResponse.json({ vmApiUrl: "" });
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { vmApiUrl } = await req.json();
    if (typeof vmApiUrl !== "string") {
      return NextResponse.json({ error: "vmApiUrl must be a string" }, { status: 400 });
    }

    const setting = await prisma.systemSetting.upsert({
      where: { id: "default" },
      create: { id: "default", vmApiUrl: vmApiUrl.trim() },
      update: { vmApiUrl: vmApiUrl.trim() },
    });

    return NextResponse.json({ vmApiUrl: setting.vmApiUrl });
  } catch (err) {
    console.error("Failed to update system settings:", err);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
