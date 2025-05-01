import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/db/prisma';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const appointments = await prisma.appointment.findMany({
      include: {
        doctor: {
          select: {
            id: true,
            name: true,
            specialist: true,
            about: true,
            education: true,
            experience: true,
            location: true,
          },
        },
      },
    });
    return NextResponse.json(appointments, { status: 200 });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}