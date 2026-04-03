"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function VideoShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="pt-0 pb-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            See Our Latest
          </h2>
          <p className="text-[var(--color-gray)] text-xl max-w-2xl mx-auto">
            Watch how we bring brands to life through creative storytelling and innovative marketing
          </p>
        </motion.div>

        {/* MacBook Mockup with Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* MacBook Pro Frame */}
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-3 shadow-2xl">
            {/* Screen Bezel */}
            <div className="relative bg-black rounded-lg p-2">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl z-10"></div>
              
              {/* Screen */}
              <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-[16/10]">
                <iframe 
                  src="https://www.youtube.com/embed/OhHfUAelvWo?autoplay=1&mute=1&loop=1&playlist=OhHfUAelvWo"
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  style={{ border: 'none' }} 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
            
            {/* Bottom Base */}
            <div className="h-2 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl mt-1"></div>
          </div>
          
          {/* MacBook Shadow */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/20 blur-2xl rounded-full"></div>
        </motion.div>
      </div>
    </section>
  )
}
