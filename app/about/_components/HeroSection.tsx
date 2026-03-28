// components/HeroSection.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { BsGlobe2 } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlinePeopleAlt } from "react-icons/md";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <LuGraduationCap />,
    title: "Expert Guidance",
    description: "Certified counselors with deep knowledge of global education systems",
  },
  {
    icon: <BsGlobe2 />,
    title: "Global Network",
    description: "Partnerships with top universities across UK, USA, Canada & Australia",
  },
  {
    icon: <MdOutlinePeopleAlt />,
    title: "Dedicated Support",
    description: "End-to-end assistance from application to visa approval",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8, // Waits for background zoom to start before showing text
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

// Background Zoom Variant
const bgZoomVariants: Variants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 1.5, ease: "easeOut" } 
  },
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={bgZoomVariants}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('/home/hero.jpg')` }}
      />

      {/* Background Overlay */}
      <div className="relative z-10 bg-[#990422E5]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-6 py-14 text-center"
        >
          {/* Top Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-[#D99726] text-xl sm:text-2xl md:text-3xl font-semibold mb-2"
          >
            Trusted Education Consultants
          </motion.p>

          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Your Gateway to Global Education
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-white/90 mb-12 text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl max-w-6xl mx-auto"
          >
            Windsor Consultancy Services has been empowering students to achieve
            their dreams of studying abroad. With expert guidance and
            personalized support, we make your international education journey
            seamless.
          </motion.p>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/30 backdrop-blur-md p-6 rounded-lg flex flex-col items-center text-center border-[3px] border-white cursor-pointer shadow-xl transition-colors duration-300"
              >
                <div className="mb-4 text-3xl md:text-4xl lg:text-5xl text-[#D99726]">
                  {feature.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {feature.title}
                </h3>

                <p className="text-[#EDEDED] text-sm md:text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;