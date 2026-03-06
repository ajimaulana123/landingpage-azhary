import { Clock } from "lucide-react"
import { TeacherCard } from "@/components/cards/TeacherCard"
import { TEACHERS, SCHEDULE } from "@/lib/constants/data"

export function TeachersSection() {
  return (
    <section id="pengajar" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Dibimbing Langsung oleh<br />
            <span className="text-emerald-600">Tim Masyayikh dari Mesir</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Native speakers berpengalaman mengajar ribuan santri internasional
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {TEACHERS.map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} />
            ))}
          </div>

          {/* Jadwal Kelas */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200/50">
            <div className="text-center mb-8">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Jadwal Pembinaan</h3>
              <p className="text-gray-600">Kelas intensif 2 sesi per hari, 4 hari seminggu</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🌅</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Sesi 1</h4>
                    <p className="text-blue-600 font-semibold">{SCHEDULE.session1}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Fokus: Nahwu, Sharaf, Qira'ah</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🌙</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Sesi 2</h4>
                    <p className="text-blue-600 font-semibold">{SCHEDULE.session2}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Fokus: Muhadatsah, Insya', Balaghah</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 font-medium">
              📅 {SCHEDULE.days} (4 hari per minggu)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
