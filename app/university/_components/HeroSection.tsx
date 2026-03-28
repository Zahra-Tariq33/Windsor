"use client";

import React from "react";
import { motion } from "framer-motion";

interface StatItem {
  icon?: React.ReactNode;
  label: string;
  value: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface HeroSectionProps {
  breadcrumb?: BreadcrumbItem[];
  title: string;
  subtitleInfo?: { icon: React.ReactNode; text: string }[];
  backgroundImage: string;
  stats: StatItem[];
  statsPosition?: "top" | "bottom";
  overlayColor?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  breadcrumb,
  title,
  subtitleInfo,
  backgroundImage,
  stats,
  statsPosition = "bottom",
  overlayColor = "bg-[#990422]/90",
}) => {
  return (
    // Pura section load hote waqt scale down (Zoom Out) hoga
    <motion.section 
      initial={{ scale: 1.05, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full mb-0 lg:mb-16"
    >
      <div className="relative overflow-hidden">
        {/* BG Image fixed height ke saath */}
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Hero background"
            className="h-full w-full object-cover"
          />
          <div className={`absolute inset-0 ${overlayColor}`} />
        </div>

        {/* Hero Content - Padding wahi rakhi hai jo pehle thi */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
          
          {/* Breadcrumb Animation */}
          {breadcrumb && (
            <motion.nav 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 text-xs sm:text-sm md:text-lg mb-4 text-white/80"
            >
              {breadcrumb.map((item, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <span className="mx-1">&gt;</span>}
                  <span className={item.isActive ? "text-white/80" : "text-[#D99726]"}>{item.label}</span>
                </React.Fragment>
              ))}
            </motion.nav>
          )}

          {/* Heading Animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle Info Animation */}
          {subtitleInfo && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8, staggerChildren: 0.2 }}
              className="flex flex-wrap items-center gap-4 text-white"
            >
              {subtitleInfo.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  className="flex items-center gap-2"
                >
                  <span className="text-[#D99726]">{item.icon}</span>
                  <span className="text-sm sm:text-base lg:text-xl">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Stats Section - Smoothly pops up from bottom */}
      {stats && stats.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 1, duration: 0.6, type: "spring", stiffness: 100 }}
          className={`relative lg:absolute left-4 right-4 lg:left-20 lg:right-20 z-20 
            ${statsPosition === "top" ? "-top-10" : "lg:-bottom-16 mt-[-24px] lg:mt-0"}`}
        >
          <div className="bg-white rounded-2xl shadow-xl py-6 lg:py-8 px-6 border border-gray-50">
            <div className={`grid grid-cols-2 lg:grid-cols-${stats.length >= 4 ? 4 : stats.length} gap-6`}>
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: false }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-2 bg-gray-50 group-hover:bg-amber-50 transition-colors">
                    <span className="text-[#D99726] text-xl lg:text-4xl">{stat.icon}</span>
                  </div>
                  <p className="text-[10px] lg:text-sm text-gray-500 uppercase tracking-wide">{stat.label}</p>
                  <p className="text-xs lg:text-xl font-bold text-gray-800">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Extra space bottom padding fix */}
      <div className="hidden lg:block h-16" />
    </motion.section>
  );
};

export default HeroSection;
