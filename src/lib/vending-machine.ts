const MOCK_API = "/api/vending-machine/mock";
let cachedApiUrl: string | null | undefined;

async function getVmApiUrl(): Promise<string | null> {
  if (cachedApiUrl !== undefined) return cachedApiUrl;
  try {
    const res = await fetch("/api/system-settings");
    const data = await res.json();
    cachedApiUrl = data.vmApiUrl?.trim() || null;
  } catch {
    cachedApiUrl = null;
  }
  return cachedApiUrl as string | null;
}

export function clearVmApiUrlCache() {
  cachedApiUrl = undefined;
}

export interface DispenseResult {
  status: string;
  code?: string;
  medicineName: string;
  quantity: number;
  patientId: number;
  timestamp: string;
  message: string;
}

export interface DispenseItem {
  medicineName: string;
  quantity: number;
  patientId: number;
  localId: number;
}

export async function dispenseSingle(
  item: DispenseItem
): Promise<{ success: boolean; result?: DispenseResult; error?: string }> {
  const apiUrl = await getVmApiUrl();

  try {
    if (apiUrl) {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patient_id: `RX-${Date.now()}`,
          items: [
            {
              medicine: item.medicineName,
              qty: item.quantity,
            },
          ],
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        return { success: false, error: err };
      }

      const data = await res.json();
      return {
        success: data.result === "success",
        result: {
          status: data.result || "success",
          code: data.code,
          medicineName: item.medicineName,
          quantity: item.quantity,
          patientId: item.patientId,
          timestamp: new Date().toISOString(),
          message: data.result === "success" ? `${item.medicineName} x${item.quantity} dispensed` : "Dispense failed",
        },
      };
    }

    // Fallback to mock API
    const res = await fetch(MOCK_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        medicineName: item.medicineName,
        quantity: item.quantity,
        patientId: item.patientId,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return { success: false, error: err };
    }

    const data: DispenseResult = await res.json();
    return { success: true, result: data };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function dispenseBatch(
  items: DispenseItem[]
): Promise<{ success: boolean; results: { localId: number; code?: string; error?: string }[] }> {
  const apiUrl = await getVmApiUrl();

  if (apiUrl) {
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patient_id: `RX-${Date.now()}`,
          items: items.map((i) => ({
            medicine: i.medicineName,
            qty: i.quantity,
          })),
        }),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const data = await res.json();
      const responseItems = (data.items || []) as { medicine: string; dispensed: number }[];

      return {
        success: data.result === "success",
        results: items.map((item, idx) => {
          const resp = responseItems[idx];
          return {
            localId: item.localId,
            code: data.code,
            error: resp && resp.dispensed > 0 ? undefined : "Item not dispensed",
          };
        }),
      };
    } catch (err: any) {
      return {
        success: false,
        results: items.map((i) => ({ localId: i.localId, error: err.message })),
      };
    }
  }

  // Fallback: individual mock calls
  const results = await Promise.all(
    items.map(async (item) => {
      const r = await dispenseSingle(item);
      return {
        localId: item.localId,
        code: r.result?.code,
        error: r.error,
      };
    })
  );

  return {
    success: results.every((r) => !r.error),
    results,
  };
}
