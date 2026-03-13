"use client"

import { motion } from "framer-motion"

interface ArcTickerProps {
  text?: string
  size?: number
  visible?: boolean
}

export default function ArcTicker({
  text = "We are a subscription-based digital creative agency from Milano.",
  size = 274,
  visible = true,
}: ArcTickerProps) {
  if (!visible) return null

  const radius = size / 2 - 20
  const characters = text.split("")
  const anglePerChar = 360 / characters.length

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="w-full h-full"
      >
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
          {characters.map((char, i) => {
            const angle = i * anglePerChar - 90
            const x = size / 2 + radius * Math.cos((angle * Math.PI) / 180)
            const y = size / 2 + radius * Math.sin((angle * Math.PI) / 180)
            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                transform={`rotate(${angle + 90}, ${x}, ${y})`}
                className="fill-white text-[11px] font-semibold uppercase"
                style={{ letterSpacing: "-0.05em" }}
              >
                {char}
              </text>
            )
          })}
        </svg>
      </motion.div>
    </div>
  )
}
