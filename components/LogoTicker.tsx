"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface LogoTickerProps {
  title?: string
  speed?: number
  logos?: { src: string; alt: string; width: number; height: number }[]
}

const clientLogos = [
  { src: "/logos4carousel/THE BOULEVARD logo 1.png", alt: "The Boulevard", width: 120, height: 60 },
  { src: "/logos4carousel/logo (3).png", alt: "Client Logo", width: 120, height: 60 },
  { src: "/logos4carousel/logo -01.png", alt: "Client Logo", width: 120, height: 60 },
  { src: "/logos4carousel/logoo.png", alt: "Client Logo", width: 120, height: 60 },
  { src: "/logos4carousel/nirlat_logo_en_1.png", alt: "Nirlat", width: 120, height: 60 },
  { src: "/logos4carousel/tambour_logos_1.png", alt: "Tambour", width: 120, height: 60 },
]

export default function LogoTicker({ title = "Trusted by leading brands", speed = 10 }: LogoTickerProps) {
  return (
    <section aria-label="Logo Ticker" className="py-16 px-6 md:px-12 bg-[#1a1a1a] overflow-hidden">
      <div className="container mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white/60 text-sm font-medium uppercase tracking-wider mb-10"
        >
          {title}
        </motion.p>

        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-[20%] bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[20%] bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-[120px] whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: speed / 2, ease: "linear", repeat: Infinity }}
            >
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={`${logo.alt}-${index}`}
                  className="relative flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
