"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ProcessStep {
  title: string
  description: string
  color: string
}

const defaultSteps: ProcessStep[] = [
  {
    title: "Kickoff",
    description: "From ideas to action in 48 hours",
    color: "var(--color-accent)",
  },
  {
    title: "Design & Development",
    description: "Bringing your vision to life with precision",
    color: "var(--color-dark-gray)",
  },
  {
    title: "Review & Delivery",
    description: "Perfecting every detail before launch",
    color: "var(--color-dark-gray)",
  },
]

interface ProcessSlideshowProps {
  steps?: ProcessStep[]
  interval?: number
}

export default function ProcessSlideshow({ steps = defaultSteps, interval = 2300 }: ProcessSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % steps.length)
    }, interval)
    return () => clearInterval(timer)
  }, [steps.length, interval])

  return (
    <div className="relative w-[300px] h-[150px] rounded overflow-hidden" style={{
      boxShadow: "0px 0.9px 2.4px -0.34px rgba(255, 77, 0, 0.05), 0px 2.1px 5.6px -0.69px rgba(255, 77, 0, 0.05), 0px 3.9px 10.2px -1.03px rgba(255, 77, 0, 0.05), 0px 6.5px 16.9px -1.38px rgba(255, 77, 0, 0.05), 0px 10.5px 27.4px -1.72px rgba(255, 77, 0, 0.05), 0px 17.2px 44.8px -2.06px rgba(255, 77, 0, 0.05)"
    }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 50, mass: 1 }}
          className="absolute inset-0 flex flex-col justify-center px-8 py-6"
          style={{ backgroundColor: steps[currentIndex].color }}
        >
          <span className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
            Step {currentIndex + 1} of {steps.length}
          </span>
          <h3 className="text-white text-lg font-semibold mb-1">
            {steps[currentIndex].title}
          </h3>
          <p className="text-white/80 text-sm">
            {steps[currentIndex].description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              i === currentIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
