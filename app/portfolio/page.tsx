'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function PortfolioPage() {
  const router = useRouter()

  useEffect(() => {
    // Open PDF in current window
    window.open('/portfolio.pdf', '_self')
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-accent)] mx-auto mb-4"></div>
        <p className="text-gray-600">Opening portfolio...</p>
      </div>
    </main>
  )
}
