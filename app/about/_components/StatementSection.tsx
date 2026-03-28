"use client";

import { motion, Variants } from "framer-motion";

interface StatementSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

// Variants for the background zoom
const bgVariants: Variants = {
  initial: { scale: 1.2 },
  animate: { 
    scale: 1, 
    transition: { duration: 2, ease: "easeOut" } 
  },
};

export default function StatementSection({
  title,
  description,
  backgroundImage,
}: StatementSectionProps) {
  return (
    <section className="relative w-full mt-10 overflow-hidden">
      
      {/* IMAGE LAYER with Zoom-out Animation */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        variants={bgVariants}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* COLOR LAYER */}
      <div className="absolute inset-0 bg-[#990421] opacity-85 dark:bg-[#1a1a1a]" />

      {/* CONTENT */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center text-white"
      >
        {/* Animated Left Quote */}
        <motion.span 
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1 } }
          }}
          className="absolute left-6 top-10 text-5xl sm:text-6xl md:text-7xl lg:text-9xl select-none opacity-50"
        >
          “
        </motion.span>

        {/* Animated Right Quote */}
        <motion.span 
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1 } }
          }}
          className="absolute right-6 -bottom-10 text-5xl sm:text-6xl md:text-7xl lg:text-9xl select-none opacity-50"
        >
          ”
        </motion.span>

      
        <motion.h2 
          variants={contentVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          {title}
        </motion.h2>

       
        <motion.p 
          variants={contentVariants}
          className="max-w-5xl mx-auto text-base sm:text-lg md:text-xl lg:text-[22px] font-semibold text-white"
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
}