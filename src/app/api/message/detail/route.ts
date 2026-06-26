import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "#/prisma/db";
import { getAuthContext } from "@/lib/auth";

const prisma = new PrismaClient();

// GET /api/message/detail?userId=X&doctorId=Y — detail chat antara 2 pihak
export async function GET(req: NextRequest) {
  const ctx = await getAuthContext(req);

  try {
    let userId: number;
    let doctorId: number;

    const paramUserId = req.nextUrl.searchParams.get("userId");
    const paramDoctorId = req.nextUrl.searchParams.get("doctorId");

    if (ctx.role === "USER") {
      if (!paramDoctorId) {
        return NextResponse.json({ error: "Missing doctorId" }, { status: 400 });
      }
      userId = ctx.userId;
      doctorId = parseInt(paramDoctorId);
    } else if (ctx.role === "DOCTOR") {
      if (!paramUserId) {
        return NextResponse.json({ error: "Missing userId" }, { status: 400 });
      }
      userId = parseInt(paramUserId);
      doctorId = ctx.doctorId!;
    } else {
      // ADMIN: require both
      if (!paramUserId || !paramDoctorId) {
        return NextResponse.json(
          { error: "Missing userId or doctorId" },
          { status: 400 }
        );
      }
      userId = parseInt(paramUserId);
      doctorId = parseInt(paramDoctorId);
    }

    const messages = await prisma.message.findMany({
      where: { userId, doctorId },
      orderBy: { time: "asc" },
      include: {
        doctor: { select: { name: true, specialist: true } },
        user: { select: { name: true, username: true } },
      },
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
