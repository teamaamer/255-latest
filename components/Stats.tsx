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
    <span 
      ref={nodeRef}
      className="text-[50px] md:text-[60px] lg:text-[70px] font-[800] text-white leading-[0.9]"
      style={{ letterSpacing: '-2px', fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const stats = [
  { value: 7680, suffix: "", label: "PROJECTS\nCOMPLETED" },
  { value: 28, suffix: "", label: "TEAM\nMEMBERS" },
  { value: 255, suffix: "+", label: "CLIENTS\nGLOBALLY" },
  { value: 8, suffix: "+", label: "YEARS OF\nEXPERIENCE" },
  { value: 40000, suffix: "+", label: "CAMPAIGNS\nLAUNCHED" }
];

export default function Stats() {
  return (
    <section id="stats" className="pt-2 pb-2 px-6 md:px-12 bg-[#1a1a1a]">
      <div className="container mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-sm tracking-widest text-center mb-4"
        >
          PERFORMANCE SNAPSHOT
        </motion.h3>
        
        <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center md:divide-x md:divide-white/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                text-center py-8 md:py-0 md:px-8 lg:px-16 md:flex-1
                ${index === 4 ? 'col-span-2 border-t border-white/20 md:border-t-0' : ''}
                ${[2, 3].includes(index) ? 'border-t border-white/20 md:border-t-0' : ''}
                ${[0, 2].includes(index) ? 'border-r border-white/20 md:border-r-0' : ''}
                ${index === 2 ? 'md:ml-8' : ''}
              `}
            >
              <div 
                className="text-[10px] md:text-[12px] text-white/60 mb-2 whitespace-pre-line uppercase font-[400]"
                style={{ letterSpacing: '2px', fontFamily: 'Inter, system-ui, sans-serif' }}
              >
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
