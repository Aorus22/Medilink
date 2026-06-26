import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '#/prisma/db';
import { getAuthContext } from '@/lib/auth';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const ctx = await getAuthContext(req);

  if (ctx.role !== 'ADMIN' && ctx.role !== 'DOCTOR') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let doctorId: number;

  if (ctx.role === 'DOCTOR') {
    doctorId = ctx.doctorId!;
  } else {
    const paramDoctorId = req.nextUrl.searchParams.get('doctorId');
    if (!paramDoctorId) {
      return NextResponse.json({ error: 'Missing doctorId' }, { status: 400 });
    }
    doctorId = parseInt(paramDoctorId);
  }

  const messages = await prisma.message.findMany({
    where: {
      doctorId,
    },
    orderBy: {
      time: 'desc',
    },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          name: true,
          avatar: true,
        },
      },
    },
  });

  const seenUsers = new Set<number>();
  const lastMessages: any[] = [];

  for (const msg of messages) {
    if (!msg.userId || seenUsers.has(msg.userId)) continue;

    seenUsers.add(msg.userId);

    lastMessages.push({
      userId: msg.userId,
      userName: msg.user?.name ?? 'Unknown',
      userUsername: msg.user?.username ?? 'Unknown',
      avatar: msg.user?.avatar ?? null,
      lastMessage: msg.content,
      lastMessageTime: msg.time.toISOString(),
    });
  }

  return NextResponse.json(lastMessages);
}
