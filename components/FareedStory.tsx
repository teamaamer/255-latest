"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const clientStories = [
  {
    logo: "/fareedlogo.jpeg",
    title: "Fareed Zamanah Café",
    story: [
      "Our journey with Fareed Zamanah Café began in 2020 and continues to this day. At the start of the collaboration, we studied the restaurant's culture and audience to create a concept that reflects the spirit of the place and builds a stronger connection with its visitors.",
      "From that process, the character of Al Mokhtar was born, inspired by the restaurant's owner. We designed a custom character that embodies the café's identity and introduced a new, modern way to communicate with its audience.",
      "This idea achieved great success, and Al Mokhtar quickly became an essential part of the restaurant's experience. To this day, the character continues to attract visitors and strengthen the café's presence in their minds."
    ]
  },
  {
    logo: "/1948logoo.jpeg",
    title: "1948 Restaurant",
    story: [
      "The story of 1948 Restaurant began with a message rooted in national meaning, culture, and heritage. Since its establishment in 2023 and continuing to this day, we have supported the restaurant through different stages of its development and growth.",
      "We contributed to studying the concept of the place, supporting the interior design and décor, and helping shape a menu that fits both the restaurant's identity and its target audience. We also followed the brand on a daily basis, from photography and overall theme to the restaurant's message, while developing advertising campaigns and marketing ideas.",
      "Today, 1948 Restaurant has become one of the leading restaurants in the West Bank, attracting visitors and expatriates from around the world who come to experience the place and everything it represents."
    ]
  },
  {
    logo: "/dahia.jpeg",
    title: "Dahia Investment & General Trading Company",
    story: [
      "Since its establishment in 2009, Dahia Investment & General Trading Company had no effective digital presence. When our collaboration began in 2020, we started by studying the company and its message in depth, then worked on building a complete presence that reflects its position and ambition in the market.",
      "We developed a full visual identity for the company, prepared its content, supervised photography, helped attract new points of sale, supported product marketing, contributed to introducing and importing new products, and designed custom products that reflect the company's identity.",
      "Today, Dahia has become one of the largest companies in the West Bank in the fields of trade and investment, and our journey with them has continued from 2020 until today."
    ]
  }
]

export default function FareedStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clientStories.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clientStories.length) % clientStories.length)
  }

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section ref={ref} className="py-16 pb-4 px-6 md:px-12 bg-[#2d2d2d]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Client Stories
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Logo */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                <Image
                  src={clientStories[currentIndex].logo}
                  alt={clientStories[currentIndex].title}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{clientStories[currentIndex].title}</h3>
                <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                  {clientStories[currentIndex].story.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-colors z-10"
            aria-label="Previous story"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-colors z-10"
            aria-label="Next story"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {clientStories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-white w-8' : 'bg-gray-500'
                }`}
                aria-label={`Go to story ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
