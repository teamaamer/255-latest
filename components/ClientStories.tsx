"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const testimonials = [
  {
    quote: "Professional, creative, and consistent. Our social media has never looked better. Highly recommend!",
    author: "Star Box Day Care",
    role: "6 reviews · 1 photo · 4 weeks ago",
    image: "/starbok1.png"
  },
  {
    quote: "We're very happy with the service we received. The team is creative, attentive, and always quick to respond. They helped our business grow, and we appreciate their hard work!",
    author: "laveen health care",
    role: "1 review · 4 weeks ago",
    image: "/laveen.png"
  },
  {
    quote: "No doubt you're the best. Got them to handle my 2 business and cant see anything but the good. Highly recommended",
    author: "Mike Swaid",
    role: "3 reviews · 2 weeks ago",
    image: "/kazamaza.png"
  }
]

export default function ClientStories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="client-stories" className="py-16 px-6 md:px-12 bg-[#2d2d2d]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-5xl md:text-7xl font-bold text-white">
              Google Reviews
            </h2>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-8 h-8 fill-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <span className="text-gray-400 text-2xl ml-2">(5/5)</span>
            </div>
          </div>
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
