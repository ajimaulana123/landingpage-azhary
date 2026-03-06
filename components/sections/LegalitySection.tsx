import { Check, Award } from "lucide-react"
import { AFFILIATION, EXAM_STAGES } from "@/lib/constants/data"

export function LegalitySection() {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-bold mb-4">
              <Check className="w-5 h-5" />
              Legalitas Terjamin
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Program Terafiliasi dengan Al-Azhar
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Markaz Lughoh eLKISI berjalan <span className="font-bold text-emerald-600">di bawah naungan {AFFILIATION.name} ({AFFILIATION.nameArabic})</span>. Bukan sekadar kursus mandiri, tapi program yang terafiliasi dan diakui oleh lembaga resmi Al-Azhar untuk menangani siswa asing.
            </p>
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-emerald-200">
              <Award className="w-5 h-5 text-emerald-600" />
              <span className="font-bold text-gray-900">Status: {AFFILIATION.status}</span>
            </div>
          </div>

          {/* Alur Ujian */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border border-emerald-200/50">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
              Alur Ujian Menuju Fakultas Al-Azhar
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {EXAM_STAGES.map((exam) => (
                <div key={exam.stage} className={`bg-white rounded-2xl p-6 shadow-lg relative ${exam.isFinal ? 'border-2 border-emerald-500' : ''}`}>
                  <div className={`absolute -top-4 left-6 w-12 h-12 ${exam.isFinal ? 'bg-gradient-to-br from-amber-500 to-orange-500' : 'bg-gradient-to-br from-emerald-600 to-teal-600'} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                    {exam.stage}
                  </div>
                  {exam.isFinal && (
                    <div className="absolute -top-3 right-6 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      FINAL
                    </div>
                  )}
                  <div className="mt-6">
                    <h4 className="font-bold text-lg text-gray-900 mb-3">{exam.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{exam.subtitle}</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>Biaya: <span className="font-semibold">{exam.cost}</span></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>Termasuk bimbel {exam.duration}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className={exam.isFinal ? 'font-bold text-emerald-600' : ''}>{exam.description}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-2xl p-6 text-center">
              <p className="text-gray-700 mb-2">
                <span className="font-bold text-gray-900">Bonus:</span> Sertifikat Lulus hanya <span className="font-semibold text-emerald-600">$20</span>
              </p>
              <p className="text-sm text-gray-600">
                Semua ujian sudah termasuk bimbingan intensif dari tim Masyayikh kami
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
