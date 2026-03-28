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
          { label: "Monash University", isActive: true },
        ]}
        title="Monash University"
        subtitleInfo={[
          { icon: <CiLocationOn />, text: "Melbourne, Australia" },
          { icon: <CiCalendar />, text: "Est. 1958" },
          { icon: <MdPeopleOutline />, text: "33% International" },
        ]}
        stats={[
          {
            icon: <FaDollarSign />,
            label: "Tuition Range",
            value: "$33,000 - $50,000 per year",
          },
          { icon: <LiaAwardSolid />, label: "Acceptance Rate", value: "65%" },
          { icon: <MdPeopleOutline />, label: "International", value: "33%" },
          {
            icon: <FaUniversity />,
            label: "Campus",
            value: "4 campuses in Australia",
          },
        ]}
        backgroundImage="/universities/image-1.jpg"
      />
      <section className="max-w-7xl mx-auto px-4 py-10">
        <UniversityTabs />
      </section>

      <ConsultationBanner />
      <Footer />
    </>
  );
}
