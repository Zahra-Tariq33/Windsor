"use client";

import ScholarshipCard from "@/app/components/ScholarshipCard";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion"; // Import Variants type

type ScholarshipItem = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
};

type ScholarshipsSectionProps = {
  badgeText?: string;
  title: string;
  scholarships: ScholarshipItem[];
};

export default function ScholarshipsSection({
  badgeText,
  title,
  scholarships,
}: ScholarshipsSectionProps) {
  
  // 1. Explicitly type the variants to avoid TypeScript "any" or mismatch errors
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="mb-6">
        {badgeText && (
          <p className="text-sm sm:text-lg md:text-xl font-semibold text-[#D99726] mb-2">
            {badgeText}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#990422] font-bold mb-4">
          {title}
        </h2>
      </div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} // Reduced amount to ensure trigger
      >
        {scholarships.map((item, index) => (
          <motion.div
            key={`${item.title}-${index}`} // Better keying for stability
            variants={cardVariants}
            whileHover={{ 
                scale: 1.03, 
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 } 
            }}
          >
          
            <ScholarshipCard
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}