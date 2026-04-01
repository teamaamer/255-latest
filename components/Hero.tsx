"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.8]);
  
  // Headline animation - moves up when scrolling
  const headlineY = useTransform(scrollY, [0, 300], [0, -200]);
  const headlineOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0.001, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ y: headlineY, opacity: headlineOpacity }}
              transition={{ duration: 1.5, ease: [0.44, 0, 0.56, 1] }}
            >
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8">
                Creative solutions<br />
                that inspire and engage.
              </h1>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
