"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Monthly",
    price: "$4,995",
    period: "/month",
    features: [
      "Unlimited design requests",
      "Unlimited revisions",
      "2-3 day turnaround",
      "Dedicated designer",
      "Cancel anytime"
    ]
  },
  {
    name: "Quarterly",
    price: "$13,995",
    period: "/quarter",
    popular: true,
    features: [
      "Everything in Monthly",
      "Priority support",
      "1-2 day turnaround",
      "Brand guidelines",
      "Save $1,000"
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 md:px-12 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-white text-5xl md:text-7xl font-bold mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-white/60 text-xl">
            Choose the plan that works for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? "bg-white"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? "text-black" : "text-white"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline">
                  <span className={`text-5xl font-bold ${plan.popular ? "text-black" : "text-white"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-xl ml-2 ${plan.popular ? "text-gray-600" : "text-white/60"}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? "text-[var(--color-accent)]" : "text-white"
                    }`} />
                    <span className={plan.popular ? "text-gray-700" : "text-white/80"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg font-semibold transition-all ${
                plan.popular
                  ? "bg-black text-white hover:bg-gray-900"
                  : "bg-white text-black hover:bg-gray-100"
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
