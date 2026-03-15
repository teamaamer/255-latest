"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [isInView, count, value]);

  return (
    <span ref={nodeRef} className="text-6xl md:text-7xl lg:text-8xl font-bold text-white">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const stats = [
  { value: 5, suffix: "+", label: "YEARS OF\nEXPERIENCE" },
  { value: 20, suffix: "", label: "MEMBERS\nTEAM" },
  { value: 150, suffix: "+", label: "CLIENTS\nGLOBALLY" }
];

export default function Stats() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#1a1a1a]">
      <div className="container mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-sm tracking-widest text-center mb-12"
        >
          PERFORMANCE SNAPSHOT
        </motion.h3>
        
        <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-1 text-center py-8 md:py-0 md:px-8 lg:px-16"
            >
              <div className="text-xs md:text-sm text-white/60 tracking-wider mb-4 whitespace-pre-line uppercase">
                {stat.label}
              </div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
