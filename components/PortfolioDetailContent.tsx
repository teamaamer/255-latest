"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface PortfolioDetailContentProps {
  clientTitle: string
  images: string[]
}

export default function PortfolioDetailContent({ clientTitle, images }: PortfolioDetailContentProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <>
      {/* Project Images Gallery */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((imageSrc, i) => (
              <button
                key={imageSrc}
                onClick={() => setLightboxImage(imageSrc)}
                className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              >
                <Image
                  src={imageSrc}
                  alt={`${clientTitle} - Image ${i + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={i < 3 ? "eager" : "lazy"}
                  quality={85}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[var(--color-accent)] transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage}
              alt="Full screen view"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}
