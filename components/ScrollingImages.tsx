"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function ScrollingImages() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [350, -350])
  const x2 = useTransform(scrollYProgress, [0, 1], [-350, 350])

  const imagePairs = [
    {
      img1: "/images/bTiA8lcD9mDhGq0Wl9d2pRny3s.jpg",
      img2: "/images/VuqEkIrQxoTipMXJSbTnHBSaA.jpg",
      alt1: "Sport car from the top",
      alt2: "Black plastic pouch on velvet"
    },
    {
      img1: "/images/IghUEBaXpIGtCVxOruDBuHtavPA.jpeg",
      img2: "/images/foCyFuBcfsZ1Kl4vVIxiwgqc.png",
      alt1: "Girl in VR glasses",
      alt2: "Modern B&W art"
    }
  ]

  return (
    <section ref={ref} id="floating-spotlight" className="py-32">
      <div className="space-y-32">
        {imagePairs.map((pair, index) => (
          <div key={index} className="flex items-center justify-center gap-8 md:gap-16 px-6">
            <motion.div
              style={{ x: index % 2 === 0 ? x1 : x2 }}
              className="relative w-[180px] md:w-[250px] lg:w-[350px] h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src={pair.img1}
                alt={pair.alt1}
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              style={{ x: index % 2 === 0 ? x2 : x1 }}
              className="relative w-[180px] md:w-[250px] lg:w-[350px] h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src={pair.img2}
                alt={pair.alt2}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
