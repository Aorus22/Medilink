import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '#/prisma/db';

const prisma = new PrismaClient();

import { getAuthContext } from '@/lib/auth';

export interface AppointmentResponse {
  id: number;
  userName: string,
  doctorName: string;
  doctorSpecialty: string;
  date: Date;
  purpose: string;
  status: string;
  location: string;
  notes: string;
  queue: number;
}

export async function GET(req: NextRequest) {
  const ctx = await getAuthContext(req);

  try {
    const isUpcoming = req.nextUrl.searchParams.get("upcoming") === "true";

    let whereClause: any = {};

    if (ctx.role === 'USER') {
      whereClause = { userId: ctx.userId };
    } else if (ctx.role === 'DOCTOR' && ctx.doctorId) {
      whereClause = { doctorId: ctx.doctorId };
    }

    if (isUpcoming && ctx.role === 'USER') {
      whereClause = {
        ...whereClause,
        date: { gt: new Date() },
      };
    }

    const appointments = await prisma.appointment.findMany({
      where: whereClause,
      orderBy: isUpcoming ? { date: 'asc' } : { id: 'desc' },
      take: isUpcoming ? 3 : undefined,
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
        user: {
          select: {
            name: true,
          }
        }
      },
    });

    const formattedAppointments: AppointmentResponse[] = appointments.map((appt: any) => ({
      id: appt.id,
      userName: appt.user.name,
      doctorName: appt.doctor.name,
      doctorSpecialty: appt.doctor.specialist,
      date: new Date(appt.date),
      purpose: appt.purpose,
      status: appt.status,
      location: appt.doctor.location,
      notes: appt.information,
      queue: appt.queueNum,
    }));

    return NextResponse.json(formattedAppointments, { status: 200 });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: NextRequest) {
  const ctx = await getAuthContext(req);

  if (ctx.role !== 'USER') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { doctorId, date, purpose, information } = await req.json();

    if (!doctorId || !date || !purpose || !information) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newAppointment = await prisma.appointment.create({
      data: {
        date: new Date(date),
        purpose,
        information,
        status: 'pending',
        confirmTime: new Date(),
        queueNum: 0,
        userId: ctx.userId,
        doctorId: parseInt(doctorId),
      },
    });

    return NextResponse.json(newAppointment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create appointment' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}