import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '#/prisma/db';
import { getAuthContext } from '@/lib/auth';

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest, { params }: any) {
  const ctx = await getAuthContext(req);

  if (ctx.role !== 'ADMIN' && ctx.role !== 'USER') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    }

    const record = await prisma.historicalData.findUnique({
      where: { id: parseInt(id) },
    });

    if (!record) {
      return NextResponse.json({ error: 'Record not found' }, { status: 404 });
    }

    // USER can only delete their own records
    if (ctx.role === 'USER' && record.userId !== ctx.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await prisma.historicalData.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: 'Record deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting record:', error);
    return NextResponse.json({ error: 'Failed to delete record' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
