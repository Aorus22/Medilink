export default function PharmacyPage() {
  const medications = [
    {
      id: 1,
      name: "Paracetamol",
      dosage: "500mg",
      frequency: "3-4 times daily",
      icon: "bi-capsule"
    },
    {
      id: 2,
      name: "Amoxicillin",
      dosage: "250mg",
      frequency: "3 times daily",
      icon: "bi-capsule-pill"
    },
    {
      id: 3,
      name: "Omeprazole",
      dosage: "20mg",
      frequency: "Once daily",
      icon: "bi-pill"
    },
    {
      id: 4,
      name: "Simvastatin",
      dosage: "10mg",
      frequency: "Once daily at night",
      icon: "bi-capsule"
    },
    {
      id: 5,
      name: "Aspirin",
      dosage: "75mg",
      frequency: "Once daily",
      icon: "bi-pill-fill"
    },
    {
      id: 6,
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      icon: "bi-capsule-pill"
    }
  ];

  return (
    <div className="p-6">
      <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-6 rounded-2xl mb-6">
        <h1 className="text-2xl font-bold mb-2">Pharmacy</h1>
        <p className="text-lg">View medication information and dosage instructions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medications.map((medication) => (
          <div
            key={medication.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-4">
                <i className={`bi ${medication.icon} text-2xl`}></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{medication.name}</h3>
                <p className="text-gray-600">{medication.dosage}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="font-medium">Dosage Instructions:</p>
              <p className="text-gray-700">{medication.frequency}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}