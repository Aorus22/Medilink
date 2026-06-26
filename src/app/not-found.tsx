import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-teal-600 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Halaman tidak ditemukan</p>
        <Link
          href="/dashboard"
          className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition"
        >
          Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
}
