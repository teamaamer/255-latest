"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Play } from "lucide-react"

export default function VideoShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            See Our Latest
          </h2>
          <p className="text-[var(--color-gray)] text-xl max-w-2xl mx-auto">
            Watch how we bring brands to life through creative storytelling and innovative marketing
          </p>
        </motion.div>

        {/* MacBook Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* MacBook Body */}
          <div className="relative">
            {/* Screen */}
            <div className="bg-black rounded-t-2xl p-3 md:p-4 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
              
              {/* Screen Content */}
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
                <iframe 
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F255PS%2Fvideos%2F1068914781803684%2F&show_text=false&width=560&t=0"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none', overflow: 'hidden' }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </div>
            
            {/* MacBook Base */}
            <div className="relative h-2 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-sm"></div>
            
            {/* MacBook Bottom */}
            <div className="relative">
              <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-gray-400 to-gray-500 rounded-b-xl shadow-lg"></div>
              <div className="h-1 bg-gray-600 mx-auto" style={{ width: '60%' }}></div>
            </div>
          </div>

          {/* Reflection Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-t-2xl"></div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-[var(--color-gray)] text-lg mb-6">
            Ready to create something amazing together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[#ff5515] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
          >
            Let's Talk
            <Play size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
