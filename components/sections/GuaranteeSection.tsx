import { Award } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-amber-500/40">
            <Award className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
            Jaminan 100% Lulus
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Kami sangat yakin dengan metode pengajaran kami. <span className="font-bold text-gray-900">Jika Anda mengikuti program dengan disiplin (kehadiran min. 90%) dan tidak lulus tes Al-Azhar, kami akan refund 50% biaya program.</span> Ini bukan hanya janji - ini adalah KOMITMEN kami pada kesuksesan Anda!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">Target Jelas</h3>
              <p className="text-sm text-gray-600">Kurikulum dirancang khusus untuk standar ujian Al-Azhar</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-3">👨‍🏫</div>
              <h3 className="font-bold text-gray-900 mb-2">Pengajar Expert</h3>
              <p className="text-sm text-gray-600">Native speakers berpengalaman 15+ tahun</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Track Record</h3>
              <p className="text-sm text-gray-600">100% alumni angkatan 2024 & 2025 lulus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
