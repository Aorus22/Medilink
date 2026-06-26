"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
        <p className="text-xl text-gray-600 mb-6">Terjadi kesalahan server</p>
        <button
          onClick={() => reset()}
          className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  );
}
