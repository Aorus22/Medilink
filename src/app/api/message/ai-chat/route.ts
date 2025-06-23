import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: NextRequest) {
    const { question } = await req.json();

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4.1",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful AI health assistant. Answer general questions about symptoms and prevention. Avoid giving medical diagnoses or prescriptions."
                },
                {
                    role: "user",
                    content: question
                }
            ]
        });

        const reply = completion.choices[0].message.content ?? "Sorry, I couldn't generate a response.";

        return NextResponse.json({ reply });
    } catch (error) {
        console.error("Error generating AI response:", error);
        return NextResponse.json({ error: "Failed to fetch response from AI." }, { status: 500 });
    }
}