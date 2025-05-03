import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '#/prisma/db';

const prisma = new PrismaClient();

export interface AppointmentResponse {
  id: number;
  doctorName: string;
  doctorSpecialty: string;
  date: string;
  time: string;
  purpose: string;
  status: string;
  location: string;
  notes: string;
  queue: number;
}

export async function GET(req: NextRequest) {
  const userId = req.headers.get('x-user-id');

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const appointments = await prisma.appointment.findMany({
      where:{
        userId: parseInt(userId),
      },
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

    const formattedAppointments: AppointmentResponse[] = appointments.map((appt: any) => ({
      id: appt.id,
      doctorName: appt.doctor.name,
      doctorSpecialty: appt.doctor.specialist,
      date: new Date(appt.date).toISOString().split('T')[0],
      time: new Date(appt.date).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
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

