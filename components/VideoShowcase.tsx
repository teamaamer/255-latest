"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Lightbulb, TrendingUp, Camera, Code, DollarSign, Wrench, BarChart3 } from "lucide-react"

export default function VideoShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const expertiseAreas = [
    { icon: Lightbulb, title: "Social Media & Content Strategy" },
    { icon: TrendingUp, title: "Marketing & Business Growth" },
    { icon: Camera, title: "Creative & Production" },
    { icon: Code, title: "Technical & Development" },
    { icon: DollarSign, title: "Advertising & Scaling" },
    { icon: Wrench, title: "Interior & Experience Design" },
    { icon: BarChart3, title: "Analysis & Performance" }
  ]

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-orange-500">
            Book Your Expert Consultation
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Get professional, hands-on guidance tailored to your business.
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              At 255, we provide strategic consultations covering marketing, content, and growth to help you make smarter decisions and achieve real results.
            </p>

            {/* Expertise Areas */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Area of Expertise:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expertiseAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <area.icon className="w-6 h-6 text-gray-700 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                    <span className="text-black font-medium">{area.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Consultant Profile */}
            <div className="bg-gray-50 rounded-xl p-6 space-y-3">
              <h4 className="text-xl font-bold text-gray-900">Consultant Profile</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-700 mt-1">•</span>
                  <span>Led by Sakher Olayaan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-700 mt-1">•</span>
                  <span>8+ years in direct & international sales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-700 mt-1">•</span>
                  <span>8+ years in marketing & advertising</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-700 mt-1">•</span>
                  <span>Digital Marketing Manager for 3 global companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-700 mt-1">•</span>
                  <span>Worked with 300+ local & international businesses</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://calendly.com/sakher-255adv/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:bg-orange-600"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
              </svg>
              Book Consultation on Calendly
            </motion.a>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/sakhercons.jpeg"
                alt="Sakher Olayaan - Consultation"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
