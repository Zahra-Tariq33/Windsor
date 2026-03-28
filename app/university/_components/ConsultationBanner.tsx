"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const ConsultationBanner: React.FC = () => {
  // 1. Fixed Variants to resolve "variant error" and set duration to 4
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.5 
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8 } 
    },
  };

  const sideSlideLeft: Variants = {
    hidden: { x: "-100%" },
    visible: { 
      x: 0, 
      transition: { duration: 2, ease: "circOut" } // Duration set to 4
    },
  };

  const sideSlideRight: Variants = {
    hidden: { x: "100%" },
    visible: { 
      x: 0, 
      transition: { duration: 2, ease: "circOut" } // Duration set to 4
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 overflow-hidden">
      <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden  relative">
        
        {/* Left Section - Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sideSlideLeft}
          className="bg-[#990421] px-12 pt-12 pb-24 md:pb-40 flex flex-col justify-center relative overflow-hidden"
        >
          {/* Decorative Background Circle */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full blur-3xl opacity-10"
          />

          <motion.div 
            variants={containerVariants}
            className="relative z-10"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Start Your Journey Today
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white text-lg md:text-xl mb-8 leading-relaxed max-w-md opacity-90">
              Take the first step towards your international education dreams.
              Our expert counselors are ready to guide you through every step.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/contact">
                <button className="group text-lg md:text-xl bg-[#D99726] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-[#D99726]/40 hover:scale-105 active:scale-95">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Section - Contact Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sideSlideRight}
          className="bg-[#002241] px-12 pt-12 pb-32 flex flex-col justify-center relative overflow-hidden"
        >
          {/* Decorative Background Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D99726] opacity-10 blur-2xl" />

          <motion.div 
            variants={containerVariants}
            className="relative z-10"
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white mb-8">Get In Touch</motion.h3>

            <div className="space-y-8">
              {/* Phone */}
              <motion.div variants={itemVariants} className="flex items-start gap-4 group cursor-pointer">
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="bg-white/10 border border-white/20 p-3 rounded-xl group-hover:bg-[#D99726] group-hover:border-[#D99726] transition-all duration-300"
                >
                  <Phone className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Call Us</p>
                  <p className="text-white text-lg md:text-xl font-bold group-hover:text-[#D99726] transition-colors">
                    +92 300 9508035
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                <motion.div 
                  whileHover={{ rotate: -15, scale: 1.1 }}
                  className="bg-white/10 border border-white/20 p-3 rounded-xl group-hover:bg-[#D99726] group-hover:border-[#D99726] transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Email Us</p>
                  <a
                    href="mailto:Info@windsorconsultancyservices.com"
                    className="text-white text-lg md:text-base lg:text-lg font-bold group-hover:text-[#D99726] transition-colors break-all"
                  >
                    Info@windsorconsultancyservices.com
                  </a>
                </div>
              </motion.div>

              {/* Locations */}
              <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                <motion.div 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="bg-white/10 border border-white/20 p-3 rounded-xl group-hover:bg-[#D99726] group-hover:border-[#D99726] transition-all duration-300"
                >
                  <MapPin className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Our Office</p>
                  <p className="text-white text-lg font-bold group-hover:text-[#D99726] transition-colors">
                    35-Nargis Block, Iqbal Town, Lahore
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default ConsultationBanner;