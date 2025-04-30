import Link from "next/link";

export default function HealthcareMonitoringPage() {
  const patientInfo = {
    name: "Muhammad Alexander",
    birthDate: "03 03 2003",
    location: "Surakarta",
    profession: "Engineer",
    religion: "Islam"
  };

  const vitalSigns = [
    { name: "Temperature", value: "37.5", unit: "°C" },
    { name: "Blood Pressure", value: "120/80", unit: "mmHg" },
    { name: "Heart Rate", value: "78", unit: "BPM" },
    { name: "SPO2", value: "98", unit: "%" }
  ];

  const historicalData = [
    { measurement: "Temperature", value: "37.5 °C", status: "Normal", time: "2025-04-26 09:30" },
    { measurement: "Blood Pressure", value: "120/80 mmHg", status: "Normal", time: "2025-04-26 09:30" },
    { measurement: "Heart Rate", value: "78 BPM", status: "Normal", time: "2025-04-26 09:30" },
    { measurement: "SPO2", value: "98 %", status: "Normal", time: "2025-04-26 09:30" },
    { measurement: "Temperature", value: "38.2 °C", status: "Elevated", time: "2025-04-25 14:15" }
  ];

  return (
    <div className="p-6">
      <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-6 rounded-2xl mb-6">
        <h1 className="text-2xl font-bold mb-2">Healthcare Services</h1>
        <p className="text-lg">Your complete health solution partner</p>
      </div>

      {/* Diagnoses Section */}
      <div className="mb-6">

        <div className="flex flex-col gap-6 pb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Patient Information */}
            <div className="flex flex-col w-full border rounded-xl shadow-sm">
              <div className="h-[50px] flex items-center bg-teal-50 rounded-t-xl">
                <p className="pl-5 text-xl font-semibold text-teal-800">Patient Information</p>
              </div>
              <div className="flex flex-col gap-4 p-5">
                <p><span className="font-medium">Name:</span> {patientInfo.name}</p>
                <p><span className="font-medium">Birth Date:</span> {patientInfo.birthDate}</p>
                <p><span className="font-medium">Location:</span> {patientInfo.location}</p>
                <p><span className="font-medium">Profession:</span> {patientInfo.profession}</p>
                <p><span className="font-medium">Religion:</span> {patientInfo.religion}</p>
              </div>
            </div>

            {/* Current Vital Signs */}
            <div className="flex flex-col w-full border rounded-xl shadow-sm">
              <div className="h-[50px] flex items-center bg-teal-50 rounded-t-xl">
                <p className="pl-5 text-xl font-semibold text-teal-800">Current Vital Signs</p>
              </div>
              <div className="flex flex-wrap w-full p-5">
                {vitalSigns.map((sign, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center justify-center gap-2 py-6 min-w-[150px]">
                    <p className="text-lg font-medium text-teal-800">{sign.name}</p>
                    <p className="text-4xl font-bold text-teal-800">{sign.value}</p>
                    <p className="text-sm">{sign.unit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Historical Data */}
          <div className="flex flex-col w-full border rounded-xl shadow-sm">
            <div className="h-[50px] flex items-center bg-teal-50 rounded-t-xl">
              <p className="pl-5 text-xl font-semibold text-teal-800">Historical Data</p>
            </div>
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-teal-50">
                    <th className="text-left p-4 border-b">Measurement</th>
                    <th className="text-left p-4 border-b">Value</th>
                    <th className="text-left p-4 border-b">Status</th>
                    <th className="text-left p-4 border-b">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {historicalData.map((data, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-4 border-b">{data.measurement}</td>
                      <td className="p-4 border-b">{data.value}</td>
                      <td className="p-4 border-b">{data.status}</td>
                      <td className="p-4 border-b">{data.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <Link href="/healthcare" className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">
              Kirim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}