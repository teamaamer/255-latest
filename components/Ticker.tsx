"use client"

import { useEffect, useRef } from "react"

interface TickerProps {
  items: string[]
  speed?: number
}

export default function Ticker({ items, speed = 50 }: TickerProps) {
  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker) return

    let animationId: number
    let position = 0

    const animate = () => {
      position -= 1
      if (ticker.firstElementChild) {
        const firstChild = ticker.firstElementChild as HTMLElement
        if (Math.abs(position) >= firstChild.offsetWidth) {
          position = 0
        }
      }
      ticker.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="overflow-hidden bg-black py-6">
      <div
        ref={tickerRef}
        className="flex gap-24 whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="text-white/60 text-xl font-medium flex-shrink-0"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
