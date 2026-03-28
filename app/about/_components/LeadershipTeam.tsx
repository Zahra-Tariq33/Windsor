"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, Variants } from "framer-motion"; 

import "swiper/css";
import "swiper/css/pagination";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  offset?: string;
}

const team: TeamMember[] = [
  {
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    description: "15+ years in international education with expertise in UK & US admissions.",
    image: "/home/testimonials/image-1.jpg",
    offset: "md:-translate-y-6",
  },
  {
    name: "David Chen",
    role: "Head of Visa Services",
    description: "Former immigration officer with deep knowledge of visa regulations.",
    image: "/home/testimonials/image-2.jpg",
    offset: "md:translate-y-6",
  },
  {
    name: "Priya Sharma",
    role: "Senior Education Counselor",
    description: "Specialized in STEM programs and scholarship applications.",
    image: "/home/testimonials/image-3.jpg",
    offset: "md:-translate-y-6",
  },
  {
    name: "James Wilson",
    role: "IELTS Training Lead",
    description: "Certified IELTS trainer with 10+ years of teaching experience.",
    image: "/home/testimonials/image-2.jpg",
    offset: "md:translate-y-6",
  },
  {
    name: "James Wilson",
    role: "IELTS Training Lead",
    description: "Certified IELTS trainer with 10+ years of teaching experience.",
    image: "/home/testimonials/image-2.jpg",
    offset: "md:-translate-y-6",
  },
  {
    name: "James Wilson",
    role: "IELTS Training Lead",
    description: "Certified IELTS trainer with 10+ years of teaching experience.",
    image: "/home/testimonials/image-2.jpg",
    offset: "md:translate-y-6",
  },
];

// Defining explicit variants to resolve the "variant error"
const textVariants: Variants = {
  offscreen: { 
    opacity: 0, 
    y: 30 
  },
  onscreen: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

const containerVariants: Variants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This handles the timing between the 3 text elements
    },
  },
};

export default function LeadershipTeam() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Animation Container */}
        <motion.div 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.5 }}
          variants={containerVariants}
          className="text-center mb-5"
        >
          {/* Meet The Experts Animation */}
          <motion.p 
            variants={textVariants}
            className="text-sm sm:text-lg md:text-[22px] font-semibold text-[#D99726] mb-2"
          >
            Meet The Experts
          </motion.p>

          <motion.h2 
            variants={textVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#990422] dark:text-white"
          >
            Our Leadership Team
          </motion.h2>

          <motion.p 
            variants={textVariants}
            className="mt-4 text-base sm:text-lg md:text-xl max-w-6xl mx-auto text-[#990422] dark:text-white"
          >
            Dedicated professionals committed to guiding you towards your
            educational goals with expertise and care.
          </motion.p>
        </motion.div>

        {/* Swiper remains exactly as original */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={14}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-14"
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <div
                className={`bg-white mt-10 mb-10 dark:bg-[#141414] rounded-2xl shadow-md px-4 py-10 text-center transition-transform duration-300 ${member.offset}`}
              >
                <div className="relative w-24 h-24 mx-auto mb-3">
                  <div className="absolute inset-0 rounded-full bg-[#99042233]" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full rounded-full object-cover z-10 p-2"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#990421] dark:text-white">
                  {member.name}
                </h3>

                <p className="text-lg sm:text-xl font-medium text-[#D99726] mt-1">
                  {member.role}
                </p>

                <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 ">
                  {member.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}