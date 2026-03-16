"use client"

import { motion } from "framer-motion"
import { Circle } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Enterprise",
    price: "1200",
    period: "/month",
    features: [
      "All Services",
      "Full Management for All Platforms",
      "Everything",
      "Advanced Reports",
      "Dedicated Team + Consultations + Extra Services"
    ],
    moreFeatures: true
  },
  {
    name: "Pro",
    price: "800",
    period: "/month",
    recommended: true,
    features: [
      "15 custom designs",
      "8 Reels + 3 Motion",
      "Facebook, Instagram, Tiktok & Google ads",
      "Page management",
      "Detailed Report + Guidelines",
      "Advanced Reports"
    ]
  },
  {
    name: "Growth",
    price: "550",
    period: "/month",
    features: [
      "10 custom designs",
      "5 Reels",
      "Facebook, Instagram & Tiktok ads",
      "Page management",
      "Performance reports",
      "Account Manager"
    ]
  },
  {
    name: "Starter",
    price: "350",
    period: "/month",
    features: [
      "6 custom designs",
      "2 Reels",
      "Facebook & Instagram ads",
      "Page management",
      "Performance reports",
      "Extras"
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-8 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[rgb(255,68,0)] text-4xl md:text-6xl font-bold mb-4">
            Social Media Management Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col"
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-medium z-10">
                  Recommended
                </div>
              )}

              {/* Orange Rounded Button for Plan Name */}
              <div className="bg-[rgb(255,68,0)] rounded-full px-6 py-3 text-center mb-4">
                <h3 className="text-white text-xl font-bold">
                  {plan.name}
                </h3>
              </div>

              {/* Price - Horizontal Layout */}
              <div className="mb-6 text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-gray-400 text-sm">From</span>
                  <span className="text-[rgb(255,68,0)] text-4xl font-bold">
                    {plan.price}$
                  </span>
                  <span className="text-gray-400 text-sm">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features Card with White Border */}
              <div className="bg-transparent border-2 border-white rounded-3xl p-6 flex-1 flex flex-col mb-6">
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Circle className="w-4 h-4 mt-1 flex-shrink-0 text-[rgb(255,68,0)] fill-[rgb(255,68,0)]" />
                      <span className="text-white text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.moreFeatures && (
                    <li className="text-left pt-2">
                      <span className="inline-block bg-[rgb(255,68,0)] text-white text-xs px-4 py-1.5 rounded-full">
                        & Much More
                      </span>
                    </li>
                  )}
                </ul>
              </div>

              {/* Contact Sales Button */}
              <Link 
                href="#contact" 
                className="w-full bg-[rgb(255,68,0)] text-white py-3 rounded-full font-semibold hover:bg-[#ff5515] transition-colors text-center block"
              >
                Contact Sales
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
