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
          { label: "Deakin University", isActive: true },
        ]}
        title="Deakin University"
        subtitleInfo={[
          { icon: <CiLocationOn />, text: "Melbourne, Australia" },
          { icon: <CiCalendar />, text: "Est. 1974" },
          { icon: <MdPeopleOutline />, text: "23% International" },
        ]}
        stats={[
          {
            icon: <FaDollarSign />,
            label: "Tuition Range",
            value: "$28,000 - $42,000 per year",
          },
          { icon: <LiaAwardSolid />, label: "Acceptance Rate", value: "75%" },
          { icon: <MdPeopleOutline />, label: "International", value: "23%" },
          {
            icon: <FaUniversity />,
            label: "Campus",
            value: "4 campuses in Victoria",
          },
        ]}
        backgroundImage="/universities/image-5.jpg"
      />
      <section className="max-w-7xl mx-auto px-4 py-10">
        <UniversityTabs />
      </section>

      <ConsultationBanner />
      <Footer />
    </>
  );
}
