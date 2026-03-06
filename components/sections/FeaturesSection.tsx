import { Users, BookOpen, Globe, Award, Clock, MessageCircle } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Native Teachers dari Mesir",
      description: "Dibimbing langsung oleh Syaikh Ahmad Abdul Adzim, Syaikh Farid Musthofa (Sanad Qira'ah), dan Syaikh Magdy Ali, pengajar berpengalaman dari Al-Azhar."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Kurikulum Terstruktur & Lengkap",
      description: "Materi Utama: Nahwu, Sharaf, Qira'ah, Muhadatsah, Insya', Balaghah. Materi Penunjang: Ulumul Qur'an, Tafsir, Tajwid, dan Ulum Syar'i."
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Full Handling & Fasilitas Lengkap",
      description: "Dari pemberkasan, visa, booking asrama dengan fasilitas (kasur, lemari, mesin cuci, kompor), jemput bandara, registrasi kampus, hingga kartu mahasiswa."
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Tingkat Kelulusan 100%",
      description: "Angkatan 2024 dan 2025 lulus semua! Kami berkomitmen memastikan setiap santri sukses masuk fakultas impian dengan bimbingan intensif ujian Tahili."
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "Hemat Waktu 1 Tahun",
      description: "Skip I'dad Lughawi di Mesir. Langsung masuk fakultas setelah lulus matrikulasi kami. Efisien dan efektif dengan sistem ujian yang jelas!"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "Pendampingan & Rihlah Ilmiah",
      description: "Konsultasi gratis selamanya + City Tour ke situs bersejarah Kairo sebagai bagian dari pengenalan budaya dan edukasi."
    }
  ]

  return (
    <section id="program" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6 text-gray-900">
            Keunggulan Program eLKISI
          </h2>
          <p className="text-center text-gray-600 mb-20 text-xl font-medium">
            Bimbingan komprehensif dari Indonesia hingga Anda lulus tahun pertama di Al-Azhar
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-200/50 hover:scale-105">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30 group-hover:shadow-xl group-hover:shadow-emerald-500/50 transition-all">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
