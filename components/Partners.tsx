"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const partners = [
  { name: "TikTok", logo: "/partners/tiktoklogowhite-removebg-preview.png" },
  { name: "Snapchat", logo: "/partners/snapwhitelogo-removebg-preview.png" },
  { name: "X", logo: "/partners/xlogowhite-removebg-preview.png" },
  { name: "LinkedIn", logo: "/partners/linkedin_white_logo-removebg-preview.png" },
  { name: "Dropbox", logo: "/partners/dropbox-removebg-preview.png" },
  { name: "Monday", logo: "/partners/monday.com_vector_logo_on_transparent_background-removebg-preview.png" },
  { name: "Manychat", logo: "/partners/manychat-removebg-preview.png" },
  { name: "Envato", logo: "/partners/envatowhite-removebg-preview.png" },
  { name: "Meta", logo: "/partners/metalogowhite-removebg-preview.png" },
  { name: "Google", logo: "/partners/google_white_logo-removebg-preview.png" }
]

export default function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="py-16 px-6 md:px-12 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#ff5a1f]"
        >
          Trusted Partners
        </motion.h2>

        {/* Dark Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1a1a1a] rounded-3xl p-12 md:p-16"
        >
          {/* Partners Logo Grid with Separators */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex items-center justify-center py-12 px-8 relative ${
                  index % 5 !== 4 ? 'border-r border-gray-700' : ''
                } ${index < 5 ? 'border-b border-gray-700' : ''}`}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className={`max-w-full w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 ${
                    partner.name === 'Monday' || partner.name === 'Meta' || partner.name === 'Envato' ? 'h-28' : 'h-16'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
