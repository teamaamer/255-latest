'use client'

import { motion } from 'framer-motion'
import { servicesData } from '@/data/data'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

type MediaItem = {
  type: 'image' | 'video'
  src: string
  category: string
  service: string
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Collect all images and videos from services
  const allMedia: MediaItem[] = servicesData.flatMap(service => {
    const items: MediaItem[] = []
    
    // Add images
    if (service.exampleImages) {
      service.exampleImages.forEach(img => {
        items.push({
          type: 'image',
          src: img,
          category: service.title,
          service: service.title
        })
      })
    }
    
    // Add videos
    if (service.exampleVideos) {
      service.exampleVideos.forEach(video => {
        items.push({
          type: 'video',
          src: video,
          category: service.title,
          service: service.title
        })
      })
    }
    
    return items
  })

  const categories = ['all', ...servicesData.map(s => s.title)]
  const filteredMedia = selectedCategory === 'all' 
    ? allMedia 
    : allMedia.filter(item => item.category === selectedCategory)

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/#services" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ff5a1f] mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold text-[#ff5a1f] mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore our complete collection of creative work across all services
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-[#ff5a1f] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'All Work' : category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={`${item.service} work`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full">
                  {item.src.includes('youtube.com') || item.src.includes('youtu.be') ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${
                        item.src.includes('shorts')
                          ? item.src.split('/shorts/')[1]?.split('?')[0]
                          : item.src.split('youtu.be/')[1]?.split('?')[0] || item.src.split('v=')[1]?.split('&')[0]
                      }`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : item.src.includes('instagram.com') ? (
                    <iframe
                      src={`https://www.instagram.com/p/${
                        item.src.split('/reel/')[1]?.split('/')[0] || item.src.split('/p/')[1]?.split('/')[0]
                      }/embed/`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <a
                      href={item.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700"
                    >
                      <div className="text-center text-white">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <p className="font-bold">View on Facebook</p>
                      </div>
                    </a>
                  )}
                </div>
              )}
              
              {/* Overlay with service name */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">{item.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredMedia.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No items found in this category</p>
          </div>
        )}
      </div>
    </main>
  )
}
