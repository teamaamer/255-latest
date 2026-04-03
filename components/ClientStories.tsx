"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
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
  },
  {
    quote: "255 Advertising Agency has been doing our social media and we've had a great experience. They're responsive, creative, and easy to work with. Definitely recommend them if you need help growing your online presence",
    author: "Moe Ismail",
    role: "Local Guide · 45 reviews · 2 weeks ago",
    image: "/moe.png"
  },
  {
    quote: "Great",
    author: "Mayyala K",
    role: "1 review · 15 photos · 2 weeks ago",
    image: "/mayyala.png"
  },
  {
    quote: "The best",
    author: "Eng. Rami Ajram",
    role: "6 reviews · 2 weeks ago",
    image: "/eng rami.png"
  },
  {
    quote: "Excellent service and creative team!",
    author: "Nesreen Tillo",
    role: "2 reviews · 2 weeks ago",
    image: "/nesreen.png"
  }
]

export default function ClientStories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

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

        {/* Auto-scrolling Reviews Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: (index % testimonials.length) * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-sm flex-shrink-0 w-full md:w-[calc(33.333%-1.5rem)]"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 fill-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
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
          </motion.div>
        </div>

        {/* See More Reviews Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?q=255+Advertising+Agancy+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff5a1f] text-white font-bold rounded-full hover:bg-[#ff4a0f] transition-colors shadow-lg hover:shadow-xl"
          >
            See All Reviews on Google
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
