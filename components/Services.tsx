"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { servicesData } from "@/data/data"
import { ArrowUpRight } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate services for seamless infinite loop
  const duplicatedServices = [...servicesData, ...servicesData, ...servicesData]

  return (
    <section ref={ref} id="services" className="py-16 bg-white overflow-hidden">
      <div className="px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-[#ff5a1f]">
            Our Services
          </h2>
          <p className="text-[var(--color-gray)] text-xl">
            Capture, communicate, and connect. We create impactful content that conveys your brand's message and resonates with your audience.
          </p>
        </motion.div>

        {/* Premium Carousel with Masked Edges */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: isPaused ? undefined : [0, -(250 + 24) * servicesData.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
            >
              {duplicatedServices.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[250px] h-[320px] rounded-[20px] overflow-hidden relative group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] shadow-lg hover:shadow-2xl"
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                >
                  {/* Background Image with Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-white text-xl font-bold mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Floating Circular Arrow Button */}
                  <div className="absolute bottom-4 right-4">
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        index % servicesData.length === 2 
                          ? 'bg-[#FFD54F] shadow-lg' 
                          : 'bg-black/80 shadow-md'
                      }`}
                      style={{
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                      }}
                    >
                      <ArrowUpRight 
                        className={`w-5 h-5 transition-transform duration-300 group-hover:rotate-12 ${
                          index % servicesData.length === 2 
                            ? 'text-black' 
                            : 'text-white'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
