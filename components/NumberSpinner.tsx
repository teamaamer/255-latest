"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface NumberSpinnerProps {
  endNumber: number
  startNumber?: number
  suffix?: string
  prefix?: string
  title?: string
  duration?: number
  className?: string
}

export default function NumberSpinner({
  endNumber,
  startNumber = 0,
  suffix = "",
  prefix = "",
  title,
  duration = 2,
  className = "",
}: NumberSpinnerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [displayNumber, setDisplayNumber] = useState(startNumber)

  useEffect(() => {
    if (!isInView) return

    const startTime = performance.now()
    const diff = endNumber - startNumber

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(startNumber + diff * eased)
      setDisplayNumber(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, endNumber, startNumber, duration])

  return (
    <div ref={ref} className={`flex flex-col items-center justify-center ${className}`}>
      {title && (
        <p className="text-[var(--color-gray)] text-xs text-center mb-2 uppercase tracking-wider">
          {title}
        </p>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-5xl md:text-6xl font-medium tabular-nums"
      >
        {prefix}{displayNumber}{suffix}
      </motion.div>
    </div>
  )
}
