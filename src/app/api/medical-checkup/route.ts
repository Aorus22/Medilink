import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/db/prisma';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const userId = req.headers.get('x-user-id');

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const historicalData = await prisma.historicalData.findMany({
      where: {
        userId: parseInt(userId),
      }
    });
    return NextResponse.json(historicalData, { status: 200 });
  } catch (error) {
    console.error('Error fetching historical data:', error);
    return NextResponse.json({ error: 'Failed to fetch historical data' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}