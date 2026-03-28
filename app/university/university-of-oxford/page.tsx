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
          { label: "University of Oxford", isActive: true },
        ]}
        title="University of Oxford"
        subtitleInfo={[
          { icon: <CiLocationOn />, text: "University of Oxford" },
          { icon: <CiCalendar />, text: "Est. 1096" },
          { icon: <MdPeopleOutline />, text: "45% International" },
        ]}
        stats={[
          {
            icon: <FaDollarSign />,
            label: "Tuition Range",
            value: "£28,950 - £44,240 per year",
          },
          { icon: <LiaAwardSolid />, label: "Acceptance Rate", value: "17.5%" },
          { icon: <MdPeopleOutline />, label: "International", value: "45%" },
          {
            icon: <FaUniversity />,
            label: "Campus",
            value: "44 colleges across the city",
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
