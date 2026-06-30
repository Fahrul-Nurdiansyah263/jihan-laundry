"use client";

import { useBookingModal } from "./BookingModal";

export default function CTASection() {
  const { openModal } = useBookingModal();

  return (
    <section className="py-16 bg-blue-50/50 border-t border-b border-blue-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="space-y-4 max-w-xl text-center md:text-left z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Ingin Pakaian Bersih Bebas Kuman Tanpa Keluar Rumah?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base">
              Kurir terpercaya Jihan Laundry siap menjemput pakaian kotor
              langsung ke rumah atau kantor Anda. Hubungi kami sekarang!
            </p>
          </div>

          <div className="flex-shrink-0 z-10 w-full md:w-auto">
            <button
              onClick={() => openModal()}
              id="cta-whatsapp-btn"
              className="w-full md:w-auto bg-white hover:bg-slate-100 text-blue-600 font-black px-8 py-4 rounded-full shadow-lg shadow-blue-800/30 transform hover:-translate-y-1 transition duration-200 flex items-center justify-center space-x-3 cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-xl text-green-500"></i>
              <span>Hubungi Kurir Jihan</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
