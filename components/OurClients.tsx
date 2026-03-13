"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function OurClients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="clients" className="py-32 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Our Clients
          </h2>
          <p className="text-[var(--color-silver)] text-xl max-w-2xl">
            Trusted by leading brands to deliver exceptional results and creative excellence.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative w-full aspect-[16/9] md:aspect-[21/9]"
      >
        <Image
          src="/ourClients.webp"
          alt="Our Clients"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  )
}
