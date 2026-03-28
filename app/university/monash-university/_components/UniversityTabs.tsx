"use client";

import dynamic from "next/dynamic";
import { BsGlobe2 } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import { FiFileText } from "react-icons/fi";
import { LiaAwardSolid } from "react-icons/lia";
import { RiGraduationCapLine } from "react-icons/ri";
import { MdAirplanemodeActive } from "react-icons/md";
import Tabs from "../../_components/Tabs";

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="flex flex-col items-center gap-3">
      <div className="w-12 h-12 border-4 border-[#990422] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 text-sm">Loading content...</p>
    </div>
  </div>
);

// Lazy load tab components
const OverviewTab = dynamic(() => import("./OverviewTab"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});
const ProgramsTab = dynamic(() => import("./ProgramsTab"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});
const RequirementsTab = dynamic(() => import("./RequirementsTab"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});
const ScholarshipsTab = dynamic(() => import("./ScholarshipsTab"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});
const AdmissionProcessTab = dynamic(() => import("./AdmissionProcessTab"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});
const VisaGuidanceTab = dynamic(() => import("./VisaGuidanceTab"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});

export default function UniversityTabs() {
  const tabs = [
    {
      id: "overview",
      icon: <BsGlobe2 size={24} />,
      label: "Overview",
      content: <OverviewTab />,
    },
    {
      id: "programs",
      icon: <SlBookOpen size={24} />,
      label: "Programs",
      content: <ProgramsTab />,
    },
    {
      id: "requirements",
      icon: <FiFileText size={24} />,
      label: "Requirements",
      content: <RequirementsTab />,
    },
    {
      id: "scholarships",
      icon: <LiaAwardSolid size={24} />,
      label: "Scholarships",
      content: <ScholarshipsTab />,
    },
    {
      id: "admission-process",
      icon: <RiGraduationCapLine size={24} />,
      label: "Admission Process",
      content: <AdmissionProcessTab />,
    },
    {
      id: "visa-guidance",
      icon: <MdAirplanemodeActive size={24} />,
      label: "Visa Guidance",
      content: <VisaGuidanceTab />,
    },
  ];

  return <Tabs tabs={tabs} />;
}
