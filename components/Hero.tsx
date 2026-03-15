"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image"

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const y = useTransform(scrollY, [0, 200], [0, -50]);

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

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0.001, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ opacity, scale, y }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.44, 0, 0.56, 1] }}
            className="mt-12 w-full"
          >
            <motion.img
              src="/logobanner.png"
              alt="Creativity Banner"
              className="w-full h-auto max-w-[clamp(20rem,60vw,80rem)] mx-auto"
              initial={{ scale: 2.5, opacity: 0, y: -50, rotate: -3 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
              transition={{ 
                duration: 1.8, 
                delay: 0.6,
                ease: [0.23, 1, 0.32, 1],
                scale: { duration: 1.4, ease: [0.23, 1, 0.32, 1] },
                opacity: { duration: 1.2, ease: [0.23, 1, 0.32, 1] },
                y: { duration: 1.6, ease: [0.23, 1, 0.32, 1] },
                rotate: { duration: 1.8, ease: [0.23, 1, 0.32, 1] }
              }}
            />
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
