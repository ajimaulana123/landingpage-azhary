import { Check } from "lucide-react"
import Image from "next/image"
import { TESTIMONIALS } from "@/lib/constants/data"

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6 text-gray-900">
            Kata Alumni Kami
          </h2>
          <p className="text-center text-gray-600 mb-16 text-xl font-medium">
            Mereka sudah merasakan langsung manfaat program eLKISI
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-200/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full overflow-hidden relative">
                      <Image 
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&size=128&background=10b981&color=fff&bold=true&format=svg`}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.faculty}</p>
                      <p className="text-xs text-emerald-600 font-semibold">{testimonial.year}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-emerald-600 font-semibold">
                    <Check className="w-4 h-4" />
                    Verified Alumni
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
