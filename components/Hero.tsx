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

  // Detect if mobile for performance
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Mobile Image or Desktop Video */}
      <div className="absolute inset-0 z-0">
        {isMobile ? (
          // Mobile: Fast-loading static image
          <Image
            src="/heromobile.png"
            alt="255 Agency"
            fill
            priority
            quality={95}
            className="object-cover"
            style={{ objectPosition: 'center center' }}
            sizes="100vw"
          />
        ) : (
          // Desktop: Video
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/herosection-bg.png"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ 
              objectPosition: 'center center',
              transform: 'scale(1)',
            }}
          >
            <source src="/videos/websitehero.mp4" type="video/mp4" />
          </video>
        )}
      </div>

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
