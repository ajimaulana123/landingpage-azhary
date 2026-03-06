import { Phone, Mail, MessageCircle } from "lucide-react"
import { CONTACT } from "@/lib/constants/data"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">eLK</span>
              </div>
              <span className="font-bold text-lg">Markaz Lughoh eLKISI</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Lembaga persiapan bahasa Arab terpercaya untuk kuliah di Al-Azhar Mesir.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="font-semibold text-white">📍 Kantor Mesir:</p>
              <p>{CONTACT.addressEgypt}</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Program</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-emerald-400">Matrikulasi Online</a></li>
              <li><a href="#" className="hover:text-emerald-400">Matrikulasi Offline</a></li>
              <li><a href="#" className="hover:text-emerald-400">Pendampingan Visa</a></li>
              <li><a href="#" className="hover:text-emerald-400">Beasiswa Prestasi</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Informasi</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-emerald-400">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-emerald-400">Testimoni Alumni</a></li>
              <li><a href="#" className="hover:text-emerald-400">Blog</a></li>
              <li><a href="#" className="hover:text-emerald-400">Jadwal Kelas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <div>
                  <p className="text-white font-semibold">{CONTACT.agung.name}</p>
                  <a href={`tel:${CONTACT.agung.phone}`} className="hover:text-emerald-400">{CONTACT.agung.phone}</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <div>
                  <p className="text-white font-semibold">{CONTACT.amy.name}</p>
                  <a href={`tel:${CONTACT.amy.phone}`} className="hover:text-emerald-400">{CONTACT.amy.phone}</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-emerald-400">{CONTACT.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <a href={CONTACT.agung.whatsapp} className="hover:text-emerald-400">WhatsApp Business</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-sm text-gray-400">
              © 2026 Markaz Lughoh eLKISI. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400">Kebijakan Privasi</a>
              <span>•</span>
              <a href="#" className="hover:text-emerald-400">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
