"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import GlobalTime from "@/components/GlobalTime"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const progress = Math.min(scrollY / documentHeight, 1)
      
      setIsScrolled(scrollY > 50)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: "Hero", href: "/#hero" },
    { label: "Services", href: "/#services" },
    { label: "About Us", href: "/#about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Team", href: "/#team" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/#contact" },
  ]

  const socialLinks = [
    { 
      label: "Instagram", 
      href: "https://www.instagram.com/255.ps/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/company/255ad/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      label: "Facebook", 
      href: "https://www.facebook.com/255PS",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      label: "YouTube", 
      href: "https://www.youtube.com/@255PS",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    { 
      label: "TikTok", 
      href: "https://www.tiktok.com/@255.ps",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 96 96">
          <rect width="96" height="96" rx="21" fill="transparent"/>
          <path d="M73.31 25.7456C72.785 25.4743 72.274 25.1769 71.7788 24.8545C70.3389 23.9025 69.0186 22.7808 67.8465 21.5135C64.9139 18.158 63.8186 14.7538 63.4151 12.3705H63.4313C63.0943 10.3921 63.2337 9.11214 63.2547 9.11214H49.8974V60.7624C49.8974 61.4558 49.8974 62.1412 49.8682 62.8185C49.8682 62.9027 49.8601 62.9805 49.8553 63.0712C49.8553 63.1085 49.8553 63.1474 49.8472 63.1863C49.8472 63.196 49.8472 63.2057 49.8472 63.2154C49.7064 65.0686 49.1123 66.8588 48.1173 68.4286C47.1222 69.9983 45.7566 71.2994 44.1407 72.2175C42.4565 73.1757 40.5517 73.6782 38.614 73.6757C32.3906 73.6757 27.3468 68.6011 27.3468 62.334C27.3468 56.0669 32.3906 50.9923 38.614 50.9923C39.7921 50.9912 40.9629 51.1766 42.083 51.5415L42.0992 37.9412C38.6989 37.502 35.2444 37.7722 31.9538 38.7348C28.6631 39.6975 25.6077 41.3317 22.9802 43.5343C20.678 45.5346 18.7425 47.9214 17.2608 50.5872C16.6969 51.5594 14.5695 55.4658 14.3119 61.8058C14.1499 65.4044 15.2306 69.1326 15.7458 70.6734V70.7058C16.0699 71.6132 17.3256 74.7094 19.372 77.3197C21.0221 79.4135 22.9716 81.2527 25.1579 82.7783V82.7459L25.1903 82.7783C31.6567 87.1724 38.8263 86.884 38.8263 86.884C40.0674 86.8338 44.2249 86.884 48.9463 84.6464C54.183 82.1658 57.1642 78.47 57.1642 78.47C59.0688 76.2618 60.5832 73.7452 61.6426 71.0282C62.8513 67.8509 63.2547 64.0401 63.2547 62.5171V35.1155C63.4168 35.2127 65.5749 36.6401 65.5749 36.6401C65.5749 36.6401 68.6842 38.633 73.5352 39.9309C77.0155 40.8544 81.7045 41.0488 81.7045 41.0488V27.7887C80.0615 27.9669 76.7255 27.4485 73.31 25.7456Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      label: "Email", 
      href: "mailto:255@255.ps",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
  ]

  const legalLinks = [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Service", href: "/legal/terms-of-service" },
    { label: "Disclaimer", href: "/legal/disclaimer" },
    { label: "404", href: "/404" },
  ]

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-0.5 md:px-12 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : ''}`}>
        <div className="flex items-center">
          {/* Left Social Links */}
          <div className="hidden md:flex items-center gap-6 flex-1">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[var(--color-accent)] transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Center Logo Banner */}
          <div className="flex-auto relative">
            {/* Logo Banner - Shows when NOT scrolled */}
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ 
                opacity: isScrolled ? 0 : 1,
                scale: isScrolled ? 0.8 : 1,
                y: isScrolled ? -20 : 0
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex justify-center"
              style={{ display: isScrolled ? 'none' : 'flex' }}
            >
              <Link href="/">
                <img
                  src="/logobanner.png?v=2"
                  alt="Logo Banner"
                  className="h-5 md:h-6 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
            </motion.div>

            {/* 255 Logo - Shows when scrolled */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isScrolled ? 1 : 0,
                scale: isScrolled ? 1 : 0.8,
                y: isScrolled ? 0 : 20
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex justify-center absolute inset-0"
              style={{ display: isScrolled ? 'flex' : 'none' }}
            >
              <Link href="/">
                <img
                  src="/255-logo.svg?v=2"
                  alt="255 Agency Logo"
                  className="h-5 md:h-6 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
            </motion.div>
          </div>

          {/* Right Burger Menu */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center gap-2.5 cursor-pointer"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 10 : 0 }}
                className="w-10 md:w-12 h-1 bg-white block"
              />
              <motion.span
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -10 : 0 }}
                className="w-10 md:w-12 h-1 bg-white block"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md overflow-y-auto"
          >
            <div className="min-h-full flex flex-col items-center justify-center px-6 py-16 md:py-20">
              {/* Timezone Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-4 md:mb-6 text-center"
              >
                <h2 className="text-white text-sm md:text-base mb-2">
                  We are based in <span className="text-[var(--color-accent)]">California</span>
                </h2>
                <GlobalTime timezone="America/Los_Angeles" label="California" />
              </motion.div>

              {/* Main Menu */}
              <nav className="mb-4 md:mb-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-[var(--color-light-gray)] hover:text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Legal Links */}
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2 md:gap-4 justify-center max-w-2xl"
              >
                {legalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[var(--color-light-gray)] hover:text-white text-xs transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
