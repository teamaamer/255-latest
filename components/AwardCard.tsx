"use client"

import { motion } from "framer-motion"

interface AwardCardProps {
  award: string
  event: string
  date: string
}

export default function AwardCard({ award, event, date }: AwardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-1 py-2 px-0 border-b border-[var(--color-border)] overflow-hidden"
    >
      <div className="flex items-center justify-between w-full">
        <h6 className="text-black font-bold text-sm">
          {award}
        </h6>
        <p className="text-black text-sm">
          {date}
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-[var(--color-gray)] text-sm">
          {event}
        </p>
      </div>
    </motion.div>
  )
}
