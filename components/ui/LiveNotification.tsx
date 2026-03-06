'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, X } from 'lucide-react'

const notifications = [
  { name: "Ahmad dari Jakarta", action: "baru saja mendaftar program Online", time: "2 menit yang lalu" },
  { name: "Fatimah dari Surabaya", action: "baru saja konsultasi via WhatsApp", time: "5 menit yang lalu" },
  { name: "Muhammad dari Bandung", action: "baru saja mendaftar program Offline", time: "8 menit yang lalu" },
  { name: "Aisyah dari Yogyakarta", action: "baru saja download brosur", time: "12 menit yang lalu" },
  { name: "Umar dari Medan", action: "baru saja mendaftar program Online", time: "15 menit yang lalu" },
]

export function LiveNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentNotification, setCurrentNotification] = useState(0)

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true)
      setCurrentNotification((prev) => (prev + 1) % notifications.length)
      
      setTimeout(() => {
        setIsVisible(false)
      }, 5000)
    }

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(showNotification, 3000)
    
    // Then show every 15 seconds
    const interval = setInterval(showNotification, 15000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [])

  if (!isVisible) return null

  const notification = notifications[currentNotification]

  return (
    <div className="fixed bottom-24 sm:bottom-28 left-4 sm:left-6 z-40 animate-in slide-in-from-left-5 max-w-[calc(100vw-2rem)] sm:max-w-sm">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 border border-emerald-200">
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-bold text-gray-900 truncate">{notification.name}</p>
            <p className="text-[10px] sm:text-xs text-gray-600 line-clamp-2">{notification.action}</p>
            <p className="text-[10px] sm:text-xs text-gray-400 mt-1">{notification.time}</p>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 shrink-0"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
