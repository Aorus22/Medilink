"use client"

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const doctorImage = "/assets/dashboard/doctor.svg";

type WorkingHour = {
  day: string;
  hours: string;
};

type Doctor = {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  about: string;
  workingHours: WorkingHour[];
};

type Slot = {
  id: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
};

export default function DoctorAppointmentPage() {
  const params = useParams();
  const router = useRouter();

  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<Slot[]>([]);
  const [bookingInProgress, setBookingInProgress] = useState<boolean>(false);

  useEffect(() => {
    const fetchDoctorAndSlots = async () => {
      try {
        setLoading(true);

        const doctorData: Doctor = {
          id: id || "1",
          name: "Dr. Amanda Wilson",
          specialty: "Cardiologist",
          experience: "15 years",
          about:
            "Dr. Amanda Wilson is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases.",
          workingHours: [
            { day: "Monday", hours: "9:00 AM - 5:00 PM" },
            { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
            { day: "Wednesday", hours: "9:00 AM - 1:00 PM" },
            { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
            { day: "Friday", hours: "9:00 AM - 4:00 PM" },
            { day: "Saturday", hours: "10:00 AM - 1:00 PM" },
            { day: "Sunday", hours: "Closed" },
          ],
        };

        setDoctor(doctorData);
        await fetchAvailableSlots(selectedDate, doctorData);
      } catch (err) {
        setError("Failed to load doctor information");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorAndSlots();
  }, [id]);

  useEffect(() => {
    if (doctor) {
      fetchAvailableSlots(selectedDate, doctor);
    }
  }, [selectedDate, doctor]);

  const fetchAvailableSlots = async (date: Date, doc: Doctor) => {
    try {
      const formattedDate = formatDate(date);
      const dayOfWeek = date.getDay();
      const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const currentDayName = dayNames[dayOfWeek];

      const workingHoursForDay = doc.workingHours.find((wh) => wh.day === currentDayName);
      let slots: Slot[] = [];

      if (workingHoursForDay && workingHoursForDay.hours !== "Closed") {
        const [startTime, endTime] = workingHoursForDay.hours
          .split(" - ")
          .map((t) => convertTo24Hour(t));

        let currentHour = startTime;
        while (currentHour < endTime) {
          const startHour = currentHour;
          const endHour = currentHour + 1 > 24 ? 24 : currentHour + 1;
          const isBooked = Math.random() > 0.7;

          slots.push({
            id: `${formattedDate}-${startHour}`,
            startTime: formatHourTo12Hour(startHour),
            endTime: formatHourTo12Hour(endHour),
            isAvailable: !isBooked,
          });

          currentHour = endHour;
        }
      }

      setAvailableSlots(slots);
    } catch (err) {
      console.error("Error fetching available slots:", err);
      setAvailableSlots([]);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    setSelectedDate(newDate);
    setSelectedSlot(null);
  };

  const handleSlotSelection = (slot: Slot) => {
    if (slot.isAvailable) {
      setSelectedSlot(slot.id === selectedSlot ? null : slot.id);
    }
  };

  const handleBookAppointment = async () => {
    if (!selectedSlot || !doctor) {
      alert("Please select a time slot");
      return;
    }

    try {
      setBookingInProgress(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const slot = availableSlots.find((s) => s.id === selectedSlot);
      alert(`Appointment booked successfully with ${doctor.name} for ${formatDate(selectedDate)} at ${slot?.startTime}`);

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

  const convertTo24Hour = (timeStr: string): number => {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes = "0"] = time.split(":");
    let h = parseInt(hours);
    const m = parseInt(minutes);

    if (h === 12) {
      h = modifier === "PM" ? 12 : 0;
    } else if (modifier === "PM") {
      h += 12;
    }

    return h + m / 60;
  };

  const formatHourTo12Hour = (hour: number): string => {
    const floorHour = Math.floor(hour);
    const minutes = Math.round((hour - floorHour) * 60);
    let period = "AM";
    let displayHour = floorHour;

    if (floorHour >= 12) {
      period = "PM";
      if (floorHour > 12) displayHour = floorHour - 12;
    }

    if (displayHour === 0) displayHour = 12;

    return `${displayHour}:${minutes.toString().padStart(2, "0")} ${period}`;
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
              <p className="text-teal-100">{doctor.specialty}</p>
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
            <p className="text-sm text-gray-500 mt-2">Showing available slots for {formatDisplayDate(selectedDate)}</p>
          </div>

          {/* Time Slots */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Select Time Slot</label>

            {availableSlots.length === 0 ? (
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-gray-500">No appointments available on this day</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {availableSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => handleSlotSelection(slot)}
                    disabled={!slot.isAvailable}
                    className={`p-3 rounded-lg border transition ${
                      selectedSlot === slot.id
                        ? 'bg-teal-500 text-white border-teal-500'
                        : slot.isAvailable
                        ? 'bg-white hover:bg-teal-50 border-gray-200 hover:border-teal-500'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
                    }`}
                  >
                    <div className="font-medium">{slot.startTime}</div>
                    <div className="text-sm">to {slot.endTime}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Booking Button */}
          <button
            onClick={handleBookAppointment}
            disabled={!selectedSlot || bookingInProgress}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium ${
              selectedSlot && !bookingInProgress
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