"use client";

import { useState, useRef, useEffect } from "react";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  avatar: string | null;
  lastMessage: string;
  lastMessageTime: string;
  unread: number;
}

interface Message {
  id: number;
  sender: "doctor" | "user";
  message: string;
  time: string;
}

export default function UserDoctorChatPage() {
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Amanda Wilson",
      specialty: "Cardiologist",
      avatar: null,
      lastMessage: "Please let me know if you have any questions about your medication.",
      lastMessageTime: "09:45 AM",
      unread: 2
    },
    {
      id: 2,
      name: "Dr. James Rodriguez",
      specialty: "Neurologist",
      avatar: null,
      lastMessage: "Your test results look good. We'll discuss in our next appointment.",
      lastMessageTime: "Yesterday",
      unread: 0
    },
    {
      id: 3,
      name: "Dr. Sarah Chen",
      specialty: "Dermatologist",
      avatar: null,
      lastMessage: "Remember to apply the cream twice daily as prescribed.",
      lastMessageTime: "Yesterday",
      unread: 0
    },
    {
      id: 4,
      name: "Dr. Robert Miller",
      specialty: "Pediatrician",
      avatar: null,
      lastMessage: "Your child's vaccination is due next week. Please schedule an appointment.",
      lastMessageTime: "May 20",
      unread: 0
    },
    {
      id: 5,
      name: "Dr. Emily Johnson",
      specialty: "Psychiatrist",
      avatar: null,
      lastMessage: "How are you feeling after our last session?",
      lastMessageTime: "May 18",
      unread: 0
    }
  ];

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

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !activeChat) return;

    const newMessage: Message = {
      id: conversations[activeChat].length + 1,
      sender: "user",
      message: message.trim(),
      time: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    };

    conversations[activeChat] = [...conversations[activeChat], newMessage];

    const doctorIndex = doctors.findIndex((d) => d.id === activeChat);
    if (doctorIndex !== -1) {
      doctors[doctorIndex].lastMessage = message.trim();
      doctors[doctorIndex].lastMessageTime = "Just now";
      doctors[doctorIndex].unread = 0;
    }

    setMessage("");
    setActiveChat((prev) => prev);
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
  }, [activeChat, conversations]);

  return (
    <main className="flex h-[90vh] overflow-hidden">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 bg-white flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold mb-4">Messages</h2>
          <div className="relative">
            <i className="bi bi-search absolute top-1/2 left-3 -translate-y-1/2 text-teal-500 text-sm"></i>
            <input
              type="text"
              className="w-full pl-9 pr-4 py-2 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-teal-500 transition duration-300"
              placeholder="Search doctors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Scrollable doctors list */}
        <div className="flex-grow overflow-y-auto">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className={`p-4 border-b border-gray-200 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition ${
                  activeChat === doctor.id ? "bg-teal-50" : ""
                }`}
                onClick={() => {
                  setActiveChat(doctor.id);
                  const doctorIndex = doctors.findIndex((d) => d.id === doctor.id);
                  if (doctorIndex !== -1) {
                    doctors[doctorIndex].unread = 0;
                  }
                }}
              >
                <div className="relative">
                  {doctor.avatar ? (
                    <img src={doctor.avatar} alt={doctor.name} className="w-12 h-12 rounded-full" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">
                      {getInitials(doctor.name)}
                    </div>
                  )}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium truncate">{doctor.name}</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{doctor.lastMessageTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 truncate">{doctor.lastMessage}</p>
                    {doctor.unread > 0 && (
                      <span className="bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                        {doctor.unread}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-teal-600">{doctor.specialty}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">No doctors found.</div>
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div className="hidden md:flex md:w-2/3 lg:w-3/4 flex-col h-full bg-gray-50">
        {activeChat ? (
          <>
            <div ref={chatContainerRef} className="flex-grow p-4 overflow-y-auto">
              <div className="flex flex-col space-y-3">
                {conversations[activeChat].map((msg) => (
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input */}
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
          </>
        ) : (
          <div className="flex-grow flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-24 h-24 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                <i className="bi bi-chat-left-text text-teal-500 text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Select a conversation</h3>
              <p className="text-gray-500">Choose a doctor from the list to start chatting</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
