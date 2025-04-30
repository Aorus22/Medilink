"use client"

import Link from "next/link";
import { useParams } from "next/navigation";

const doctorPlaceholder = "/assets/dashboard/doctor.svg";

export default function DoctorProfile() {
  const { id } = useParams();

  const doctor = {
    id: id,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "10 years",
    education: "MD, Harvard Medical School",
    about: "Specialist in cardiovascular diseases with extensive experience...",
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/doctors" className="text-teal-600 hover:underline">
          ← Back to Doctors
        </Link>

        <div className="bg-white rounded-xl shadow-lg mt-4 p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={doctorPlaceholder}
              alt={doctor.name}
              className="w-48 h-48 rounded-full object-cover"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{doctor.name}</h1>
              <p className="text-teal-600 text-xl">{doctor.specialty}</p>

              <div className="mt-4 space-y-2">
                <p>📚 Education: {doctor.education}</p>
                <p>🏥 Experience: {doctor.experience}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="text-gray-600">{doctor.about}</p>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700">
              Book Appointment
            </button>
            <button className="border border-teal-600 text-teal-600 px-6 py-2 rounded-full hover:bg-teal-50">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}