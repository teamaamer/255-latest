"use client"

import { AnimatePresence, motion, useInView } from "framer-motion"
import { useMemo, useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Briefcase, ArrowRight } from "lucide-react"

interface PortfolioSlide {
  slug: string
  title: string
  description?: string
  highlights?: string[]
  logo: string
  images: string[]
}

function CardIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9C0.75 4.44365 4.44365 0.75 9 0.75Z"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1.5"
      />
      <path
        d="M5.25 9.25L7.75 11.5L12.75 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function PortfolioSection({ slides }: { slides: PortfolioSlide[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const toGridNine = (images: string[]) => {
    const safe = images.filter(Boolean).slice(0, 9) // Only use first 9 images
    if (safe.length === 0) return [] as string[]
    const out: string[] = []
    for (let i = 0; i < 9; i++) {
      out.push(safe[i % safe.length])
    }
    return out
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const isAnimating = useRef(false)

  const goTo = (nextIndex: number) => {
    if (slides.length <= 1) return
    if (isAnimating.current) return
    isAnimating.current = true
    setCurrentIndex((nextIndex + slides.length) % slides.length)
    window.setTimeout(() => {
      isAnimating.current = false
    }, 450)
  }

  // Swipe handlers
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      // Swiped right - go to previous
      goTo(currentIndex - 1)
    } else if (info.offset.x < -swipeThreshold) {
      // Swiped left - go to next
      goTo(currentIndex + 1)
    }
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused || slides.length <= 1) return

    const interval = setInterval(() => {
      goTo(currentIndex + 1)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentIndex, isPaused, slides.length])

  return (
    <section ref={ref} id="portfolio" className="py-32 px-6 md:px-12 bg-[#1a1a1a]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <Briefcase className="text-[var(--color-accent)]" size={28} />
            <h5 className="text-[var(--color-silver)] text-sm uppercase tracking-wider">
              Our Portfolio
            </h5>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--color-gray)] text-lg mb-12"
          >
            Selected Works & Client Success Stories
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-5xl md:text-7xl font-bold mb-6"
          >
            Transforming Brands<br />Through Creative Excellence
          </motion.h2>

          <motion.h5
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[var(--color-silver)] text-xl"
          >
            Explore our diverse portfolio of successful brand partnerships
          </motion.h5>
        </div>

        {/* Customer Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows - Left */}
          <button
            type="button"
            onClick={() => goTo(currentIndex - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors flex items-center justify-center backdrop-blur-sm"
            aria-label="Previous project"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>

          {/* Navigation Arrows - Right */}
          <button
            type="button"
            onClick={() => goTo(currentIndex + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors flex items-center justify-center backdrop-blur-sm"
            aria-label="Next project"
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          {/* Slide */}
          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-dark-gray)] border border-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[currentIndex]?.slug}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="pt-6 px-6 pb-2 md:pt-8 md:px-8 md:pb-3 lg:pt-10 lg:px-10 lg:pb-4 cursor-grab active:cursor-grabbing"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                  {/* Left: customer header + 3 cards */}
                  <div>
                    {slides[currentIndex]?.logo ? (
                      <div className="relative w-40 h-20 md:w-48 md:h-24 lg:w-56 lg:h-28 mb-4">
                        <Image
                          src={slides[currentIndex]?.logo}
                          alt={`${slides[currentIndex]?.title} logo`}
                          fill
                          sizes="(max-width: 768px) 192px, 256px"
                          className="object-contain object-left"
                          priority
                        />
                      </div>
                    ) : null}

                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                      {slides[currentIndex]?.title}
                    </h3>

                    <div className="grid grid-cols-1 gap-3 mb-4">
                      {(slides[currentIndex]?.highlights || []).map((text, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl bg-black/30 border border-white/10 p-4 md:p-5"
                        >
                          <div className="flex items-start gap-3">
                            <div className="text-white/80 mt-[2px]">
                              <CardIcon />
                            </div>
                            <p className="text-[var(--color-silver)] leading-relaxed text-xs md:text-sm">
                              {text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View Full Project CTA */}
                    <Link
                      href={`/portfolio/${slides[currentIndex]?.slug}`}
                      className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors group"
                    >
                      View Full Project
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Right: 3x3 portfolio grid */}
                  <div className="scale-[0.9] origin-top-left">
                    <div className="grid grid-cols-3 gap-2">
                      {toGridNine(slides[currentIndex]?.images || []).map((src, idx) => (
                        <div
                          key={`${slides[currentIndex]?.slug}-${idx}`}
                          className="relative aspect-square overflow-hidden rounded-xl bg-black/20 border border-white/10"
                        >
                          <Image
                            src={src}
                            alt={`${slides[currentIndex]?.title} portfolio ${idx + 1}`}
                            fill
                            sizes="(max-width: 1024px) 30vw, 220px"
                            className="object-cover"
                            priority={idx < 2}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation - Moved to Bottom */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-10 bg-white" : "w-2 bg-white/40 hover:bg-white/60"}`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        </motion.div>

        {/* View Full Portfolio Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors group"
          >
            View Full Portfolio
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
