import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/db/prisma';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const userId = req.headers.get('x-user-id');

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const messages = await prisma.message.findMany({
    where: {
      userId: parseInt(userId),
      doctorId: {
        not: null,
      },
    },
    orderBy: {
      time: 'desc',
    },
    include: {
      doctor: {
        select: {
          name: true,
          specialist: true,
        },
      },
    },
  });

  const seenDoctors = new Set();
  const lastMessages = [];

  for (const msg of messages) {
    if (!msg.doctorId || seenDoctors.has(msg.doctorId)) continue;

    seenDoctors.add(msg.doctorId);

    lastMessages.push({
      doctorId: msg.doctorId,
      name: msg.doctor?.name,
      specialty: msg.doctor?.specialist,
      avatar: "",
      lastMessage: msg.content,
      lastMessageTime: msg.time,
    });
  }

  return NextResponse.json(lastMessages);
}
