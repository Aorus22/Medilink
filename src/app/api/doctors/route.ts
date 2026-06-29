import { NextRequest, NextResponse } from 'next/server';
import { Doctor, PrismaClient } from '#/prisma/db';
import { getAuthContext } from '@/lib/auth';

const prisma = new PrismaClient();

export interface DoctorResponse {
  id: number;
  name: string;
  specialist: string;
}

export async function GET(req: NextRequest) {
  const ctx = await getAuthContext(req);

  try {
    // DOCTOR role can only see themselves
    if (ctx.role === 'DOCTOR' && ctx.doctorId) {
      const doctor = await prisma.doctor.findUnique({
        where: { id: ctx.doctorId },
      });
      return NextResponse.json(doctor ? [doctor] : [], { status: 200 });
    }

    const doctors = await prisma.doctor.findMany();

    if (ctx.role === 'ADMIN') {
      return NextResponse.json(doctors, { status: 200 });
    }

    const doctorsData: DoctorResponse[] = doctors.map((doctor: Doctor) => ({
      id: doctor.id,
      name: doctor.name,
      specialist: doctor.specialist,
    }));

    return NextResponse.json(doctorsData, { status: 200 });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return NextResponse.json({ error: 'Failed to fetch doctors' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
