import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/db/prisma';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const doctors = await prisma.doctor.findMany();
    return NextResponse.json(doctors, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch doctors' }, { status: 500 });
  }
}