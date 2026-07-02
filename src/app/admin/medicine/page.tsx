"use client";

import {
  Activity,
  Box,
  Cpu,
  Droplets,
  Fan,
  Lightbulb,
  Package,
  Pill,
  RefreshCw,
  Signal,
  Thermometer,
  Wifi,
  WifiOff,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

interface FeederChannel {
  channel: number;
  medicine: string;
  stock: number;
}

interface VendingSnapshot {
  machineId: string;
  state: string;
  temperature: number;
  humidity: number;
  fan: number;
  light: number;
  feeder: FeederChannel[];
  updatedAt: string;
}

type ConnState = "connecting" | "open" | "closed" | "error";

const stateColor = (s: string) => {
  const v = s.toLowerCase();
  if (v === "idle") return "bg-emerald-100 text-emerald-700 border-emerald-200";
  if (v === "dispensing" || v === "busy") return "bg-amber-100 text-amber-700 border-amber-200";
  if (v === "error" || v === "offline") return "bg-rose-100 text-rose-700 border-rose-200";
  return "bg-slate-100 text-slate-700 border-slate-200";
};

export default function MedicinePage() {
  const [snapshot, setSnapshot] = useState<VendingSnapshot | null>(null);
  const [conn, setConn] = useState<ConnState>("connecting");
  const [now, setNow] = useState<Date>(new Date());
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reconnectAttemptRef = useRef(0);
  const [ingestUrl, setIngestUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIngestUrl(`${window.location.origin}/api/vending-machine/ingest`);
    }
  }, []);

  const copyToClipboard = () => {
    if (ingestUrl) {
      navigator.clipboard.writeText(ingestUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const connect = () => {
      if (cancelled) return;
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) return;

      const proto = window.location.protocol === "https:" ? "wss:" : "ws:";
      const host = window.location.host;
      const url = `${proto}//${host}/api/ws`;

      setConn("connecting");
      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.onopen = () => {
        reconnectAttemptRef.current = 0;
        setConn("open");
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          if (msg.type === "vending_snapshot" && msg.data) {
            setSnapshot(msg.data as VendingSnapshot);
            setConn("open");
          }
        } catch (err) {
          console.error("Failed to parse WS message:", err);
        }
      };

      ws.onerror = () => {
        setConn("error");
      };

      ws.onclose = () => {
        setConn("closed");
        wsRef.current = null;
        if (cancelled) return;
        const attempt = reconnectAttemptRef.current++;
        const delay = Math.min(1000 * 2 ** attempt, 15000);
        reconnectTimerRef.current = setTimeout(connect, delay);
      };
    };

    connect();

    return () => {
      cancelled = true;
      if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
      if (wsRef.current) {
        wsRef.current.onopen = null;
        wsRef.current.onmessage = null;
        wsRef.current.onerror = null;
        wsRef.current.onclose = null;
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, []);

  const lastSeenText = useMemo(() => {
    if (!snapshot?.updatedAt) return "—";
    const updated = new Date(snapshot.updatedAt);
    const diffSec = Math.max(0, Math.floor((now.getTime() - updated.getTime()) / 1000));
    if (diffSec < 60) return `${diffSec}s ago`;
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
    if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;
    return updated.toLocaleString();
  }, [snapshot?.updatedAt, now]);

  const isStale = useMemo(() => {
    if (!snapshot?.updatedAt) return false;
    const updated = new Date(snapshot.updatedAt);
    return now.getTime() - updated.getTime() > 5 * 60 * 1000;
  }, [snapshot?.updatedAt, now]);

  const connBadge = () => {
    if (conn === "open")
      return (
        <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
          <Wifi className="w-3.5 h-3.5" />
          Live
        </span>
      );
    if (conn === "connecting")
      return (
        <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
          Connecting
        </span>
      );
    return (
      <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200">
        <WifiOff className="w-3.5 h-3.5" />
        {conn === "error" ? "Error" : "Disconnected"}
      </span>
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Box className="w-6 h-6 text-teal-600" />
            Vending Machine Master Data
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Live snapshot from the vending machine — no manual data entry.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {connBadge()}
          {isStale && snapshot && (
            <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
              <Signal className="w-3.5 h-3.5" />
              Stale
            </span>
          )}
        </div>
      </div>

      {/* API Ingestion Info Card */}
      <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-teal-900 text-sm">Vending Machine Ingestion Endpoint</h3>
          <p className="text-xs text-teal-700">
            Kirim data sensor/snapshot dari vending machine ke endpoint ini dengan metode <span className="font-bold">POST</span>.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white border border-teal-200 rounded-lg p-1.5 pl-3 shadow-sm max-w-xl w-full sm:w-auto">
          <code className="text-xs font-mono text-teal-800 break-all select-all flex-1">
            {ingestUrl || "Loading endpoint..."}
          </code>
          <button
            onClick={copyToClipboard}
            className="px-3 py-1 bg-teal-600 hover:bg-teal-700 text-white rounded text-xs transition flex items-center gap-1 font-medium whitespace-nowrap"
          >
            {copied ? "Copied!" : "Copy URL"}
          </button>
        </div>
      </div>

      {!snapshot ? (
        <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center">
          <Cpu className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-700">
            Waiting for vending machine...
          </h3>
          <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
            Make sure the machine is online and posting to
            <code className="mx-1 px-1.5 py-0.5 bg-gray-100 rounded text-xs">
              POST /api/vending-machine/ingest
            </code>
            . Snapshot will appear here as soon as it arrives.
          </p>
        </div>
      ) : (
        <>
          {/* Status overview */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            <StatCard
              icon={<Cpu className="w-4 h-4" />}
              label="Machine ID"
              value={snapshot.machineId}
              tone="teal"
            />
            <StatCard
              icon={<Activity className="w-4 h-4" />}
              label="State"
              value={snapshot.state}
              tone="dynamic"
              stateTone={stateColor(snapshot.state)}
            />
            <StatCard
              icon={<Thermometer className="w-4 h-4" />}
              label="Temperature"
              value={`${snapshot.temperature.toFixed(1)}°C`}
              tone="rose"
            />
            <StatCard
              icon={<Droplets className="w-4 h-4" />}
              label="Humidity"
              value={`${snapshot.humidity.toFixed(1)}%`}
              tone="blue"
            />
            <StatCard
              icon={<Fan className="w-4 h-4" />}
              label="Fan"
              value={`${snapshot.fan}%`}
              tone="sky"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Light</p>
                <p className="text-lg font-semibold">{snapshot.light}%</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Last Update</p>
                <p className="text-lg font-semibold">{lastSeenText}</p>
              </div>
            </div>
          </div>

          {/* Feeder table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Pill className="w-5 h-5 text-teal-600" />
                  Feeder Channels
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Snapshot of every channel on the machine.
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                {snapshot.feeder.filter((f) => f.medicine).length} of {snapshot.feeder.length} loaded
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-teal-50 text-teal-800">
                  <tr>
                    <th className="text-left p-4 font-semibold text-sm">Channel</th>
                    <th className="text-left p-4 font-semibold text-sm">Medicine</th>
                    <th className="text-left p-4 font-semibold text-sm">Stock</th>
                    <th className="text-left p-4 font-semibold text-sm">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {snapshot.feeder.map((row) => {
                    const empty = !row.medicine || row.stock === 0;
                    const low = !empty && row.stock <= 5;
                    return (
                      <tr
                        key={row.channel}
                        className="border-t border-gray-100 hover:bg-gray-50 transition"
                      >
                        <td className="p-4 font-mono font-semibold text-gray-700">
                          #{row.channel.toString().padStart(2, "0")}
                        </td>
                        <td className="p-4 font-medium text-gray-800">
                          {row.medicine || (
                            <span className="text-gray-400 italic">— empty —</span>
                          )}
                        </td>
                        <td className="p-4">
                          <span
                            className={`font-semibold ${
                              empty
                                ? "text-gray-400"
                                : low
                                ? "text-amber-600"
                                : "text-teal-700"
                            }`}
                          >
                            {row.stock}
                          </span>
                        </td>
                        <td className="p-4">
                          {empty ? (
                            <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                              <Package className="w-3 h-3" /> Empty
                            </span>
                          ) : low ? (
                            <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                              Low stock
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                              OK
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  tone,
  stateTone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone: "teal" | "rose" | "blue" | "sky" | "dynamic";
  stateTone?: string;
}) {
  const toneClass =
    tone === "teal"
      ? "bg-teal-100 text-teal-700"
      : tone === "rose"
      ? "bg-rose-100 text-rose-700"
      : tone === "blue"
      ? "bg-blue-100 text-blue-700"
      : tone === "sky"
      ? "bg-sky-100 text-sky-700"
      : "bg-gray-100 text-gray-700";

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${toneClass}`}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gray-500">{label}</p>
        {tone === "dynamic" && stateTone ? (
          <span
            className={`inline-block mt-1 text-sm font-semibold px-2 py-0.5 rounded-full border ${stateTone}`}
          >
            {value}
          </span>
        ) : (
          <p className="text-lg font-semibold truncate">{value}</p>
        )}
      </div>
    </div>
  );
}
