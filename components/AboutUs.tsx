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
    <div ref={nodeRef} className="text-6xl md:text-7xl font-bold mb-4 text-[#FF6B2E]">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  );
};

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="py-32 px-6 md:px-12 bg-white">
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
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            About Us
          </h2>
          <p className="text-[var(--color-gray)] text-xl max-w-2xl">
            Established in 2021, we transform marketing through expertise, innovation, and a commitment to delivering impactful results.
          </p>
        </motion.div>
        {/* Who We Are - Stats Cards */}
        <div className="mb-32 -mx-6 md:-mx-12 px-6 md:px-12 py-16 bg-gradient-to-br from-[#FF6B2E] to-[#FFA366]">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-12 text-center"
          >
            Who We Are
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <AnimatedNumber value={5} suffix="+" />
              <div className="text-xl md:text-2xl font-semibold text-gray-900">Years of Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <AnimatedNumber value={20} />
              <div className="text-xl md:text-2xl font-semibold text-gray-900">Members Team</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <AnimatedNumber value={150} suffix="+" />
              <div className="text-xl md:text-2xl font-semibold text-gray-900">Clients Globally</div>
            </motion.div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#FF6B2E] mb-8 text-center"
          >
            Our Approach
          </motion.h2>
          
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Left Side - Stacked Cards */}
            <div className="w-full lg:w-1/2 space-y-4">
              {/* Agile Methodology */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-100 rounded-xl p-4 hover:border-[#FF6B2E] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex-shrink-0">
                    <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="30" fill="#FF6B2E" opacity="0.1"/>
                      <path d="M32 12 L42 22 L32 32 L22 22 Z" fill="#FF6B2E"/>
                      <path d="M32 32 L42 42 L32 52 L22 42 Z" fill="#FF6B2E" opacity="0.7"/>
                      <circle cx="32" cy="32" r="4" fill="#FFA366"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Agile Methodology</h3>
                </div>
                <p className="text-gray-700 text-sm md:text-base">Helping clients adapt to market trends and stay ahead digitally</p>
              </motion.div>

              {/* Data-Driven Insights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-100 rounded-xl p-4 hover:border-[#FF6B2E] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex-shrink-0">
                    <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="30" fill="#FF6B2E" opacity="0.1"/>
                      <rect x="16" y="36" width="8" height="16" fill="#FF6B2E" rx="2"/>
                      <rect x="28" y="28" width="8" height="24" fill="#FF6B2E" rx="2"/>
                      <rect x="40" y="20" width="8" height="32" fill="#FF6B2E" rx="2"/>
                      <path d="M18 24 L30 18 L42 14" stroke="#FFA366" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Data-Driven Insights</h3>
                </div>
                <p className="text-gray-700 text-sm md:text-base">Blending sharp data insights with bold creative vision to ignite growth</p>
              </motion.div>

              {/* Opportunity Focus */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-100 rounded-xl p-4 hover:border-[#FF6B2E] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex-shrink-0">
                    <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="30" fill="#FF6B2E" opacity="0.1"/>
                      <path d="M20 40 L28 28 L36 36 L44 20" stroke="#FF6B2E" strokeWidth="3" fill="none" strokeLinecap="round"/>
                      <polygon points="44,20 44,28 36,20" fill="#FF6B2E"/>
                      <circle cx="20" cy="40" r="3" fill="#FFA366"/>
                      <circle cx="28" cy="28" r="3" fill="#FFA366"/>
                      <circle cx="36" cy="36" r="3" fill="#FFA366"/>
                      <circle cx="44" cy="20" r="3" fill="#FFA366"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Opportunity Focus</h3>
                </div>
                <p className="text-gray-700 text-sm md:text-base">Turning challenges into opportunities with tailored marketing experiences</p>
              </motion.div>

              {/* Targeted Precision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-100 rounded-xl p-4 hover:border-[#FF6B2E] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex-shrink-0">
                    <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="30" fill="#FF6B2E" opacity="0.1"/>
                      <circle cx="32" cy="32" r="20" fill="none" stroke="#FF6B2E" strokeWidth="2"/>
                      <circle cx="32" cy="32" r="12" fill="none" stroke="#FF6B2E" strokeWidth="2"/>
                      <circle cx="32" cy="32" r="4" fill="#FF6B2E"/>
                      <path d="M32 12 L32 20" stroke="#FFA366" strokeWidth="2"/>
                      <path d="M32 44 L32 52" stroke="#FFA366" strokeWidth="2"/>
                      <path d="M12 32 L20 32" stroke="#FFA366" strokeWidth="2"/>
                      <path d="M44 32 L52 32" stroke="#FFA366" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Targeted Precision</h3>
                </div>
                <p className="text-gray-700 text-sm md:text-base">Connecting the right content to the right customer at the perfect time</p>
              </motion.div>
            </div>

            {/* Right Side - Approach Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative w-full aspect-[4/3] max-h-[400px] rounded-2xl overflow-hidden">
                <img 
                  src="/approach-image.png" 
                  alt="Our Approach Visualization" 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#FF6B2E] mb-12 text-center"
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#FF6B2E] hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="#FF6B2E" opacity="0.1"/>
                  <circle cx="32" cy="32" r="20" fill="none" stroke="#FF6B2E" strokeWidth="3"/>
                  <circle cx="32" cy="32" r="12" fill="none" stroke="#FF6B2E" strokeWidth="3"/>
                  <circle cx="32" cy="32" r="5" fill="#FF6B2E"/>
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
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#FF6B2E] hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="#FF6B2E" opacity="0.1"/>
                  <path d="M20 28 Q20 20 28 20 Q32 20 32 24 Q32 20 36 20 Q44 20 44 28 Q44 44 32 52 Q20 44 20 28 Z" fill="#FF6B2E"/>
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
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#FF6B2E] hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="#FF6B2E" opacity="0.1"/>
                  <rect x="18" y="28" width="28" height="8" fill="#FF6B2E" rx="2"/>
                  <rect x="28" y="20" width="8" height="24" fill="#FF6B2E" rx="2"/>
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
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#FF6B2E] hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="#FF6B2E" opacity="0.1"/>
                  <path d="M32 12 L36 28 L32 32 L28 28 Z" fill="#FF6B2E"/>
                  <rect x="28" y="32" width="8" height="12" fill="#FF6B2E" rx="1"/>
                  <rect x="26" y="44" width="12" height="4" fill="#FF6B2E" rx="2"/>
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
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#FF6B2E] hover:shadow-lg transition-all duration-300 text-center col-span-2 md:col-span-1"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="#FF6B2E" opacity="0.1"/>
                  <path d="M32 16 L34 26 L44 28 L34 30 L32 40 L30 30 L20 28 L30 26 Z" fill="#FF6B2E"/>
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
