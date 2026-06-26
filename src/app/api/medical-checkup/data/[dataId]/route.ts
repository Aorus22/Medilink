import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '#/prisma/db';

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest, { params }: any) {
  const userRole = req.headers.get('x-user-role');

  if (userRole !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { dataId } = await params;

    if (!dataId) {
      return NextResponse.json({ error: 'Missing dataId' }, { status: 400 });
    }

    const historicalData = await prisma.historicalData.findUnique({
      where: { id: parseInt(dataId) },
    });

    if (!historicalData) {
      return NextResponse.json({ error: 'Historical data not found' }, { status: 404 });
    }

    await prisma.historicalData.delete({
      where: { id: parseInt(dataId) },
    });

    return NextResponse.json({ message: 'Historical data deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting historical data:', error);
    return NextResponse.json({ error: 'Failed to delete historical data' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
