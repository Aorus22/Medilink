"use client";

import { User } from '@prisma/client';
import { MedicationInfo } from "@/app/api/pharmacy/route";
import Table from "@/components/Table";
import { Search, Trash2, Pencil } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Suspense, useEffect, useState } from "react";
import { toast } from "react-toastify";
import SearchableSelect from "@/components/SearchableSelect";
import ConfirmModal from "@/components/ConfirmModal";
import { dispenseBatch, clearVmApiUrlCache, DispenseItem } from "@/lib/vending-machine";

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

  // Vending machine snapshot medicines
  const [vendingMedicines, setVendingMedicines] = useState<{ channel: number; namaObat: string; stock: number }[]>([]);

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

  // Vending machine settings (DB persisted)
  const [showSettings, setShowSettings] = useState(false);
  const [vmApiUrl, setVmApiUrl] = useState("");
  const [savedVmApiUrl, setSavedVmApiUrl] = useState("");

  useEffect(() => {
    fetch("/api/system-settings")
      .then((r) => r.json())
      .then((data) => {
        const url = data.vmApiUrl || "";
        setSavedVmApiUrl(url);
        setVmApiUrl(url);
      })
      .catch(() => {});
  }, []);

  const saveVmApiUrl = async () => {
    const url = vmApiUrl.trim();
    try {
      const res = await fetch("/api/system-settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vmApiUrl: url }),
      });
      if (!res.ok) throw new Error(await res.text());
      clearVmApiUrlCache();
      setSavedVmApiUrl(url);
      toast.success(url ? "Vending Machine API Updated" : "Using default mock API");
      setShowSettings(false);
    } catch (err: any) {
      toast.error("Failed to save: " + err.message);
    }
  };

  // Vending machine mode
  const [vendingMode, setVendingMode] = useState(false);
  const [dispensedIds, setDispensedIds] = useState<Set<number>>(new Set());
  const [selectedForDispense, setSelectedForDispense] = useState<number[]>([]);
  const [dispensing, setDispensing] = useState(false);
  const [reconfirmId, setReconfirmId] = useState<number | null>(null);

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

  // Fetch vending machine snapshot medicines
  const fetchVendingMedicines = async () => {
    try {
      const res = await fetch("/api/vending-machine/snapshot");
      if (res.ok) {
        const data = await res.json();
        const feeder = (data.feeder || []) as { channel: number; medicine: string; stock: number }[];
        const available = feeder
          .filter((f: any) => f.medicine?.trim())
          .map((f: any) => ({ channel: f.channel, namaObat: f.medicine, stock: f.stock }));
        setVendingMedicines(available);
      }
    } catch {
      console.error("Failed to fetch vending snapshot");
    }
  };

  useEffect(() => {
    fetchVendingMedicines();
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

  const handleVendingMedicineSelect = (channel: string) => {
    const item = vendingMedicines.find((m) => String(m.channel) === channel);
    if (!item) return;
    setFormValue((prev) => ({
      ...prev,
      namaObat: item.namaObat,
      medicineId: "",
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
    fetchVendingMedicines();
  };

  async function handleDispense() {
    if (selectedForDispense.length === 0) return toast.error("Pilih item terlebih dahulu.");
    setDispensing(true);

    const items: DispenseItem[] = selectedForDispense
      .map((id) => {
        const rx = medications.find((m: any) => m.id === id) as any;
        if (!rx) return undefined;
        return {
          medicineName: rx.namaObat,
          quantity: rx.usagePerDay * rx.usageDay,
          patientId: rx.userId,
          localId: rx.id,
        };
      })
      .filter((x): x is DispenseItem => !!x);

    const { results } = await dispenseBatch(items);
    const failed = results.filter((r) => r.error);
    const ok = results.filter((r) => !r.error);

    if (ok.length > 0) {
      setDispensedIds((prev) => {
        const next = new Set(prev);
        ok.forEach((r) => next.add(r.localId));
        return next;
      });
      setSelectedForDispense([]);
    }

    if (failed.length > 0) {
      toast.error(`${failed.length} item gagal: ${failed[0].error}`);
    }
    if (ok.length > 0) {
      toast.success(`${ok.length} item berhasil didispense!`);
    }

    setDispensing(false);
  }

  const toggleSelect = (id: number) => {
    if (dispensedIds.has(id) && !selectedForDispense.includes(id)) {
      setReconfirmId(id);
      return;
    }
    setSelectedForDispense((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const confirmRedispense = () => {
    if (reconfirmId !== null) {
      setSelectedForDispense((prev) => [...prev, reconfirmId]);
      setReconfirmId(null);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">PharmaSwift</h1>
          <button
            onClick={() => { setVmApiUrl(savedVmApiUrl); setShowSettings(true); }}
            className="p-2 text-gray-500 hover:text-teal-600 hover:bg-teal-50 rounded-full transition"
            title="Vending Machine Settings"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          {savedVmApiUrl && (
            <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">Custom API</span>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center mb-5">
        {/* User Profile */}
        <div
          className="cursor-pointer"
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
          <div className="flex gap-2 items-center">
            <button
              onClick={() => {
                setConfirmModal({
                  open: true,
                  title: "Kirim pengingat sekarang?",
                  description: "Mengingatkan semua obat aktif untuk pasien ini.",
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
              className="bg-teal-500 text-white h-9 px-3 text-sm rounded-lg hover:bg-teal-600 transition flex items-center gap-1.5"
            >
              <i className="bi bi-bell"></i>
              <span>Remind All</span>
            </button>
            <button
              onClick={() => setVendingMode(!vendingMode)}
              className={`h-9 px-3 text-sm rounded-lg transition flex items-center gap-1.5 ${
                vendingMode
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-amber-100 text-amber-700 hover:bg-amber-200"
              }`}
            >
              <i className="bi bi-shop"></i>
              <span>{vendingMode ? "Exit Vending" : "Vending Machine"}</span>
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
                fetchVendingMedicines();
              }}
              className="bg-teal-500 text-white h-9 px-3 text-sm rounded-lg hover:bg-teal-600 transition flex items-center gap-1.5"
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
                  {/* Medicine Name — pick from vending machine snapshot */}
                  <SearchableSelect
                    label="Medicine Name (Vending Machine)"
                    placeholder="Pilih obat dari vending machine..."
                    searchPlaceholder="Cari obat..."
                    emptyMessage="Tidak ada obat di vending machine"
                    options={vendingMedicines.map((m) => ({
                      value: String(m.channel),
                      label: m.namaObat,
                      subtitle: `Ch#${m.channel} — stock: ${m.stock}`,
                    }))}
                    value={(() => {
                      const found = vendingMedicines.find((m) => m.namaObat === formValue.namaObat);
                      return found ? String(found.channel) : "";
                    })()}
                    onChange={handleVendingMedicineSelect}
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

      {vendingMode && (
        <div className="mt-6 bg-white rounded-xl shadow-lg border border-amber-200 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2">
                <i className="bi bi-shop"></i>
                PharmaSwift Vending Machine
              </h3>
              <p className="text-sm text-amber-100">
                Pilih item untuk didispense. Item dengan tanda centang sudah pernah didispense.
              </p>
            </div>
            <span className="text-2xl font-bold">Rp{medications
              .filter((m: any) => selectedForDispense.includes(m.id))
              .reduce((sum: number, m: any) => sum + (m.harga || 0), 0)
              .toLocaleString()}</span>
          </div>

          <div className="divide-y max-h-80 overflow-y-auto">
            {(medications as any[]).length === 0 ? (
              <div className="p-6 text-center text-gray-400">Tidak ada item untuk didispense</div>
            ) : (
              (medications as any[]).map((rx: any) => {
                const isSelected = selectedForDispense.includes(rx.id);
                const isDispensed = dispensedIds.has(rx.id);
                return (
                  <div
                    key={rx.id}
                    className={`flex items-center gap-4 px-6 py-3 cursor-pointer transition ${
                      isSelected ? "bg-amber-50" : "hover:bg-gray-50"
                    }`}
                    onClick={() => toggleSelect(rx.id)}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}}
                      className="w-4 h-4 text-amber-600 rounded border-gray-300"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-800">{rx.namaObat}</span>
                        {isDispensed && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <i className="bi bi-check-circle-fill text-xs"></i>
                            Dispensed
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">
                        {rx.dosis} — {rx.usagePerDay}x{rx.usageDay} hari
                      </p>
                    </div>
                    <span className="font-semibold text-amber-700">Rp{rx.harga?.toLocaleString() || 0}</span>
                  </div>
                );
              })
            )}
          </div>

          <div className="border-t px-6 py-4 flex justify-between items-center bg-gray-50">
            <span className="text-sm text-gray-500">
              {selectedForDispense.length} item dipilih • Rp
              {medications
                .filter((m: any) => selectedForDispense.includes(m.id))
                .reduce((sum: number, m: any) => sum + (m.harga || 0), 0)
                .toLocaleString()}
            </span>
            <button
              onClick={handleDispense}
              disabled={dispensing || selectedForDispense.length === 0}
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition font-medium disabled:opacity-50 flex items-center gap-2"
            >
              {dispensing ? (
                <span className="inline-block animate-spin">⟳</span>
              ) : (
                <i className="bi bi-cpu"></i>
              )}
              <span>{dispensing ? "Dispensing..." : "Dispense Selected Items"}</span>
            </button>
          </div>
        </div>
      )}

      <ConfirmModal
        open={reconfirmId !== null}
        title="Item sudah pernah didispense"
        description="Obat ini sudah pernah dikeluarkan dari vending machine sebelumnya. Yakin ingin memilih lagi?"
        confirmText="Ya, Pilih Lagi"
        cancelText="Batal"
        onConfirm={confirmRedispense}
        onCancel={() => setReconfirmId(null)}
      />

      <ConfirmModal
        open={confirmModal.open}
        title={confirmModal.title}
        description={confirmModal.description}
        confirmText={confirmModal.confirmText || "Ya"}
        cancelText={confirmModal.cancelText || "Batal"}
        onConfirm={confirmModal.onConfirm}
        onCancel={() => setConfirmModal((p) => ({ ...p, open: false }))}
      />

      {/* Vending Machine Settings Sheet */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 transition-opacity"
            onClick={() => setShowSettings(false)}
          />
          {/* Sheet Panel */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slide-in-right">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Vending Machine Settings</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 space-y-4 flex-1 overflow-y-auto">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vending Machine API URL
                </label>
                <input
                  type="text"
                  value={vmApiUrl}
                  onChange={(e) => setVmApiUrl(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-teal-500 transition"
                  placeholder="https://vending-machine.local/api/dispense"
                />
                <p className="text-xs text-gray-500 mt-1">
                  API endpoint yang disediakan mesin untuk menerima perintah dispensing. Biarkan kosong untuk menggunakan mock internal.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600 space-y-1">
                <p className="font-semibold text-gray-700">Contoh payload yang dikirim:</p>
                <pre className="bg-gray-800 text-gray-100 p-2 rounded overflow-x-auto">{JSON.stringify({
                  patient_id: "RX-20250722-0001",
                  machine_id: "PS-001",
                  items: [
                    { channel: 1, medicine: "Amoxicillin 500mg", qty: 1 },
                    { channel: 2, medicine: "Albendazole 400mg", qty: 1 },
                  ]
                }, null, 2)}</pre>
              </div>
            </div>

            <div className="flex justify-end items-center p-4 border-t gap-2 bg-gray-50">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={saveVmApiUrl}
                className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
