"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$350",
    features: {
      "Custom Designs": "6 per month",
      "Reels": "2 per month",
      "Platforms": "Facebook & Instagram",
      "Ad Management": "Facebook & Instagram",
      "Page Management": "Yes",
      "Performance Reports": "Monthly",
      "Account Manager": "No",
      "Motion Graphics": "No",
      "Google Ads": "No",
      "Strategic Planning": "No",
      "Priority Support": "No",
      "Dedicated Team": "No",
    }
  },
  {
    name: "Growth",
    price: "$550",
    features: {
      "Custom Designs": "10 per month",
      "Reels": "5 per month",
      "Platforms": "Facebook, Instagram & TikTok",
      "Ad Management": "Facebook, Instagram & TikTok",
      "Page Management": "Yes",
      "Performance Reports": "Bi-weekly",
      "Account Manager": "Yes",
      "Motion Graphics": "No",
      "Google Ads": "No",
      "Strategic Planning": "Basic",
      "Priority Support": "Yes",
      "Dedicated Team": "No",
    }
  },
  {
    name: "Pro",
    price: "$800",
    features: {
      "Custom Designs": "15 per month",
      "Reels": "3 per month",
      "Platforms": "All major platforms",
      "Ad Management": "Facebook, Instagram, TikTok & Google",
      "Page Management": "Yes",
      "Performance Reports": "Weekly",
      "Account Manager": "Yes",
      "Motion Graphics": "Yes",
      "Google Ads": "Yes",
      "Strategic Planning": "Advanced",
      "Priority Support": "24/7",
      "Dedicated Team": "No",
    }
  },
  {
    name: "Enterprise",
    price: "$1,200",
    features: {
      "Custom Designs": "Unlimited",
      "Reels": "Unlimited",
      "Platforms": "All platforms",
      "Ad Management": "All platforms",
      "Page Management": "Yes",
      "Performance Reports": "Daily",
      "Account Manager": "Yes",
      "Motion Graphics": "Yes",
      "Google Ads": "Yes",
      "Strategic Planning": "Custom",
      "Priority Support": "White-glove",
      "Dedicated Team": "Yes",
    }
  }
]

export default function PlanComparison() {
  const [selectedPlans, setSelectedPlans] = useState<string[]>(["Pro", "Growth"])

  const togglePlan = (planName: string) => {
    if (selectedPlans.includes(planName)) {
      if (selectedPlans.length > 1) {
        setSelectedPlans(selectedPlans.filter(p => p !== planName))
      }
    } else {
      if (selectedPlans.length < 3) {
        setSelectedPlans([...selectedPlans, planName])
      }
    }
  }

  const selectedPlanData = plans.filter(p => selectedPlans.includes(p.name))
  const allFeatures = Array.from(
    new Set(plans.flatMap(p => Object.keys(p.features)))
  )

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Compare Plans
          </h2>
          <p className="text-[var(--color-gray)] text-lg">
            Select up to 3 plans to compare features side-by-side
          </p>
        </div>

        {/* Plan Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {plans.map((plan) => (
            <button
              key={plan.name}
              onClick={() => togglePlan(plan.name)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedPlans.includes(plan.name)
                  ? "bg-[rgb(255,68,0)] text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {plan.name}
              {selectedPlans.includes(plan.name) && (
                <span className="ml-2">✓</span>
              )}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPlans.join(",")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-4 font-bold text-lg">Feature</th>
                  {selectedPlanData.map((plan) => (
                    <th key={plan.name} className="p-4 text-center">
                      <div className="font-bold text-xl mb-2">{plan.name}</div>
                      <div className="text-[rgb(255,68,0)] text-2xl font-bold">
                        {plan.price}
                        <span className="text-sm text-gray-600">/mo</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, index) => (
                  <tr
                    key={feature}
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="p-4 font-semibold text-gray-700">{feature}</td>
                    {selectedPlanData.map((plan) => (
                      <td key={`${plan.name}-${feature}`} className="p-4 text-center">
                        {plan.features[feature as keyof typeof plan.features] === "Yes" ? (
                          <Check className="inline-block text-green-600" size={24} />
                        ) : plan.features[feature as keyof typeof plan.features] === "No" ? (
                          <X className="inline-block text-gray-400" size={24} />
                        ) : (
                          <span className="text-gray-700">
                            {plan.features[feature as keyof typeof plan.features]}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-[var(--color-gray)] mb-6">
            Ready to get started? Choose the plan that's right for you.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[rgb(255,68,0)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#ff5515] transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  )
}
