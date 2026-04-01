"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function AllClients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="relative w-full">
          <Image
            src="/allclients.png"
            alt="All Our Clients"
            width={2000}
            height={1500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </motion.div>
    </section>
  )
}
