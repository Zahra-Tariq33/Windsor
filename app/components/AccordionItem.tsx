"use client";

import { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type AccordionItemProps = {
  title: string;
  children: ReactNode;
};

export default function AccordionItem({
  title,
  children,
}: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={{
        backgroundColor: open
          ? "rgba(153, 4, 34, 0.02)"
          : "rgba(255, 255, 255, 0)",
      }}
      transition={{ duration: 0.4 }}
      className="border-b transition-colors duration-500"
    >
      {/* HEADER */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between py-6 px-2 text-left group outline-none cursor-pointer"
      >
        <div className="flex items-center gap-4">
          {/* Indicator Dot */}
          <motion.span
            animate={{
              scale: open ? 1.2 : 1,
              backgroundColor: open ? "#990422" : "#D1D5DB",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-2 w-2 rounded-full"
          />

          <span
            className={`text-xl font-semibold transition-all duration-300 ${
              open
                ? "text-[#990422] translate-x-1"
                : "text-[#474740] group-hover:text-[#990422]"
            }`}
          >
            {title}
          </span>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{
            rotate: open ? 180 : 0,
            scale: open ? 1.15 : 1,
            color: open ? "#990422" : "#474740",
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </button>

      {/* CONTENT */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: "easeInOut" },
              opacity: { duration: 0.25 },
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.35 }}
              className="pb-8 px-8 text-base text-gray-600 leading-relaxed border-l-2 border-[#990422]/20 ml-3"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
