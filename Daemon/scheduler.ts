import { PrismaClient } from '#/prisma/db';
import { sendWhatsApp, buildReminderMessage, MedicineItem } from '@/lib/WhatsApp';

const prisma = new PrismaClient();
const TEST_PHONE = "6289636843541";
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

function parseJamPenggunaan(jam: any): string[] {
  try {
    const times = typeof jam === 'string' ? JSON.parse(jam) : jam;
    return Array.isArray(times) ? times : [];
  } catch {
    return [];
  }
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

  // Group matched prescriptions by userId + matchedTime
  const groups = new Map<string, { userName: string; medicines: MedicineItem[] }>();

  for (const rx of prescriptions) {
    const times = parseJamPenggunaan(rx.jamPenggunaan);
    const matchedTime = times.find(isWithinWindow);
    if (!matchedTime) continue;

    const key = `${rx.userId}@${matchedTime}`;
    if (!groups.has(key)) {
      groups.set(key, { userName: rx.user.name, medicines: [] });
    }
    groups.get(key)!.medicines.push({
      namaObat: rx.namaObat,
      dosis: rx.dosis,
    });
  }

  for (const [key, group] of groups) {
    const [, matchedTime] = key.split('@');

    const message = buildReminderMessage({
      patientName: group.userName,
      medicines: group.medicines,
      time: matchedTime,
    });

    const result = await sendWhatsApp(TEST_PHONE, message);
    const status = result.success ? 'SENT' : 'FAILED';
    console.log(
      `[${new Date().toISOString()}] [${status}] ${group.userName} @ ${matchedTime} (${group.medicines.length} obat): "${message}"` +
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
