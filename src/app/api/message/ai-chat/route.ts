import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set in the environment variables.");
    }
    
    const genAI = new GoogleGenerativeAI(apiKey);
    const { message, history } = await req.json();
    
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",

      systemInstruction: `
        Anda adalah "Medixense AI Assistant", seorang asisten virtual yang berpengetahuan, simpatik, dan profesional.
        Tugas Anda adalah memberikan informasi kesehatan yang akurat, langkah-langkah pencegahan, atau pertolongan pertama yang bisa dilakukan di rumah.
        Gunakan bahasa Indonesia yang sopan, mudah dipahami, dan menenangkan.

        ATURAN UTAMA:
        1. JANGAN PERNAH memberikan diagnosis medis yang pasti. Gunakan kata-kata seperti "kemungkinan", "gejala tersebut bisa berhubungan dengan...", dll.
        2. Selalu sertakan DISCLAIMER bahwa Anda adalah AI dan pengguna harus berkonsultasi dengan dokter untuk diagnosis resmi.
        3. Fokus pada solusi praktis yang aman.
        4. Jika gejala darurat (nyeri dada, sesak napas berat), arahkan ke UGD.
        5. Jika ditanya di luar topik kesehatan, tolak dengan sopan dan arahkan kembali ke topik kesehatan.
      `,
    });

    const chat = model.startChat({
      history: history || [], 
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    
    return Response.json({ text });

  } catch (error) {
    console.error("Error di API route:", error);
    return Response.json({ error: "Terjadi kesalahan saat memproses permintaan Anda." }, { status: 500 });
  }
}