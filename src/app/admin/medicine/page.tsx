"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Pencil, Trash2, Plus } from "lucide-react";

interface Medicine {
  id: number;
  namaObat: string;
  harga: number;
  createdAt: string;
}

export default function MedicinePage() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingMedicine, setEditingMedicine] = useState<Medicine | null>(null);
  const [formValue, setFormValue] = useState({ namaObat: "", harga: "" });

  useEffect(() => {
    fetchMedicines();
  }, []);

  async function fetchMedicines() {
    setLoading(true);
    try {
      const res = await fetch("/api/medicine");
      if (res.ok) setMedicines(await res.json());
    } catch {
      toast.error("Failed to fetch medicines");
    } finally {
      setLoading(false);
    }
  }

  const openCreateModal = () => {
    setEditingMedicine(null);
    setFormValue({ namaObat: "", harga: "" });
    setShowModal(true);
  };

  const openEditModal = (medicine: Medicine) => {
    setEditingMedicine(medicine);
    setFormValue({ namaObat: medicine.namaObat, harga: medicine.harga.toString() });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!formValue.namaObat.trim()) return toast.error("Medicine name is required");
    if (!formValue.harga || isNaN(Number(formValue.harga)) || Number(formValue.harga) < 0) {
      return toast.error("Valid price is required");
    }

    try {
      if (editingMedicine) {
        const res = await fetch(`/api/medicine/${editingMedicine.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            namaObat: formValue.namaObat,
            harga: Number(formValue.harga),
          }),
        });
        if (!res.ok) throw new Error("Failed to update");
        toast.success("Medicine updated!");
      } else {
        const res = await fetch("/api/medicine", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            namaObat: formValue.namaObat,
            harga: Number(formValue.harga),
          }),
        });
        if (!res.ok) throw new Error("Failed to create");
        toast.success("Medicine created!");
      }

      setShowModal(false);
      await fetchMedicines();
    } catch {
      toast.error("Failed to save medicine");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this medicine?")) return;

    try {
      const res = await fetch(`/api/medicine/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      toast.success("Medicine deleted!");
      await fetchMedicines();
    } catch {
      toast.error("Failed to delete medicine");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Medicine Master Data</h1>
        <button
          onClick={openCreateModal}
          className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition flex items-center gap-2"
        >
          <Plus size={18} />
          <span>Add Medicine</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-teal-500"></div>
          </div>
        ) : medicines.length > 0 ? (
          <table className="w-full">
            <thead className="bg-teal-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Medicine Name</th>
                <th className="text-left p-4 font-semibold text-gray-700">Price</th>
                <th className="text-left p-4 font-semibold text-gray-700">Created At</th>
                <th className="text-right p-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine) => (
                <tr key={medicine.id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-medium">{medicine.namaObat}</td>
                  <td className="p-4">Rp {medicine.harga.toLocaleString()}</td>
                  <td className="p-4 text-gray-500">
                    {new Date(medicine.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => openEditModal(medicine)}
                        className="p-2 text-teal-600 hover:bg-teal-50 rounded-full transition"
                        title="Edit"
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(medicine.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-full transition"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-8 text-center text-gray-500">
            <p>No medicines yet. Click "Add Medicine" to create one.</p>
          </div>
        )}
      </div>

      {/* Create/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">
                {editingMedicine ? "Edit Medicine" : "Add Medicine"}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 grid gap-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Medicine Name</label>
                <input
                  type="text"
                  value={formValue.namaObat}
                  onChange={(e) =>
                    setFormValue((prev) => ({ ...prev, namaObat: e.target.value }))
                  }
                  className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-teal-500 transition"
                  placeholder="e.g. Paracetamol"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Price (Rp)</label>
                <input
                  type="number"
                  min="0"
                  value={formValue.harga}
                  onChange={(e) =>
                    setFormValue((prev) => ({ ...prev, harga: e.target.value }))
                  }
                  className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-teal-500 transition"
                  placeholder="e.g. 15000"
                />
              </div>
            </div>

            <div className="flex justify-end items-center p-4 border-t">
              <button
                onClick={handleSave}
                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
              >
                {editingMedicine ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
