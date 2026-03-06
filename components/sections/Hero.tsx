import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { CONTACT, STATS } from "@/lib/constants/data"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1600&q=80" 
          alt="Al-Azhar" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-teal-400/20 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-emerald-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-6 sm:mb-8 shadow-lg border border-emerald-200/50">
            <span className="text-xl sm:text-2xl">🎓</span>
            Angkatan 2026 Dibuka!
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight text-gray-900 px-2">
            Masih Ragu? Ini Saatnya<br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Ambil Keputusan Terbaik!
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto font-medium px-4">
            Setiap hari yang Anda tunda adalah <span className="font-bold text-red-600">Rp 100.000+ yang terbuang</span> dan <span className="font-bold text-gray-900">mimpi yang tertunda</span>. Bergabunglah dengan 82+ alumni kami yang sudah <span className="text-emerald-600 font-bold">TERBUKTI sukses</span> kuliah di Al-Azhar. Konsultasi GRATIS, tidak ada paksaan!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mb-12 sm:mb-16 md:mb-20 px-4">
            <Button asChild className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-bold shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-105 transition-all w-full sm:w-auto">
              <a href={`${CONTACT.agung.whatsapp}?text=Halo%20Kak%20Agung,%20saya%20ingin%20konsultasi%20GRATIS%20tentang%20program%20eLKISI`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
                <span>Ya, Saya Mau Konsultasi GRATIS!</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-bold transition-all hover:scale-105 w-full sm:w-auto">
              <a href="#program" className="flex items-center justify-center">
                Lihat Program Lengkap
              </a>
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 max-w-3xl mx-auto px-4">
            {[
              { number: STATS.alumni, label: "Alumni Sukses" },
              { number: STATS.successRate, label: "Tingkat Kelulusan" },
              { number: STATS.experience, label: "Pengalaman" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.number}
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-600 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
