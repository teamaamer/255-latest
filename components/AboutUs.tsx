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
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-12 text-left text-[#ff5a1f]"
        >
          About Us
        </motion.h2>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-6 flex flex-col justify-start"
          >
            <p className="text-[#2d2d2d] text-lg leading-relaxed">
              255 was established in 2020 in Palestine by Sakher Olayaan as a forward-thinking marketing agency built on a foundation of expertise and innovation.
            </p>
            
            <p className="text-[#2d2d2d] text-lg leading-relaxed">
              After achieving strong success within its first two years, the company expanded globally, opening an office in Nazareth, followed by expansion into Saudi Arabia with an office in Riyadh. In 2025, 255 was officially established and registered in the United States, becoming part of a global network of companies serving clients worldwide.
            </p>
            
            <p className="text-[#2d2d2d] text-lg leading-relaxed">
              With over 7 years of hands-on experience in marketing, advertising, and promotion, Sakher Olayaan leads the company with a clear strategic vision and a results-driven approach. Under his leadership, a team of 28 skilled professionals works on delivering impactful marketing campaigns that deeply connect with target audiences.
            </p>
            
            <p className="text-[#2d2d2d] text-lg leading-relaxed">
              What sets 255 apart is the integration of advanced marketing expertise with over 8 years of experience in direct sales with international companies. This unique combination enables us to build strategies that focus not only on reach and engagement, but on driving real sales and measurable growth.
            </p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <img 
              src="/images/about-side-image.png" 
              alt="About 255 Agency" 
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
        {/* Our Approach */}
        <div className="mb-0 py-16 relative overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
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
          <div className="relative z-10 px-6 md:px-12">
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
      </div>
    </section>
  );
};

export default AboutUs;
