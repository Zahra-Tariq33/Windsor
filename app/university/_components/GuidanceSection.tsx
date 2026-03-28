"use client";

import GuidanceStepItem from "@/app/components/GuidanceStepItem";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type GuidanceSectionProps = {
  badgeText?: string;
  title: string;
  steps: { text: string; icon?: ReactNode }[];
  notice: {
    title: string;
    description: string[];
    buttonText: string;
    onClick?: () => void;
  };
};

export default function GuidanceSection({
  badgeText,
  title,
  steps,
  notice,
}: GuidanceSectionProps) {
  
  // Left side variants
  const leftContainerVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Right side variants
  const noticeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, x: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { delay: 0.4, duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-6 overflow-hidden lg:overflow-visible">
      {/* LEFT SIDE (MAIN CONTENT) */}
      <motion.div 
        variants={leftContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="flex-1 p-9 rounded-xl shadow bg-white"
      >
        {badgeText && (
          <motion.p 
            variants={stepVariants}
            className="text-sm sm:text-lg md:text-xl font-semibold text-[#D99726] mb-2"
          >
            {badgeText}
          </motion.p>
        )}

        <motion.h2 
          variants={stepVariants}
          className="text-2xl sm:text-3xl md:text-4xl text-[#990422] font-bold mb-4"
        >
          {title}
        </motion.h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div key={index} variants={stepVariants}>
              <GuidanceStepItem icon={step.icon} text={step.text} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT SIDE (NOTICE BOX) */}
      <motion.div 
        variants={noticeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="lg:w-[450px] mt-6 lg:mt-0 lg:ml-0 flex-shrink-0"
      >
        <div className="bg-[#990422] border border-red-200 rounded-xl p-8 flex flex-col sticky top-20 shadow-lg">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-bold text-lg sm:text-xl md:text-2xl mb-8 text-white"
          >
            {notice.title}
          </motion.h3>

          <div className="text-sm sm:text-base text-justify md:text-lg text-white space-y-4 mb-8">
            {notice.description.map((line, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + (index * 0.1) }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#c48620" }}
            whileTap={{ scale: 0.95 }}
            onClick={notice.onClick}
            className="mt-auto bg-[#D99726] text-white px-6 py-3 rounded-md text-base font-bold shadow-md transition-colors"
          >
            {notice.buttonText}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}