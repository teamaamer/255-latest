"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PreloaderProps {
  duration?: number
  delay?: number
}

export default function Preloader({ duration = 2.5, delay = 0 }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      const durationTimer = setTimeout(() => {
        setIsVisible(false)
      }, duration * 1000)
      return () => clearTimeout(durationTimer)
    }, delay * 1000)

    return () => clearTimeout(delayTimer)
  }, [duration, delay])

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <div className="flex flex-col items-center gap-8">
            <motion.img
              src="/255-logo.svg"
              alt="255 Agency"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-10 md:h-14 w-auto brightness-0 invert"
            />

            {/* Spinner */}
            <div className="relative w-5 h-5">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: "linear", repeat: Infinity }}
                className="absolute inset-0"
                style={{
                  background: "conic-gradient(from 0deg at 50% 50%, rgba(255, 68, 0, 0) 0deg, var(--color-accent) 342deg)",
                  mask: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><circle cx=\"10\" cy=\"10\" r=\"9\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></svg>') center / cover no-repeat",
                  WebkitMask: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><circle cx=\"10\" cy=\"10\" r=\"9\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></svg>') center / cover no-repeat",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
