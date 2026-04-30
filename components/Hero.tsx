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
      {/* Background Video */}
      <motion.div
        initial={{ scale: 1.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.44, 0, 0.56, 1] }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: 'transform' }}
        >
          <source src="/videos/websitehero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            {/* Headline removed */}
          </div>
        </div>

      </div>
    </section>
  )
}
