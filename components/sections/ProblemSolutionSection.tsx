import { X, Check } from "lucide-react"
import { PROBLEM_LIST, SOLUTION_LIST } from "@/lib/constants/data"

export function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6 text-gray-900">
            Mengapa Jalur Mandiri Biasa
          </h2>
          <p className="text-3xl md:text-4xl font-black text-center mb-20 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
            Membuang Waktu & Uang Anda?
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-rose-500 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-red-50 to-rose-50 rounded-[2.5rem] p-10 border border-red-200/50 shadow-xl hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <X className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-8 text-gray-900">Jalur Mandiri Konvensional</h3>
                <ul className="space-y-5">
                  {PROBLEM_LIST.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solution */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2.5rem] p-10 border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-8 text-gray-900">Program eLKISI</h3>
                <ul className="space-y-5">
                  {SOLUTION_LIST.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
