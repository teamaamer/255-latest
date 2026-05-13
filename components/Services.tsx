"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { servicesData } from "@/data/data"
import { ArrowUpRight } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section ref={ref} id="services" className="pt-0 pb-8 bg-white overflow-hidden">
      <div className="px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-[#ff5a1f]">
            Our Services
          </h2>
          <p className="text-[var(--color-gray)] text-xl">
            Capture, communicate, and connect. We create impactful content that conveys your brand's message and resonates with your audience.
          </p>
        </motion.div>

        {/* Services Rows - Each service gets its own row */}
        <div className="space-y-12">
          {servicesData.map((service, serviceIndex) => {
            const isEven = serviceIndex % 2 === 0
            
            return (
              <div key={serviceIndex} className="space-y-4">
                {/* Service Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  className={`text-3xl md:text-4xl font-bold text-[#ff5a1f] ${isEven ? 'text-left' : 'text-center'}`}
                >
                  {serviceIndex + 1}- {service.title}
                </motion.h3>

                {/* Service Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 + 0.1 }}
                  className={`text-gray-600 text-base max-w-3xl ${isEven ? 'text-left' : 'mx-auto text-center'}`}
                >
                  {service.description}
                </motion.p>

                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 items-center`}>
                  {/* Fixed Service Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -30 : 30 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 + 0.2 }}
                    className={`flex-shrink-0 w-full max-w-[400px] h-[400px] rounded-[20px] overflow-hidden relative group cursor-pointer shadow-xl p-6 ${isEven ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-[#2d2d2d]'}`}
                  >
                    <div className="flex flex-col h-full justify-center">
                      <h4 className="text-white text-xl md:text-2xl font-bold mb-6">Including:</h4>
                      <ul className="space-y-4">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="text-white text-lg md:text-xl flex items-start">
                            <span className="mr-3">-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                {/* Scrolling Example Cards */}
                <div className="flex-1 relative w-full">
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#2d2d2d] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#2d2d2d] to-transparent z-10 pointer-events-none" />

                    <div className="overflow-hidden">
                      <motion.div
                        className="flex gap-4"
                        animate={{
                          x: [0, -((400 + 16) * ((service.exampleWebsites?.length || service.exampleVideos?.length || service.exampleImages?.length) || 6))]
                        }}
                        transition={{
                          x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear"
                          }
                        }}
                      >
                        {service.exampleWebsites ? (
                          // Display websites as clickable cards
                          [...service.exampleWebsites, ...service.exampleWebsites].map((website, exampleIndex) => (
                            <a
                              key={exampleIndex}
                              href={website.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 w-[400px] h-[400px] rounded-[20px] overflow-hidden relative group cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
                            >
                              {/* Website Preview - Screenshot or Live iframe */}
                              <div className="w-full h-full relative bg-white">
                                {website.screenshot ? (
                                  // Use screenshot image if provided
                                  <img
                                    src={website.screenshot}
                                    alt={`${website.name} website`}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  // Use live iframe if no screenshot
                                  <iframe
                                    src={website.url}
                                    className="w-full h-full pointer-events-none"
                                    style={{ border: 'none' }}
                                    title={website.name}
                                    sandbox="allow-same-origin allow-scripts"
                                  />
                                )}
                                {/* Overlay to prevent interaction and show hover effect */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-3">
                                    <span className="text-white text-2xl font-bold text-center px-4">{website.name}</span>
                                    <div className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                                      <span className="text-lg font-semibold">Visit Website</span>
                                      <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          ))
                        ) : service.exampleVideos ? (
                          // Duplicate videos twice for seamless loop
                          [...service.exampleVideos, ...service.exampleVideos].map((videoUrl, exampleIndex) => {
                            // Check platform type
                            const isInstagram = videoUrl.includes('instagram.com');
                            const isFacebook = videoUrl.includes('facebook.com');
                            
                            let embedContent;
                            
                            if (isFacebook) {
                              // For Facebook, use a clickable link with preview
                              return (
                                <a
                                  key={exampleIndex}
                                  href={videoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-shrink-0 w-[400px] h-[400px] rounded-[20px] overflow-hidden relative group cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl bg-gradient-to-br from-blue-500 to-blue-700"
                                >
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                      </div>
                                      <p className="text-white text-lg font-bold">View on Facebook</p>
                                    </div>
                                  </div>
                                </a>
                              );
                            } else if (isInstagram) {
                              // Extract Instagram post/reel ID
                              const postId = videoUrl.split('/reel/')[1]?.split('/')[0] || videoUrl.split('/p/')[1]?.split('/')[0];
                              embedContent = `https://www.instagram.com/p/${postId}/embed/`;
                            } else {
                              // YouTube video ID extraction
                              const videoId = videoUrl.includes('shorts') 
                                ? videoUrl.split('/shorts/')[1]?.split('?')[0]
                                : videoUrl.split('youtu.be/')[1]?.split('?')[0] || videoUrl.split('v=')[1]?.split('&')[0];
                              embedContent = `https://www.youtube.com/embed/${videoId}`;
                            }
                            
                            return (
                              <div
                                key={exampleIndex}
                                className="flex-shrink-0 w-[400px] h-[400px] rounded-[20px] overflow-hidden relative group cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
                              >
                                <iframe
                                  src={embedContent}
                                  className="w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                            );
                          })
                        ) : service.exampleImages ? (
                          // Duplicate images twice for seamless loop
                          [...service.exampleImages, ...service.exampleImages].map((imagePath, exampleIndex) => (
                            <div
                              key={exampleIndex}
                              className="flex-shrink-0 w-[400px] h-[400px] rounded-[20px] overflow-hidden relative group cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
                            >
                              <img 
                                src={imagePath} 
                                alt={`${service.title} example ${exampleIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <a 
                                href="/portfolio"
                                className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center"
                              >
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                                  <span className="text-white text-xl font-bold">Watch More</span>
                                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <ArrowUpRight className="w-6 h-6 text-white" />
                                  </div>
                                </div>
                              </a>
                            </div>
                          ))
                        ) : null}
                      </motion.div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
