import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONTACT } from "@/lib/constants/data"

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Masih Ragu? Ini Saatnya<br />
            Ambil Keputusan Terbaik!
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Setiap hari yang Anda tunda adalah <span className="font-bold">Rp 100.000+ yang terbuang</span> dan <span className="font-bold">mimpi yang tertunda</span>. Bergabunglah dengan 82+ alumni kami yang sudah TERBUKTI sukses kuliah di Al-Azhar. Konsultasi GRATIS, tidak ada paksaan!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-emerald-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
              <a href={`${CONTACT.agung.whatsapp}?text=Halo%20Kak%20Agung,%20saya%20serius%20ingin%20kuliah%20di%20Al-Azhar.%20Mohon%20info%20lengkap%20program%20eLKISI!`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Ya, Saya Mau Konsultasi GRATIS!
              </a>
            </Button>
            <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
              <a href={`tel:${CONTACT.agung.phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                {CONTACT.agung.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
