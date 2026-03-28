"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import ContactSection from "./_components/ContactSection";
import Footer from "../components/Footer";

function Page() {
  return (
    <div className="overflow-hidden">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden h-[30rem] flex items-center justify-center text-white text-center">

        {/* 🔥 Background Zoom Animation */}
        <motion.div
          initial={{ scale: 1.3 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/contactus-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#990422E5]/90" />

        {/* Content */}
        <div className="relative z-10 px-4">
          
          {/* 🔥 Title Animation */}
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Contact US
          </motion.h1>

          {/* 🔥 Description Animation */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-4 text-lg md:text-3xl max-w-3xl mx-auto"
          >
            Speak with our consultants and take the first step toward studying abroad.
          </motion.p>

        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <ContactSection />
      </motion.div>

      {/* ================= MAP SECTION ================= */}
      <motion.div
        className="bg-white dark:bg-[#121212] rounded-xl shadow-md overflow-hidden mb-20 mt-10 h-[21rem]"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Windsor%20Consultancy%20Services%20Lahore&z=15&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </motion.div>

      <Footer />
    </div>
  );
}

export default Page;
