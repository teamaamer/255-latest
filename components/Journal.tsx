"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const articles = [
  {
    title: "The Future of Digital Design",
    excerpt: "Exploring emerging trends and technologies shaping the design landscape in 2025.",
    image: "/images/4WRdapoL1fjAVxgeRVe1ERfi65w.jpeg",
    date: "Mar 5, 2026",
    category: "Design"
  },
  {
    title: "Building Brands That Last",
    excerpt: "A deep dive into creating timeless brand identities that resonate across generations.",
    image: "/images/LQE9zAV3E0j3FdIaWQHoNPoYcs.jpeg",
    date: "Feb 28, 2026",
    category: "Branding"
  },
  {
    title: "Motion Design Masterclass",
    excerpt: "Learn the principles of creating compelling motion graphics that captivate audiences.",
    image: "/images/UKdZZdm3ILb0gEvplierCay0A.jpeg",
    date: "Feb 20, 2026",
    category: "Animation"
  }
]

export default function Journal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="journal" className="py-32 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Journal
          </h2>
          <p className="text-[var(--color-gray)] text-xl max-w-2xl">
            Insights, stories, and inspiration from our team
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href="/journal" className="group block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[var(--color-accent)] text-sm font-medium">
                    {article.category}
                  </span>
                  <span className="text-[var(--color-gray)] text-sm">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[var(--color-gray)] leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
