"use client";

import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

interface Feature {
  icon: React.ReactNode;
  text: string;
}


const leftSideVariants: Variants = {
  hidden: { opacity: 0, x: -70 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } 
  },
};

const rightSideVariants: Variants = {
  hidden: { opacity: 0, x: 70 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutWindsor: React.FC = () => {
  const leftFeatures: Feature[] = [
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      text: "Personalized counseling for every student",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      text: "Complete visa assistance and documentation",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      text: "Pre-departure briefing and support",
    },
  ];

  const rightFeatures: Feature[] = [
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      text: "Expert guidance on university selection",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      text: "Scholarship guidance and financial planning",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      text: "Post-arrival assistance in destination country",
    },
  ];

  return (
    <section className="my-20 px-4 sm:px-6 lg:ml-[3.75rem] lg:px-8 transition-colors duration-300 overflow-x-clip">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="mb-2"
        >
          <span className="text-sm sm:text-lg md:text-xl font-semibold text-[#D99726] dark:text-[#dda23d] uppercase cursor-pointer">
            About Windsor
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
          <motion.div
            variants={leftSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            <motion.h2 variants={textItemVariants} className="text-4xl md:text-5xl font-bold text-[#990422] dark:text-white mb-6 leading-tight cursor-pointer">
              Your Trusted Partner for Global Education
            </motion.h2>

            <motion.p variants={textItemVariants} className="text-lg text-[#6A6868] text-justify dark:text-slate-300 mb-10 leading-relaxed cursor-pointer">
              Since 2012, Windsor Education Consultancy has been helping
              students achieve their dreams of studying abroad. With a team of
              experienced counselors and a proven track record, we provide
              comprehensive support from university selection to visa success.
            </motion.p>

           
            <motion.div variants={textItemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
              <div className="space-y-5">
                {leftFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1 text-[#002241] dark:text-white transition-colors cursor-pointer">
                      {feature.icon}
                    </div>
                    <p className="text-sm md:text-base font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column Features */}
              <div className="space-y-5">
                {rightFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1 text-[#002241] dark:text-white transition-colors cursor-pointer">
                      {feature.icon}
                    </div>
                    <p className="text-sm md:text-base font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Moving from Right */}
          <motion.div 
            variants={rightSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="relative h-96 sm:h-[28.75rem] md:h-[26.25rem] lg:h-[28.75rem] flex items-center justify-center"
          >
            {/* Images wrapper */}
            <div className="relative w-[26.5rem] h-[17rem] sm:w-[26.25rem] sm:h-[18.75rem] md:w-[33rem] md:h-[18.75rem]">
              {/* Left Image (slightly up) */}
              <div className="absolute left-0 top-0 w-52 h-64 md:w-[16.25rem] md:h-[23rem] rounded-2xl overflow-hidden shadow-xl dark:shadow-slate-900/50 transform transition">
                <img
                  src="/home/about-img-1.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Image (slightly down) */}
              <div className="absolute right-0 bottom-0 w-52 h-64 md:w-[16.25rem] md:h-[23rem] rounded-2xl overflow-hidden shadow-xl dark:shadow-slate-900/50 transform sm:-translate-y-6 md:translate-y-24 transition">
                <img
                  src="/home/about-img-2.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge (center overlap) */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                viewport={{ once: false }}
                className="absolute inset-0 flex top-72 sm:top-[17.5rem] md:top-[23.75rem] items-center justify-center z-10 cursor-pointer"
              >
                <div className="bg-slate-800 dark:bg-slate-900 text-white px-5 py-4 rounded-xl shadow-2xl dark:shadow-slate-900/70">
                  <div className="text-center">
                    <div className="text-3xl font-bold">12+</div>
                    <div className="text-sm font-medium">
                      Years of Excellence
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutWindsor;