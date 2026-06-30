const features = [
  {
    icon: "fa-solid fa-shield-virus",
    title: "1 Mesin 1 Pelanggan",
    description:
      "Pakaian Anda dijamin tidak akan pernah dicampur dengan pakaian orang lain untuk menjaga higienitas mutlak.",
  },
  {
    icon: "fa-solid fa-clock",
    title: "Layanan Express Cepat",
    description:
      "Butuh cepat untuk meeting, dinas, atau acara mendadak? Paket kilat kami selesai dalam waktu 3-6 jam saja!",
  },
  {
    icon: "fa-solid fa-leaf",
    title: "Detergen & Softener Premium",
    description:
      "Menggunakan detergen berkualitas tinggi yang lembut di serat kain dan aman untuk kulit sensitif.",
  },
  {
    icon: "fa-solid fa-map-location-dot",
    title: "Antar Jemput Tepat Waktu",
    description:
      "Kurir kami siap menjemput dan mengantarkan cucian Anda kembali langsung ke depan pintu rumah.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
            Mengapa Harus Jihan Laundry?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Keunggulan Pelayanan Terbaik Kami
          </h2>
          <p className="text-slate-600">
            Kami mengutamakan higienitas, ketepatan waktu, dan kerapian pakaian
            Anda dengan standar laundry profesional modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-50 transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-100 group-hover:bg-blue-600 group-hover:text-white text-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 mb-6 shadow-md shadow-blue-100/50">
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
