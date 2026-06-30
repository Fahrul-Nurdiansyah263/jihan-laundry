"use client";

import { useBookingModal } from "./BookingModal";

const services = [
  {
    badge: "Paling Hemat",
    badgeColor: "bg-blue-50 text-blue-600",
    icon: "fa-solid fa-shirt",
    recommended: false,
    title: "Cuci Setrika Kiloan",
    description:
      "Pilihan tepat untuk pakaian harian Anda. Pakaian dicuci bersih, dikeringkan mesin, disetrika dengan rapi, dan dipacking rapat agar tetap harum.",
    benefits: [
      "Estimasi Selesai 2-3 Hari",
      "Bebas Pilih Varian Parfum",
      "Lipatan Sangat Rapi & Presisi",
    ],
    priceLabel: "Rp 8.000",
    priceUnit: "/kg",
    serviceKey: "Cuci Setrika Kiloan",
  },
  {
    badge: "Super Cepat",
    badgeColor: "bg-amber-100 text-amber-700",
    icon: "fa-solid fa-bolt",
    recommended: true,
    title: "Express Kilat (6 Jam)",
    description:
      "Solusi darurat untuk baju kotor menumpuk yang harus segera dipakai besok atau hari ini juga. Selesai dalam hitungan jam!",
    benefits: [
      "Selesai 3 Hingga 6 Jam",
      "Prioritas Antrean Utama",
      "Layanan Antar Jemput Prioritas",
    ],
    priceLabel: "Rp 16.000",
    priceUnit: "/kg",
    serviceKey: "Express Kilat",
  },
  {
    badge: "Premium Care",
    badgeColor: "bg-purple-100 text-purple-700",
    icon: "fa-solid fa-vest-patches",
    recommended: false,
    title: "Dry Clean & Satuan",
    description:
      "Perawatan mendalam khusus jas, kebaya, gamis sutra, gaun pesta, bedcover tebal, boneka besar, selimut, hingga cuci sepatu kesayangan.",
    benefits: [
      "Penanganan Noda Membandel Spesifik",
      "Bahan Kimia Laundry Satuan Terbaik",
      "Packing Gantungan Istimewa + Cover",
    ],
    priceLabel: "Rp 22.000",
    priceUnit: "/pcs",
    serviceKey: "Dry Clean & Satuan",
  },
];

export default function ServicesSection() {
  const { openModal } = useBookingModal();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
            Layanan Terbaik Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Pilih Layanan Sesuai Kebutuhan Anda
          </h2>
          <p className="text-slate-600">
            Mulai dari kiloan sehari-hari yang sangat hemat, hingga pencucian
            satuan premium khusus gaun, jas, sepatu, dan bedcover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {services.map((svc) => (
            <div
              key={svc.serviceKey}
              className={`bg-white rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                svc.recommended
                  ? "border-2 border-blue-500 shadow-xl shadow-blue-50 relative"
                  : "border border-slate-200 hover:shadow-2xl hover:shadow-slate-100 hover:border-blue-500"
              }`}
            >
              {svc.recommended && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 bg-blue-600 text-white font-bold text-xs px-6 py-1.5 rounded-b-xl uppercase tracking-wider">
                  Rekomendasi
                </div>
              )}

              <div className={`p-8 ${svc.recommended ? "pt-12" : ""}`}>
                <div className="flex justify-between items-center mb-6">
                  <span
                    className={`${svc.badgeColor} font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider`}
                  >
                    {svc.badge}
                  </span>
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                    <i className={`${svc.icon} text-xl`}></i>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {svc.title}
                </h3>
                <p className="text-slate-500 text-sm mt-2">{svc.description}</p>

                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {svc.benefits.map((b) => (
                    <li key={b} className="flex items-center space-x-3">
                      <i className="fa-solid fa-circle-check text-blue-600"></i>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`p-8 ${svc.recommended ? "bg-blue-50/50 border-t border-blue-100" : "bg-slate-50 border-t border-slate-100"} flex items-center justify-between`}
              >
                <div>
                  <span
                    className={`text-xs block uppercase font-bold ${svc.recommended ? "text-blue-500" : "text-slate-400"}`}
                  >
                    Mulai Dari
                  </span>
                  <span className="text-xl font-black text-blue-600">
                    {svc.priceLabel}
                    <span className="text-xs text-slate-500 font-medium">
                      {" "}
                      {svc.priceUnit}
                    </span>
                  </span>
                </div>
                <button
                  onClick={() => openModal(svc.serviceKey)}
                  id={`service-btn-${svc.serviceKey.replace(/\s+/g, "-").toLowerCase()}`}
                  className={`font-bold text-sm px-4 py-2 rounded-xl transition-all cursor-pointer ${
                    svc.recommended
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                      : "bg-white hover:bg-blue-600 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-white"
                  }`}
                >
                  Pilih Paket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
