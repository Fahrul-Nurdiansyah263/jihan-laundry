"use client";

import { useState } from "react";
import { useBookingModal } from "./BookingModal";

const TRACKING_DATA: Record<
  string,
  {
    steps: { title: string; time: string; done: boolean }[];
  }
> = {
  "JHN-4321": {
    steps: [
      { title: "Pakaian Diterima & Disortir", time: "09:00 WIB - Sukses diverifikasi", done: true },
      { title: "Proses Pencucian (Washing)", time: "Sedang berlangsung", done: true },
      { title: "Penyetrikaan & Packing", time: "Menunggu antrean", done: false },
    ],
  },
  "JHN-1234": {
    steps: [
      { title: "Pakaian Diterima & Disortir", time: "08:30 WIB - Sukses diverifikasi", done: true },
      { title: "Proses Pencucian (Washing)", time: "10:00 WIB - Selesai", done: true },
      { title: "Penyetrikaan & Packing", time: "Sedang berlangsung", done: true },
    ],
  },
};

export default function HeroSection() {
  const { openModal } = useBookingModal();
  const [trackingId, setTrackingId] = useState("");
  const [trackingResult, setTrackingResult] = useState<
    { title: string; time: string; done: boolean }[] | null
  >(null);
  const [trackedLabel, setTrackedLabel] = useState("");
  const [notFound, setNotFound] = useState(false);

  const simulateTracking = () => {
    const id = trackingId.trim().toUpperCase();
    if (!id) return;
    setTrackedLabel(id);
    const data = TRACKING_DATA[id];
    if (data) {
      setTrackingResult(data.steps);
      setNotFound(false);
    } else {
      // Show demo result for any unknown ID
      setTrackingResult([
        { title: "Pakaian Diterima & Disortir", time: "09:00 WIB - Sukses diverifikasi", done: true },
        { title: "Proses Pencucian (Washing)", time: "Sedang berlangsung", done: true },
        { title: "Penyetrikaan & Packing", time: "Menunggu antrean", done: false },
      ]);
      setNotFound(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") simulateTracking();
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-blue-50 via-white to-slate-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-5 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
              <i className="fa-solid fa-sparkles animate-pulse"></i>
              <span>Layanan Antar Jemput Area Mampang &amp; Kuningan!</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Pakaian Bersih, Wangi &amp;{" "}
              <span className="text-blue-600 relative inline-block">
                Higienis Tiap{" "}
                <span className="relative z-10">Hari</span>
                <span className="absolute bottom-1.5 left-0 w-full h-3 bg-blue-200 -z-10 rounded"></span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Bebaskan diri Anda dari tumpukan pakaian kotor.{" "}
              <strong>Jihan Laundry</strong> hadir memberikan perawatan laundry
              terbaik langsung dari pusat Jakarta Selatan dengan detergen ramah
              serat pakaian dan wangi segar tahan lama.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-2">
              <button
                onClick={() => openModal()}
                id="hero-order-btn"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-1 transition-all duration-200 text-center flex justify-center items-center space-x-3 cursor-pointer"
              >
                <i className="fa-solid fa-soap text-lg"></i>
                <span>Pesan Sekarang</span>
              </button>
              <a
                href="#calculator"
                className="w-full sm:w-auto border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 bg-white text-slate-700 font-bold px-8 py-4 rounded-full transition-all text-center flex justify-center items-center space-x-2"
              >
                <i className="fa-solid fa-calculator"></i>
                <span>Hitung Estimasi Biaya</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-8 border-t border-slate-200/60 max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">
                  30 Menit
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Respons Jemput
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">
                  5k+
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Pelanggan Puas
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">
                  100%
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Higienis &amp; Rapi
                </span>
              </div>
            </div>
          </div>

          {/* Right: Tracking Widget */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-100 relative z-10 transform lg:rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-truck-fast"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Lacak Status Laundry
                    </h4>
                    <p className="text-xs text-slate-400">
                      Masukkan nomor nota Anda
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full animate-pulse">
                  Live
                </span>
              </div>

              {/* Tracking Input */}
              <div className="mt-5 space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="tracking-id"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Contoh: JHN-4321"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 font-semibold uppercase"
                  />
                  <button
                    onClick={simulateTracking}
                    id="track-btn"
                    className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition cursor-pointer"
                  >
                    Lacak
                  </button>
                </div>

                {/* Tracking Results */}
                {trackingResult && (
                  <div className="mt-4 space-y-3 p-3 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                    <div className="flex items-center space-x-2 text-blue-700 text-xs font-bold">
                      <i className="fa-solid fa-circle-info"></i>
                      <span>
                        Hasil Pelacakan Nota:{" "}
                        <span id="tracked-id-label">{trackedLabel}</span>
                      </span>
                    </div>
                    <div className="relative pl-5 border-l-2 border-blue-200 space-y-4 text-xs">
                      {trackingResult.map((step, idx) => (
                        <div className="relative" key={idx}>
                          <div
                            className={`absolute -left-[27px] top-0 w-3.5 h-3.5 rounded-full border-4 border-white ${
                              step.done ? "bg-blue-600" : "bg-slate-300"
                            }`}
                          ></div>
                          <p
                            className={`font-bold ${
                              step.done ? "text-slate-700" : "text-slate-400"
                            }`}
                          >
                            {step.title}
                          </p>
                          <span className="text-[10px] text-slate-400">
                            {step.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {notFound && (
                  <p className="text-xs text-red-500 font-semibold text-center">
                    Nomor nota tidak ditemukan. Coba: JHN-4321
                  </p>
                )}
              </div>

              {/* Promo Banner */}
              <div className="mt-6 flex gap-3 items-center bg-blue-600 text-white p-4 rounded-2xl shadow-lg">
                <i className="fa-solid fa-gift text-2xl text-blue-200"></i>
                <div>
                  <p className="text-xs text-blue-100 font-medium">
                    Diskon Warga Kuningan &amp; Mampang
                  </p>
                  <p className="text-sm font-bold">
                    Diskon 15% khusus order kiloan pertama!
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Background */}
            <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 bg-blue-100/60 rounded-3xl -z-10 transform -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
