'use client'

import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/ui/CountdownTimer"
import { ProgressBar } from "@/components/ui/ProgressBar"

export function UrgencySection() {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-r from-red-600 to-rose-600 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            Penawaran Terbatas!
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 px-2">
            Kuota Tinggal 12 Kursi Lagi!
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            Kami hanya menerima <span className="font-bold">30 santri per angkatan</span> untuk menjaga kualitas pengajaran. Sudah 18 orang mendaftar bulan ini.
          </p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-6 sm:mb-8 px-4">
            <ProgressBar current={18} total={30} label="Kursi Terisi" />
          </div>

          {/* Countdown Timer */}
          <div className="mb-6 sm:mb-8 px-2">
            <p className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 opacity-90">Promo Early Bird Berakhir Dalam:</p>
            <CountdownTimer targetDate="2026-03-31T23:59:59" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button asChild className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-8 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-bold shadow-2xl w-full sm:w-auto">
              <a href="https://wa.me/6282231801953?text=Halo%20Kak%20Agung,%20saya%20mau%20daftar%20sebelum%20kuota%20habis!" target="_blank" rel="noopener noreferrer">
                🔥 Amankan Kursi Saya Sekarang!
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
