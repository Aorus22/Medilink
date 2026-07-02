import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface FeederChannel {
  channel: number;
  medicine: string;
  stock: number;
}

export interface VendingIngestPayload {
  machine_id: string;
  state: string;
  temperature: number;
  humidity: number;
  fan: number;
  light: number;
  feeder: FeederChannel[];
}

export interface VendingSnapshot {
  machineId: string;
  state: string;
  temperature: number;
  humidity: number;
  fan: number;
  light: number;
  feeder: FeederChannel[];
  updatedAt: string;
}

export const FEEDER_CHANNEL_COUNT = 8;

export function normalizeFeeder(rawFeeder: unknown): FeederChannel[] {
  const feeder: FeederChannel[] = [];
  const seenChannels = new Set<number>();

  if (Array.isArray(rawFeeder)) {
    for (const item of rawFeeder) {
      if (!item || typeof item !== 'object') continue;
      const channel = Number((item as any).channel);
      if (!Number.isInteger(channel) || channel < 1 || channel > FEEDER_CHANNEL_COUNT) continue;
      if (seenChannels.has(channel)) continue;
      seenChannels.add(channel);
      feeder.push({
        channel,
        medicine: typeof (item as any).medicine === 'string' ? (item as any).medicine : '',
        stock: Number.isFinite(Number((item as any).stock)) ? Number((item as any).stock) : 0,
      });
    }
  }

  for (let ch = 1; ch <= FEEDER_CHANNEL_COUNT; ch++) {
    if (!seenChannels.has(ch)) {
      feeder.push({ channel: ch, medicine: '', stock: 0 });
    }
  }

  feeder.sort((a, b) => a.channel - b.channel);
  return feeder;
}

export function validateIngestPayload(body: unknown): { ok: true; data: VendingIngestPayload } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Body must be a JSON object' };
  }

  const obj = body as Record<string, unknown>;
  const machineId = typeof obj.machine_id === 'string' ? obj.machine_id.trim() : '';
  if (!machineId) {
    return { ok: false, error: 'machine_id is required' };
  }

  const state = typeof obj.state === 'string' ? obj.state.trim() : 'unknown';
  const temperature = Number(obj.temperature);
  const humidity = Number(obj.humidity);
  const fan = Number(obj.fan);
  const light = Number(obj.light);

  if (!Number.isFinite(temperature)) return { ok: false, error: 'temperature must be a number' };
  if (!Number.isFinite(humidity)) return { ok: false, error: 'humidity must be a number' };
  if (!Number.isFinite(fan) || fan < 0) return { ok: false, error: 'fan must be a non-negative number' };
  if (!Number.isFinite(light) || light < 0 || light > 100) return { ok: false, error: 'light must be between 0 and 100' };

  const feeder = normalizeFeeder(obj.feeder);

  return {
    ok: true,
    data: {
      machine_id: machineId,
      state,
      temperature,
      humidity,
      fan,
      light,
      feeder,
    },
  };
}

export function snapshotFromPayload(payload: VendingIngestPayload): VendingSnapshot {
  return {
    machineId: payload.machine_id,
    state: payload.state,
    temperature: payload.temperature,
    humidity: payload.humidity,
    fan: payload.fan,
    light: payload.light,
    feeder: payload.feeder,
    updatedAt: new Date().toISOString(),
  };
}

export async function persistSnapshot(snapshot: VendingSnapshot): Promise<void> {
  const existing = await prisma.vendingMachineSnapshot.findFirst({
    where: { machineId: snapshot.machineId },
  });

  if (existing) {
    await prisma.vendingMachineSnapshot.update({
      where: { id: existing.id },
      data: {
        state: snapshot.state,
        temperature: snapshot.temperature,
        humidity: snapshot.humidity,
        fan: snapshot.fan,
        light: snapshot.light,
        feeder: snapshot.feeder as any,
      },
    });
  } else {
    await prisma.vendingMachineSnapshot.create({
      data: {
        machineId: snapshot.machineId,
        state: snapshot.state,
        temperature: snapshot.temperature,
        humidity: snapshot.humidity,
        fan: snapshot.fan,
        light: snapshot.light,
        feeder: snapshot.feeder as any,
      },
    });
  }
}

export async function loadLatestSnapshot(machineId?: string): Promise<VendingSnapshot | null> {
  const row = machineId
    ? await prisma.vendingMachineSnapshot.findFirst({ where: { machineId }, orderBy: { updatedAt: 'desc' } })
    : await prisma.vendingMachineSnapshot.findFirst({ orderBy: { updatedAt: 'desc' } });

  if (!row) return null;
  return {
    machineId: row.machineId,
    state: row.state,
    temperature: row.temperature,
    humidity: row.humidity,
    fan: row.fan,
    light: row.light,
    feeder: (row.feeder as unknown as FeederChannel[]) || [],
    updatedAt: row.updatedAt.toISOString(),
  };
}
