"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InfoCard, { InfoCardData } from "../components/InfoCard";
import StudyAbroadBanner from "./_components/StudyAbroadBanner";

/* ================= CONFIG ================= */

const CONFIG = {
  sectionPaddingX: "px-8 sm:px-[3.75rem] lg:px-[7.5rem]",
  cardMinHeight: "min-h-[320px]",
};

/* ================= FULL ORIGINAL CARDS ================= */

export const infoCards: InfoCardData[] = [
  {
    title: "Admission Guidance",
    description:
      "End-to-end assistance with university selection and admission applications.",
    iconSrc: "/home/info-cards-icons/icon-1.png",
    iconSize: 34,
  },
  {
    title: "Organizing On-Spot Admissions",
    description:
      "Quick admission opportunities through on-spot assessments and evaluations.",
    iconSrc: "/home/info-cards-icons/icon-2.png",
    iconSize: 34,
  },
  {
    title: "Information on Institutions",
    description:
      "Clear insights into international institutions, programs, and entry requirements.",
    iconSrc: "/home/info-cards-icons/icon-3.png",
    iconSize: 34,
  },
  {
    title: "Visa Assistance",
    description:
      "Professional visa support ensuring accurate documentation and a smooth application process.",
    iconSrc: "/home/info-cards-icons/icon-1.png",
    iconSize: 34,
  },
  {
    title: "Travel Assistance",
    description:
      "Support with travel planning and arrangements for a hassle-free journey abroad.",
    iconSrc: "/home/info-cards-icons/icon-2.png",
    iconSize: 34,
  },
  {
    title: "Accommodation Assistance",
    description:
      "Guidance in finding safe and suitable accommodation near universities.",
    iconSrc: "/home/info-cards-icons/icon-3.png",
    iconSize: 34,
  },
  {
    title: "Pre-Departure Briefings",
    description:
      "Essential pre-departure guidance to prepare students for studying abroad.",
    iconSrc: "/home/info-cards-icons/icon-1.png",
    iconSize: 34,
  },
  {
    title: "Career Counselling",
    description:
      "Personalized guidance to help students choose the right course, university, and study destination.",
    iconSrc: "/home/info-cards-icons/icon-2.png",
    iconSize: 34,
  },
  {
    title: "IELTS",
    description:
      "Structured IELTS training to help students succeed in academic and visa requirements.",
    iconSrc: "/home/info-cards-icons/icon-3.png",
    iconSize: 34,
  },
  {
    title: "TOFEL",
    description:
      "Result-driven TOEFL preparation tailored for international admissions success.",
    iconSrc: "/home/info-cards-icons/icon-3.png",
    iconSize: 34,
  },
];

/* ================= CARD ANIMATION ================= */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotateX: 15,
    scale: 0.95,
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
      duration: 0.6,
    },
  },
};

/* ================= PAGE ================= */

function Page() {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[35rem] overflow-hidden flex items-center justify-center text-white text-center">

        {/* Background */}
        <motion.div
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false }}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/home/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#990422E5]/90" />

        {/* Content */}
        <div className="relative z-10 px-4 max-w-6xl mx-auto">

        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="text-4xl md:text-5xl font-bold"
>
  Our Services
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ delay: 0.7, duration: 0.8 }}
  className="mt-2 text-[24px] md:text-[28px] text-[#FFD700]"
>
  Home &gt; Services
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ delay: 0.9, duration: 0.8 }}
  className="mt-6 text-lg md:text-3xl"
>
  Guiding students toward world-class education opportunities abroad
  with trusted advice, streamlined applications, and expert visa solutions.
</motion.p>

        </div>
      </section>

      {/* ================= INFO CARDS ================= */}
      <section
        className={`bg-[#FDF9F6] py-24 ${CONFIG.sectionPaddingX}`}
        style={{ perspective: "1200px" }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              viewport={{ once: false }}
            >
              <InfoCard
                title={card.title}
                description={card.description}
                iconSrc={card.iconSrc}
                iconSize={card.iconSize}
                minHeight={CONFIG.cardMinHeight}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <StudyAbroadBanner />
      <Footer />
    </>
  );
}

export default Page;
