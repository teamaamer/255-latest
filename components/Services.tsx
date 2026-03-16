"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { servicesData } from "@/data/data"
import { Lightbulb, Palette, Sparkles, Zap, Monitor, Calendar } from "lucide-react"

const iconMap: Record<string, any> = {
  lightbulb: Lightbulb,
  palette: Palette,
  sparkles: Sparkles,
  zap: Zap,
  monitor: Monitor,
  calendar: Calendar,
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="services" className="py-8 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-[var(--color-gray)] text-xl max-w-2xl">
            Capture, communicate, and connect. We create impactful content that conveys your brand's message and resonates with your audience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-gray-200 pt-6"
            >
              {/* Title with Icon */}
              <div className="flex items-center gap-3 mb-3">
                {service.icon && iconMap[service.icon] && (
                  (() => {
                    const Icon = iconMap[service.icon];
                    return <Icon className="text-[var(--color-accent)] flex-shrink-0" size={32} />;
                  })()
                )}
                <h3 className="text-3xl font-bold">{service.title}</h3>
              </div>
              <p className="text-[var(--color-gray)] text-lg mb-3">{service.description}</p>
              <ul className="space-y-2">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="text-[var(--color-gray)] text-sm flex items-start">
                    <span className="text-[var(--color-accent)] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
