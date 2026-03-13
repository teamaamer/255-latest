"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { teamData } from "@/data/data"
import { Linkedin } from "lucide-react"

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="team" className="py-32 px-6 md:px-12 bg-[var(--color-light-gray)]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Our Team
          </h2>
          <p className="text-[var(--color-gray)] text-xl max-w-2xl">
            Meet the creative minds behind 255 Agency
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-square bg-[var(--color-border)] rounded-lg mb-4 overflow-hidden relative">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    priority={index < 4}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[var(--color-dark-gray)] to-black" />
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                  >
                    <Linkedin size={20} className="text-black" />
                  </a>
                )}
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-[var(--color-gray)] text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
