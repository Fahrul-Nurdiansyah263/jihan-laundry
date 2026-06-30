const testimonials = [
  {
    initials: "AM",
    name: "Amalia Mareta",
    role: "Karyawan Swasta",
    stars: 5,
    quote:
      "Layanan antar-jemputnya sangat membantu, apalagi area Mampang suka padat. Baju kerja saya rapi luar biasa, wanginya segar tahan lama dan awet hingga berhari-hari. Sangat memuaskan!",
  },
  {
    initials: "FW",
    name: "Fahri Wijaya",
    role: "Pegawai Negeri",
    stars: 5,
    quote:
      "Setiap kali butuh express cepat selalu pesan di Jihan Laundry. Selesai dalam waktu kurang dari 6 jam untuk baju dinas saya yang mendadak harus dipakai. Servis bintang lima!",
  },
  {
    initials: "ID",
    name: "Indra Darmawan",
    role: "Wirausahawan",
    stars: 5,
    quote:
      "Saya percayakan pembersihan sepatu mahal dan bedcover tebal di Jihan Laundry. Penanganannya detail, bersih tanpa noda sisa, dikemas rapi, dan harganya juga bersahabat.",
  },
];

export default function TestimoniSection() {
  return (
    <section id="testi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
            Review Pelanggan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Kata Mereka Tentang Jihan Laundry
          </h2>
          <p className="text-slate-600">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah umpan
            balik tulus dari para pelanggan setia kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-md relative hover:shadow-lg transition-all"
            >
              <div className="absolute -top-5 left-8 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-200">
                <i className="fa-solid fa-quote-left text-sm"></i>
              </div>

              {/* Stars */}
              <div className="flex space-x-1 text-amber-400 mb-4 mt-2">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-sm"></i>
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center space-x-3 border-t border-slate-200/60 pt-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{t.name}</h4>
                  <span className="text-[11px] text-slate-400">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
