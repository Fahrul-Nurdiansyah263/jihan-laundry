const WHATSAPP_NUMBER = "6281234567890"; // Replace with real number
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Halo Jihan Laundry! Saya ingin memesan layanan laundry antar jemput."
);

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <i className="fa-solid fa-soap text-base"></i>
              </div>
              <div>
                <span className="text-lg font-extrabold text-white tracking-tight block leading-tight">
                  JIHAN
                </span>
                <span className="text-[10px] font-semibold text-blue-400 tracking-widest uppercase block -mt-1">
                  Laundry
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Penyedia jasa laundry profesional dan terpercaya di Jakarta
              Selatan. Bersih, harum, dan rapi setiap saat.
            </p>
            <div className="flex space-x-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Jihan Laundry"
                className="w-9 h-9 bg-slate-800 hover:bg-green-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <i className="fa-brands fa-whatsapp text-base"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram Jihan Laundry"
                className="w-9 h-9 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <i className="fa-brands fa-instagram text-base"></i>
              </a>
              <a
                href="#"
                aria-label="TikTok Jihan Laundry"
                className="w-9 h-9 bg-slate-800 hover:bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <i className="fa-brands fa-tiktok text-base"></i>
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Layanan Kami
            </h5>
            <ul className="space-y-2.5 text-sm">
              {[
                "Cuci Setrika Kiloan",
                "Express Kilat (6 Jam)",
                "Dry Clean & Satuan",
                "Cuci Sepatu",
                "Cuci Bedcover",
                "Layanan Antar Jemput",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="hover:text-white transition flex items-center space-x-2"
                  >
                    <i className="fa-solid fa-chevron-right text-[10px] text-blue-500"></i>
                    <span>{s}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Informasi
            </h5>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Tentang Kami", href: "#about" },
                { label: "Keunggulan", href: "#features" },
                { label: "Testimoni", href: "#testi" },
                { label: "Kalkulator Harga", href: "#calculator" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition flex items-center space-x-2"
                  >
                    <i className="fa-solid fa-chevron-right text-[10px] text-blue-500"></i>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Kontak &amp; Jam Operasional
            </h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <i className="fa-solid fa-location-dot text-blue-500 mt-0.5 flex-shrink-0"></i>
                <span>
                  Jl. Kuningan Barat, Mampang Prapatan, Jakarta Selatan, DKI
                  Jakarta
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fa-brands fa-whatsapp text-blue-500 flex-shrink-0"></i>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="hover:text-white transition"
                >
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fa-solid fa-clock text-blue-500 flex-shrink-0"></i>
                <span>Senin – Minggu: 07.00 – 21.00 WIB</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fa-solid fa-envelope text-blue-500 flex-shrink-0"></i>
                <a
                  href="mailto:jihanlaundry@gmail.com"
                  className="hover:text-white transition"
                >
                  jihanlaundry@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Jihan Laundry. Hak Cipta
            Dilindungi.
          </p>
          <p className="flex items-center gap-1">
            Dibuat dengan{" "}
            <i className="fa-solid fa-heart text-red-500 text-xs"></i> untuk
            pelanggan setia Jihan Laundry
          </p>
        </div>
      </div>
    </footer>
  );
}
