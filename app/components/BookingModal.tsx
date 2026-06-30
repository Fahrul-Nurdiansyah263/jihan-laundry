"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

const WHATSAPP_NUMBER = "6281234567890"; // Replace with real WhatsApp number

interface BookingModalContextType {
  openModal: (service?: string, note?: string) => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export function useBookingModal() {
  return useContext(BookingModalContext);
}

interface ModalState {
  isOpen: boolean;
  selectedService: string;
  note: string;
}

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    selectedService: "",
    note: "",
  });

  const openModal = useCallback((service = "", note = "") => {
    setModal({ isOpen: true, selectedService: service, note });
  }, []);

  const closeModal = useCallback(() => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <BookingModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modal.isOpen && (
        <BookingModal
          selectedService={modal.selectedService}
          note={modal.note}
          onClose={closeModal}
        />
      )}
    </BookingModalContext.Provider>
  );
}

interface BookingModalProps {
  selectedService: string;
  note: string;
  onClose: () => void;
}

const SERVICES = [
  "Cuci Setrika Kiloan",
  "Express Kilat (6 Jam)",
  "Dry Clean & Satuan",
  "Cuci Sepatu",
  "Cuci Bedcover",
];

function BookingModal({ selectedService, note, onClose }: BookingModalProps) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState(selectedService || SERVICES[0]);
  const [weight, setWeight] = useState("");
  const [time, setTime] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address || !service) return;

    setSubmitting(true);

    const message = [
      `🧺 *PEMESANAN JIHAN LAUNDRY*`,
      ``,
      `👤 *Nama:* ${name}`,
      `📍 *Alamat:* ${address}`,
      `🫧 *Layanan:* ${service}`,
      weight ? `⚖️ *Estimasi Berat:* ${weight} kg` : "",
      time ? `🕐 *Waktu Jemput:* ${time}` : "",
      note ? `📝 *Catatan:* ${note}` : "",
      ``,
      `Terima kasih! Mohon konfirmasi ketersediaan kurir. 🙏`,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setSubmitting(false);
      onClose();
    }, 500);
  };

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 modal-overlay"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto modal-content">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-truck-ramp-box"></i>
            </div>
            <div>
              <h2
                id="modal-title"
                className="font-extrabold text-slate-900 text-lg leading-tight"
              >
                Pesan Antar Jemput
              </h2>
              <p className="text-xs text-slate-400">
                Isi form, kurir siap menjemput!
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            id="modal-close-btn"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-700 transition cursor-pointer"
            aria-label="Tutup modal"
          >
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="booking-name"
              className="block text-sm font-bold text-slate-700 mb-1.5"
            >
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              id="booking-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Budi Santoso"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="booking-address"
              className="block text-sm font-bold text-slate-700 mb-1.5"
            >
              Alamat Lengkap Penjemputan{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="booking-address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              placeholder="Jl. Contoh No. 10, RT 01/RW 02, Mampang Prapatan..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
            />
          </div>

          {/* Service */}
          <div>
            <label
              htmlFor="booking-service"
              className="block text-sm font-bold text-slate-700 mb-1.5"
            >
              Pilih Layanan <span className="text-red-500">*</span>
            </label>
            <select
              id="booking-service"
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            >
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Weight & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="booking-weight"
                className="block text-sm font-bold text-slate-700 mb-1.5"
              >
                Est. Berat (kg)
              </label>
              <input
                id="booking-weight"
                type="number"
                min="1"
                max="100"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Contoh: 3"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label
                htmlFor="booking-time"
                className="block text-sm font-bold text-slate-700 mb-1.5"
              >
                Waktu Jemput
              </label>
              <input
                id="booking-time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Info Banner */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-xs text-blue-700 flex items-start space-x-2">
            <i className="fa-brands fa-whatsapp text-green-500 text-base flex-shrink-0 mt-0.5"></i>
            <span>
              Formulir ini akan membuka WhatsApp dengan pesan yang sudah
              terisi. Kurir kami akan segera mengkonfirmasi jadwal penjemputan
              Anda.
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            id="booking-submit-btn"
            disabled={submitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-blue-200 flex items-center justify-center space-x-2 cursor-pointer"
          >
            {submitting ? (
              <>
                <i className="fa-solid fa-spinner animate-spin"></i>
                <span>Membuka WhatsApp...</span>
              </>
            ) : (
              <>
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Konfirmasi via WhatsApp</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
