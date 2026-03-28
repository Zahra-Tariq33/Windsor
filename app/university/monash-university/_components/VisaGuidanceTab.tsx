import { LuCircleCheckBig } from "react-icons/lu";
import GuidanceSection from "../../_components/GuidanceSection";

export default function VisaGuidanceTab() {
  return (
    <GuidanceSection
      badgeText="Student Visa Support"
      title="Visa Guidance"
      steps={[
        {
          text: "Receive Confirmation of Enrolment (CoE) from Monash",
          icon: <LuCircleCheckBig size={28} />,
        },
        {
          text: "Apply for Student Visa (subclass 500) online via ImmiAccount",
          icon: <LuCircleCheckBig size={28} />,
        },
        {
          text: "Provide proof of English proficiency (IELTS/PTE/TOEFL)",
          icon: <LuCircleCheckBig size={28} />,
        },
        {
          text: "Show Genuine Temporary Entrant (GTE) statement",
          icon: <LuCircleCheckBig size={28} />,
        },
        {
          text: "Demonstrate financial capacity (tuition + $24,505/year living costs)",
          icon: <LuCircleCheckBig size={28} />,
        },
        {
          text: "Obtain Overseas Student Health Cover (OSHC)",
          icon: <LuCircleCheckBig size={28} />,
        },
      ]}
      notice={{
        title: "96% Visa Success Rate",
        description: [
          "Our experienced visa counselors have helped thousands of students secure their Australian student visas. Let us handle the complexities while you focus on your preparation.",
        ],
        buttonText: "Get Visa Assistance",
      }}
    />
  );
}
