import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  try {
    const wsUrl = process.env.WS_SERVER_URL || "ws://localhost:3001";
    return NextResponse.json({ url: wsUrl });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate WebSocket URL" }, { status: 500 });
  }
}
