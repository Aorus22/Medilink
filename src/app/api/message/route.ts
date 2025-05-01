import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/db/prisma';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const userId = 5;
  const doctorId = parseInt(req.nextUrl.searchParams.get('doctorId') || '0');

  if (!doctorId) {
    return NextResponse.json({ error: "Missing doctorId" }, { status: 400 });
  }

  const messages = await prisma.message.findMany({
    where: {
      userId,
      doctorId,
    },
    orderBy: { time: 'asc' },
  });

  return NextResponse.json(messages);
}
