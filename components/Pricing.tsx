"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
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
    name: "Pro",
    price: "800",
    period: "/month",
    recommended: true,
    features: [
      "15 custom designs",
      "3 Reels + Motion",
      "Facebook, Instagram, Tiktok & Google ads",
      "Page management",
      "Detailed Report + Guidelines",
      "Advanced Reports"
    ]
  },
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
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 md:px-12 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
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
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="relative flex flex-col cursor-pointer"
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[rgb(255,68,0)] text-white px-4 py-1 rounded-full text-xs font-medium z-10">
                  Recommended
                </div>
              )}

              <div className="bg-[rgb(255,68,0)] rounded-t-3xl px-6 py-4 text-center shadow-lg">
                <h3 className="text-white text-2xl font-bold">
                  {plan.name}
                </h3>
              </div>

              <div className="bg-white border-2 border-white rounded-b-3xl p-6 flex-1 flex flex-col">
                <div className="mb-6">
                  <div className="text-gray-600 text-sm mb-1">From</div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-[rgb(255,68,0)] text-5xl font-bold">
                      {plan.price}$
                    </span>
                    <span className="text-gray-600 text-lg ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[rgb(255,68,0)]" />
                      <span className="text-gray-700 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.moreFeatures && (
                    <li className="text-center">
                      <span className="inline-block bg-[rgb(255,68,0)] text-white text-xs px-3 py-1 rounded-full">
                        & Much More
                      </span>
                    </li>
                  )}
                </ul>

                <Link href="#contact" className="w-full bg-[rgb(255,68,0)] text-white py-3 rounded-full font-semibold hover:bg-[#ff5515] transition-colors text-center block">
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
