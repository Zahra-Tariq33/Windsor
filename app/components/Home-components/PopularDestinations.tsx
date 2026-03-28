"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface Destination {
  title: string;
  universities: string;
  image: string;
}

const destinations: Destination[] = [
  { title: "Australia", universities: "45+ Universities", image: "/universities/image-1.jpg" },
  { title: "Canada", universities: "62+ Universities", image: "/universities/image-2.jpg" },
  { title: "United Kingdom", universities: "35+ Universities", image: "/universities/image-3.jpg" },
  { title: "United States", universities: "25+ Universities", image: "/universities/image-4.jpg" },
  { title: "New Zealand", universities: "20+ Universities", image: "/universities/image-5.jpg" },
  { title: "Europe", universities: "45+ Universities", image: "/universities/image-6.jpg" },
];

// Heading Variants
const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

// Hover Variants
const arrowContainerVariants: Variants = {
  hover: { x: 8, transition: { duration: 0.3, ease: "easeOut" } },
};

const arrowIconVariants: Variants = {
  hover: { x: 5, color: "#D99726" },
};

const textGoldVariants: Variants = {
  hover: { color: "#D99726" },
};

export default function PopularDestinations() {
  return (
    <section className="py-16 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading Section */}
        <div className="text-center mb-12">
          <motion.p
            custom={0}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-sm sm:text-lg md:text-xl font-semibold text-[#D99726] dark:text-[#dda23d] uppercase"
          >
            Study Abroad
          </motion.p>

          <motion.h2
            custom={1}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-4xl md:text-5xl font-bold text-[#990422] dark:text-white mb-2 leading-tight"
          >
            Popular Destinations
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-3 max-w-4xl text-lg sm:text-xl mx-auto text-[#6A6868] dark:text-white"
          >
            Explore world-class education opportunities across the globe. We
            have partnerships with top universities in these countries.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover="hover"
              className="group relative h-64 rounded-2xl overflow-hidden shadow-lg dark:shadow-black/40 cursor-pointer"
            >
              {/* Image */}
              <motion.img
                src={item.image}
                alt={item.title}
                variants={{ hover: { scale: 1.1 } }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity group-hover:opacity-90" />

              {/* Content */}
              <div className="absolute bottom-5 left-5 z-10">
                <motion.h3
                  variants={textGoldVariants}
                  className="text-white text-xl md:text-2xl font-bold transition-colors"
                >
                  {item.title}
                </motion.h3>

                <p className="text-xl md:text-2xl font-bold text-white">
                  {item.universities}
                </p>

                {/* Arrow */}
                <motion.div
                  variants={arrowContainerVariants}
                  className="flex items-center gap-2 mt-1"
                >
                  <motion.span
                    variants={textGoldVariants}
                    className="text-xs text-white font-medium transition-colors"
                  >
                    Explore Universities
                  </motion.span>

                  <motion.span
                    variants={arrowIconVariants}
                    className="text-white"
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
