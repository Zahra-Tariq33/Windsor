"use client";

import { motion } from "framer-motion";
import { BsPeople } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { LiaAwardSolid } from "react-icons/lia";
import { TfiBook } from "react-icons/tfi";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function TestPrepSection() {
  return (
    <section className="py-16">
      <div className="max-w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center overflow-hidden bg-[#990422]">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
            className="p-10 text-white"
          >
            <motion.p variants={itemVariants} className="text-sm sm:text-lg md:text-xl font-semibold uppercase">
              Test Preparation
            </motion.p>

            <motion.h2 variants={itemVariants} className="mt-2 text-3xl md:text-4xl font-bold">
              Ace Your English Proficiency Tests
            </motion.h2>

            <motion.p variants={itemVariants} className="mt-4 text-lg text-justify max-w-xl">
              Our comprehensive test preparation programs are designed to help
              you achieve your target scores. With experienced trainers and
              proven methodologies, we ensure your success.
            </motion.p>

            {/* Exam Tags */}
            <div className="flex flex-wrap font-bold text-lg gap-2 mt-6">
              {[
                { name: "IELTS", color: "bg-[#EF4444]" },
                { name: "TOEFL", color: "bg-[#3B82F6]" },
                { name: "PTE", color: "bg-[#EAB308]" },
                { name: "CAE", color: "bg-[#22C55E]" },
                { name: "GRE", color: "bg-[#A855F7]" },
              ].map((tag) => (
                <motion.span
                  key={tag.name}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`px-3 py-1 rounded-sm shadow-md cursor-pointer ${tag.color}`}
                >
                  {tag.name}
                </motion.span>
              ))}
            </div>

            {/* Features - Sliding & Icon Color Change */}
            <div className="grid sm:grid-cols-2 gap-3 mt-6 text-sm">
              {[
                { icon: <TfiBook className="w-6 h-6" />, text: "Expert Faculty" },
                { icon: <BsPeople className="w-6 h-6" />, text: "Small Batches" },
                { icon: <IoMdTime className="w-6 h-6" />, text: "Flexible Timing" },
                { icon: <LiaAwardSolid className="w-6 h-6" />, text: "Proven Results" },
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex gap-3 items-center text-xl font-semibold cursor-pointer group w-fit"
                >
                  <div className="bg-white/30 p-2 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-[#D99726]">
                    {feature.icon}
                  </div>
                  <span className="text-white">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Buttons with Hover Effects */}
            <motion.div variants={itemVariants} className="flex gap-4 mt-8 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#f0a51d" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-md bg-[#D99726] font-semibold text-xl shadow-lg transition-all"
              >
                Enroll Now →
              </motion.button>
              
              <motion.button
                whileHover={{ backgroundColor: "rgba(255,255,255,0.25)", x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 font-semibold rounded-md bg-white/15 text-white text-xl transition-all"
              >
                View Schedule
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE - Original 95% Div styling restored */}
          <div className="relative flex justify-center items-center py-10">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-[90%] max-w-[32.5rem] h-[23.75rem] rounded-2xl"
            >
              <img
                src="/home/test-image.png"
                alt="Test Preparation"
                className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
              />
              
             
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute top-6 -right-[6.25rem] w-[13.75rem] bg-[#0b2c48] text-white rounded-l-xl px-5 py-3 shadow-xl z-20"
              >
                <div className="flex flex-col">
                  <p className="font-bold text-2xl">95%</p>
                  <div className="text-xs opacity-80">
                    <p>Success Rate</p>
                  </div>
                </div>
              </motion.div>

              {/* 8.5+ Badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 1, type: "spring", stiffness: 150 }}
                className="absolute -bottom-6 -left-6 sm:-bottom-6 sm:-left-[4.5rem] bg-white text-black rounded-lg px-4 py-4 shadow-lg z-20"
              >
                <p className="font-bold text-3xl text-[#990422]">8.5+</p>
                <p className="text-xl text-[#990422]">Average IELTS Score</p>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}