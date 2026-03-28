"use client";

import AccordionItem from "@/app/components/AccordionItem";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type RequirementItem = {
  title: string;
  icon?: ReactNode;
  content: ReactNode;
};

type RequirementsSectionProps = {
  badgeText?: string;
  title: string;
  requirements: RequirementItem[];
};

export default function RequirementsSection({
  badgeText,
  title,
  requirements,
}: RequirementsSectionProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-xl p-9 shadow-lg border border-gray-50"
    >
      {/* HEADER ANIMATION */}
      <div className="mb-8">
        {badgeText && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-sm sm:text-lg md:text-xl font-semibold text-[#D99726] mb-2"
          >
            {badgeText}
          </motion.p>
        )}

        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl text-[#990422] font-bold mb-4"
        >
          {title}
        </motion.h2>
      </div>

      {/* STAGGERED ACCORDION LIST */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { 
              staggerChildren: 0.12,
              delayChildren: 0.4
            }
          }
        }}
        className="space-y-3"
      >
        {requirements.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { 
                opacity: 1, 
                y: 0,
                transition: { type: "spring", stiffness: 70 }
              }
            }}
          >
            <AccordionItem title={item.title}>
              {item.content}
            </AccordionItem>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}