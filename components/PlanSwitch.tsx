"use client"

import { motion } from "framer-motion"

interface PlanSwitchProps {
  activePlan: "core" | "pro"
  onSwitch: (plan: "core" | "pro") => void
}

export default function PlanSwitch({ activePlan, onSwitch }: PlanSwitchProps) {
  return (
    <div className="relative flex items-center h-[52px] rounded-full border border-[var(--color-dark-gray)] overflow-hidden">
      {/* Sliding marker */}
      <motion.div
        className="absolute h-[51px] rounded-[26px] bg-[var(--color-dark-gray)] border border-[var(--color-dark-gray)]"
        initial={false}
        animate={{
          left: activePlan === "core" ? 0 : "50%",
          width: "50%",
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
      />

      {/* Core Plan */}
      <button
        onClick={() => onSwitch("core")}
        className="relative z-10 flex items-center gap-3 h-[52px] px-4 cursor-pointer"
      >
        <span
          className={`text-sm font-medium transition-colors duration-300 ${
            activePlan === "core" ? "text-white" : "text-[var(--color-dark-gray)]"
          }`}
        >
          Core Plan
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-colors duration-300 ${
            activePlan === "core" ? "text-white" : "text-[var(--color-dark-gray)]"
          }`}
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Pro Plan */}
      <button
        onClick={() => onSwitch("pro")}
        className="relative z-10 flex items-center gap-3 h-[52px] px-4 cursor-pointer"
      >
        <span
          className={`text-sm font-medium transition-colors duration-300 ${
            activePlan === "pro" ? "text-white" : "text-[var(--color-dark-gray)]"
          }`}
        >
          Pro Plan
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-colors duration-300 ${
            activePlan === "pro" ? "text-white" : "text-[var(--color-dark-gray)]"
          }`}
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}
