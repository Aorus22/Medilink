"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AllMessageDoctorResponse } from "@/app/api/message/route";

export default function MessageListPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [allMessage, setAllMessage] = useState<AllMessageDoctorResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/message");
        const data = await res.json();
        setAllMessage(data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const filteredMessage = allMessage.filter((message) =>
    message.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.doctorSpecialty.toLowerCase().includes(searchTerm.toLowerCase())
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
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
          </div>
        ) : filteredMessage.length > 0 ? (
          filteredMessage.map((message) => (
            <Link
              href={`/message/${message.doctorId}`}
              key={message.doctorId}
              className="block"
            >
              <div className="p-4 border-b border-gray-200 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition">
                <div className="relative">
                  {message.avatar ? (
                    <img src={message.avatar} alt={message.doctorName} className="w-14 h-14 rounded-full" />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-lg">
                      {getInitials(message.doctorName)}
                    </div>
                  )}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium truncate">{message.doctorName}</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                      {new Date(message.lastMessageTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{message.lastMessage}</p>
                  <p className="text-xs text-teal-600">{message.doctorSpecialty}</p>
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
