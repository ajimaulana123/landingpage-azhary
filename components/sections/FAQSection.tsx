'use client'

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQS } from "@/lib/constants/data"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-gray-900 px-2">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-center text-gray-600 mb-10 sm:mb-12 md:mb-16 text-base sm:text-lg px-2">
            Temukan jawaban atas pertanyaan Anda
          </p>

          <div className="space-y-3 sm:space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-transparent hover:border-emerald-200 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-4 sm:p-5 md:p-6 flex items-start justify-between gap-3 sm:gap-4"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 flex-1 pr-2">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-sm sm:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-emerald-200">
            <p className="text-base sm:text-lg text-gray-700 mb-4 px-2">
              <span className="font-bold text-gray-900">Masih ada pertanyaan?</span> Tim kami siap membantu Anda!
            </p>
            <a
              href="https://wa.me/6282231801953?text=Halo%20Kak%20Agung,%20saya%20punya%20pertanyaan%20tentang%20program%20eLKISI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all text-sm sm:text-base"
            >
              💬 Tanya Langsung via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
