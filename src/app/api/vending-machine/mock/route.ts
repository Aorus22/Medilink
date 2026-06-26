import { NextRequest, NextResponse } from "next/server";

// Mock vending machine — simulates dispensing medicine
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { medicineName, quantity, patientId } = body;

  const code = `VM-${Date.now().toString(36).toUpperCase()}-${Math.random()
    .toString(36)
    .substring(2, 6)
    .toUpperCase()}`;

  const result = {
    status: "dispensed",
    code,
    medicineName,
    quantity,
    patientId,
    timestamp: new Date().toISOString(),
    message: `${medicineName} x${quantity} dispensed successfully`,
  };

  return NextResponse.json(result, { status: 200 });
}

export async function GET() {
  return NextResponse.json({
    status: "online",
    name: "PharmaSwift Vending Machine",
    version: "1.0.0",
  });
}
