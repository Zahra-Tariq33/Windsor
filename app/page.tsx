"use client";

import { motion } from "framer-motion";
import TopBar from "./components/Topbar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Home-components/HeroSection";
import AboutWindsor from "./components/Home-components/Aboutwindsor";
import InfoCard, { InfoCardData } from "./components/InfoCard";
import PopularDestinations from "./components/Home-components/PopularDestinations";
import ServicesSection from "./components/Home-components/ServicesSection";
import TestPrepSection from "./components/Home-components/TestPrepSection";
import TestimonialsSection from "./components/Home-components/TestimonialsSection";
import ContactSection from "./components/Home-components/ContactSection";
import PartnerUniversitiesMarquee from "./components/Home-components/PartnerUniversitiesMarquee";

export const infoCards: InfoCardData[] = [
  {
    title: "Our Mission",
    description:
      "To empower students worldwide with quality education opportunities through expert guidance and unwavering support.",
    iconSrc: "/home/info-cards-icons/icon-1.png",
    iconSize: 34,
  },
  {
    title: "Our Vision",
    description:
      "To be the most trusted education consultancy, transforming lives through global learning experiences.",
    iconSrc: "/home/info-cards-icons/icon-2.png",
    iconSize: 34,
  },
  {
    title: "Our Values",
    description:
      "Integrity, transparency, and student success drive everything we do. Your dream is our commitment.",
    iconSrc: "/home/info-cards-icons/icon-3.png",
    iconSize: 34,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutWindsor />
      
      {/* Animated Mission, Vision, Values Section */}
      <section className="grid gap-6 py-14 px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {infoCards.map((card, index) => (
          <motion.div
            key={index}
            // Entrance Animation
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            
            // Hover Effect
            whileHover={{ 
              y: -8,
              transition: { duration: 0.2 }
            }}
          >
            <InfoCard
              title={card.title}
              description={card.description}
              iconSrc={card.iconSrc}
              iconSize={card.iconSize}
            />
          </motion.div>
        ))}
      </section>

      <PopularDestinations />
      <ServicesSection />
      <TestPrepSection />
      <TestimonialsSection />
      <ContactSection />
      <PartnerUniversitiesMarquee />
      <Footer />
    </>
  );
}