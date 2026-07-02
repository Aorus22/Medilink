import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest, { params }: any) {
  try {
    const { id } = await params;
    const { status } = await req.json();

    if (!id || !status) {
      return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
    }

    if (status === 'confirmed') {
      const appointment = await prisma.appointment.findUnique({
        where: { id: parseInt(id) },
        select: { date: true },
      });

      if (!appointment) {
        return NextResponse.json({ error: 'Appointment not found' }, { status: 404 });
      }

      const appointmentDate = new Date(appointment.date);
      const startOfDay = new Date(appointmentDate.setHours(0, 0, 0, 0));
      const endOfDay = new Date(appointmentDate.setHours(23, 59, 59, 999));

      const confirmedCount = await prisma.appointment.count({
        where: {
          date: { gte: startOfDay, lte: endOfDay },
          status: 'confirmed',
        },
      });

      const updated = await prisma.appointment.update({
        where: { id: parseInt(id) },
        data: { status: 'confirmed', queueNum: confirmedCount + 1, confirmTime: new Date() },
      });

      return NextResponse.json(updated, { status: 200 });
    }

    if (status === 'rejected') {
      const updated = await prisma.appointment.update({
        where: { id: parseInt(id) },
        data: { status: 'rejected' },
      });

      return NextResponse.json(updated, { status: 200 });
    }

    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(req: NextRequest, { params }: any) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    }

    await prisma.appointment.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: 'Appointment deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
