import { Check, Award } from "lucide-react"
import { PricingCard } from "@/components/cards/PricingCard"
import { PRICING_PLANS, EXAM_COSTS, LIVING_COSTS, SCHOLARSHIP } from "@/lib/constants/data"

export function PricingSection() {
  return (
    <section id="biaya" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Investasi Pendidikan Anda
          </h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Pilih program yang sesuai dengan kebutuhan dan budget Anda
          </p>

          {/* Price Comparison Banner */}
          <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">I'dad Lughawi di Mesir</p>
                <p className="text-3xl font-black text-red-600 line-through">Rp 30-40 juta</p>
                <p className="text-xs text-gray-500 mt-1">Per tahun + tidak ada jaminan lulus</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-4xl font-black text-emerald-600">VS</div>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Program eLKISI</p>
                <p className="text-3xl font-black text-emerald-600">Rp 3-6 juta</p>
                <p className="text-xs text-gray-700 font-semibold mt-1">Per tahun + JAMINAN 100% lulus!</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-2xl font-black text-gray-900">
                💰 HEMAT: <span className="text-emerald-600">Rp 25-35 JUTA!</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PRICING_PLANS.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>

          <div className="mt-12 bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Rincian Biaya Ujian (Dibayar Terpisah)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Biaya Ujian di Al-Azhar:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>• {EXAM_COSTS.tahdidMustawa.description}</span>
                    <span className="font-semibold">{EXAM_COSTS.tahdidMustawa.cost}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• {EXAM_COSTS.kenaikanTingkat.description}</span>
                    <span className="font-semibold">{EXAM_COSTS.kenaikanTingkat.cost}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• {EXAM_COSTS.tahili.description}</span>
                    <span className="font-semibold">{EXAM_COSTS.tahili.cost}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• {EXAM_COSTS.sertifikat.description}</span>
                    <span className="font-semibold">{EXAM_COSTS.sertifikat.cost}</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">*Sudah termasuk bimbel 30-40 hari</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Estimasi Biaya Hidup di Mesir:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>• Asrama per bulan</span>
                    <span className="font-semibold">{LIVING_COSTS.asrama}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Makan & kebutuhan</span>
                    <span className="font-semibold">{LIVING_COSTS.kebutuhanHarian}</span>
                  </li>
                  <li className="flex justify-between border-t border-emerald-200 pt-2 mt-2">
                    <span className="font-bold">Total per bulan</span>
                    <span className="font-bold text-emerald-600">{LIVING_COSTS.totalEstimasi}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">🎓 Program Beasiswa Prestasi</h4>
                <p className="text-gray-700 mb-3">Kami memberikan beasiswa kepada santri berprestasi:</p>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-semibold text-amber-700">• {SCHOLARSHIP.prestasi.title}:</span> {SCHOLARSHIP.prestasi.criteria}</li>
                  <li><span className="font-semibold text-amber-700">• {SCHOLARSHIP.hafidz.title}:</span> {SCHOLARSHIP.hafidz.criteria}</li>
                  <li><span className="font-semibold text-amber-700">• Bentuk:</span> {SCHOLARSHIP.prestasi.benefit}</li>
                  <li><span className="font-semibold text-amber-700">• Tanggung Jawab:</span> {SCHOLARSHIP.hafidz.responsibility}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 text-center">
            <p className="text-gray-700">
              <span className="font-bold text-amber-700">💰 Promo Early Bird:</span> Dapatkan diskon hingga <span className="font-bold">Rp 2.000.000</span> untuk pendaftaran sebelum 31 Maret 2026!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
