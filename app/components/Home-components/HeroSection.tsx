"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const countries = ["UK", "Malaysia", "USA", "Canada", "Australia", "Germany"];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="relative min-h-[27.5rem] w-full overflow-hidden bg-red-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/home/hero.jpg"
          alt="Students studying"
          className="h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#990422E5] pointer-events-none"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            variants={item}
            viewport={{ once: false }}
            className="mb-6 inline-block"
          >
            <span className="rounded-full border-2 border-white bg-white/30 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm cursor-pointer">
              Your Gateway to Global Education
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            viewport={{ once: false }}
            className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer"
          >
            Your Gateway to Global Education
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            viewport={{ once: false }}
            className="mb-6 text-lg text-white/90 sm:text-xl md:text-2xl lg:text-[28px] cursor-pointer"
          >
            Expert guidance for IELTS, TOEFL, PTE preparation and study abroad
            programs. We help you navigate your path to world-class education.
          </motion.p>

          {/* Countries */}
          <motion.div
            variants={item}
            viewport={{ once: false }}
            className="mb-8 flex flex-wrap gap-3"
          >
            {countries.map((country) => (
              <motion.span
                key={country}
                viewport={{ once: false }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-[9.4px] bg-white/30 px-4 py-2 text-sm font-medium border border-white text-white backdrop-blur-sm transition-all cursor-pointer"
              >
                {country}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            viewport={{ once: false }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              viewport={{ once: false }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-sm bg-[#D99726] px-8 py-3 font-semibold text-gray-900 shadow-lg transition-all duration-200 hover:bg-yellow-400 hover:shadow-xl"
            >
              Enroll Now
            </motion.button>

            <motion.button
              viewport={{ once: false }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center rounded-sm border border-white bg-transparent px-8 py-3 font-semibold text-white shadow-lg whitespace-nowrap transition-all duration-200 hover:bg-white hover:text-red-900 hover:shadow-xl focus:outline-none"
            >
              Explore Programs
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-0 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
