// components/OurStorySection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const OurStorySection = () => {
  return (
    <section className="py-16 px-4 sm:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
        
        {/* Left Content - Slow slide from Left */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ 
            duration: 1, 
            ease: "easeOut" 
          }}
          className="text-center md:text-left lg:pl-12"
        >
          <p className="text-lg md:text-xl font-semibold text-[#D99726] dark:text-white uppercase ">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#990422] mb-6">
            Our Story
          </h2>
          <p className="text-gray-700 text-base md:text-lg dark:text-gray-300 mb-4 text-justify">
            Founded with a vision to bridge the gap between ambitious students
            and world-class education opportunities, Windsor Consultancy
            Services has grown to become one of the most trusted names in
            education visa consultancy.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-4 text-justify">
            Our journey began with a simple belief: every student deserves
            access to quality education, regardless of geographical boundaries.
            Today, we have successfully guided thousands of students to
            prestigious universities across the globe.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg text-justify">
            With our team of experienced counselors, immigration experts, and
            dedicated support staff, we provide comprehensive assistance at
            every step of your study abroad journey—from selecting the right
            course to securing your student visa.
          </p>
        </motion.div>

        {/* Right Image - Slow slide from Right with subtle scale */}
        <motion.div 
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ 
            duration: 1, 
            ease: "easeOut" 
          }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative max-w-[500px] max-h-[500px] rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-contain"
              src="/our-story.png"
              alt="Our Story"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurStorySection;