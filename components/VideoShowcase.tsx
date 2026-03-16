"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"

const videos = [
  {
    id: 1,
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F940107002290652%2F&show_text=false&width=267&t=0",
    width: 267,
    height: 476,
    title: "Video 1"
  },
  {
    id: 2,
    embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F255PS%2Fvideos%2F1068914781803684%2F&show_text=false&width=560&t=0",
    width: 560,
    height: 314,
    title: "Video 2"
  },
  {
    id: 3,
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F255PS%2Fvideos%2F862408349389690%2F&show_text=false&width=267&t=0",
    width: 267,
    height: 476,
    title: "Video 3"
  }
]

export default function VideoShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  return (
    <section ref={ref} className="py-16 px-6 md:px-12 bg-white overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            See Our Work in Action
          </h2>
          <p className="text-[var(--color-gray)] text-xl max-w-2xl mx-auto">
            Watch how we bring brands to life through creative storytelling and innovative marketing
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-7xl mx-auto"
        >
          {/* Transparent Mirror Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/30 to-gray-100/50 backdrop-blur-sm rounded-3xl" />
          
          {/* Video Carousel Container */}
          <div className="relative py-12 px-4">
            <div className="flex items-center justify-center gap-8">
              {/* All 3 Videos Displayed */}
              {videos.map((video, index) => {
                const isCenter = index === currentVideoIndex
                const isPrev = index === (currentVideoIndex - 1 + videos.length) % videos.length
                const isNext = index === (currentVideoIndex + 1) % videos.length
                
                return (
                  <motion.div
                    key={video.id}
                    onClick={() => setCurrentVideoIndex(index)}
                    animate={{
                      scale: isCenter ? 1 : 0.7,
                      opacity: isCenter ? 1 : 0.4,
                      x: isCenter ? 0 : isPrev ? -50 : isNext ? 50 : 0,
                      zIndex: isCenter ? 10 : 1
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`cursor-pointer transition-all duration-500 ${
                      !isCenter && 'hover:opacity-60'
                    }`}
                    style={{
                      filter: isCenter ? 'none' : 'blur(2px)'
                    }}
                  >
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <iframe 
                        src={video.embedUrl}
                        width={video.width}
                        height={video.height}
                        style={{ border: 'none', overflow: 'hidden', pointerEvents: isCenter ? 'auto' : 'none' }} 
                        scrolling="no" 
                        frameBorder="0" 
                        allowFullScreen={true} 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Video Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentVideoIndex
                      ? 'bg-[var(--color-accent)] w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent mt-8 origin-center"
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-[var(--color-gray)] text-lg mb-6">
            Ready to create something amazing together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[#ff5515] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
          >
            Let's Talk
            <Play size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
