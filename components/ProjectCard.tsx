"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  projectName: string
  client: string
  projectType: string
  image?: string
  video?: string
  link?: string
}

export default function ProjectCard({
  projectName,
  client,
  projectType,
  image,
  video,
  link = "#",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={link}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.44, 0, 0.56, 1] }}
        className="group relative overflow-hidden rounded-lg cursor-pointer"
      >
        {/* Media */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {video ? (
            <video
              src={video}
              loop
              muted
              playsInline
              autoPlay={isHovered}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : image ? (
            <Image
              src={image}
              alt={projectName}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-[var(--color-dark-gray)]" />
          )}

          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-black/40"
          />
        </div>

        {/* Info */}
        <div className="mt-4 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-dark-gray)] group-hover:text-[var(--color-accent)] transition-colors">
              {projectName}
            </h3>
            <p className="text-[var(--color-gray)] text-sm mt-1">
              {client}
            </p>
          </div>
          <span className="text-[var(--color-gray)] text-sm">
            {projectType}
          </span>
        </div>
      </motion.div>
    </Link>
  )
}
