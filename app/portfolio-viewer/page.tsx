"use client"

import { useState } from "react"
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Download } from "lucide-react"
import Link from "next/link"

export default function PortfolioViewer() {
  const [zoom, setZoom] = useState(100)

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 10, 200))
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 10, 50))

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header Controls */}
      <div className="bg-black/90 backdrop-blur-sm border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            href="/#portfolio"
            className="text-white hover:text-[var(--color-accent)] transition-colors flex items-center gap-2"
          >
            <X size={24} />
            <span className="hidden sm:inline">Close</span>
          </Link>
          <div className="h-6 w-px bg-gray-700" />
          <h1 className="text-white font-bold text-lg">Company Profile</h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Zoom Controls */}
          <div className="hidden md:flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2">
            <button
              onClick={handleZoomOut}
              className="text-white hover:text-[var(--color-accent)] transition-colors"
              aria-label="Zoom out"
            >
              <ZoomOut size={20} />
            </button>
            <span className="text-white text-sm min-w-[50px] text-center">{zoom}%</span>
            <button
              onClick={handleZoomIn}
              className="text-white hover:text-[var(--color-accent)] transition-colors"
              aria-label="Zoom in"
            >
              <ZoomIn size={20} />
            </button>
          </div>

          {/* Download Button */}
          <a
            href="/company profile.pdf"
            download
            className="flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[#ff5515] text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Download size={20} />
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 overflow-auto bg-gray-900 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div 
            className="bg-white shadow-2xl rounded-lg overflow-hidden"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
          >
            <iframe
              src="/company profile.pdf"
              className="w-full h-[calc(100vh-120px)] border-0"
              title="Company Profile"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Hint */}
      <div className="md:hidden bg-black/90 backdrop-blur-sm border-t border-gray-800 px-6 py-3 text-center">
        <p className="text-gray-400 text-sm">Swipe or scroll to navigate the document</p>
      </div>
    </div>
  )
}
