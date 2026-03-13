"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.6, filter: "brightness(0.9)" }}
        animate={{ scale: 1, filter: "brightness(0.9)" }}
        transition={{ duration: 2, ease: [0.44, 0, 0.56, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/herosection-bg.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0.001, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.44, 0, 0.56, 1] }}
          >
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8">
              Creative solutions<br />
              that inspire and engage.
            </h1>
          </motion.div>

          {/* Agency Label */}
          <motion.div
            initial={{ opacity: 0.001, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.44, 0, 0.56, 1] }}
            className="flex items-center gap-4"
          >
            <motion.img
              src="/255-logo.svg"
              alt="255 Agency"
              className="h-8 md:h-10 w-auto brightness-0 invert"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0.001, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.44, 0, 0.56, 1] }}
            className="mt-12"
          >
            <h1 className="text-[var(--color-accent)] text-[clamp(4rem,12vw,14rem)] font-bold leading-none tracking-[0.05em] md:tracking-[0.08em] lg:tracking-[0.1em] w-full">
              CREATIVITY
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Decorative Plus Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.001, x: i % 2 === 0 ? 367 : -367 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: [0.44, 0, 0.56, 1] }}
            className="absolute text-white/20 text-4xl"
            style={{
              top: `${20 + (i * 10)}%`,
              left: i % 2 === 0 ? '10%' : 'auto',
              right: i % 2 === 0 ? 'auto' : '10%',
            }}
          >
            +
          </motion.div>
        ))}
      </div>
    </section>
  )
}
