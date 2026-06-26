import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '#/prisma/db';
import { getAuthContext } from '@/lib/auth';

const prisma = new PrismaClient();

export async function PUT(req: NextRequest) {
  const ctx = await getAuthContext(req);

  try {
    const {
      email,
      name,
      gender,
      major,
      studentId,
      birthPlace,
      birthDate,
      phoneNumber,
    } = await req.json();

    if (email) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email,
          NOT: { id: ctx.userId }
        }
      });

      if (existingUser) {
        return NextResponse.json({ error: 'Email already exists' }, { status: 409 });
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: ctx.userId },
      data: {
        email,
        name,
        gender,
        major,
        studentId,
        birthPlace,
        birthDate: birthDate ? new Date(birthDate) : undefined,
        phoneNumber,
      },
    });

    return NextResponse.json({
      message: 'User information updated successfully',
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        name: updatedUser.name,
        gender: updatedUser.gender,
        major: updatedUser.major,
        studentId: updatedUser.studentId,
        birthPlace: updatedUser.birthPlace,
        birthDate: updatedUser.birthDate,
        phoneNumber: updatedUser.phoneNumber,
        role: 'USER',
      },
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user information' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
