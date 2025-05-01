import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/db/prisma';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json({ error: 'Missing ID parameter' }, { status: 400 });
    }

    const doctor = await prisma.doctor.findUnique({
      where: { id: parseInt(id, 10) },
      include: { practiceHours: true },
    });

    if (!doctor) {
      return NextResponse.json({ error: 'Doctor not found' }, { status: 404 });
    }

    return NextResponse.json(doctor, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch doctor' }, { status: 500 });
  }
}
