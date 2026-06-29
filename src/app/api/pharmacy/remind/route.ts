import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "#/prisma/db";
import { getAuthContext } from "@/lib/auth";
import { sendWhatsApp, buildReminderMessage, getNearestTime, MedicineItem } from "@/lib/WhatsApp";

const prisma = new PrismaClient();
const TEST_PHONE = "6289636843541";

function parseJamPenggunaan(jam: any): string[] {
  try {
    const times = typeof jam === "string" ? JSON.parse(jam) : jam;
    return Array.isArray(times) ? times : [];
  } catch {
    return [];
  }
}

export async function POST(req: NextRequest) {
  const ctx = await getAuthContext(req);

  if (ctx.role !== "ADMIN" && ctx.role !== "DOCTOR") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { userId } = await req.json();
    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    const now = new Date();

    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
      select: { name: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // All active prescriptions for this user
    const allRx = await prisma.pharmacy.findMany({
      where: {
        userId: parseInt(userId),
        tanggalMulaiObat: { lte: now },
        tanggalSelesaiObat: { gte: now },
      },
    });

    if (allRx.length === 0) {
      return NextResponse.json({ error: "No active prescriptions for this user" }, { status: 400 });
    }

    // Group by nearest time slot
    const grouped = new Map<string, MedicineItem[]>();

    for (const rx of allRx) {
      const times = parseJamPenggunaan(rx.jamPenggunaan);
      const nearest = getNearestTime(times);
      if (!grouped.has(nearest)) {
        grouped.set(nearest, []);
      }
      grouped.get(nearest)!.push({ namaObat: rx.namaObat, dosis: rx.dosis });
    }

    let sentCount = 0;

    for (const [timeSlot, medicines] of grouped) {
      const message = buildReminderMessage({
        patientName: user.name,
        medicines,
        time: timeSlot,
      });

      console.log(`[BATCH REMINDER] To: ${TEST_PHONE} | User: ${user.name} @ ${timeSlot} | Meds: ${medicines.length} | "${message}"`);

      const result = await sendWhatsApp(TEST_PHONE, message);
      if (result.success) sentCount++;
    }

    if (sentCount === 0) {
      return NextResponse.json({ error: "Failed to send reminders" }, { status: 500 });
    }

    return NextResponse.json({
      message: `Reminders sent for ${grouped.size} time slot(s)`,
      phone: TEST_PHONE,
      slots: grouped.size,
    }, { status: 200 });
  } catch (e) {
    console.error("Error sending batch reminder:", e);
    return NextResponse.json({ error: "Failed to send reminders" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
