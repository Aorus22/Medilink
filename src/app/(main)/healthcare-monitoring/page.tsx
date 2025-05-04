"use client";

import { useAuth } from "@/context/AuthContext";
import { HistoricalData } from "#/prisma/db";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import MedicalCheckupChart from "@/components/MedicalCheckUpChart";

export default function HealthcareMonitoringPage() {
  const [historicalData, setHistoricalData] = useState<HistoricalData[]>([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [loadingSend, setLoadingSend] = useState(false);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        const res = await fetch("/api/medical-checkup");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setHistoricalData(data);
      } catch (error) {
        console.error("Gagal mengambil data medical checkup:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistoricalData();
  }, [loading]);

  const formatDate = (date: string | Date) => {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      throw new Error("Invalid date format");
    }
    return parsedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // const vitalSigns = [
  //   { name: "Temperature", value: "37.5", unit: "°C" },
  //   { name: "Blood Pressure", value: "120/80", unit: "mmHg" },
  //   { name: "Heart Rate", value: "78", unit: "BPM" },
  //   { name: "SPO2", value: "98", unit: "%" },
  // ];

  const [vitalSigns, setVitalSigns] = useState([
    { name: "Temperature", value: "37.5", unit: "°C" },
    { name: "Blood Pressure", value: "120/80", unit: "mmHg" },
    { name: "Heart Rate", value: "78", unit: "BPM" },
    { name: "SPO2", value: "98", unit: "%" },
  ]);

  useEffect(() => {
    const connectWebSocket = async () => {
      try {
        const res = await fetch("/api/ws");
        if (!res.ok) throw new Error("Failed to fetch WebSocket URL");
        const { url } = await res.json();

        const ws = new WebSocket(url);

        ws.onopen = () => {
          console.log("WebSocket connected");
        };

        ws.onmessage = (event) => {
          try {
            const msg = JSON.parse(event.data);
            if (msg.type === "sensor_data" && msg.data) {
              const { temperature, spo2, heartrate, blood_pressure } = msg.data;

              const newSigns = [
                { name: "Temperature", value: temperature || "--", unit: "°C" },
                { name: "Blood Pressure", value: blood_pressure || "--", unit: "mmHg" },
                { name: "Heart Rate", value: heartrate || "--", unit: "BPM" },
                { name: "SPO2", value: spo2 || "--", unit: "%" },
              ];

              setVitalSigns(newSigns);
            }
          } catch (err) {
            console.error("WebSocket parsing error", err);
          }
        };

        return () => ws.close();
      } catch (error) {
        console.error("Failed to connect to WebSocket:", error);
      }
    };

    connectWebSocket();
  }, []);


  const handleSend = async () => {
    try {
      setLoadingSend(true);
      const payload = vitalSigns.map((sign) => ({
        parameter: sign.name,
        value: sign.value,
        unit: sign.unit,
        information: "Normal",
        date: new Date().toISOString(),
      }));

      const response = await fetch("/api/medical-checkup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send data");
      }

      toast.success("Vital signs submitted successfully!");
    } catch (error) {
      toast.error("Error sending data");
    } finally {
      setLoading(true);
      setLoadingSend(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );

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
                <p className="pl-5 text-xl font-semibold text-teal-800">
                  Patient Information
                </p>
              </div>
              <div className="flex flex-col gap-4 p-5">
                <p>
                  <span className="font-medium">Name:</span> {user?.name}
                </p>
                <p>
                  <span className="font-medium">Birth Date:</span>{" "}
                  {user?.birthdate ? formatDate(user.birthdate) : "N/A"}
                </p>
                <p>
                  <span className="font-medium">Location:</span> {user?.address}
                </p>
                <p>
                  <span className="font-medium">Profession:</span>{" "}
                  {user?.profession}
                </p>
                <p>
                  <span className="font-medium">Religion:</span> {user?.religion}
                </p>
              </div>
            </div>

            {/* Current Vital Signs */}
            <div className="flex flex-col w-full border rounded-xl shadow-sm">
              <div className="h-[50px] flex items-center bg-teal-50 rounded-t-xl">
                <p className="pl-5 text-xl font-semibold text-teal-800">
                  Current Vital Signs
                </p>
              </div>
              <div className="flex flex-wrap w-full p-5">
                {vitalSigns.map((sign, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center justify-center gap-2 py-6 min-w-[150px]"
                  >
                    <p className="text-lg font-medium text-teal-800">
                      {sign.name}
                    </p>
                    <p className="text-4xl font-bold text-teal-800">
                      {sign.value}
                    </p>
                    <p className="text-sm">{sign.unit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSend}
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
            >
              {loadingSend ? (
                <>
                  <span className="inline-block animate-spin mr-2">⟳</span>
                  Sending...
                </>
              ) : (
                <>Send</>
              )}
            </button>
          </div>

          {/* Historical Data */}
          <div className="flex flex-col w-full border rounded-xl shadow-sm">
            <div className="h-[50px] flex items-center bg-teal-50 rounded-t-xl">
              <p className="pl-5 text-xl font-semibold text-teal-800">
                Historical Data
              </p>
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
                  {historicalData?.map((data: HistoricalData, index: any) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-4 border-b">{data.parameter}</td>
                      <td className="p-4 border-b">
                        {data.value} {data.unit}
                      </td>
                      <td className="p-4 border-b">{data.information}</td>
                      <td className="p-4 border-b">{formatDate(data.date)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Chart Section */}
          {historicalData.length > 0 && (
            <MedicalCheckupChart data={historicalData as any} />
          )}
        </div>
      </div>
    </div>
  );
}