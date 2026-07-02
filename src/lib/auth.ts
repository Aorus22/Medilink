import { PrismaClient } from '@prisma/client';
import { NextRequest } from "next/server";

export interface AuthContext {
  role: "USER" | "ADMIN" | "DOCTOR";
  userId: number;
  username: string;
  doctorId?: number;
}

export async function getAuthContext(req: NextRequest): Promise<AuthContext> {
  const role = (req.headers.get("x-user-role") as AuthContext["role"]) || "USER";
  const userId = parseInt(req.headers.get("x-user-id") || "0");
  const username = req.headers.get("x-username") || "";

  let doctorId: number | undefined;

  if (role === "DOCTOR" && userId) {
    const prisma = new PrismaClient();
    try {
      const doctor = await prisma.doctor.findUnique({
        where: { userId },
        select: { id: true },
      });
      doctorId = doctor?.id;
    } finally {
      await prisma.$disconnect();
    }
  }

  return { role, userId, username, doctorId };
}
