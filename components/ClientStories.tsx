"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const testimonials = [
  {
    quote: "This agency doesn't just run ads — they build real marketing strategies. They took the time to understand our business goals and created campaigns that delivered measurable results. Communication has been excellent, deadlines are always met, and their creativity stands out. We value them as a true partner in our growth.",
    author: "KidsRus Learning Center",
    role: "4 reviews · a week ago",
    image: "/images/AvA1cgyFsNBzB5fQS5lTHrLbWrc.jpg"
  },
  {
    quote: "Wish I've done this years ago, it's been 3 months only but our numbers has gone up significantly!! and still on going although it's Ramadan already!! Thanks guys 🙏🙏🙏",
    author: "Hatim Qarmash",
    role: "3 reviews · a week ago",
    image: "/images/H2vtO5AcqO3JQ9DLTNll2arrgiE.jpg"
  },
  {
    quote: "Professional, creative, and consistent. Our social media has never looked better. Highly recommend!",
    author: "Star Box Day Care",
    role: "6 reviews · 1 photo · a week ago",
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
