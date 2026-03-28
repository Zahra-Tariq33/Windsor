"use client";

import { motion, Variants } from "framer-motion";

/* ================= TYPES ================= */

type QuickFact = {
  label: string;
  value: string;
  highlight?: boolean;
};

type OverviewSectionProps = {
  badgeText?: string;
  title: string;
  description: React.ReactNode;
  quickFacts: QuickFact[];
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    onClick?: () => void;
  };
};

/* ================= ANIMATIONS ================= */

const leftContentVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const sidebarContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const sidebarItemVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

export default function OverviewSection({
  badgeText,
  title,
  description,
  quickFacts,
  cta,
}: OverviewSectionProps) {
  return (
    <div className="grid lg:grid-cols-3 gap-6 pl-0 lg:pl-10">
      {/* ================= LEFT CONTENT ================= */}
      <motion.div
        className="lg:col-span-2 bg-white rounded-xl p-9 md:p-12 shadow overflow-hidden"
        variants={leftContentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {badgeText && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-lg md:text-xl font-semibold text-[#D99726] mb-2"
          >
            {badgeText}
          </motion.p>
        )}

        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#990422] font-bold mb-4">
          {title}
        </h2>

        <div className="text-sm sm:text-base md:text-lg text-[#6A6868] leading-relaxed">
          {description}
        </div>
      </motion.div>

      {/* ================= RIGHT SIDEBAR ================= */}
      <motion.div
        className="space-y-4"
        variants={sidebarContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        {/* ===== Quick Facts Card (WRAPPER FIX) ===== */}
        <div className="overflow-hidden rounded-xl">
          <motion.div
            className="bg-white text-lg sm:text-xl md:text-2xl rounded-xl p-9 shadow"
            variants={sidebarItemVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <h3 className="font-bold text-[#990422] mb-4">
              Quick Facts
            </h3>

            <ul className="text-sm sm:text-base md:text-lg font-semibold text-gray-600 space-y-2">
              {quickFacts.map((fact, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className={`flex justify-between ${
                    fact.highlight
                      ? "text-[#D99726] font-medium"
                      : ""
                  }`}
                >
                  <span className="text-[#6A6868] font-normal">
                    {fact.label}
                  </span>
                  <strong>{fact.value}</strong>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ===== CTA CARD (WRAPPER FIX) ===== */}
        {cta && (
          <div className="overflow-hidden rounded-xl">
            <motion.div
              className="bg-[#990422] rounded-xl p-6 text-white"
              variants={sidebarItemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">
                {cta.title}
              </h3>

              <p className="text-sm sm:text-base md:text-lg mb-4 opacity-90">
                {cta.description}
              </p>

              <motion.button
                onClick={cta.onClick}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#c48620",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#D99726] text-white px-4 py-2 rounded-md font-semibold
                           text-lg sm:text-xl md:text-2xl w-full shadow-lg"
              >
                {cta.buttonText}
              </motion.button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
