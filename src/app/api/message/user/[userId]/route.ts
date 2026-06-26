import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '#/prisma/db';
import { getAuthContext } from '@/lib/auth';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: any) {
  const ctx = await getAuthContext(req);

  if (ctx.role !== 'ADMIN' && ctx.role !== 'DOCTOR') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = (await params).userId;

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

  if (!userId || !doctorId) {
    return NextResponse.json({ error: 'Missing userId or doctorId' }, { status: 400 });
  }

  const messages = await prisma.message.findMany({
    where: {
      doctorId,
      userId: parseInt(userId),
    },
    include: {
      user: {
        select: {
          name: true,
          username: true,
        },
      }
    },
    orderBy: { time: 'asc' },
  });

  return NextResponse.json(messages);
}

export async function POST(req: NextRequest, { params }: any) {
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

  const userId = (await params).userId;
  if (!userId) {
    return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
  }

  const body = await req.json();
  const { content } = body;

  if (!content || content.trim() === '') {
    return NextResponse.json({ error: 'Message content is required' }, { status: 400 });
  }

  try {
    const newMessage = await prisma.message.create({
      data: {
        sender: 'DOCTOR',
        content: content.trim(),
        doctorId,
        userId: parseInt(userId),
      },
      include: {
        user: {
          select: {
            name: true,
            username: true,
          },
        },
      },
    });

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error('Failed to save message:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
