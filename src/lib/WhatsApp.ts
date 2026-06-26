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
