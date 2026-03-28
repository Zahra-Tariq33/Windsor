"use client";

import { motion } from "framer-motion";

type ProcessStepProps = {
  step: number;
  title: string;
};

export default function ProcessStep({ step, title }: ProcessStepProps) {
  return (
    <div className="flex gap-6 relative group">
      {/* STEP NUMBER ANIMATION */}
      <div className="flex-shrink-0 z-10">
        <motion.div 
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: false }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.1 
          }}
          whileHover={{ scale: 1.1, backgroundColor: "#D99726" }}
          className="w-14 h-14 rounded-full bg-[#990422] text-white flex items-center justify-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl shadow-lg transition-colors duration-300"
        >
          {step}
        </motion.div>
      </div>

      {/* STEP CONTENT */}
      <div className="relative">
        {/* ANIMATED CONNECTING LINE */}
        <div className="absolute left-[10px] top-12 w-[3px] h-[calc(100%+2px)] group-last:hidden flex flex-col items-center">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            className="w-full bg-[#D9D9D9] origin-top"
          />
        </div>

        {/* TITLE ANIMATION */}
        <motion.h4 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-semibold mt-3 text-[#474740] text-sm sm:text-lg md:text-xl lg:text-2xl group-hover:text-[#990422] transition-colors duration-300"
        >
          {title}
        </motion.h4>
      </div>
    </div>
  );
}