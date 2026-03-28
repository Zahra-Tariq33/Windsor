"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion, Variants } from "framer-motion";

// 1. Heading Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

// 2. Form Entrance (Slide from left)
const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 1.3, ease: "easeOut", delay: 0.4 } 
  },
};

// 3. Info Cards & Map Entrance (Slide from right)
const slideInRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 1.3, ease: "easeOut", delay: 0.7 } 
  },
};

// 4. Icon Container Variants (Fixed type-safety)
const iconBoxVariants: Variants = {
  initial: { 
    scale: 1, 
    y: 0,
    backgroundColor: "rgba(254, 226, 226, 1)", 
    boxShadow: "0px 0px 0px rgba(153, 4, 34, 0)" 
  },
  hover: { 
    scale: 1.15, 
    y: -5,
    backgroundColor: "#990422", 
    boxShadow: "0px 8px 20px rgba(153, 4, 34, 0.4)",
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

const iconInnerVariants: Variants = {
  initial: { color: "#990422", rotate: 0 },
  hover: { 
    color: "#ffffff", 
    rotate: [0, -15, 15, 0], 
    transition: { duration: 0.5, delay: 0.1 } 
  }
};

export default function ContactSection() {
  return (
    <section className="py-20 overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.p variants={fadeInUp} className="text-sm sm:text-lg md:text-xl font-semibold text-[#D99726] dark:text-[#dda23d] uppercase">
            Get In Touch
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#990422] dark:text-white mb-2 leading-tight">
            Contact Us
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-3 max-w-4xl text-lg sm:text-xl mx-auto text-[#6A6868] dark:text-white">
            Ready to start your study abroad journey? Get in touch with our expert counselors today.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* Left Side: Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={slideInLeft}
            className="bg-white dark:bg-[#121212] rounded-xl shadow-md p-8 border border-transparent dark:border-zinc-800"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#717171] dark:text-white mb-6">
              Send us a Message
            </h3>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-lg font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#8b0000] transition-all"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-lg font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#8b0000] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-lg font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#8b0000] transition-all"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-lg font-medium text-gray-700 dark:text-gray-300">Interested Country</label>
                  <input
                    type="text"
                    placeholder="e.g. Canada, UK"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#8b0000] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-lg font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  placeholder="Write your message here..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#8b0000] resize-none transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#8b0000] hover:bg-[#a00000] text-white py-3 rounded-lg font-medium transition-colors"
              >
                Send us Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side: Info + Map */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={slideInRight}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <InfoCard icon={<Phone className="w-6 h-6" />} title="Phone" lines={["+92 300 9508035", "+92 326 9508034"]} />
              <InfoCard icon={<Mail className="w-6 h-6" />} title="Email" lines={["Info@windsorconsultancy.com"]} />
              <InfoCard icon={<MapPin className="w-6 h-6" />} title="Address" lines={["35-Nargis Block Iqbal Town Lahore"]} />
              <InfoCard icon={<Clock className="w-6 h-6" />} title="Working Hours" lines={["Mon - Fri: 10AM - 7PM", "Sat - Sun: Closed"]} />
            </div>

            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-[#121212] rounded-xl shadow-md overflow-hidden h-64 border border-transparent dark:border-zinc-800"
            >
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13606.311319762143!2d74.34674395!3d31.508226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1715852538123!5m2!1sen!2s"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <motion.div 
      whileHover="hover"
      initial="initial"
      className="bg-white dark:bg-[#121212] rounded-xl shadow-md p-5 flex flex-col gap-3 border border-transparent hover:border-red-100 dark:hover:border-red-900/30 transition-all cursor-pointer group"
    >
      <motion.div 
        variants={iconBoxVariants}
        className="w-10 h-10 rounded-lg text-[#990422] flex items-center justify-center shrink-0"
      >
        <motion.div variants={iconInnerVariants}>
          {icon}
        </motion.div>
      </motion.div>

      <div>
        <h4 className="font-semibold text-[#990422] dark:text-white text-sm sm:text-lg mb-1">{title}</h4>
        {lines.map((line, i) => (
          <p key={i} className="text-sm text-[#6A6868] dark:text-gray-400 leading-relaxed">{line}</p>
        ))}
      </div>
    </motion.div>
  );
}