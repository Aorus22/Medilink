"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

interface Appointment {
  id: number;
  doctorName: string;
  doctorSpecialty: string;
  date: string;
  time: string;
  purpose: string;
  status: string;
  location: string;
  notes: string;
}

export default function AppointmentPage() {
  const [appointmentFilter, setAppointmentFilter] = useState("upcoming");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await fetch('/api/appointments?id=1');
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const data = await response.json();
        const formattedAppointments: Appointment[] = data.map((appt: any) => ({
          id: appt.id,
          doctorName: appt.doctor.name,
          doctorSpecialty: appt.doctor.specialist,
          date: new Date(appt.date).toISOString().split('T')[0],
          time: new Date(appt.date).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          }),
          purpose: appt.purpose,
          status: appt.status,
          location: appt.doctor.location,
          notes: appt.information,
        }));
        setAppointments(formattedAppointments);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchAppointments();
  }, []);

  const today = new Date();

  const filteredAppointments = appointments.filter(appointment => {
    const appointmentDate = new Date(appointment.date);
    if (appointmentFilter === "upcoming") {
      return appointmentDate >= today;
    } else if (appointmentFilter === "past") {
      return appointmentDate < today;
    } else if (appointmentFilter === "all") {
      return true;
    }
    return true;
  });

  const getStatusClass = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "completed": return "bg-blue-100 text-blue-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
    </div>
  );

  if (error) {
    return (
      <div className="p-6 text-center">
        <p className="text-lg text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-6 rounded-2xl mb-6">
        <h1 className="text-2xl font-bold mb-2">My Appointments</h1>
        <p className="text-lg">Manage your scheduled doctor appointments</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex flex-wrap gap-2">
          <button 
            className={`px-4 py-2 rounded-lg ${appointmentFilter === "upcoming" ? "bg-teal-600 text-white" : "bg-gray-100 hover:bg-teal-100"}`}
            onClick={() => setAppointmentFilter("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${appointmentFilter === "past" ? "bg-teal-600 text-white" : "bg-gray-100 hover:bg-teal-100"}`}
            onClick={() => setAppointmentFilter("past")}
          >
            Past
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${appointmentFilter === "all" ? "bg-teal-600 text-white" : "bg-gray-100 hover:bg-teal-100"}`}
            onClick={() => setAppointmentFilter("all")}
          >
            All
          </button>
        </div>
        <Link
          href="/doctors"
          className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition flex items-center"
        >
          <i className="bi bi-plus-circle mr-2"></i>
          Schedule New Appointment
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {filteredAppointments.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-teal-50">
                  <th className="px-6 py-3 text-left text-sm font-medium text-teal-700">Doctor</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-teal-700">Date & Time</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-teal-700">Purpose</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-teal-700">Location</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-teal-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredAppointments.map((appointment) => (
                  <tr key={appointment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                          <i className="bi bi-person-badge"></i>
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{appointment.doctorName}</div>
                          <div className="text-sm text-gray-500">{appointment.doctorSpecialty}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{new Date(appointment.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
                      <div className="text-sm text-gray-500">{appointment.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{appointment.purpose}</div>
                      {appointment.notes && (
                        <div className="text-xs text-gray-500 mt-1">{appointment.notes}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {appointment.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusClass(appointment.status)}`}>
                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
              <i className="bi bi-calendar-x text-teal-600 text-2xl"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No appointments found</h3>
            <p className="text-gray-500 mb-6">There are no {appointmentFilter} appointments to display</p>
            <Link href="/doctors" className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
              Schedule an Appointment
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}