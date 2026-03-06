'use client'

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <span className="text-white font-bold text-base sm:text-xl">eLK</span>
            </div>
            <div>
              <h1 className="font-bold text-base sm:text-xl text-gray-900">Markaz Lughoh eLKISI</h1>
              <p className="text-[10px] sm:text-xs text-gray-500 font-medium">Jalan Pintas ke Al-Azhar</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 text-sm font-semibold">
            <button onClick={() => scrollToSection('program')} className="text-gray-600 hover:text-emerald-600 transition-colors">Program</button>
            <button onClick={() => scrollToSection('pengajar')} className="text-gray-600 hover:text-emerald-600 transition-colors">Pengajar</button>
            <button onClick={() => scrollToSection('biaya')} className="text-gray-600 hover:text-emerald-600 transition-colors">Biaya</button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-emerald-600 transition-colors">FAQ</button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              onClick={() => window.open('https://wa.me/6282231801953?text=Halo%20Kak%20Agung,%20saya%20ingin%20daftar%20program%20eLKISI', '_blank')}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full px-6 sm:px-8 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all"
            >
              Daftar Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('program')} 
                className="text-left text-gray-600 hover:text-emerald-600 transition-colors font-semibold py-2"
              >
                Program
              </button>
              <button 
                onClick={() => scrollToSection('pengajar')} 
                className="text-left text-gray-600 hover:text-emerald-600 transition-colors font-semibold py-2"
              >
                Pengajar
              </button>
              <button 
                onClick={() => scrollToSection('biaya')} 
                className="text-left text-gray-600 hover:text-emerald-600 transition-colors font-semibold py-2"
              >
                Biaya
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="text-left text-gray-600 hover:text-emerald-600 transition-colors font-semibold py-2"
              >
                FAQ
              </button>
              <Button 
                onClick={() => {
                  setIsMenuOpen(false)
                  window.open('https://wa.me/6282231801953?text=Halo%20Kak%20Agung,%20saya%20ingin%20daftar%20program%20eLKISI', '_blank')
                }}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full px-8 py-6 shadow-lg shadow-emerald-500/30 w-full"
              >
                Daftar Sekarang
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
