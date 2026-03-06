import { X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMPARISON_DATA } from "@/lib/constants/data"

export function ComparisonSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6 text-gray-900">
            Bandingkan Sendiri
          </h2>
          <p className="text-center text-gray-600 mb-16 text-xl font-medium">
            Lihat perbedaan nyata antara jalur mandiri biasa vs program eLKISI
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-6 text-left font-black text-gray-900 text-lg">Aspek</th>
                  <th className="p-6 text-center font-black text-red-600 text-lg">Jalur Mandiri Biasa</th>
                  <th className="p-6 text-center font-black text-emerald-600 text-lg">Program eLKISI ✨</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-6 font-semibold text-gray-900">{row.aspect}</td>
                    <td className="p-6 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <X className="w-6 h-6 text-red-600" />
                        <span className="text-gray-700">{row.mandiri}</span>
                      </div>
                    </td>
                    <td className="p-6 text-center bg-emerald-50">
                      <div className="flex flex-col items-center gap-2">
                        <Check className="w-6 h-6 text-emerald-600" />
                        <span className="text-gray-900 font-semibold">{row.elkisi}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-3xl p-8 mb-6 max-w-3xl mx-auto">
              <p className="text-3xl font-black text-gray-900 mb-2">
                💰 Total Penghematan Anda:
              </p>
              <p className="text-5xl font-black text-emerald-600 mb-2">
                Rp 30-40 JUTA
              </p>
              <p className="text-xl font-bold text-gray-700">
                + 1 Tahun Waktu Berharga!
              </p>
              <p className="text-sm text-gray-600 mt-4">
                Uang ini bisa untuk biaya hidup 1 tahun di Mesir atau investasi masa depan Anda
              </p>
            </div>
            <Button asChild className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full px-10 py-7 text-lg font-bold shadow-2xl shadow-emerald-500/40">
              <a href="https://wa.me/6282231801953?text=Halo%20Kak%20Agung,%20saya%20tertarik%20hemat%20Rp%2030-40%20juta%20dengan%20program%20eLKISI!" target="_blank" rel="noopener noreferrer">
                🚀 Saya Mau Hemat Sekarang!
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
