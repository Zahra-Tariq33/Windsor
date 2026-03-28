"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion, Variants } from "framer-motion";

type Testimonial = {
  name: string;
  country: string;
  image: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    country: "Studying in Canada",
    image: "/home/testimonials/image-1.jpg",
    text: "Windsor made my dream of studying in Canada a reality. Their guidance was invaluable throughout the entire process.",
  },
  {
    name: "Mohammed Ali",
    country: "Studying in UK",
    image: "/home/testimonials/image-2.jpg",
    text: "The IELTS coaching was exceptional. I scored 8.0 bands thanks to their excellent training program.",
  },
  {
    name: "Ahad Sharma",
    country: "Studying in Canada",
    image: "/home/testimonials/image-3.jpg",
    text: "From university selection to visa approval, Windsor supported me at every step. Highly recommended!",
  },
];

// Heading Animation
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Container & Cards
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, type: "spring", bounce: 0.2 },
  },
};

export default function TestimonialsSection() {
  return (
    <section className="py-20 overflow-hidden bg-slate-50/50 dark:bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-sm sm:text-lg md:text-xl font-semibold text-[#D99726] uppercase tracking-wider"
          >
            Testimonials
          </motion.p>

          <motion.h2
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-4xl md:text-6xl font-bold text-[#990422] dark:text-white mb-4 leading-tight"
          >
            What Our Students Say
          </motion.h2>

          <motion.p
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-3 max-w-2xl text-lg sm:text-xl mx-auto text-[#6A6868] dark:text-zinc-400"
          >
            Hear from students who achieved their study abroad dreams with our expert guidance.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              viewport={{ once: false }}
              whileHover={{ scale: 1.03 }}
              className="group relative bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-8 pt-12 overflow-hidden border transition-all duration-300"
            >
              {/* Corner Shape */}
              <div className="absolute top-0 right-0 h-16 w-16 bg-[#0b2a4a] rounded-bl-[60px] group-hover:bg-[#990422] transition-colors duration-500" />

              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <motion.div
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute -inset-1 bg-gradient-to-tr from-[#D99726] to-[#990422] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="relative rounded-full w-16 h-16 object-cover border-2 border-white shadow-sm"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{item.name}</h4>
                  <p className="text-sm text-[#D99726] font-medium">
                    {item.country}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-zinc-600 dark:text-zinc-300 text-base italic leading-relaxed">
                “{item.text}”
              </p>

              {/* Glow */}
              <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-[#990422]/5 rounded-full blur-3xl group-hover:bg-[#990422]/10 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
