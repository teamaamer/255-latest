"use client"

import { ReactNode } from "react"

interface VideoBackgroundSectionProps {
  children: ReactNode
}

export default function VideoBackgroundSection({ children }: VideoBackgroundSectionProps) {
  return (
    <div className="relative">
      {/* Fixed Video Background */}
      <div className="sticky top-0 h-screen -z-10">
        <video
          src="https://www.255.ps/section3-video.mp4"
          loop
          muted
          playsInline
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
