const API_BASE_URL = process.env.WHATSAPP_API_BASE_URL || "";
const API_SECRET = process.env.WHATSAPP_API_SECRET || "";

export function toJID(phoneNumber: string): string {
  return `${phoneNumber.replace(/[^0-9]/g, "")}@s.whatsapp.net`;
}

export async function sendWhatsApp(
  phoneNumber: string,
  message: string
): Promise<{ success: boolean; id?: string; error?: string }> {
  if (!API_BASE_URL || !API_SECRET) {
    console.warn("WhatsApp API not configured. Skipping send.");
    return { success: false, error: "WHATSAPP_API_BASE_URL or WHATSAPP_API_SECRET not set" };
  }

  try {
    const res = await fetch(`${API_BASE_URL}/send-message`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: API_SECRET,
        target: toJID(phoneNumber),
        message,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return { success: false, error: err };
    }

    const data = await res.json();
    return { success: data.status === "success", id: data.id };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
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

export interface MedicineItem {
  namaObat: string;
  dosis: string;
}

export function buildReminderMessage(params: {
  patientName: string;
  medicines: MedicineItem[];
  time: string;
}): string {
  const greeting = getGreeting();

  if (params.medicines.length === 1) {
    const m = params.medicines[0];
    return `Selamat ${greeting} ${params.patientName}, jangan lupa untuk meminum obat ${m.namaObat} anda pada jam ${params.time}.`;
  }

  const list = params.medicines
    .map((m, i) => `${i + 1}. ${m.namaObat} — ${m.dosis}`)
    .join("\n");

  return `Selamat ${greeting} ${params.patientName}, jangan lupa untuk meminum obat anda pada jam ${params.time}:\n${list}`;
}
