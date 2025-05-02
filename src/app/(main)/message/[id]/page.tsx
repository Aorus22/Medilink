"use client";

import { useState, useRef, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  avatar: string | null;
}

interface Message {
  id: number;
  sender: "doctor" | "user";
  message: string;
  time: string;
}

interface DoctorChatPageProps {
  params: {
    doctorId: string;
  };
}

export default function DoctorChatPage() {
  const { id } = useParams();
  const [message, setMessage] = useState<string>("");
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const doctorId = parseInt(id as string);

  const doctors: Record<number, Doctor> = {
    1: {
      id: 1,
      name: "Dr. Amanda Wilson",
      specialty: "Cardiologist",
      avatar: null,
    },
    2: {
      id: 2,
      name: "Dr. James Rodriguez",
      specialty: "Neurologist",
      avatar: null,
    },
    3: {
      id: 3,
      name: "Dr. Sarah Chen",
      specialty: "Dermatologist",
      avatar: null,
    },
    4: {
      id: 4,
      name: "Dr. Robert Miller",
      specialty: "Pediatrician",
      avatar: null,
    },
    5: {
      id: 5,
      name: "Dr. Emily Johnson",
      specialty: "Psychiatrist",
      avatar: null,
    }
  };

  const conversations: Record<number, Message[]> = {
    1: [
      {
        id: 1,
        sender: "doctor",
        message: "Hello Marko, how are you feeling today?",
        time: "09:30 AM",
      },
      {
        id: 2,
        sender: "user",
        message: "Hi Dr. Wilson, I'm feeling better than yesterday. The chest pain has decreased.",
        time: "09:32 AM",
      },
      {
        id: 3,
        sender: "doctor",
        message: "That's good to hear. Have you been taking the prescribed medications regularly?",
        time: "09:35 AM",
      },
      {
        id: 4,
        sender: "user",
        message: "Yes, I've been taking them as prescribed. But I'm experiencing some dizziness as a side effect.",
        time: "09:38 AM",
      },
      {
        id: 5,
        sender: "doctor",
        message: "Dizziness can be a side effect of the medication. When does it typically occur?",
        time: "09:40 AM",
      },
      {
        id: 6,
        sender: "user",
        message: "Usually about an hour after taking the morning dose. It lasts for about 30 minutes.",
        time: "09:42 AM",
      },
      {
        id: 7,
        sender: "doctor",
        message: "I see. Try taking it with food to reduce the dizziness. If it persists or worsens, we might need to adjust the dosage.",
        time: "09:43 AM",
      },
      {
        id: 8,
        sender: "doctor",
        message: "Please let me know if you have any questions about your medication.",
        time: "09:45 AM",
      }
    ],
    2: [
      {
        id: 1,
        sender: "doctor",
        message: "Hello Marko, I've reviewed your MRI results from last week.",
        time: "Yesterday",
      },
      {
        id: 2,
        sender: "user",
        message: "Hi Dr. Rodriguez, what did you find? I've been worried.",
        time: "Yesterday",
      },
      {
        id: 3,
        sender: "doctor",
        message: "Your test results look good. We'll discuss in our next appointment.",
        time: "Yesterday",
      }
    ],
    3: [
      {
        id: 1,
        sender: "user",
        message: "Dr. Chen, the rash seems to be spreading to my neck now.",
        time: "Yesterday",
      },
      {
        id: 2,
        sender: "doctor",
        message: "Can you send me a photo so I can assess it?",
        time: "Yesterday",
      },
      {
        id: 3,
        sender: "user",
        message: "I'll take one and send it to you shortly.",
        time: "Yesterday",
      },
      {
        id: 4,
        sender: "doctor",
        message: "Remember to apply the cream twice daily as prescribed.",
        time: "Yesterday",
      }
    ],
    4: [
      {
        id: 1,
        sender: "doctor",
        message: "Your child's vaccination is due next week. Please schedule an appointment.",
        time: "May 20",
      }
    ],
    5: [
      {
        id: 1,
        sender: "doctor",
        message: "How are you feeling after our last session?",
        time: "May 18",
      }
    ]
  };

  const [chatMessages, setChatMessages] = useState<Message[]>(conversations[doctorId] || []);
  const doctor = doctors[doctorId];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage: Message = {
      id: chatMessages.length + 1,
      sender: "user",
      message: message.trim(),
      time: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    };

    setChatMessages([...chatMessages, newMessage]);
    setMessage("");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  if (!doctor) {
    return (
      <div className="flex-grow p-5 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <i className="bi bi-exclamation-circle text-red-500 text-4xl"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Doctor not found</h3>
          <p className="text-gray-500 mb-4">The doctor you're looking for doesn't exist.</p>
          <Link href="/message">
            <button className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
              Back to Messages
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-grow flex flex-col h-[90vh]">
      {/* Header */}
      <div className="p-4 bg-white border-b border-gray-200 flex items-center gap-3">
        <Link href="/message" className="text-gray-500 hover:text-teal-500 transition">
          <i className="bi bi-arrow-left text-xl"></i>
        </Link>

        <div className="flex items-center gap-3 flex-grow">
          {doctor.avatar ? (
            <img src={doctor.avatar} alt={doctor.name} className="w-12 h-12 rounded-full" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">
              {getInitials(doctor.name)}
            </div>
          )}
          <div>
            <h3 className="font-medium">{doctor.name}</h3>
            <p className="text-xs text-teal-600">{doctor.specialty}</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div
        ref={chatContainerRef}
        className="flex-grow p-4 overflow-y-auto bg-gray-50"
      >
        <div className="flex flex-col space-y-3">
          {chatMessages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white"
                    : "bg-white border border-gray-200 text-gray-800"
                }`}
              >
                <p>{msg.message}</p>
                <div
                  className={`flex justify-end items-center gap-1 text-xs mt-1 ${
                    msg.sender === "user" ? "text-teal-100" : "text-gray-500"
                  }`}
                >
                  <span>{msg.time}</span>
                  {msg.sender === "user" && <i className="bi bi-check2-all"></i>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <input
            type="text"
            className="flex-grow pl-4 pr-10 py-3 border-2 border-gray-300 rounded-full text-sm focus:outline-none focus:border-teal-500 transition duration-300"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className="w-12 h-12 flex items-center justify-center bg-teal-500 text-white rounded-full hover:bg-teal-600 transition"
            disabled={!message.trim()}
          >
            <i className="bi bi-send text-xl"></i>
          </button>
        </form>
      </div>
    </main>
  );
}