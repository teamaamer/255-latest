"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What services does 255 Agency offer?",
    answer: "We offer comprehensive creative services including Social Media Management, Video Production, Printables, Marketing Campaigns, Events, and Photography. Each service is tailored to meet your specific business needs and goals."
  },
  {
    question: "How long has 255 been in business?",
    answer: "255 was established in 2021. Since then, we've grown to serve over 150 clients globally and have won 240+ industry awards for our creative work."
  },
  {
    question: "What makes 255 different from other agencies?",
    answer: "We combine data-driven insights with bold creative vision to deliver tailored marketing solutions. Our approach ensures results-driven strategies with 90% customer satisfaction rate."
  },
  {
    question: "What is the meaning behind the name '255'?",
    answer: "255 represents the highest value in the color scale, symbolizing boldness, clarity, and maximum impact. Just like brand building is step-by-step, digital design is built from precise values—and we aim for the highest standard in everything we do."
  },
  {
    question: "What industries do you work with?",
    answer: "We work with diverse clients across various sectors, from startups to established brands. Our portfolio includes food & beverage, transportation, retail, and more. We tailor our approach to each industry's unique needs."
  },
  {
    question: "How do you approach new projects?",
    answer: "Our process follows key stages: Discovery (understanding your brand), Strategy (developing plans), Creative Direction (crafting concepts), Production & Execution (bringing ideas to life), and Optimization & Support (continuous refinement for maximum impact)."
  },
  {
    question: "How can I get started with 255?",
    answer: "Simply reach out through our contact form or email us. We'll schedule a discovery call to understand your needs and discuss how we can help achieve your goals."
  }
]

function FlipCard({ item, index }: { item: FAQItem; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-[150px] perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full backface-hidden bg-white rounded-2xl p-6 flex items-center gap-4 shadow-xl border border-gray-200"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Question mark icon */}
          <svg 
            className="w-8 h-8 flex-shrink-0 text-[var(--color-accent)]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h3 className="text-black text-base md:text-lg font-bold text-left flex-1">
            {item.question}
          </h3>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full backface-hidden bg-black rounded-2xl p-6 flex items-center justify-center shadow-xl"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-white text-sm md:text-base text-center leading-relaxed">
            {item.answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-32 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqData.map((item, index) => (
            <FlipCard key={index} item={item} index={index} />
          ))}
        </div>

        <p className="text-center text-[var(--color-gray)] mt-8 text-lg">
          Click on any card to reveal the answer
        </p>
      </div>
    </section>
  )
}
