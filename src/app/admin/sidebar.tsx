import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const logo = '/assets/Logo/medlink.png';

export default function sidebar() {
  const { logout } = useAuth();

  return (
    <>
      <div>
        <div className="flex justify-center items-center mb-5">
          <Link href="/">
            <img src={logo} alt="Logo" className="w-24 h-28 object-contain" />
          </Link>
        </div>
        <nav className="flex flex-col">
          <SidebarLink href="/admin/dashboard" icon="bi-house-door" text="Dashboard" />
          <SidebarLink href="/admin/users" icon="bi-clipboard-check-fill" text="Users" />
          <SidebarLink href="/admin/medical-checkup" icon="bi-gear-wide" text="Medical Checkup"/>
          <SidebarLink href="/admin/doctors" icon="bi-person-standing" text="Doctors"/>
          <SidebarLink href="/admin/appointments" icon="bi-clipboard-check-fill" text="Appointments" />
          <SidebarLink href="/admin/message" icon="bi-chat-left-dots" text="Message"/>
        </nav>
      </div>

      <div className="flex flex-col gap-2">
        <SidebarLink href="/account" icon="bi-person-fill" text="My Account" />
        <button
          onClick={logout}
          className="flex items-center gap-2 p-2 mb-2 rounded-lg text-gray-500 hover:bg-teal-500 hover:text-white transition w-full text-left"
        >
          <i className="bi bi-box-arrow-right"></i>
          <span>Sign Out</span>
        </button>
        <SidebarLink href="/help" icon="bi-question-circle-fill" text="Help" />
      </div>
    </>
  )
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
