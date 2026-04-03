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

          {/* Right Side - Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <div className="w-full aspect-video rounded-xl shadow-lg overflow-hidden">
              <iframe 
                src="https://www.youtube.com/embed/OhHfUAelvWo?autoplay=1&mute=1&loop=1&playlist=OhHfUAelvWo&controls=0&showinfo=0&rel=0&modestbranding=1"
                className="w-full h-full"
                style={{ border: 'none' }}
                allow="autoplay; encrypted-media"
              />
            </div>
          </motion.div>
        </div>
        {/* Our Approach */}
        <div className="mb-0 py-16 relative overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/website-team-banner.jpeg" 
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
            {/* Video - Shows first on mobile, right on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 lg:order-2"
            >
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.youtube.com/embed/OhHfUAelvWo?autoplay=1&mute=1&loop=1&playlist=OhHfUAelvWo&controls=0&showinfo=0&rel=0&modestbranding=1"
                  className="w-full h-full"
                  style={{ border: 'none' }}
                  allow="autoplay; encrypted-media"
                />
              </div>
            </motion.div>

            {/* Left Side - Stacked Cards */}
            <div className="w-full lg:w-1/2 lg:order-1 space-y-4">
              {/* Speed That Drives Results */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-[#2a2a2a] border-2 border-gray-700 rounded-xl p-4 hover:border-[rgb(255,68,0)] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🔶</span>
                  <h3 className="text-lg font-bold text-white">Speed That Drives Results</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base">We move fast, test faster, and scale what works.</p>
              </motion.div>

              {/* Data That Makes You Money */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#2a2a2a] border-2 border-gray-700 rounded-xl p-4 hover:border-[rgb(255,68,0)] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🔶</span>
                  <h3 className="text-xl font-bold text-white">Data That Makes You Money</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base">We turn insights into campaigns that actually convert.</p>
              </motion.div>

              {/* Growth-Focused Thinking */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-[#2a2a2a] border-2 border-gray-700 rounded-xl p-4 hover:border-[rgb(255,68,0)] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🔶</span>
                  <h3 className="text-xl font-bold text-white">Growth-Focused Thinking</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base">Every move we make is designed to grow your brand.</p>
              </motion.div>

              {/* Precision Targeting */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#2a2a2a] border-2 border-gray-700 rounded-xl p-4 hover:border-[rgb(255,68,0)] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🔶</span>
                  <h3 className="text-lg font-bold text-white">Precision Targeting</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base">No wasted budget. Just the right audience, every time.</p>
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
