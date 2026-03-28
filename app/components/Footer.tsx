"use client";

import React from "react";
import { useTheme } from "@/app/providers/ThemeProvider";
import { motion, Variants } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import LocationMap from "./LocationMap";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Footer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/aptagon/" },
    { icon: FaInstagram, href: "https://www.instagram.com/aptagon/" },
    { icon: FaTwitter, href: "#" },
    { icon: FaYoutube, href: "#" },
  ];

  return (
    <footer className="bg-[#990422] text-white transition-colors duration-300 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-8 py-10 md:py-14"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.2fr] gap-4 lg:gap-5">
          <div className="space-y-6">
            <motion.img
              variants={itemVariants}
              src="/logos/logo-white.png"
              width={212}
              height={63}
              alt="Windsor Consultancy Logo"
           
              className="mb-4 cursor-pointer" 
            />

            <motion.p
              variants={itemVariants}
              className="text-sm leading-relaxed text-white max-w-xs cursor-pointer"
            >
              Windsor Education & Visa Consultancy offers reliable study-abroad
              and visa guidance, helping students achieve global education goals
              through expert counseling and end-to-end support.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-11 text-lg text-white items-center">
                <h3 className="font-semibold text-white col-span-full cursor-pointer">Connect With Us</h3>

               
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2 cursor-pointer">
                  <FaPhoneAlt className="shrink-0" />
                  <span className="text-sm">+92 300 9508035</span>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2 cursor-pointer">
                  <FaPhoneAlt className="shrink-0" />
                  <span className="text-sm">+92 326 9508034</span>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2 cursor-pointer">
                  <FaEnvelope className="shrink-0" />
                  <span className="text-xs sm:text-sm truncate">Info@windsorconsultancyservices.com</span>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2 cursor-pointer">
                  <FaMapMarkerAlt className="shrink-0" />
                  <span className="text-sm">Lahore, Pakistan</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
          
            className="relative flex items-center justify-center rounded-lg w-full min-h-[300px] bg-transparent cursor-pointer"
          >
            <LocationMap />
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="border-t border-white/20 origin-left"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium cursor-pointer">
              {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </span>
            <button
              onClick={toggleTheme}
             
              className="relative w-12 h-6 bg-gray-400 dark:bg-white/20 border-2 border-white rounded-full transition-colors duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              <motion.div
                animate={{ x: theme === "dark" ? 24 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-[2px] w-4 h-4 bg-white rounded-full"
              />
            </button>
          </div>

          <p className="text-xs text-white/80 cursor-pointer">
            © 2026 Windsor Consultancy - All rights reserved.
          </p>

          <div className="flex gap-5">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.2, color: "#D99726" }}
               
                className="text-white cursor-pointer"
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;