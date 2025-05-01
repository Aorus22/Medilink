"use client"

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const doctorImage = "/assets/dashboard/doctor.svg";

type PracticeHour = {
  id: number;
  startTime: string;
  endTime: string;
  dayOfWeek: string;
  doctorId: number;
};

type Doctor = {
  id: number;
  name: string;
  specialist: string;
  education: string;
  experience: string;
  about: string;
  practiceHours: PracticeHour[];
};

export default function DoctorAppointmentPage() {
  const params = useParams();
  const router = useRouter();

  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [bookingInProgress, setBookingInProgress] = useState<boolean>(false);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/doctors/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch doctor data");
        }
        const doctorData: Doctor = await response.json();
        setDoctor(doctorData);
      } catch (err) {
        setError("Failed to load doctor information");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    setSelectedDate(newDate);
  };

  const handleBookAppointment = async () => {
    if (!doctor) {
      alert("Doctor information not available");
      return;
    }

    try {
      setBookingInProgress(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const practiceHour = getPracticeHourForDate();
      if (!practiceHour) {
        alert("No appointment available for this date");
        return;
      }

      alert(
        `Appointment booked successfully with ${doctor.name} for ${formatDisplayDate(
          selectedDate
        )} from ${practiceHour.startTime} to ${practiceHour.endTime}`
      );
      router.push("/appointments");
    } catch (err) {
      alert("Failed to book appointment. Please try again.");
    } finally {
      setBookingInProgress(false);
    }
  };

  // Helper functions
  const formatDate = (date: Date): string => date.toISOString().split("T")[0];

  const formatDisplayDate = (date: Date): string =>
    date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const getPracticeHourForDate = (): PracticeHour | null => {
    if (!doctor) return null;

    const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const currentDayName = dayNames[selectedDate.getDay()];
    return (
      doctor.practiceHours.find((ph) => ph.dayOfWeek === currentDayName) || null
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 mx-auto mb-4"></div>
          <p className="text-lg font-medium text-gray-700">Loading doctor's schedule...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md mx-auto max-w-4xl mt-8 text-center">
        <p className="text-red-600 font-medium">{error}</p>
        <button
          className="mt-4 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!doctor) return null;

  const practiceHour = getPracticeHourForDate();

  return (
    <main className="flex-grow p-5 overflow-y-auto">
      {/* Navigation breadcrumb */}
      <div className="flex items-center gap-2 mb-5 text-sm">
        <Link href="/dashboard" className="text-gray-500 hover:text-teal-500">Dashboard</Link>
        <i className="bi bi-chevron-right text-gray-500"></i>
        <Link href="/doctors" className="text-gray-500 hover:text-teal-500">Doctors</Link>
        <i className="bi bi-chevron-right text-gray-500"></i>
        <Link href={`/doctors/${id}`} className="text-gray-500 hover:text-teal-500">{doctor.name}</Link>
        <i className="bi bi-chevron-right text-gray-500"></i>
        <span className="text-teal-600 font-medium">Book Appointment</span>
      </div>

      {/* Doctor Profile Card */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-5">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-800 text-white p-5">
          <div className="flex items-center gap-6">
            <div className="bg-white p-2 rounded-full">
              <img src={doctorImage} alt="Doctor" className="w-24 h-24" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold">{doctor.name}</h2>
              <p className="text-teal-100">{doctor.specialist}</p>
            </div>
          </div>
        </div>

        {/* Appointment Booking Section */}
        <div className="p-5">
          <h3 className="text-xl font-medium mb-4">Book an Appointment</h3>

          {/* Date Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Select Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              min={formatDate(new Date())}
              value={formatDate(selectedDate)}
              onChange={handleDateChange}
            />
            <p className="text-sm text-gray-500 mt-2">Showing availability for {formatDisplayDate(selectedDate)}</p>
          </div>

          {/* Practice Hours */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Practice Hours</label>
            {practiceHour ? (
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <p className="font-medium">
                  {practiceHour.startTime} - {practiceHour.endTime}
                </p>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-gray-500">No appointments available on this day</p>
              </div>
            )}
          </div>

          {/* Booking Button */}
          <button
            onClick={handleBookAppointment}
            disabled={!practiceHour || bookingInProgress}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium ${
              practiceHour && !bookingInProgress
                ? 'bg-teal-500 hover:bg-teal-600'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {bookingInProgress ? (
              <>
                <span className="inline-block animate-spin mr-2">⟳</span>
                Booking...
              </>
            ) : (
              'Book Appointment'
            )}
          </button>
        </div>
      </div>
    </main>
  );
}