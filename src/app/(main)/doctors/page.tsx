import Link from "next/link";

const DoctorsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Doctors Directory</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Example doctor cards */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Dr. Sarah Johnson</h3>
          <p className="text-gray-600 mb-2">Cardiologist</p>
          <Link
            href="/doctors/1"
            className="text-teal-500 hover:underline"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;