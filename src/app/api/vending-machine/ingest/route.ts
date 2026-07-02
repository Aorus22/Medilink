import { NextRequest, NextResponse } from "next/server";
import { broadcastVendingSnapshot } from "@/lib/vending-broadcast";
import {
  persistSnapshot,
  snapshotFromPayload,
  validateIngestPayload,
} from "#/Daemon/vendingDaemon";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = validateIngestPayload(body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const snapshot = snapshotFromPayload(result.data);

  try {
    await persistSnapshot(snapshot);
  } catch (err) {
    console.error("Failed to persist vending machine snapshot:", err);
    return NextResponse.json(
      { error: "Failed to persist snapshot" },
      { status: 500 }
    );
  }

  try {
    broadcastVendingSnapshot(snapshot);
  } catch (err) {
    console.error("Failed to broadcast vending snapshot:", err);
  }

  return NextResponse.json(
    {
      ok: true,
      message: "Snapshot stored and broadcast",
      machineId: snapshot.machineId,
      updatedAt: snapshot.updatedAt,
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json({
    status: "online",
    endpoint: "vending-machine ingest",
    method: "POST",
    expects: "JSON body with machine_id, state, temperature, humidity, fan, light, feeder[]",
  });
}
