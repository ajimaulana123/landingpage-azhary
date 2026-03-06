'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50">
        {isOpen && (
          <div className="absolute bottom-20 right-0 bg-white rounded-3xl shadow-2xl p-4 sm:p-6 w-72 sm:w-80 mb-4 animate-in slide-in-from-bottom-5">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-4">
              <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">💬 Butuh Bantuan?</h3>
              <p className="text-xs sm:text-sm text-gray-600">Konsultasi GRATIS dengan tim kami sekarang!</p>
            </div>
            <div className="space-y-3">
              <a
                href="https://wa.me/6282231801953?text=Halo%20Kak%20Agung,%20saya%20ingin%20konsultasi%20GRATIS%20tentang%20program%20eLKISI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-emerald-50 hover:bg-emerald-100 p-3 rounded-xl transition-colors"
              >
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm truncate">Agung</p>
                  <p className="text-xs text-gray-600">Admin Program</p>
                </div>
              </a>
              <a
                href="https://wa.me/6285858359161?text=Halo%20Kak%20Amy,%20saya%20ingin%20konsultasi%20GRATIS%20tentang%20program%20eLKISI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-teal-50 hover:bg-teal-100 p-3 rounded-xl transition-colors"
              >
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm truncate">Amy</p>
                  <p className="text-xs text-gray-600">Admin Program</p>
                </div>
              </a>
            </div>
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full p-3 sm:p-4 shadow-2xl hover:shadow-emerald-500/50 transition-all hover:scale-110 relative"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      </div>
    </>
  )
}
