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
          { label: "University of Waterloo", isActive: true },
        ]}
        title="University of Waterloo"
        subtitleInfo={[
          { icon: <CiLocationOn />, text: "Waterloo, Canada" },
          { icon: <CiCalendar />, text: "Est. 1957" },
          { icon: <MdPeopleOutline />, text: "22% International" },
        ]}
        stats={[
          {
            icon: <FaDollarSign />,
            label: "Tuition Range",
            value: "$40,000 - $62,000 per year",
          },
          { icon: <LiaAwardSolid />, label: "Acceptance Rate", value: "53%" },
          { icon: <MdPeopleOutline />, label: "International", value: "22%" },
          {
            icon: <FaUniversity />,
            label: "Campus",
            value: "404-hectare main campus",
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
