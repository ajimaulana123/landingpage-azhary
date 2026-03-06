'use client'

import { useEffect, useState } from 'react'

export function ProgressBar({ current, total, label }: { current: number; total: number; label: string }) {
  const [progress, setProgress] = useState(0)
  const percentage = (current / total) * 100

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 100)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-white">{label}</span>
        <span className="text-sm font-bold text-white">{current}/{total}</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-amber-400 to-orange-500 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-white/80 mt-2 text-center">
        ⚡ {total - current} kursi tersisa!
      </p>
    </div>
  )
}
