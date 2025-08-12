import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '#/prisma/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'secret-key';

type Role = 'USER' | 'ADMIN';

const setAuthCookie = async (user: { id: number; email: string }, role: Role) => {
  const token = jwt.sign(
    { userId: user.id, email: user.email, role },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  (await cookies()).set({
    name: 'auth_token',
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 3600,
  });

  return token;
};

export async function POST(req: NextRequest) {
  try {
    const qrData = req.nextUrl.searchParams.get('code');

    if (!qrData) {
      return NextResponse.json({ error: 'QR code required' }, { status: 400 });
    }

    let decodedData;
    try {
      decodedData = atob(qrData);
    } catch (error) {
      console.error('Error decoding Base64 QR code:', error);
      return NextResponse.json({ error: 'Invalid Base64 QR code format' }, { status: 400 });
    }

    let parsedData;
    try {
      parsedData = JSON.parse(decodedData);
    } catch (error) {
      console.error('Error parsing QR code JSON:', error);
      return NextResponse.json({ error: 'Invalid QR code JSON format' }, { status: 400 });
    }

    const { username, password } = parsedData;

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
    }

    const user = await prisma.user.findFirst({
      where: {
        username: username,
        password: password,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'Invalid QR code' }, { status: 404 });
    }

    const role = user.email === 'admin@ums.ac.id' ? 'ADMIN' : 'USER';
    const token = await setAuthCookie(user, role);

    return NextResponse.json(
      {
        message: 'QR Login successful',
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          gender: user.gender,
          major: user.major,
          studentId: user.studentId,
          birthPlace: user.birthPlace,
          birthDate: user.birthDate,
          phoneNumber: user.phoneNumber,
          role: role,
        },
        token,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Unexpected error during QR login:', error);
    return NextResponse.json({ error: 'Failed to login via QR' }, { status: 500 });
  }
}
