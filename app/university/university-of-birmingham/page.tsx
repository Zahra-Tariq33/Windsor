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
          { label: "University of Birmingham", isActive: true },
        ]}
        title="University of Birmingham"
        subtitleInfo={[
          { icon: <CiLocationOn />, text: "Birmingham, United Kingdom" },
          { icon: <CiCalendar />, text: "Est. 1900" },
          { icon: <MdPeopleOutline />, text: "29% International" },
        ]}
        stats={[
          {
            icon: <FaDollarSign />,
            label: "Tuition Range",
            value: "£22,260 - £28,200 per year",
          },
          { icon: <LiaAwardSolid />, label: "Acceptance Rate", value: "79%" },
          { icon: <MdPeopleOutline />, label: "International", value: "29%" },
          {
            icon: <FaUniversity />,
            label: "Campus",
            value: "350-acre Edgbaston campus",
          },
        ]}
        backgroundImage="/universities/image-3.jpg"
      />
      <section className="max-w-7xl mx-auto px-4 py-10">
        <UniversityTabs />
      </section>

      <ConsultationBanner />
      <Footer />
    </>
  );
}
