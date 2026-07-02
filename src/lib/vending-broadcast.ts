import type { VendingSnapshot } from "#/Daemon/vendingDaemon";

type SnapshotListener = (snapshot: VendingSnapshot) => void;

const GLOBAL_KEY = "__pharmashift_vending_listeners__";

function getListeners(): SnapshotListener[] {
  if (!(globalThis as any)[GLOBAL_KEY]) {
    (globalThis as any)[GLOBAL_KEY] = [];
  }
  return (globalThis as any)[GLOBAL_KEY];
}

export function onVendingSnapshot(cb: SnapshotListener) {
  getListeners().push(cb);
  return () => {
    const arr = getListeners();
    const idx = arr.indexOf(cb);
    if (idx !== -1) arr.splice(idx, 1);
  };
}

export function broadcastVendingSnapshot(snapshot: VendingSnapshot) {
  const snapshotCopy = { ...snapshot };
  getListeners().forEach((cb) => {
    try {
      cb(snapshotCopy);
    } catch (err) {
      console.error("vending-broadcast listener error:", err);
    }
  });
}
