'use client'

import { useState, useEffect } from 'react'

export function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex gap-2 sm:gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-4 min-w-[60px] sm:min-w-[80px]">
          <span className="text-2xl sm:text-4xl font-black text-white">{value.toString().padStart(2, '0')}</span>
          <span className="text-[10px] sm:text-xs font-semibold text-white/80 uppercase mt-1">{unit}</span>
        </div>
      ))}
    </div>
  )
}
