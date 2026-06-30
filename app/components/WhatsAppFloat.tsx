"use client";

const WHATSAPP_NUMBER = "6281234567890";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Halo Jihan Laundry! Saya ingin memesan layanan laundry antar jemput."
);

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-float-btn"
      aria-label="Chat WhatsApp Jihan Laundry"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-xl shadow-green-300/50 flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-400/60 group"
    >
      <i className="fa-brands fa-whatsapp"></i>
      {/* Tooltip */}
      <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat Sekarang
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-4 border-transparent border-l-slate-900"></span>
      </span>
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></span>
    </a>
  );
}
