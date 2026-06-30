"use client";

import { useState, useEffect, useCallback } from "react";
import { useBookingModal } from "./BookingModal";

const PRICES = {
  regular: 8000,
  express: 16000,
};

const ADDONS = {
  bedcover: 25000,
  shoes: 30000,
};

export default function CalculatorSection() {
  const { openModal } = useBookingModal();
  const [weight, setWeight] = useState(3);
  const [service, setService] = useState<"regular" | "express">("regular");
  const [addonBedcover, setAddonBedcover] = useState(false);
  const [addonShoes, setAddonShoes] = useState(false);
  const [total, setTotal] = useState(0);

  const calculateTotal = useCallback(() => {
    const basePrice = weight * PRICES[service];
    const extras =
      (addonBedcover ? ADDONS.bedcover : 0) +
      (addonShoes ? ADDONS.shoes : 0);
    return basePrice + extras;
  }, [weight, service, addonBedcover, addonShoes]);

  useEffect(() => {
    setTotal(calculateTotal());
  }, [calculateTotal]);

  const formatRupiah = (num: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);

  const incrementWeight = () => setWeight((w) => Math.min(w + 1, 100));
  const decrementWeight = () => setWeight((w) => Math.max(w - 1, 1));

  const handleWeightInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1 && val <= 100) setWeight(val);
  };

  const bookWithCalculatedPrice = () => {
    const serviceLabel =
      service === "regular" ? "Cuci Setrika Kiloan" : "Express Kilat";
    openModal(
      serviceLabel,
      `${weight}kg - Estimasi: ${formatRupiah(total)}`
    );
  };

  return (
    <section
      id="calculator"
      className="py-20 bg-gradient-to-br from-blue-600 to-sky-700 text-white relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="bg-white/20 text-white font-bold uppercase tracking-wider text-xs px-4 py-1.5 rounded-full inline-block">
              Estimasi Biaya Transparan
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Hitung Estimasi Biaya Laundry Anda
            </h2>
            <p className="text-blue-100 leading-relaxed">
              Gunakan kalkulator estimasi biaya otomatis dari{" "}
              <strong>Jihan Laundry</strong> untuk merencanakan pengeluaran
              laundry mingguan Anda secara akurat dan transparan sebelum kurir
              menjemput barang.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-xs sm:text-sm text-left inline-block w-full">
              <i className="fa-solid fa-circle-info mr-2 text-sky-200"></i>
              <span>
                Harga final didasarkan pada hasil timbangan digital presisi di
                outlet kami.
              </span>
            </div>
          </div>

          {/* Right: Calculator Card */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl text-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6">
                <i className="fa-solid fa-calculator text-blue-600 mr-2"></i>
                Kalkulator Laundry
              </h3>

              <div className="space-y-6">
                {/* Weight Input */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Estimasi Berat Pakaian (Kilogram)
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={decrementWeight}
                      id="calc-decrement-btn"
                      className="w-12 h-12 bg-slate-100 hover:bg-slate-200 text-slate-800 font-black rounded-xl text-lg transition flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="calc-weight"
                      value={weight}
                      onChange={handleWeightInput}
                      min={1}
                      max={100}
                      className="w-full text-center bg-slate-50 border border-slate-200 rounded-xl py-3 font-bold text-lg text-blue-600 focus:outline-none focus:border-blue-500"
                    />
                    <button
                      onClick={incrementWeight}
                      id="calc-increment-btn"
                      className="w-12 h-12 bg-slate-100 hover:bg-slate-200 text-slate-800 font-black rounded-xl text-lg transition flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Pilih Layanan Utama
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Regular */}
                    <label
                      id="service-regular-label"
                      className={`border-2 rounded-2xl p-4 flex items-center justify-between cursor-pointer transition ${
                        service === "regular"
                          ? "border-blue-500 bg-blue-50/50"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <input
                        type="radio"
                        name="calc-service"
                        value="regular"
                        checked={service === "regular"}
                        onChange={() => setService("regular")}
                        className="sr-only"
                      />
                      <div>
                        <span className="block font-bold text-slate-800 text-sm">
                          Regular (2-3 Hari)
                        </span>
                        <span className="text-xs text-slate-500">
                          Rp 8.000 / kg
                        </span>
                      </div>
                      <i
                        className={`text-lg ${
                          service === "regular"
                            ? "fa-solid fa-circle-check text-blue-600"
                            : "fa-regular fa-circle text-slate-300"
                        }`}
                      ></i>
                    </label>

                    {/* Express */}
                    <label
                      id="service-express-label"
                      className={`border-2 rounded-2xl p-4 flex items-center justify-between cursor-pointer transition ${
                        service === "express"
                          ? "border-blue-500 bg-blue-50/50"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <input
                        type="radio"
                        name="calc-service"
                        value="express"
                        checked={service === "express"}
                        onChange={() => setService("express")}
                        className="sr-only"
                      />
                      <div>
                        <span className="block font-bold text-slate-800 text-sm">
                          Express (6 Jam)
                        </span>
                        <span className="text-xs text-slate-500">
                          Rp 16.000 / kg
                        </span>
                      </div>
                      <i
                        className={`text-lg ${
                          service === "express"
                            ? "fa-solid fa-circle-check text-blue-600"
                            : "fa-regular fa-circle text-slate-300"
                        }`}
                      ></i>
                    </label>
                  </div>
                </div>

                {/* Add-ons */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Layanan Tambahan (Satuan)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Bedcover */}
                    <label
                      id="addon-bedcover-label"
                      className={`border rounded-xl p-3 flex items-center justify-between cursor-pointer transition-all hover:bg-slate-50 ${
                        addonBedcover
                          ? "border-blue-400 bg-blue-50"
                          : "border-slate-200"
                      }`}
                    >
                      <input
                        type="checkbox"
                        id="calc-addon-bedcover"
                        checked={addonBedcover}
                        onChange={() => setAddonBedcover((v) => !v)}
                        className="sr-only"
                      />
                      <span className="text-xs font-semibold text-slate-700">
                        Bedcover (+Rp25k)
                      </span>
                      <i
                        className={`text-base ${
                          addonBedcover
                            ? "fa-solid fa-square-check text-blue-600"
                            : "fa-regular fa-square text-slate-300"
                        }`}
                      ></i>
                    </label>

                    {/* Shoes */}
                    <label
                      id="addon-shoes-label"
                      className={`border rounded-xl p-3 flex items-center justify-between cursor-pointer transition-all hover:bg-slate-50 ${
                        addonShoes
                          ? "border-blue-400 bg-blue-50"
                          : "border-slate-200"
                      }`}
                    >
                      <input
                        type="checkbox"
                        id="calc-addon-shoes"
                        checked={addonShoes}
                        onChange={() => setAddonShoes((v) => !v)}
                        className="sr-only"
                      />
                      <span className="text-xs font-semibold text-slate-700">
                        Cuci Sepatu (+Rp30k)
                      </span>
                      <i
                        className={`text-base ${
                          addonShoes
                            ? "fa-solid fa-square-check text-blue-600"
                            : "fa-regular fa-square text-slate-300"
                        }`}
                      ></i>
                    </label>
                  </div>
                </div>

                {/* Total + CTA */}
                <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    <span className="text-xs text-slate-400 block font-bold uppercase tracking-wide">
                      Estimasi Total Biaya
                    </span>
                    <span
                      id="calc-total-display"
                      className="text-3xl font-black text-blue-600"
                    >
                      {formatRupiah(total)}
                    </span>
                  </div>
                  <button
                    onClick={bookWithCalculatedPrice}
                    id="calc-order-btn"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition shadow-lg shadow-blue-200 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-truck"></i>
                    <span>Pesan Sesuai Estimasi</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
