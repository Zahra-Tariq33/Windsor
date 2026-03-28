"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function StudyAbroadBanner() {
  return (
    <section className="relative overflow-visible mb-10">
      {/* Red Background Section */}
      <div className="bg-[#990422] relative z-0 py-12 lg:py-8">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 gap-8 items-center relative">
            
            {/* Left Content - Staggered Reveal */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white space-y-6 pl-5 z-10"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold "
              >
                Dreaming to study abroad but still confused where to start?
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-white/90"
              >
                We are here to guide you on your journey.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
              >
                <Link
                  href="/book-session"
                  className="inline-block bg-[#D99726] hover:bg-[#c9891f] text-gray-900 font-semibold px-8 py-3 rounded-md transition-all duration-200 shadow-lg"
                >
                  Schedule a Call →
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Unique One-Time Entrance */}
            <div className="hidden lg:block absolute right-0 bottom-0 translate-y-8 h-[500px] w-[400px] pointer-events-none">
              <motion.img
                initial={{ opacity: 0, y: 250, rotate: 10, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ 
                  type: "spring", 
                  stiffness: 45,   // Smooth landing
                  damping: 12,    // Natural bounce control
                  delay: 0.3      // Slight delay for premium feel
                }}
                src="/services-images/study-abroad2.png"
                alt="Student with books"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Image - Simple Fade Up */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="lg:hidden flex justify-center bg-[#990422]"
      >
        <div className="relative w-[280px] h-[380px]">
          <img
            src="/services-images/study-abroad2.png"
            alt="Student with books"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}