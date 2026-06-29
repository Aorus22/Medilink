"use client";
import { useState, useRef, useEffect } from "react";

export interface SearchableOption {
  value: string;
  label: string;
  subtitle?: string;
}

interface SearchableSelectProps {
  options: SearchableOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
}

export default function SearchableSelect({
  options,
  value,
  onChange,
  placeholder = "Pilih...",
  searchPlaceholder = "Cari...",
  emptyMessage = "Data tidak ditemukan",
  label,
  className = "",
  disabled = false,
}: SearchableSelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(opt: SearchableOption) {
    onChange(opt.value);
    setOpen(false);
    setSearch("");
  }

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && (
        <label className="block text-xs text-gray-500 mb-1">{label}</label>
      )}
      <button
        type="button"
        disabled={disabled}
        onClick={() => { setOpen(!open); setSearch(""); }}
        className="w-full flex items-center justify-between px-4 py-2 border rounded-lg border-gray-300 bg-white text-left focus:outline-none focus:border-teal-500 transition disabled:opacity-50"
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 ml-2 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-20 top-full mt-1 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="p-2 border-b">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-teal-500"
              autoFocus
            />
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filtered.length > 0 ? (
              filtered.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className={`w-full text-left px-4 py-2 hover:bg-teal-50 transition flex justify-between items-center text-sm ${
                    opt.value === value ? "bg-teal-50 text-teal-700" : ""
                  }`}
                  onMouseDown={() => handleSelect(opt)}
                >
                  <span>{opt.label}</span>
                  {opt.subtitle && (
                    <span className="text-gray-400 text-xs ml-2">{opt.subtitle}</span>
                  )}
                </button>
              ))
            ) : (
              <div className="px-4 py-6 text-center text-gray-400 text-sm">{emptyMessage}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
