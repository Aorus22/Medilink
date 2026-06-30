const MOCK_API = "/api/vending-machine/mock";

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
  try {
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
