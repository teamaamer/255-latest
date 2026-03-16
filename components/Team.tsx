"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { teamData } from "@/data/data"
import { Linkedin } from "lucide-react"

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const ceo = teamData[0]
  const teamMembers = teamData.slice(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [teamMembers.length])

  return (
    <section ref={ref} id="team" className="py-8 px-6 md:px-12 bg-white overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            Our Team
          </h2>
          <p className="text-[var(--color-gray)] text-xl max-w-2xl">
            Meet the creative minds behind 255 Agency
          </p>
        </motion.div>

        {/* Desktop Layout: Split View */}
        <div className="hidden lg:flex gap-8 items-center">
          {/* LEFT SIDE - CEO Portrait (Fixed, Smaller) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative group w-[280px]">
              {/* Portrait Image */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-200">
                {ceo.image && (
                  <Image
                    src={ceo.image}
                    alt={ceo.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                )}
              </div>
              
              {/* CEO Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 text-white">
                <h3 className="text-2xl font-bold mb-1">{ceo.name}</h3>
                <p className="text-base mb-2">{ceo.role}</p>
                <a 
                  href="https://www.facebook.com/share/r/17hm7tDnPw/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs underline hover:text-[var(--color-accent)] transition-colors inline-block"
                >
                  Watch Video
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Team Carousel */}
          <div className="flex-1 overflow-hidden relative">
            <motion.div
              animate={{ x: `-${currentIndex * 340}px` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex gap-6"
            >
              {teamMembers.concat(teamMembers).map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 rounded-lg p-8 relative group hover:shadow-lg transition-all duration-300 flex-shrink-0 w-[320px]"
                >
                  {/* Quote Icon */}
                  <div className="text-6xl text-gray-300 leading-none mb-4">"</div>
                  
                  {/* Quote Text */}
                  <p className="text-gray-700 text-base leading-relaxed mb-8">
                    Dedicated to creating exceptional work and driving innovation in every project.
                  </p>
                  
                  {/* Member Info */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden bg-gray-300 flex-shrink-0">
                      {member.image && (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-contain"
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </div>
                  
                  {/* Accent Dot */}
                  <div className="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-[var(--color-accent)]" />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Carousel Indicators */}
            <div className="flex gap-2 mt-6 justify-center">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex % teamMembers.length
                      ? 'bg-[var(--color-accent)] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout: CEO First, Then Grid */}
        <div className="lg:hidden space-y-8">
          {/* CEO Card - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200">
              {ceo.image && (
                <Image
                  src={ceo.image}
                  alt={ceo.name}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold mb-2">{ceo.name}</h3>
              <p className="text-[var(--color-accent)] text-lg font-medium mb-3">{ceo.role}</p>
              <p className="text-[var(--color-gray)] italic mb-4">
                "Leading innovation and strategy."
              </p>
              {ceo.linkedin && (
                <a
                  href={ceo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full hover:bg-[var(--color-accent)] transition-colors duration-300"
                >
                  <Linkedin size={18} />
                  <span>Connect</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Team Grid - Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex-shrink-0 ring-2 ring-white shadow-md">
                    {member.image && (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-bold mb-1">{member.name}</h4>
                    <p className="text-[var(--color-accent)] text-sm font-medium">{member.role}</p>
                  </div>
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-black hover:text-[var(--color-accent)] transition-colors duration-300 mt-2"
                  >
                    <Linkedin size={14} />
                    <span>LinkedIn</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
