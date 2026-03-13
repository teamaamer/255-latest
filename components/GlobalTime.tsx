"use client"

import { useState, useEffect } from "react"

interface GlobalTimeProps {
  timezone?: string
  label?: string
}

export default function GlobalTime({ timezone = "Europe/Rome", label = "Milano" }: GlobalTimeProps) {
  const [time, setTime] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: timezone,
          hour12: false,
        })
      )
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [timezone])

  if (!mounted) return null

  return (
    <div className="text-center">
      <div className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold tabular-nums mb-2">
        {time}
      </div>
      <p className="text-white/40 text-xs md:text-sm">
        Current time in {label} (GMT+1)
      </p>
    </div>
  )
}
