import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "#/prisma/db";
import { getAuthContext } from "@/lib/auth";

const prisma = new PrismaClient();

// GET /api/message — list conversations (auto-detect role)
// GET /api/message?last=true — get last message for user (from doctor)
export async function GET(req: NextRequest) {
  const ctx = await getAuthContext(req);

  const isLast = req.nextUrl.searchParams.get("last") === "true";

  try {
    if (ctx.role === "USER") {
      // ?last=true returns only the most recent doctor message (for rightbar)
      if (isLast) {
        const lastMessage = await prisma.message.findFirst({
          where: {
            userId: ctx.userId,
            sender: 'DOCTOR',
            doctorId: { not: null },
          },
          orderBy: { time: "desc" },
          include: {
            doctor: { select: { name: true, specialist: true } },
          },
        });

        if (!lastMessage) {
          return NextResponse.json({ message: null });
        }

        return NextResponse.json({
          doctorId: lastMessage.doctorId,
          name: lastMessage.doctor?.name,
          specialty: lastMessage.doctor?.specialist,
          avatar: "",
          lastMessage: lastMessage.content,
          lastMessageTime: lastMessage.time,
        });
      }

      const messages = await prisma.message.findMany({
        where: { userId: ctx.userId, doctorId: { not: null } },
        orderBy: { time: "desc" },
        include: {
          doctor: { select: { name: true, specialist: true } },
        },
      });

      const seenDoctors = new Set<number>();
      const result: any[] = [];

      for (const msg of messages) {
        if (!msg.doctorId || seenDoctors.has(msg.doctorId)) continue;
        seenDoctors.add(msg.doctorId);

        result.push({
          doctorId: msg.doctorId,
          doctorName: msg.doctor?.name,
          doctorSpecialty: msg.doctor?.specialist,
          avatar: null,
          lastMessage: msg.content,
          lastMessageTime: msg.time,
        });
      }

      return NextResponse.json(result);
    }

    // DOCTOR or ADMIN
    let doctorId: number;

    if (ctx.role === "DOCTOR") {
      doctorId = ctx.doctorId!;
    } else {
      const param = req.nextUrl.searchParams.get("doctorId");
      if (!param) {
        return NextResponse.json({ error: "Missing doctorId" }, { status: 400 });
      }
      doctorId = parseInt(param);
    }

    const messages = await prisma.message.findMany({
      where: { doctorId },
      orderBy: { time: "desc" },
      include: {
        user: { select: { id: true, username: true, name: true, avatar: true } },
      },
    });

    const seenUsers = new Set<number>();
    const result: any[] = [];

    for (const msg of messages) {
      if (!msg.userId || seenUsers.has(msg.userId)) continue;
      seenUsers.add(msg.userId);

      result.push({
        userId: msg.userId,
        userName: msg.user?.name ?? "Unknown",
        userUsername: msg.user?.username ?? "Unknown",
        avatar: msg.user?.avatar ?? null,
        lastMessage: msg.content,
        lastMessageTime: msg.time.toISOString(),
      });
    }

    return NextResponse.json(result);
  } finally {
    await prisma.$disconnect();
  }
}

// POST /api/message — send a message (auto-detect sender)
export async function POST(req: NextRequest) {
  const ctx = await getAuthContext(req);

  try {
    const body = await req.json();
    const { content, doctorId, userId } = body;

    if (!content?.trim()) {
      return NextResponse.json({ error: "Message content is required" }, { status: 400 });
    }

    let sender: "USER" | "DOCTOR";
    let resolvedDoctorId: number;
    let resolvedUserId: number;

    if (ctx.role === "USER") {
      sender = "USER";
      if (!doctorId) {
        return NextResponse.json({ error: "Missing doctorId" }, { status: 400 });
      }
      resolvedDoctorId = parseInt(doctorId);
      resolvedUserId = ctx.userId;
    } else if (ctx.role === "DOCTOR") {
      sender = "DOCTOR";
      if (!userId) {
        return NextResponse.json({ error: "Missing userId" }, { status: 400 });
      }
      resolvedDoctorId = ctx.doctorId!;
      resolvedUserId = parseInt(userId);
    } else {
      // ADMIN
      sender = "DOCTOR";
      if (!doctorId || !userId) {
        return NextResponse.json({ error: "Missing doctorId or userId" }, { status: 400 });
      }
      resolvedDoctorId = parseInt(doctorId);
      resolvedUserId = parseInt(userId);
    }

    const newMessage = await prisma.message.create({
      data: {
        sender,
        content: content.trim(),
        doctorId: resolvedDoctorId,
        userId: resolvedUserId,
      },
      include: {
        doctor: { select: { name: true, specialist: true } },
        user: { select: { name: true, username: true } },
      },
    });

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error("Failed to save message:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
