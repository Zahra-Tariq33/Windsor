import { FaDollarSign, FaUniversity } from "react-icons/fa";
import HeroSection from "../_components/HeroSection";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ConsultationBanner from "../_components/ConsultationBanner";
import { LiaAwardSolid } from "react-icons/lia";
import { MdPeopleOutline } from "react-icons/md";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import UniversityTabs from "./_components/UniversityTabs";

export default function UniversityPage() {
  return (
    <>
      <Navbar />
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Universities", href: "/universities" },
          { label: "University of Hertfordshire", isActive: true },
        ]}
        title="University of Hertfordshire"
        subtitleInfo={[
          { icon: <CiLocationOn />, text: "Hatfield, United Kingdom" },
          { icon: <CiCalendar />, text: "Est. 1952" },
          { icon: <MdPeopleOutline />, text: "25% International" },
        ]}
        stats={[
          {
            icon: <FaDollarSign />,
            label: "Tuition Range",
            value: "£14,750 - £16,000 per year",
          },
          { icon: <LiaAwardSolid />, label: "Acceptance Rate", value: "85%" },
          { icon: <MdPeopleOutline />, label: "International", value: "25%" },
          {
            icon: <FaUniversity />,
            label: "Campus",
            value: "2 campuses in Hatfield",
          },
        ]}
        backgroundImage="/universities/image-6.jpg"
      />
      <section className="max-w-7xl mx-auto px-4 py-10">
        <UniversityTabs />
      </section>

      <ConsultationBanner />
      <Footer />
    </>
  );
}
