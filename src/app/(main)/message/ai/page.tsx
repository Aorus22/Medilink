"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AIChatPage() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (messages.length === 0) {
        setMessages([
            {
                role: "assistant",
                content: "Hi! I'm your health assistant. You can ask me about symptoms, general health tips, or disease prevention advice. How can I help you today?",
            }
        ])
    }
  }, []);

  const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input.trim() } as const;
        setMessages([userMessage]);
        setLoading(true);
        setInput("");

        try {
            const res = await fetch("/api/message/ai-chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: userMessage.content }),
            });

            const data = await res.json();
            const aiReply = { role: "assistant", content: data.reply } as const;

            setMessages([userMessage, aiReply]);
        } catch (err) {
            console.error("Error:", err);
        } finally {
            setLoading(false);
        }
    };


  return (
    <main className="flex-grow flex flex-col h-[90vh]">
      {/* Header */}
      <div className="p-4 bg-white border-b border-gray-200 flex items-center gap-3">
        <Link href="/message" className="text-gray-500 hover:text-teal-500 transition">
          <i className="bi bi-arrow-left text-xl"></i>
        </Link>
        <div className="flex items-center gap-3 flex-grow">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold">
            AI
          </div>
          <div>
            <h3 className="font-medium">Health AI Assistant</h3>
            <p className="text-xs text-teal-600">Ask health-related questions</p>
          </div>
        </div>
      </div>

      {/* Chat */}
      <div className="flex-grow p-4 overflow-y-auto bg-gray-50 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                msg.role === "user"
                  ? "bg-teal-600 text-white"
                  : "bg-white border border-gray-300 text-gray-800"
              }`}
            >
              <p>{msg.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-sm text-gray-500 italic">AI is typing...</div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-200">
        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a health-related question..."
            className="flex-grow border-2 border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-teal-500"
          />
          <button
            type="submit"
            className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700"
            disabled={!input.trim() || loading}
          >
            <i className="bi bi-send text-xl"></i>
          </button>
        </form>
      </div>
    </main>
  );
}
