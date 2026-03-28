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
          { label: "University of Leeds", isActive: true },
        ]}
        title="University of Leeds"
        subtitleInfo={[
          { icon: <CiLocationOn />, text: "Leeds, United Kingdom" },
          { icon: <CiCalendar />, text: "Est. 1904" },
          { icon: <MdPeopleOutline />, text: "23% International" },
        ]}
        stats={[
          {
            icon: <FaDollarSign />,
            label: "Tuition Range",
            value: "£22,250 - £27,250 per year",
          },
          { icon: <LiaAwardSolid />, label: "Acceptance Rate", value: "73%" },
          { icon: <MdPeopleOutline />, label: "International", value: "23%" },
          {
            icon: <FaUniversity />,
            label: "Campus",
            value: "Single city-centre campus",
          },
        ]}
        backgroundImage="/universities/image-2.jpg"
      />
      <section className="max-w-7xl mx-auto px-4 py-10">
        <UniversityTabs />
      </section>

      <ConsultationBanner />
      <Footer />
    </>
  );
}
