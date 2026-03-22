"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const nodeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <div ref={nodeRef} className="text-6xl md:text-7xl font-bold mb-4 text-[rgb(255,68,0)]">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  );
};

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="py-8 px-6 md:px-12 bg-white">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .svg-container {
          transition: transform 0.3s ease;
        }
        .svg-container:hover {
          transform: scale(1.1);
        }
        .svg-container svg > *:nth-child(2) {
          animation: float 3s ease-in-out infinite;
        }
        .svg-container svg > *:nth-child(3) {
          animation: pulse 2s ease-in-out infinite;
        }
        .svg-container-rotate svg > *:nth-child(2) {
          animation: spin-slow 20s linear infinite;
        }
        .svg-container-rotate svg > *:nth-child(3) {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-12">
            About Us
          </h2>
          
          {/* Company Story Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1: Global Expansion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[rgb(255,68,0)] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="rgb(255,68,0)" opacity="0.1"/>
                  <circle cx="32" cy="32" r="20" fill="none" stroke="rgb(255,68,0)" strokeWidth="2"/>
                  <path d="M32 12 L32 52 M12 32 L52 32" stroke="rgb(255,68,0)" strokeWidth="2"/>
                  <path d="M20 20 Q32 28 44 20 M20 44 Q32 36 44 44" stroke="rgb(255,68,0)" strokeWidth="2" fill="none"/>
                  <circle cx="20" cy="20" r="3" fill="#FFA366"/>
                  <circle cx="44" cy="20" r="3" fill="#FFA366"/>
                  <circle cx="32" cy="32" r="3" fill="#FFA366"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Global Reach</h3>
              <p className="text-[var(--color-gray)] leading-relaxed">
                <span className="text-[rgb(255,68,0)] font-bold">Founded in 2020 in Palestine</span>, we've expanded globally with offices in <span className="font-semibold">Nazareth</span>, <span className="font-semibold">Riyadh</span>, and the <span className="font-semibold">United States</span> (2025).
              </p>
            </motion.div>

            {/* Card 2: Expert Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[rgb(255,68,0)] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="rgb(255,68,0)" opacity="0.1"/>
                  <circle cx="32" cy="24" r="8" fill="rgb(255,68,0)"/>
                  <path d="M18 48 Q18 36 32 36 Q46 36 46 48" fill="rgb(255,68,0)" opacity="0.7"/>
                  <path d="M24 28 L28 32 L36 24" stroke="#FFA366" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Expert Leadership</h3>
              <p className="text-[var(--color-gray)] leading-relaxed">
                Led by Sakher Olayaan with <span className="text-[rgb(255,68,0)] font-bold">7+ years in marketing</span> and <span className="text-[rgb(255,68,0)] font-bold">8+ years in direct sales</span>, backed by <span className="font-semibold">28 skilled professionals</span>.
              </p>
            </motion.div>

            {/* Card 3: Sales-Driven Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[rgb(255,68,0)] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="rgb(255,68,0)" opacity="0.1"/>
                  <path d="M16 44 L24 32 L32 36 L40 24 L48 28" stroke="rgb(255,68,0)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <polygon points="48,28 48,20 40,28" fill="rgb(255,68,0)"/>
                  <circle cx="24" cy="32" r="3" fill="#FFA366"/>
                  <circle cx="32" cy="36" r="3" fill="#FFA366"/>
                  <circle cx="40" cy="24" r="3" fill="#FFA366"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Sales-Focused</h3>
              <p className="text-[var(--color-gray)] leading-relaxed">
                We don't just engage—we <span className="font-semibold">drive real sales and measurable growth</span>. Our unique blend of marketing and sales expertise delivers results that matter.
              </p>
            </motion.div>
          </div>
        </motion.div>
        {/* Our Approach */}
        <div className="mb-16 -mx-6 md:-mx-12 px-6 md:px-12 py-16 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/website-team-banner.avif" 
              alt="Team Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[rgb(255,68,0)] mb-8 text-center"
          >
            Our Approach
          </motion.h2>
          
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Image - Shows first on mobile, right on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 lg:order-2"
            >
              <img 
                src="/images/about-side-image.png" 
                alt="About Us" 
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>

            {/* Left Side - Stacked Cards */}
            <div className="w-full lg:w-1/2 lg:order-1 space-y-4">
              {/* Agile Methodology */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-[#2a2a2a] border-2 border-gray-700 rounded-xl p-4 hover:border-[rgb(255,68,0)] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex-shrink-0">
                    <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="30" fill="rgb(255,68,0)" opacity="0.1"/>
                      <path d="M32 12 L42 22 L32 32 L22 22 Z" fill="rgb(255,68,0)"/>
                      <path d="M32 32 L42 42 L32 52 L22 42 Z" fill="rgb(255,68,0)" opacity="0.7"/>
                      <circle cx="32" cy="32" r="4" fill="#FFA366"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Agile Methodology</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base">Helping clients adapt to market trends and stay ahead digitally</p>
              </motion.div>

              {/* Data-Driven Insights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#2a2a2a] border-2 border-gray-700 rounded-xl p-4 hover:border-[rgb(255,68,0)] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex-shrink-0">
                    <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="30" fill="rgb(255,68,0)" opacity="0.1"/>
                      <rect x="16" y="36" width="8" height="16" fill="rgb(255,68,0)" rx="2"/>
                      <rect x="28" y="28" width="8" height="24" fill="rgb(255,68,0)" rx="2"/>
                      <rect x="40" y="20" width="8" height="32" fill="rgb(255,68,0)" rx="2"/>
                      <path d="M18 24 L30 18 L42 14" stroke="#FFA366" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Data-Driven Insights</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base">Blending sharp data insights with bold creative vision to ignite growth</p>
              </motion.div>

              {/* Opportunity Focus */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-[#2a2a2a] border-2 border-gray-700 rounded-xl p-4 hover:border-[rgb(255,68,0)] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex-shrink-0">
                    <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="30" fill="rgb(255,68,0)" opacity="0.1"/>
                      <path d="M20 40 L28 28 L36 36 L44 20" stroke="rgb(255,68,0)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                      <polygon points="44,20 44,28 36,20" fill="rgb(255,68,0)"/>
                      <circle cx="20" cy="40" r="3" fill="#FFA366"/>
                      <circle cx="28" cy="28" r="3" fill="#FFA366"/>
                      <circle cx="36" cy="36" r="3" fill="#FFA366"/>
                      <circle cx="44" cy="20" r="3" fill="#FFA366"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Opportunity Focus</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base">Turning challenges into opportunities with tailored marketing experiences</p>
              </motion.div>

              {/* Targeted Precision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#2a2a2a] border-2 border-gray-700 rounded-xl p-4 hover:border-[rgb(255,68,0)] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex-shrink-0">
                    <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="30" fill="rgb(255,68,0)" opacity="0.1"/>
                      <circle cx="32" cy="32" r="20" fill="none" stroke="rgb(255,68,0)" strokeWidth="2"/>
                      <circle cx="32" cy="32" r="12" fill="none" stroke="rgb(255,68,0)" strokeWidth="2"/>
                      <circle cx="32" cy="32" r="4" fill="rgb(255,68,0)"/>
                      <path d="M32 12 L32 20" stroke="#FFA366" strokeWidth="2"/>
                      <path d="M32 44 L32 52" stroke="#FFA366" strokeWidth="2"/>
                      <path d="M12 32 L20 32" stroke="#FFA366" strokeWidth="2"/>
                      <path d="M44 32 L52 32" stroke="#FFA366" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Targeted Precision</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base">Connecting the right content to the right customer at the perfect time</p>
              </motion.div>
            </div>
          </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[rgb(255,68,0)] mb-12 text-center"
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[rgb(255,68,0)] hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="rgb(255,68,0)" opacity="0.1"/>
                  <circle cx="32" cy="32" r="20" fill="none" stroke="rgb(255,68,0)" strokeWidth="3"/>
                  <circle cx="32" cy="32" r="12" fill="none" stroke="rgb(255,68,0)" strokeWidth="3"/>
                  <circle cx="32" cy="32" r="5" fill="rgb(255,68,0)"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Purpose-Driven</h3>
              <p className="text-gray-700 text-sm">Great brands speak with purpose, connect with people, and lead with meaning</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[rgb(255,68,0)] hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="rgb(255,68,0)" opacity="0.1"/>
                  <path d="M20 28 Q20 20 28 20 Q32 20 32 24 Q32 20 36 20 Q44 20 44 28 Q44 44 32 52 Q20 44 20 28 Z" fill="rgb(255,68,0)"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Client-Centered</h3>
              <p className="text-gray-700 text-sm">Centering client vision and goals while diving deep into their story and audience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[rgb(255,68,0)] hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="rgb(255,68,0)" opacity="0.1"/>
                  <rect x="18" y="28" width="28" height="8" fill="rgb(255,68,0)" rx="2"/>
                  <rect x="28" y="20" width="8" height="24" fill="rgb(255,68,0)" rx="2"/>
                  <circle cx="32" cy="32" r="4" fill="white"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Methodical</h3>
              <p className="text-gray-700 text-sm">Brand building is step-by-step, like digital design built from precise values</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[rgb(255,68,0)] hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="rgb(255,68,0)" opacity="0.1"/>
                  <path d="M32 12 L36 28 L32 32 L28 28 Z" fill="rgb(255,68,0)"/>
                  <rect x="28" y="32" width="8" height="12" fill="rgb(255,68,0)" rx="1"/>
                  <rect x="26" y="44" width="12" height="4" fill="rgb(255,68,0)" rx="2"/>
                  <path d="M24 28 L28 28 M36 28 L40 28 M26 22 L30 22 M34 22 L38 22" stroke="#FFA366" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Maximum Impact</h3>
              <p className="text-gray-700 text-sm">255 represents the highest value—symbolizing boldness, clarity, and maximum impact</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[rgb(255,68,0)] hover:shadow-lg transition-all duration-300 text-center col-span-2 md:col-span-1"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="rgb(255,68,0)" opacity="0.1"/>
                  <path d="M32 16 L34 26 L44 28 L34 30 L32 40 L30 30 L20 28 L30 26 Z" fill="rgb(255,68,0)"/>
                  <path d="M44 16 L45 20 L49 21 L45 22 L44 26 L43 22 L39 21 L43 20 Z" fill="#FFA366"/>
                  <path d="M20 44 L21 48 L25 49 L21 50 L20 54 L19 50 L15 49 L19 48 Z" fill="#FFA366"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Essence First</h3>
              <p className="text-gray-700 text-sm">Logos embody essence and build connection—the voice of a brand in a single mark</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
