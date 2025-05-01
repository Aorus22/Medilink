"use client"

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { RightbarContext } from '@/context/RightbarContext';
import { usePathname } from 'next/navigation';

const logo = '/assets/Logo/medlink.png';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [rightbarOpen, setRightbarOpen] = useState(true);

  return (
    <RightbarContext.Provider value={{ setRightbarOpen }}>
      <div className="flex h-screen text-black">
        {/* Sidebar */}
        <aside className="w-[250px] bg-white p-5 flex flex-col justify-between border-r border-gray-300">
          <div>
            <div className="flex justify-center items-center mb-5">
              <Link href="/">
                <img src={logo} alt="Logo" className="w-24 h-28 object-contain" />
              </Link>
            </div>
            <nav className="flex flex-col">
              <SidebarLink href="/dashboard" icon="bi-house-door" text="Dashboard" />
              <SidebarLink href="/appointment" icon="bi-clipboard-check-fill" text="Appointment" />
              <SidebarLink href="/doctors" icon="bi-person-standing" text="Doctors" />
              <SidebarLink href="/healthcare" icon="bi-chat-right-text" text="Healthcare" />
              <SidebarLink href="/laboratory" icon="bi-wallet" text="Laboratory" />
              <SidebarLink href="/pharmacy" icon="bi-capsule" text="Pharmacy" />
              <SidebarLink href="/healthcare-monitoring" icon="bi-gear-wide" text="Healthcare Monitoring" />
              <SidebarLink href="/message" icon="bi-gear-wide" text="Message" />
            </nav>
          </div>

          <div className="flex flex-col gap-2">
            <SidebarLink href="/account" icon="bi-person-fill" text="My Account" />
            <SidebarLink href="/logout" icon="bi-box-arrow-right" text="Sign Out" />
            <SidebarLink href="/help" icon="bi-question-circle-fill" text="Help" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto text-black">{children}</main>

        {/* Rightbar */}
        {rightbarOpen &&
          <aside className="w-[300px] p-5 bg-white border-l border-gray-300">
            <Rightbar />
          </aside>
        }
      </div>
    </RightbarContext.Provider>
  );
}

function SidebarLink({ href, icon, text }: { href: string; icon: string; text: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 p-2 mb-2 rounded-lg transition ${
        isActive ? "bg-teal-500 text-white" : "text-gray-500 hover:bg-teal-500 hover:text-white"
      }`}
    >
      <i className={`bi ${icon}`}></i>
      <span>{text}</span>
    </Link>
  );
}

function Rightbar() {
  return (
    <div>
      <div className="mb-5">
        <h4 className="font-semibold text-lg mb-4">Patient Schedule</h4>
        <div className="flex gap-2">
          <div className="flex-1 bg-teal-500 text-white rounded-lg p-3 text-center">
            <div>2024 December</div>
            <div className="text-2xl font-bold">20</div>
            <div>Surgery</div>
          </div>
          <div className="flex-1 bg-gray-100 text-gray-700 rounded-lg p-3 text-center">
            <div>2024 December</div>
            <div className="text-2xl font-bold">22</div>
            <div>Therapy</div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h4 className="font-semibold text-lg mb-4">Appointment</h4>
        <div className="space-y-2">
          <div className="bg-teal-100 text-gray-800 p-3 rounded-lg">
            <strong>Lifestyle Counseling</strong><br />
            Dr. Claudia Alves
          </div>
          <div className="bg-teal-100 text-gray-800 p-3 rounded-lg">
            <strong>Rehabilitation</strong><br />
            Dr. Claudia Alves
          </div>
          <div className="bg-teal-100 text-gray-800 p-3 rounded-lg">
            <strong>Preventive Care</strong><br />
            Dr. Claudia Alves
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-4">Message</h4>
        <div className="p-3 bg-gradient-to-b from-teal-300 to-teal-700 text-white rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <img src="/assets/dashboard/doctor.svg" alt="Dr. Alfredo Torres" className="w-8 h-8 rounded-full" />
            <div>
              <strong>Dr. Alfredo Torres</strong><br />
              <small className="text-white text-opacity-80">1 Minute Ago</small>
            </div>
          </div>
          <p>You automatically lose the chances you don’t take.</p>
        </div>
      </div>
    </div>
  );
}
