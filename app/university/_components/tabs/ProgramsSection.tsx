"use client";

import { LuCircleCheckBig } from "react-icons/lu";
import { motion, Variants } from "framer-motion";

/* ================= TYPES ================= */

type ProgramGroup = {
  title: string;
  items: string[];
};

type ProgramsSectionProps = {
  badgeText?: string;
  title: string;
  programs: ProgramGroup[];
  filterPlaceholder?: string;
  onFilterChange?: (value: string) => void;
};

/* ================= ANIMATIONS ================= */

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

/* ================= COMPONENT ================= */

export default function ProgramsSection({
  badgeText,
  title,
  programs,
  filterPlaceholder = "Filter",
  onFilterChange,
}: ProgramsSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-xl p-9 shadow overflow-hidden"
    >
      {/* ================= HEADER ================= */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          {badgeText && (
            <p className="text-sm sm:text-lg md:text-xl font-semibold text-[#D99726] mb-2">
              {badgeText}
            </p>
          )}

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#990422] font-bold mb-4">
            {title}
          </h2>
        </div>

        {onFilterChange && (
          <input
            placeholder={filterPlaceholder}
            onChange={(e) => onFilterChange(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm outline-none transition-all
                       focus:scale-[1.02] focus:border-[#990422]"
          />
        )}
      </div>

      {/* ================= PROGRAM LIST ================= */}
      <div className="grid md:grid-cols-2 gap-6">
        {programs.map((section, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
              }}
              className="border border-gray-100 rounded-xl p-5 bg-white
                         transition-colors duration-300 hover:border-[#D99726]
                         overflow-hidden"
            >
              <h3 className="font-semibold mb-5 text-base sm:text-lg md:text-xl lg:text-[28px] text-[#990422]">
                {section.title}
              </h3>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                className="text-sm sm:text-lg md:text-xl text-[#737373] space-y-4"
              >
                {section.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={listItemVariants}
                    className="flex items-center gap-2"
                  >
                    <LuCircleCheckBig className="w-5 h-5 sm:w-6 sm:h-6 text-[#D99726] shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
