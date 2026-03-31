"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.8]);
  
  // Logo position transforms - moves from bottom to top center
  const logoY = useTransform(scrollY, [0, 300], [0, -600]);
  const logoX = useTransform(scrollY, [0, 300], [0, 30]); // Moves from left (20%) to center (50%)
  const logoScale = useTransform(scrollY, [0, 300], [1, 0.2]); // Shrinks as it moves up
  
  // Headline animation - moves up when scrolling
  const headlineY = useTransform(scrollY, [0, 300], [0, -200]);
  const headlineOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 200);
    });
    return () => unsubscribe();
  }, [scrollY]);

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

        {/* Logo - Starts at bottom, moves up when scrolling */}
        <motion.div
          className="absolute bottom-0 left-[20%] -translate-x-1/2 translate-y-1/2 z-20"
          style={{ 
            y: logoY,
            x: logoX,
            scale: logoScale
          }}
        >
          {/* Banner Logo - Shows initially, fades out as it moves up */}
          <motion.img
            src="/logobanner.png"
            alt="Creativity Banner"
            className="h-auto max-w-[clamp(20rem,60vw,80rem)]"
            initial={{ scale: 2.5, opacity: 0, rotate: -3 }}
            animate={{ 
              scale: 1, 
              opacity: isScrolled ? 0 : 1, 
              rotate: 0 
            }}
            transition={{ 
              duration: 1.8, 
              delay: 0.6,
              ease: [0.23, 1, 0.32, 1],
              scale: { duration: 1.4, ease: [0.23, 1, 0.32, 1] },
              opacity: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
              rotate: { duration: 1.8, ease: [0.23, 1, 0.32, 1] }
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
