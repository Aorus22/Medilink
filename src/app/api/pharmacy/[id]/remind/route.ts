import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "#/prisma/db";
import { getAuthContext } from "@/lib/auth";
import { sendWhatsApp, buildReminderMessage, getNearestTime } from "@/lib/WhatsApp";

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

export async function POST(req: NextRequest, { params }: any) {
  const ctx = await getAuthContext(req);

  if (ctx.role !== "ADMIN" && ctx.role !== "DOCTOR") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const prescription = await prisma.pharmacy.findUnique({
      where: { id: parseInt(id) },
      include: { user: { select: { name: true } } },
    });

    if (!prescription) {
      return NextResponse.json({ error: "Prescription not found" }, { status: 404 });
    }

    const triggerTimes = parseJamPenggunaan(prescription.jamPenggunaan);
    if (triggerTimes.length === 0) {
      return NextResponse.json({ error: "No scheduled times" }, { status: 400 });
    }

    const nearestTime = getNearestTime(triggerTimes);
    const now = new Date();

    // Find ALL active prescriptions for this user that include this time slot
    const allForUser = await prisma.pharmacy.findMany({
      where: {
        userId: prescription.userId,
        tanggalMulaiObat: { lte: now },
        tanggalSelesaiObat: { gte: now },
      },
    });

    // Filter prescriptions that include the nearest time
    const matched = allForUser.filter((rx) => {
      const times = parseJamPenggunaan(rx.jamPenggunaan);
      return times.includes(nearestTime);
    });

    if (matched.length === 0) {
      return NextResponse.json({ error: "No active prescriptions at this time" }, { status: 400 });
    }

    const medicines = matched.map((rx) => ({
      namaObat: rx.namaObat,
      dosis: rx.dosis,
    }));

    const message = buildReminderMessage({
      patientName: prescription.user.name,
      medicines,
      time: nearestTime,
    });

    console.log(`[MANUAL REMINDER] To: ${TEST_PHONE} | User: ${prescription.user.name} @ ${nearestTime} | Meds: ${medicines.length} | "${message}"`);

    const result = await sendWhatsApp(TEST_PHONE, message);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Failed to send reminder" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Reminder sent successfully",
      phone: TEST_PHONE,
      sentAt: nearestTime,
      medicineCount: medicines.length,
    }, { status: 200 });
  } catch (e) {
    console.error("Error sending reminder:", e);
    return NextResponse.json({ error: "Failed to send reminder" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
