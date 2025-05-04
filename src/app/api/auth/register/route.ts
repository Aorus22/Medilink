import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '#/prisma/db';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

function hashed(password: string) {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
}


export async function POST(req: NextRequest) {
  try {
    const {
      username,
      password,
      name,
      birthdate,
      address,
      profession,
      religion,
      avatar,
    } = await req.json();

    if (!username || !password || !name) {
      return NextResponse.json(
        { error: 'Username, password, and name are required' },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Username already exists' },
        { status: 409 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashed("passwordUser1"),
        name,
        birthdate: new Date(birthdate),
        address,
        profession,
        religion,
        avatar: "",
      },
      // {
      //   username,
      //   password: hashedPassword,
      //   name,
      //   birthdate: new Date(birthdate),
      //   address: address || "",
      //   profession: profession || "",
      //   religion: religion || "",
      //   avatar: avatar || "",
      // },
    });

    return NextResponse.json(
      {
        message: 'Registration successful',
        user: {
          id: newUser.id,
          username: newUser.username,
          name: newUser.name,
          birthdate: newUser.birthdate,
          address: newUser.address,
          profession: newUser.profession,
          religion: newUser.religion,
          avatar: newUser.avatar,
          role: 'USER',
        },
      },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to register' },
      { status: 500 }
    );
  }
}