import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/db/prisma';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: any) {
  const userId = req.headers.get('x-user-id');

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const doctorId = params.doctorId;

  if (!doctorId) {
    return NextResponse.json({ error: "Missing doctorId" }, { status: 400 });
  }

  const messages = await prisma.message.findMany({
    where: {
      userId: parseInt(userId),
      doctorId: parseInt(doctorId),
    },
    include: {
      doctor: {
        select: {
          name: true,
          specialist: true,
        },
      }
    },
    orderBy: { time: 'asc' },
  });

  return NextResponse.json(messages);
}
