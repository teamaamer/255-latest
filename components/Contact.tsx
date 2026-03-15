"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { contactInfo } from "@/data/data"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section ref={ref} id="contact" className="py-32 px-6 md:px-12 bg-[#1a1a1a]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-white text-5xl md:text-7xl font-bold mb-6">
            Let's work together
          </h2>
          <p className="text-white/60 text-xl">
            Ready to transform your brand? Get in touch.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr] gap-8 items-start">
          {/* Left: Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2 text-sm">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2 text-sm">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-white mb-2 text-sm">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
              placeholder="Your company"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white mb-2 text-sm">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

            <button
              type="submit"
              className="w-full bg-[var(--color-accent)] text-white py-4 rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Send Message
            </button>
          </motion.form>

          {/* Center: First 2 Location Cards (2x1 grid) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {contactInfo.slice(0, 2).map((office, index) => {
              const cityImages = [
                '/cities/nablus.jpg',
                '/cities/nazareth.jpg'
              ];
              
              return (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden h-[160px] group cursor-pointer"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${cityImages[index]})`,
                      filter: 'brightness(0.7)'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <div className="relative z-20 p-4 flex flex-col justify-center h-full">
                    <img
                      src="/255-logo.svg"
                      alt="255 Logo"
                      className="h-5 w-auto mb-2 brightness-0 invert self-start"
                    />
                    <p className="text-lg text-white/95 drop-shadow-md leading-snug whitespace-pre-line font-medium">
                      {office.address}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right: Last 2 Location Cards (2x1 grid) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {contactInfo.slice(2, 4).map((office, index) => {
              const cityImages = [
                '/cities/riyadh.jpg',
                '/cities/houston.jpg'
              ];
              
              return (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden h-[160px] group cursor-pointer"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${cityImages[index]})`,
                      filter: 'brightness(0.7)'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <div className="relative z-20 p-4 flex flex-col justify-center h-full">
                    <img
                      src="/255-logo.svg"
                      alt="255 Logo"
                      className="h-5 w-auto mb-2 brightness-0 invert self-start"
                    />
                    <p className="text-lg text-white/95 drop-shadow-md leading-snug whitespace-pre-line font-medium">
                      {office.address}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
