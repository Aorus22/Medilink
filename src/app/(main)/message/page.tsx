"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  avatar: string | null;
  lastMessage: string;
  lastMessageTime: string;
  unread: number;
}

export default function MessageListPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

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

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <main className="flex-grow p-5 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-semibold">Messages</h2>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-800 text-white p-5 rounded-2xl flex justify-between items-center mb-5">
        <div>
          <h2 className="text-lg font-semibold mb-2">Connect With Your Doctors</h2>
          <p className="text-sm mb-4">Chat with your healthcare providers securely</p>
        </div>
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
          <i className="bi bi-chat-dots-fill text-white text-4xl"></i>
        </div>
      </div>

      {/* Search */}
      <div className="relative w-full max-w-md mb-5">
        <i className="bi bi-search absolute top-1/2 left-3 -translate-y-1/2 text-teal-500 text-sm"></i>
        <input
          type="text"
          className="w-full pl-9 pr-4 py-3 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-teal-500 transition duration-300"
          placeholder="Search doctors or specialties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Messages list */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <Link
              href={`/message/${doctor.id}`}
              key={doctor.id}
              className="block"
            >
              <div className="p-4 border-b border-gray-200 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition">
                <div className="relative">
                  {doctor.avatar ? (
                    <img src={doctor.avatar} alt={doctor.name} className="w-14 h-14 rounded-full" />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-lg">
                      {getInitials(doctor.name)}
                    </div>
                  )}
                  {doctor.unread > 0 && (
                    <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                      {doctor.unread}
                    </span>
                  )}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium truncate">{doctor.name}</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{doctor.lastMessageTime}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{doctor.lastMessage}</p>
                  <p className="text-xs text-teal-600">{doctor.specialty}</p>
                </div>
                <i className="bi bi-chevron-right text-gray-400"></i>
              </div>
            </Link>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <i className="bi bi-search text-gray-400 text-2xl"></i>
            </div>
            <p className="font-medium">No conversations found</p>
            <p className="text-sm mt-1">Try a different search term</p>
          </div>
        )}
      </div>

      {/* Floating action button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 text-white shadow-lg flex items-center justify-center hover:opacity-90 transition">
          <i className="bi bi-plus-lg text-2xl"></i>
        </button>
      </div>
    </main>
  );
}