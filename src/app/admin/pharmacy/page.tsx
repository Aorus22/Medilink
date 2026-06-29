"use client";

import { User } from "#/prisma/db";
import { MedicationInfo } from "@/app/api/pharmacy/route";
import Table from "@/components/Table";
import { Search, Trash2, Bell, Pencil } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Suspense, useEffect, useState } from "react";
import { toast } from "react-toastify";
import SearchableSelect from "@/components/SearchableSelect";
import ConfirmModal from "@/components/ConfirmModal";

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

export default function MedicalCheckupPage() {
  return (
    <Suspense fallback={<div>Loading messages...</div>}>
      <Pharmacy />
    </Suspense>
  );
}

const columns = [
  {
    header: "Medicine Name",
    accessor: (item: MedicationInfo) => item.namaObat,
    sortable: true,
  },
  {
    header: "Usage Description",
    accessor: (item: MedicationInfo) => item.keteranganPenggunaan,
    sortable: true,
  },
  {
    header: "Dosage",
    accessor: (item: MedicationInfo) => item.dosis,
    sortable: true,
  },
  {
    header: "Usage Per Day",
    accessor: (item: MedicationInfo) => item.usagePerDay,
    sortable: true,
  },
  {
    header: "Usage Day",
    accessor: (item: MedicationInfo) => item.usageDay,
    sortable: true,
  },
  {
    header: "Start Use Time",
    accessor: (item: MedicationInfo) =>
      new Date(item.tanggalMulaiObat).toLocaleString(),
    accessorKey: "tanggalMulaiObat",
    sortable: true,
  },
  {
    header: "End Use Time",
    accessor: (item: MedicationInfo) =>
      new Date(item.tanggalSelesaiObat).toLocaleString(),
    accessorKey: "tanggalSelesaiObat",
    sortable: true,
  },
  {
    header: "Usage Time(s)",
    accessor: (item: MedicationInfo) =>
      Array.isArray(item.jamPenggunaan) ? item.jamPenggunaan.join(", ") : "-",
    sortable: false,
  },
];

function Pharmacy() {
  const { user } = useAuth();
  const isDoctor = (user as any)?.role === 'DOCTOR';

  const [loading, setLoading] = useState(false);

  // Modal user selection
  const [showUserList, setShowUserList] = useState(false);
  const [userSearchTerm, setUserSearchTerm] = useState("");
  const [userLoading, setUserLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  // Modal medication creation
  const [showCreateMedication, setShowCreateMedication] = useState(false);
  const [editingMedicationId, setEditingMedicationId] = useState<number | null>(null);
  const [formValue, setFormValue] = useState({
    namaObat: "",
    medicineId: "",
    keteranganPenggunaan: "",
    dosis: "",
    usagePerDay: 1,
    usageDay: 1,
    jamPenggunaan: [""] as string[],
    tanggalMulaiObat: "",
    tanggalSelesaiObat: "",
  });

  // Master data medicines
  const [medicines, setMedicines] = useState<{ id: number; namaObat: string; harga: number }[]>([]);

  const [medications, setMedications] = useState([]);

  // Confirm modal state
  const [confirmModal, setConfirmModal] = useState<{
    open: boolean;
    title: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
  }>({ open: false, title: "", onConfirm: () => {} });

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const userId = searchParams?.get("userId");
    if (userId && !isNaN(parseInt(userId))) {
      setSelectedUserId(parseInt(userId));
    } else {
      setSelectedUserId(null);
      setSelectedUser(null);
    }
  }, [searchParams]);

  // Fetch master medicines on mount
  const fetchMedicines = async () => {
    try {
      const res = await fetch("/api/medicine");
      if (res.ok) {
        setMedicines(await res.json());
      }
    } catch {
      console.error("Failed to fetch medicines");
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  // Fetch users when showing user list
  useEffect(() => {
    if (showUserList) {
      const fetchUsers = async () => {
        setUserLoading(true);
        try {
          const response = await fetch("/api/users");
          if (!response.ok) throw new Error("Failed to fetch users");
          const data = await response.json();
          setUsers(data);
        } catch (err: any) {
          console.error("Error fetching users:", err);
        } finally {
          setUserLoading(false);
        }
      };
      fetchUsers();
    }
  }, [showUserList]);

  useEffect(() => {
    async function fetchSelectedUser() {
      if (!selectedUserId) {
        setSelectedUser(null);
        return;
      }
      try {
        const response = await fetch("/api/users");
        if (!response.ok) throw new Error("Failed to fetch user list");
        const data: User[] = await response.json();
        const foundUser = data.find((user) => user.id === selectedUserId);
        setSelectedUser(foundUser ?? null);
      } catch (err: any) {
        console.error("Error fetching user:", err);
        setSelectedUser(null);
      }
    }
    fetchSelectedUser();
  }, [selectedUserId]);

  useEffect(() => {
    fetchMedications();
  }, [selectedUserId]);

  async function fetchMedications() {
    if (!selectedUserId) {
      setMedications([]);
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(`/api/pharmacy?userId=${selectedUserId}`);
      if (!res.ok) throw new Error("Failed to fetch medications data");
      setMedications(await res.json());
    } catch (e: any) {
      console.error("Error fetching medications data:", e);
    } finally {
      setLoading(false);
    }
  }

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(userSearchTerm.toLowerCase())
  );

  const handleUserSelect = (user: User) => {
    router.push(`${pathname}?userId=${user.id}`);
    setSelectedUserId(user.id);
    setShowUserList(false);
  };

  const handleMedicineSelect = (medicineId: string) => {
    const medicine = medicines.find((m) => String(m.id) === medicineId);
    if (!medicine) return;
    setFormValue((prev) => ({
      ...prev,
      namaObat: medicine.namaObat,
      medicineId,
    }));
  };

  const handleChange = (e: any) => {
    const { name, value, type } = e.target;
    const parsedValue = type === "number" ? Number(value) : value;
    setFormValue((prev) => {
      const next = { ...prev, [name]: parsedValue };
      if (name === "usagePerDay") {
        const count = Math.max(0, Number(parsedValue) || 0);
        next.jamPenggunaan = Array.from({ length: count }, (_, i) => prev.jamPenggunaan[i] || "");
      }
      return next;
    });
  };

  const onAddMedication = async () => {
    const {
      namaObat,
      keteranganPenggunaan,
      dosis,
      usagePerDay,
      usageDay,
      tanggalMulaiObat,
      tanggalSelesaiObat,
    } = formValue;

    if (!namaObat.trim()) return toast.error("Medicine name cannot be empty.");
    if (!keteranganPenggunaan.trim())
      return toast.error("Usage description cannot be empty.");
    if (!dosis.trim()) return toast.error("Dosage cannot be empty.");
    if (!Number.isInteger(usagePerDay) || usagePerDay <= 0)
      return toast.error("Usage per day must be a number greater than 0.");
    if (!Number.isInteger(usageDay) || usageDay <= 0)
      return toast.error("Usage day must be a number greater than 0.");
    if (!tanggalMulaiObat || isNaN(Date.parse(tanggalMulaiObat)))
      return toast.error("Start use time must be a valid date.");
    if (!tanggalSelesaiObat || isNaN(Date.parse(tanggalSelesaiObat)))
      return toast.error("End use time must be a valid date.");

    const startDate = new Date(tanggalMulaiObat);
    const endDate = new Date(tanggalSelesaiObat);
    if (startDate >= endDate)
      return toast.error("Start use time must be before end use time.");

    const isEditing = editingMedicationId !== null;
    const url = isEditing ? `/api/pharmacy/${editingMedicationId}` : `/api/pharmacy`;
    const method = isEditing ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formValue,
          userId: selectedUserId,
          tanggalMulaiObat: new Date(formValue.tanggalMulaiObat).toISOString(),
          tanggalSelesaiObat: new Date(
            formValue.tanggalSelesaiObat
          ).toISOString(),
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to save medication info!");
      }

      toast.success(isEditing ? "Medication info updated!" : "Medication info added!");
      setShowCreateMedication(false);
      setEditingMedicationId(null);
      await fetchMedications();
    } catch (e: any) {
      toast.error(e.message || "Failed to save medication info!");
    }
  };

  const onDeleteMedication = (id: number) => {
    setConfirmModal({
      open: true,
      title: "Hapus data obat?",
      description: "Data yang sudah dihapus tidak bisa dikembalikan.",
      onConfirm: async () => {
        setConfirmModal((p) => ({ ...p, open: false }));
        try {
          const res = await fetch(`/api/pharmacy/${id}`, {
            method: 'DELETE',
          });
          if (!res.ok) throw new Error("Failed to delete medication info!");
          toast.success("Medication info deleted!");
          await fetchMedications();
        } catch (e) {
          toast.error("Failed to delete medication info!");
        }
      },
    });
  };

  const handleEdit = (data: MedicationInfo) => {
    setFormValue({
      namaObat: data.namaObat,
      medicineId: String(data.medicineId || ""),
      keteranganPenggunaan: data.keteranganPenggunaan,
      dosis: data.dosis,
      usagePerDay: data.usagePerDay,
      usageDay: data.usageDay,
      jamPenggunaan: Array.isArray(data.jamPenggunaan)
        ? data.jamPenggunaan as string[]
        : typeof data.jamPenggunaan === "string"
          ? JSON.parse(data.jamPenggunaan)
          : [""],
      tanggalMulaiObat: data.tanggalMulaiObat
        ? new Date(data.tanggalMulaiObat).toISOString().slice(0, 16)
        : "",
      tanggalSelesaiObat: data.tanggalSelesaiObat
        ? new Date(data.tanggalSelesaiObat).toISOString().slice(0, 16)
        : "",
    });
    setEditingMedicationId(data.id);
    setShowCreateMedication(true);
    fetchMedicines();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          {isDoctor ? "Doctor Pharmacy" : "Medical Checkup"}
        </h1>
      </div>

      <div className="flex justify-between">
        {/* User Profile */}
        <div
          className="mb-5 cursor-pointer"
          onClick={() => setShowUserList(true)}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              {selectedUser?.avatar ? (
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-12 h-12 rounded-full"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-lg">
                  {selectedUser ? getInitials(selectedUser.name) : "?"}
                </div>
              )}
            </div>
            <div>
              <h3 className="font-medium text-gray-800">
                {selectedUser ? selectedUser.name : "Select a user"}
              </h3>
              <p className="text-sm text-teal-600">
                {selectedUser
                  ? `@${selectedUser.username}`
                  : "Click to choose user"}
              </p>
            </div>
          </div>
        </div>

        {/* Add Medication */}
        {selectedUser && (
          <div className="flex gap-2">
            <button
              onClick={() => {
                setConfirmModal({
                  open: true,
                  title: "Kirim pengingat sekarang?",
                  description: "Mengingatkan semua obat aktif untuk pasien ini. Pesan akan dikirim ke nomor uji coba +6289636843541.",
                  confirmText: "Ya, Kirim",
                  onConfirm: async () => {
                    setConfirmModal((p) => ({ ...p, open: false }));
                    try {
                      const res = await fetch(`/api/pharmacy/remind`, {
                        method: 'POST',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ userId: selectedUserId }),
                      });
                      const data = await res.json();
                      if (!res.ok) throw new Error(data.error || "Failed to send");
                      toast.success(data.message);
                    } catch (e: any) {
                      toast.error(e.message || "Failed to send reminder!");
                    }
                  },
                });
              }}
              className="bg-teal-100 text-teal-700 px-4 py-2 rounded-lg hover:bg-teal-200 transition flex items-center gap-2"
            >
              <Bell size={18} />
              <span>Remind All</span>
            </button>
            <button
              onClick={() => {
                setEditingMedicationId(null);
                setFormValue({
                  namaObat: "",
                  medicineId: "",
                  keteranganPenggunaan: "",
                  dosis: "",
                  usagePerDay: 1,
                  usageDay: 1,
                  jamPenggunaan: [""] as string[],
                  tanggalMulaiObat: "",
                  tanggalSelesaiObat: "",
                });
                setShowCreateMedication(true);
                fetchMedicines();
              }}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition flex items-center gap-2"
            >
              <i className="bi bi-plus-lg"></i>
              <span>Add Medication</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-lg shadow">
        <Table
          columns={columns as any}
          data={medications}
          keyExtractor={(item) => item.id}
          isLoading={loading}
          emptyStateProps={{
            title: "No medication data",
            description: selectedUserId
              ? "There is no medication data for this user"
              : "Please select a user to view their medication data",
          }}
          searchPlaceholder="Search parameters..."
          initialItemsPerPage={10}
          itemsPerPageOptions={[5, 10, 20, 50]}
          headerClassName="bg-teal-50"
          rowClassName={() => "hover:bg-teal-50"}
          actions={(data: MedicationInfo) => (
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(data)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition"
                title="Edit medication"
              >
                <Pencil size={18} />
              </button>
              <button
                onClick={() => onDeleteMedication(data.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-full transition"
                title="Delete medication"
              >
                <Trash2 size={18} />
              </button>
            </div>
          )}
        />
      </div>

      {/* Modal for selecting user */}
      {showUserList && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Select User</h3>
              <button
                onClick={() => setShowUserList(false)}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto">
              <div className="sticky top-0 z-10 bg-white p-4 border-b">
                <div className="relative">
                  <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-teal-500 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search users or usernames..."
                    value={userSearchTerm}
                    onChange={(e) => setUserSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-teal-500 transition"
                  />
                </div>
              </div>
              {userLoading ? (
                <div className="flex justify-center items-center h-32">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-teal-500"></div>
                </div>
              ) : users.length > 0 ? (
                filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    onClick={() => handleUserSelect(user)}
                    className="p-4 border-b border-gray-100 hover:bg-gray-50 transition cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        {user.avatar ? (
                          <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">
                            {getInitials(user.name)}
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{user.name}</h4>
                        <p className="text-sm text-teal-600">@{user.username}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-gray-500">
                  <p>No users available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showCreateMedication && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">{editingMedicationId ? "Edit Medication" : "Add Medication"}</h3>
              <button
                onClick={() => {
                  setShowCreateMedication(false);
                  setEditingMedicationId(null);
                }}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto">
                <div className="p-4 border-b grid gap-3">
                  {/* Medicine Name — searchable select from master data */}
                  <SearchableSelect
                    label="Medicine Name"
                    placeholder="Pilih obat..."
                    searchPlaceholder="Cari obat..."
                    emptyMessage="Obat tidak ditemukan"
                    options={medicines.map((m) => ({
                      value: String(m.id),
                      label: m.namaObat,
                      subtitle: `Rp${m.harga.toLocaleString()}`,
                    }))}
                    value={formValue.medicineId}
                    onChange={handleMedicineSelect}
                  />

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Usage Description</label>
                  <input
                    type="text"
                    name="keteranganPenggunaan"
                    value={formValue.keteranganPenggunaan}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-teal-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Dosage</label>
                  <input
                    type="text"
                    name="dosis"
                    value={formValue.dosis}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-teal-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Usage Per Day</label>
                  <input
                    type="number"
                    name="usagePerDay"
                    value={formValue.usagePerDay}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-teal-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Usage Day</label>
                  <input
                    type="number"
                    name="usageDay"
                    value={formValue.usageDay}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-teal-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Start Use Time</label>
                  <input
                    type="datetime-local"
                    name="tanggalMulaiObat"
                    value={formValue.tanggalMulaiObat}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-teal-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">End Use Time</label>
                  <input
                    type="datetime-local"
                    name="tanggalSelesaiObat"
                    value={formValue.tanggalSelesaiObat}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-teal-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Usage Times {formValue.usagePerDay > 0 && `(${formValue.usagePerDay}x per day)`}
                  </label>
                  <div className="space-y-2">
                    {formValue.jamPenggunaan.map((jam: string, index: number) => (
                      <input
                        key={index}
                        type="time"
                        value={jam}
                        onChange={(e) => {
                          const updated = [...formValue.jamPenggunaan];
                          updated[index] = e.target.value;
                          setFormValue((prev) => ({ ...prev, jamPenggunaan: updated }));
                        }}
                        className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-teal-500 transition"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end items-center p-4 border-b">
              <button
                onClick={onAddMedication}
                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition flex items-center gap-2"
              >
                <i className="bi bi-plus-lg"></i>
                <span>{editingMedicationId ? "Update Medication" : "Add Medication"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <ConfirmModal
        open={confirmModal.open}
        title={confirmModal.title}
        description={confirmModal.description}
        confirmText={confirmModal.confirmText || "Ya"}
        cancelText={confirmModal.cancelText || "Batal"}
        onConfirm={confirmModal.onConfirm}
        onCancel={() => setConfirmModal((p) => ({ ...p, open: false }))}
      />
    </div>
  );
}
