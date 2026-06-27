import { PrismaClient } from '#/prisma/db';
import { sendWhatsApp, buildReminderMessage } from '@/lib/WhatsApp';

const prisma = new PrismaClient();
const TEST_PHONE = '+6289636843541';
const POLL_INTERVAL_MS = 30_000;

function getCurrentHHMM(): string {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
}

function isWithinWindow(scheduledTime: string): boolean {
  const now = new Date();
  const [sH, sM] = scheduledTime.split(':').map(Number);
  const scheduled = sH * 60 + sM;
  const current = now.getHours() * 60 + now.getMinutes();
  const diff = current - scheduled;
  return diff >= 0 && diff <= 2;
}

async function checkAndRemind() {
  const now = new Date();

  const prescriptions = await prisma.pharmacy.findMany({
    where: {
      tanggalMulaiObat: { lte: now },
      tanggalSelesaiObat: { gte: now },
    },
    include: {
      user: { select: { name: true } },
    },
  });

  if (prescriptions.length === 0) return;

  const currentTime = getCurrentHHMM();

  for (const rx of prescriptions) {
    let times: string[];
    try {
      times = typeof rx.jamPenggunaan === 'string'
        ? JSON.parse(rx.jamPenggunaan as string)
        : (rx.jamPenggunaan as string[]);
    } catch {
      continue;
    }
    if (!Array.isArray(times)) continue;

    const matchedTime = times.find(isWithinWindow);
    if (!matchedTime) continue;

    const message = buildReminderMessage({
      patientName: rx.user.name,
      medicineName: rx.namaObat,
      dosage: rx.dosis,
      time: matchedTime,
    });

    const result = await sendWhatsApp(TEST_PHONE, message);
    const status = result.success ? 'SENT' : 'FAILED';
    console.log(
      `[${new Date().toISOString()}] [${status}] ${rx.user.name} - ${rx.namaObat} ${rx.dosis} @ ${matchedTime}` +
      (result.error ? ` (${result.error})` : '')
    );
  }
}

async function main() {
  console.log(`[${new Date().toISOString()}] PharmaSwift Scheduler started (poll every ${POLL_INTERVAL_MS / 1000}s)`);

  while (true) {
    try {
      await checkAndRemind();
    } catch (err) {
      console.error(`[${new Date().toISOString()}] Scheduler error:`, err);
    }
    await new Promise(resolve => setTimeout(resolve, POLL_INTERVAL_MS));
  }
}

main();
