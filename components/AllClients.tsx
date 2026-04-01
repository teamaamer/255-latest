"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function AllClients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-0 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="w-full px-4 md:px-8"
      >
        {/* Grid container that displays the image as a grid */}
        <div 
          className="w-full"
          style={{
            backgroundImage: 'url(/allclients.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            aspectRatio: '16/9',
            width: '100%'
          }}
        />
      </motion.div>
    </section>
  )
}
