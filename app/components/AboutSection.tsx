const bullets = [
  {
    title: "Sistem Filter Air Bersih",
    desc: "Air melalui filtrasi khusus agar baju putih tidak menguning.",
  },
  {
    title: "Pilihan Parfum Eksklusif",
    desc: "Beragam varian parfum mewah berkualitas impor.",
  },
  {
    title: "Garansi Layanan",
    desc: "Garansi cuci kembali gratis jika hasil kurang bersih.",
  },
  {
    title: "Layanan Antar-Jemput",
    desc: "Sangat praktis, Anda tinggal menunggu kurir datang.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image/Graphic Side */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-xl -z-10"></div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="h-64 sm:h-80 bg-gradient-to-tr from-blue-600 to-sky-400 rounded-2xl flex flex-col justify-end p-6 relative">
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                  <i className="fa-solid fa-star text-yellow-300 text-lg"></i>
                </div>
                <h4 className="text-2xl font-bold text-white z-10 leading-snug">
                  Kebersihan Bintang Lima Untuk Anda
                </h4>
                <p className="text-blue-100 text-xs mt-2 z-10">
                  Mendedikasikan pelayanan cuci premium dengan detail perawatan
                  kain yang sangat teliti.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-blue-600">
                    Jaminan
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Baju Tidak Tertukar
                  </span>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <span className="block text-2xl font-bold text-blue-600">
                    Premium
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Setrika Uap / Steam
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
              Tentang Jihan Laundry
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Solusi Laundry Terbaik di Kawasan Mampang Prapatan &amp; Kuningan
            </h2>
            <p className="text-slate-600 leading-relaxed">
              <strong>Jihan Laundry</strong> adalah penyedia jasa laundry
              profesional terpercaya yang berkomitmen menyajikan pakaian yang
              tidak hanya bersih cemerlang, tetapi juga harum segar dan tertata
              rapi. Berlokasi strategis di Kuningan Barat, kami siap memberikan
              standar pencucian premium terbaik.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Kami sangat memahami bahwa setiap pakaian memiliki karakteristik
              bahan yang berbeda. Oleh karena itu, tim terlatih kami selalu
              melakukan sortir mendalam sebelum proses cuci agar pakaian
              kesayangan Anda tetap awet, tidak luntur, dan terjaga serat
              kainnya.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {bullets.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-check text-xs"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
