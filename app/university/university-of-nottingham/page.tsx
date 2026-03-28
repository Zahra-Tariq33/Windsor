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
          { label: "University of Nottingham", isActive: true },
        ]}
        title="University of Nottingham"
        subtitleInfo={[
          { icon: <CiLocationOn />, text: "Nottingham, United Kingdom" },
          { icon: <CiCalendar />, text: "Est. 1881" },
          { icon: <MdPeopleOutline />, text: "30% International" },
        ]}
        stats={[
          {
            icon: <FaDollarSign />,
            label: "Tuition Range",
            value: "£21,500 - £28,600 per year",
          },
          { icon: <LiaAwardSolid />, label: "Acceptance Rate", value: "72%" },
          { icon: <MdPeopleOutline />, label: "International", value: "30%" },
          {
            icon: <FaUniversity />,
            label: "Campus",
            value: "330-acre parkland campus",
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
