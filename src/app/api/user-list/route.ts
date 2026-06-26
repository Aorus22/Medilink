import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, User } from '#/prisma/db';
import { getAuthContext } from '@/lib/auth';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const ctx = await getAuthContext(req);

  if (ctx.role !== 'ADMIN' && ctx.role !== 'DOCTOR') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const users = await prisma.user.findMany();

    const formattedUser = users.map((user: User) => ({
      id: user.id,
      name: user.name,
      username: user.username,
    }));

    return NextResponse.json(formattedUser, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
