"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Intro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const textLines = [
    "Design that",
    "captivates today",
    "& inspires",
    "tomorrow."
  ]

  return (
    <section ref={ref} id="introduction" className="py-32 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ scale: 0.7 }}
          animate={isInView ? { scale: 1 } : { scale: 0.7 }}
          transition={{ duration: 1.5, ease: [0.44, 0, 0.56, 1] }}
          className="mb-20"
        >
          <h2 className="text-white text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
            {textLines.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </h2>
        </motion.div>

        {/* Video Promo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative aspect-video rounded-lg overflow-hidden"
        >
          <video
            src="/promo-video.mp4"
            loop
            muted
            playsInline
            autoPlay
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
