"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { servicesData } from "@/data/data"
import { ArrowUpRight } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section ref={ref} id="services" className="pt-0 pb-8 bg-white overflow-hidden">
      <div className="px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-[#ff5a1f]">
            Our Services
          </h2>
          <p className="text-[var(--color-gray)] text-xl">
            Capture, communicate, and connect. We create impactful content that conveys your brand's message and resonates with your audience.
          </p>
        </motion.div>

        {/* Services Rows - Each service gets its own row */}
        <div className="space-y-12">
          {servicesData.map((service, serviceIndex) => {
            const isEven = serviceIndex % 2 === 0
            
            return (
              <div key={serviceIndex} className="space-y-4">
                {/* Service Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  className={`text-3xl md:text-4xl font-bold text-[#ff5a1f] ${isEven ? 'text-left' : 'text-center'}`}
                >
                  {serviceIndex + 1}- {service.title}
                </motion.h3>

                {/* Service Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 + 0.1 }}
                  className={`text-gray-600 text-base max-w-3xl ${isEven ? 'text-left' : 'mx-auto text-center'}`}
                >
                  {service.description}
                </motion.p>

                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 items-center`}>
                  {/* Fixed Service Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -30 : 30 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 + 0.2 }}
                    className={`flex-shrink-0 w-[400px] h-[400px] rounded-[20px] overflow-hidden relative group cursor-pointer shadow-xl p-6 ${isEven ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-[#2d2d2d]'}`}
                  >
                    <div className="flex flex-col h-full justify-center">
                      <h4 className="text-white text-xl md:text-2xl font-bold mb-6">Including:</h4>
                      <ul className="space-y-4">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="text-white text-lg md:text-xl flex items-start">
                            <span className="mr-3">-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                {/* Scrolling Example Cards */}
                <div className="flex-1 relative w-full">
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#2d2d2d] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#2d2d2d] to-transparent z-10 pointer-events-none" />

                    <div className="overflow-hidden">
                      <motion.div
                        className="flex gap-4"
                        animate={{
                          x: [0, -((400 + 16) * (service.exampleImages?.length || 6))]
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
                        {service.exampleImages ? (
                          // Duplicate images twice for seamless loop
                          [...service.exampleImages, ...service.exampleImages].map((imagePath, exampleIndex) => (
                            <div
                              key={exampleIndex}
                              className="flex-shrink-0 w-[400px] h-[400px] rounded-[20px] overflow-hidden relative group cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
                            >
                              <img 
                                src={imagePath} 
                                alt={`${service.title} example ${exampleIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                                  <span className="text-white text-xl font-bold">Watch More</span>
                                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <ArrowUpRight className="w-6 h-6 text-white" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          // Fallback for services without exampleImages
                          [...Array(12)].map((_, exampleIndex) => (
                            <div
                              key={exampleIndex}
                              className="flex-shrink-0 w-[400px] h-[400px] rounded-[20px] overflow-hidden relative group cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                              </div>

                              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <h4 className="text-white text-lg font-bold mb-2">
                                  Example {exampleIndex + 1}
                                </h4>
                                <p className="text-white/80 text-sm">
                                  {service.title} showcase
                                </p>
                              </div>
                            </div>
                          ))
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
