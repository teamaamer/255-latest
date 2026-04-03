"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const partners = [
  { name: "TikTok", logo: "/partners/tiktoklogo.png" },
  { name: "Snapchat", logo: "/partners/snapchatlogo.png" },
  { name: "X", logo: "/partners/xlogo1png.png" },
  { name: "LinkedIn", logo: "/partners/linkedin1.png" },
  { name: "Dropbox", logo: "/partners/dropbox.png" },
  { name: "Monday", logo: "/partners/monday.png" },
  { name: "Manychat", logo: "/partners/manychaylogo.png" },
  { name: "Envato", logo: "/partners/envato1png.png" }
]

export default function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="py-8 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#ff5a1f]"
        >
          Our Partners
        </motion.h2>

        {/* Partners Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center hover:scale-110 transition-transform duration-300 w-24 h-12"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
