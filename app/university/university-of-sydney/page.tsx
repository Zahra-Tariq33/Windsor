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
          { label: "University of Sydney", isActive: true },
        ]}
        title="University of Sydney"
        subtitleInfo={[
          { icon: <CiLocationOn />, text: "Sydney, Australia" },
          { icon: <CiCalendar />, text: "Est. 1850" },
          { icon: <MdPeopleOutline />, text: "32% International" },
        ]}
        stats={[
          {
            icon: <FaDollarSign />,
            label: "Tuition Range",
            value: "$40,000 - $55,000 per year",
          },
          { icon: <LiaAwardSolid />, label: "Acceptance Rate", value: "30%" },
          { icon: <MdPeopleOutline />, label: "International", value: "32%" },
          {
            icon: <FaUniversity />,
            label: "Campus",
            value: "Camperdown/Darlington campus",
          },
        ]}
        backgroundImage="/universities/image-4.jpg"
      />
      <section className="max-w-7xl mx-auto px-4 py-10">
        <UniversityTabs />
      </section>

      <ConsultationBanner />
      <Footer />
    </>
  );
}
