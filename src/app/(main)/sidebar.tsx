import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const logo = '/logo-new.png';

export default function Sidebar({setRightbarOpen, setSidebarOpen}: any) {
  const { logout } = useAuth();

  const isMobile = () => {
    return window.innerWidth < 1060
  }

  const handleNavigate = () => {
    if (isMobile()) {
      setRightbarOpen(false);
      setSidebarOpen(false);
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-center items-center mb-5">
          <Link href="/">
            <img src={logo} alt="Logo" className="w-24 h-28 object-contain" />
          </Link>
        </div>
        <nav className="flex flex-col">
          <SidebarLink href="/dashboard" icon="bi-house-door" text="Dashboard" handleNavigate={handleNavigate}/>
          <SidebarLink href="/appointment" icon="bi-clipboard-check-fill" text="Janji Temu" handleNavigate={handleNavigate}/>
          <SidebarLink href="/doctors" icon="bi-person-standing" text="Dokter" handleNavigate={handleNavigate}/>
          <SidebarLink href="/healthcare" icon="bi-bandaid" text="Layanan Kesehatan" handleNavigate={handleNavigate}/>
          <SidebarLink href="/laboratory" icon="bi-wallet" text="Laboratorium" handleNavigate={handleNavigate}/>
          <SidebarLink href="/pharmacy" icon="bi-capsule" text="Farmasi" handleNavigate={handleNavigate}/>
          <SidebarLink href="/healthcare-monitoring" icon="bi-gear-wide" text="Monitoring Kesehatan" handleNavigate={handleNavigate}/>
          <SidebarLink href="/message" icon="bi-chat-left-dots" text="Pesan" handleNavigate={handleNavigate}/>
        </nav>
      </div>

      <div className="flex flex-col">
        <SidebarLink href="/account" icon="bi-person-fill" text="Akun Saya" handleNavigate={handleNavigate} />
        {/* <SidebarLink href="/help" icon="bi-question-circle-fill" text="Help" handleNavigate={handleNavigate} /> */}
        <button
          onClick={logout}
          className="flex items-center gap-2 p-2 mb-2 rounded-lg text-gray-500 hover:bg-teal-500 hover:text-white transition w-full text-left"
        >
          <i className="bi bi-box-arrow-right"></i>
          <span>Keluar</span>
        </button>
      </div>
    </>
  )
}

function SidebarLink({ href, icon, text, handleNavigate }: { href: string; icon: string; text: string, handleNavigate: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={handleNavigate}
      className={`flex items-center gap-2 p-2 mb-2 rounded-lg transition ${
        isActive ? "bg-teal-500 text-white" : "text-gray-500 hover:bg-teal-500 hover:text-white"
      }`}
    >
      <i className={`bi ${icon}`}></i>
      <span>{text}</span>
    </Link>
  );
}