import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '#/prisma/db';

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest, { params }: any) {
  const userRole = req.headers.get('x-user-role');

  if (userRole !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: 'Missing practice hour id' }, { status: 400 });
    }

    const practiceHour = await prisma.practiceHour.findUnique({
      where: { id: parseInt(id) },
    });

    if (!practiceHour) {
      return NextResponse.json({ error: 'Practice hour not found' }, { status: 404 });
    }

    await prisma.practiceHour.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: "Practice hour deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting practice hour:", error);
    return NextResponse.json({ error: "Failed to delete practice hour" }, { status: 500 });
  }
}
