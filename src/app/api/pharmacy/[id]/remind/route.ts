import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "#/prisma/db";
import { getAuthContext } from "@/lib/auth";
import { sendWhatsApp, buildManualReminderMessage, getNearestTime } from "@/lib/WhatsApp";

const prisma = new PrismaClient();
const TEST_PHONE = "+6289636843541";

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

    let times: string[];
    try {
      times = typeof prescription.jamPenggunaan === "string"
        ? JSON.parse(prescription.jamPenggunaan as string)
        : (prescription.jamPenggunaan as string[]);
    } catch {
      return NextResponse.json({ error: "Invalid jamPenggunaan format" }, { status: 500 });
    }

    if (!Array.isArray(times) || times.length === 0) {
      return NextResponse.json({ error: "No scheduled times" }, { status: 400 });
    }

    const nearestTime = getNearestTime(times);

    const message = buildManualReminderMessage({
      patientName: prescription.user.name,
      medicineName: prescription.namaObat,
      nearestTime,
    });

    console.log(`[MANUAL REMINDER] To: ${TEST_PHONE} | Message: "${message}"`);

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
    }, { status: 200 });
  } catch (e) {
    console.error("Error sending reminder:", e);
    return NextResponse.json({ error: "Failed to send reminder" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
