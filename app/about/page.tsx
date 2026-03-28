"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./_components/HeroSection";
import OurStorySection from "./_components/OurStorySection";
import StatementSection from "./_components/StatementSection";
import LeadershipTeam from "./_components/LeadershipTeam";
import StatsSection from "./_components/StatsSection";
import ConsultationBanner from "../university/_components/ConsultationBanner";

export interface InfoCardData {
  title: string;
  description: string;
  iconSrc: string;
  iconSize: number;
}

export const infoCards: InfoCardData[] = [
  {
    title: "Trusted Expertise",
    description: "Over a decade of experience in education consultancy with a proven track record of success.",
    iconSrc: "/about/image-1.png",
    iconSize: 34,
  },
  {
    title: "Timely Processing",
    description: "Efficient application handling ensuring you never miss important deadlines.",
    iconSrc: "/about/image-2.png",
    iconSize: 34,
  },
  {
    title: "High Success Rate",
    description: "98% visa approval rate backed by thorough documentation and preparation.",
    iconSrc: "/about/image-3.png",
    iconSize: 34,
  },
  {
    title: "Personalized Service",
    description: "One-on-one counseling tailored to your academic goals and career aspirations.",
    iconSrc: "/about/image-4.png",
    iconSize: 34,
  },
  {
    title: "Complete Solutions",
    description: "From university selection to post-arrival support, we cover every aspect.",
    iconSrc: "/about/image-5.png",
    iconSize: 34,
  },
  {
    title: "IELTS Preparation",
    description: "Expert coaching and resources to help you achieve your target band score.",
    iconSrc: "/about/image-6.png",
    iconSize: 34,
  },
];

const headingContainer: Variants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const textFadeUp: Variants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50, // Slightly more push for better entrance
    rotateX: 15,
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15,
      duration: 0.6 
    }
  }
};

function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurStorySection />
      <StatementSection
        title="Our Mission"
        description="To empower students with the knowledge, resources, and support they need to pursue their academic dreams at leading institutions worldwide, while ensuring a smooth and stress-free visa application process."
        backgroundImage="/map2.png"
      />

      {/* Heading with extra bottom padding to separate from cards */}
      <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={headingContainer}
        className="text-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#FDF9F6]"
      >
        <motion.p 
          variants={textFadeUp}
          className="text-sm sm:text-lg md:text-xl font-semibold text-[#D99726] dark:text-[#dda23d] uppercase mx-auto mb-2"
        >
          Our Advantages
        </motion.p>
        
        <motion.h2 
          variants={textFadeUp}
          className="text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto text-center font-bold text-[#990422] dark:text-white leading-tight"
        >
          Why Choose <span className="relative inline-block px-2">Windsor?
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-1 left-0 h-2 bg-[#D48D3B]/20 -z-10"
            />
          </span>
        </motion.h2>
      </motion.div>

     
      <section 
        className="bg-[#FDF9F6] py-6 px-6 lg:px-12 overflow-visible"
        style={{ perspective: "1200px" }}
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {infoCards.map((item, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -15 }} // Enhanced lift
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white p-8 rounded-2xl border-2 border-[#990422] shadow-lg hover:shadow-[#990422]/30 flex flex-col h-full transition-shadow duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#990422]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[14px]" />

              <div className="relative z-10 w-16 h-16 mb-6 flex-shrink-0">
                <div className="absolute inset-0 bg-[#F2E8E8] rounded-xl rotate-6 group-hover:rotate-12 group-hover:bg-[#990422] transition-all duration-500" />
                <div className="absolute inset-0 bg-white border border-[#990422]/30 rounded-xl flex items-center justify-center group-hover:-translate-y-1.5 group-hover:-translate-x-1.5 transition-transform duration-500 shadow-md p-2">
                  <img 
                    src={item.iconSrc} 
                    alt={item.title} 
                    style={{ width: item.iconSize, height: item.iconSize }} 
                    className="object-contain group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
              </div>
              
              <div className="relative z-10 flex-grow">
                <h3 className="text-[#990422] text-[22px] font-black mb-3 group-hover:tracking-tight transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-[#990422] text-[16px] leading-relaxed font-medium transition-colors">
                  {item.description}
                </p>
              </div>
              
              <div className="absolute top-4 right-4 text-gray-100 group-hover:text-[#990422]/10 transition-colors duration-500 font-black text-3xl select-none z-0">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <StatementSection
        title="Our Vision"
        description="To be the leading education consultancy that transforms lives through global education opportunities, creating a community of successful international graduates who contribute positively to society."
        backgroundImage="/map2.png"
      />
      <LeadershipTeam />
      <StatsSection />
      <section className="py-20">
        <ConsultationBanner />
      </section>
      <Footer />
    </>
  );
}

export default Page;