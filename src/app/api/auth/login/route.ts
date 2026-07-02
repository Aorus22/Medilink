import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'secret-key');

type Role = 'USER' | 'ADMIN' | 'DOCTOR';

const setAuthCookie = async (user: any, role: Role, secure: boolean) => {
  const payload: any = { userId: user.id, username: user.username, role };

  if (role === 'DOCTOR') {
    const doctor = await prisma.doctor.findUnique({
      where: { userId: user.id },
      select: { id: true },
    });
    if (doctor) payload.doctorId = doctor.id;
  }

  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1h')
    .sign(JWT_SECRET);

  (await cookies()).set({
    name: 'auth_token',
    value: token,
    httpOnly: true,
    secure,
    sameSite: 'lax',
    maxAge: 3600,
  });

  return token;
};

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    // Special admin login
    if (username === 'admin' && password === 'admin') {
      const adminUser = {
        id: 999999, // Special ID for hardcoded admin
        username: 'admin',
        email: 'admin@admin.com',
        name: 'Administrator',
        role: 'ADMIN',
        gender: null,
        major: null,
        studentId: null,
        birthPlace: null,
        birthDate: null,
        phoneNumber: null,
      };

      const token = await setAuthCookie(adminUser, 'ADMIN', false);
      return NextResponse.json(
        {
          message: 'Admin login successful',
          user: adminUser,
          token,
        },
        { status: 200 }
      );
    }

    // Regular user login
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // Check if user is also a doctor
    const linkedDoctor = await prisma.doctor.findUnique({
      where: { userId: user.id },
    });
    const role: Role = linkedDoctor ? 'DOCTOR' : 'USER';

    const token = await setAuthCookie(user, role, false);

    return NextResponse.json(
      {
        message: 'Login successful',
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          name: user.name,
          gender: user.gender,
          major: user.major,
          studentId: user.studentId,
          birthPlace: user.birthPlace,
          birthDate: user.birthDate,
          phoneNumber: user.phoneNumber,
          role,
        },
        token,
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json({ error: 'Failed to login' }, { status: 500 });
  }
}
