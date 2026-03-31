"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Play } from "lucide-react"

export default function VideoShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 px-6 md:px-12 bg-white overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            See Our Work in Action
          </h2>
          <p className="text-[var(--color-gray)] text-xl max-w-2xl mx-auto">
            Watch how we bring brands to life through creative storytelling and innovative marketing
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl">
            <iframe 
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F255PS%2Fvideos%2F1068914781803684%2F&show_text=false&width=560&t=0"
              width="100%"
              height="500"
              style={{ border: 'none', overflow: 'hidden' }} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
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
