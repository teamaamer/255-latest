"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const testimonials = [
  {
    quote: "255 transformed our brand identity completely. Their attention to detail and creative vision exceeded all expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechVision",
    image: "/images/AvA1cgyFsNBzB5fQS5lTHrLbWrc.jpg"
  },
  {
    quote: "Working with 255 was a game-changer for our digital presence. They delivered beyond what we imagined.",
    author: "Michael Chen",
    role: "Founder, Innovate Labs",
    image: "/images/H2vtO5AcqO3JQ9DLTNll2arrgiE.jpg"
  },
  {
    quote: "The team's expertise in design and strategy helped us achieve remarkable growth in just six months.",
    author: "Emma Williams",
    role: "Marketing Director, Pulse",
    image: "/images/kMKd9NTvf9O2me1pvCl9a31nIXc.jpg"
  }
]

export default function ClientStories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="client-stories" className="py-32 px-6 md:px-12 bg-[var(--color-light-gray)]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Client Stories
          </h2>
          <p className="text-[var(--color-gray)] text-xl max-w-2xl">
            Hear from the brands we've helped transform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-[var(--color-gray)] text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
