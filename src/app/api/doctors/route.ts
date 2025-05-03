import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '#/prisma/db';

const prisma = new PrismaClient();

export interface DoctorResponse {
  id: string;
  name: string;
  specialist: string;
}

export async function GET(req: NextRequest) {
  try {
    const doctors = await prisma.doctor.findMany();
    const doctorsData = doctors.map((doctor: any) => ({
      id: doctor.id,
      name: doctor.name,
      specialist: doctor.specialist,
    }));
    return NextResponse.json(doctorsData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch doctors' }, { status: 500 });
  }
}