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

        {/* MacBook Placeholder with Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* MacBook Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-auto"
          >
            <source src="/laptop.mov" type="video/mp4" />
          </video>
          
          {/* Video Overlay - positioned inside the screen */}
          <div className="absolute top-[2.5%] left-[9%] w-[82%] h-[68%]">
            <iframe 
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F255PS%2Fvideos%2F1068914781803684%2F&show_text=false&width=560&t=0"
              width="100%"
              height="100%"
              className="rounded-sm"
              style={{ border: 'none', overflow: 'hidden' }} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
