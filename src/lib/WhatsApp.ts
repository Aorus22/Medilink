const WA_API_URL = process.env.WA_API_URL || "";
const WA_API_KEY = process.env.WA_API_KEY || "";

export interface WhatsAppMessage {
  phoneNumber: string;
  message: string;
}

export async function sendWhatsApp(
  phoneNumber: string,
  message: string
): Promise<{ success: boolean; error?: string }> {
  if (!WA_API_URL || !WA_API_KEY) {
    console.warn("WhatsApp API not configured. Skipping send.");
    return { success: false, error: "WA_API_URL or WA_API_KEY not set" };
  }

  try {
    const res = await fetch(WA_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${WA_API_KEY}`,
      },
      body: JSON.stringify({
        phoneNumber,
        message,
      } satisfies WhatsAppMessage),
    });

    if (!res.ok) {
      const err = await res.text();
      return { success: false, error: err };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export function buildReminderMessage(params: {
  patientName: string;
  medicineName: string;
  dosage: string;
  time: string;
}): string {
  return `Halo ${params.patientName}, jangan lupa minum obat ${params.medicineName} ${params.dosage} pada jam ${params.time}. Sehat selalu!`;
}

export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour >= 0 && hour < 12) return "pagi";
  if (hour >= 12 && hour < 16) return "siang";
  if (hour >= 16 && hour < 19) return "sore";
  return "malam";
}

export function getNearestTime(times: string[]): string {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const sorted = [...times].sort();
  for (const t of sorted) {
    const [h, m] = t.split(":").map(Number);
    if (h * 60 + m > currentMinutes) return t;
  }
  return sorted[0] || "00:00";
}

export function buildManualReminderMessage(params: {
  patientName: string;
  medicineName: string;
  nearestTime: string;
}): string {
  const greeting = getGreeting();
  return `Selamat ${greeting} ${params.patientName}, jangan lupa untuk meminum obat ${params.medicineName} anda pada ${params.nearestTime}.`;
}
