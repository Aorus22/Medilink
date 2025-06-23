"use client"

import { RoomCard } from "@/components/RoomCard"

export default function IPMonitoringPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">IP Monitoring</h1>
            <div className="grid grid-cols-2 gap-6">
                <RoomCard patientName="John Doe" roomNumber="01" infuse_number={19} />
                <RoomCard patientName="Jane Smith" roomNumber="02" infuse_number={49} />
                <RoomCard patientName="Alice Johnson" roomNumber="03" infuse_number={100} />
                <RoomCard roomNumber="04" infuse_number={0} />
            </div>
        </div>
    )
}