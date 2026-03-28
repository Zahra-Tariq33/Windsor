import { LuCircleCheckBig } from "react-icons/lu";
import GuidanceSection from "../../_components/GuidanceSection";

export default function VisaGuidanceTab() {
  return (
    <GuidanceSection
      badgeText="Student Visa Support"
      title="Visa Guidance"
      steps={[
        {
          text: "Obtain CAS (Confirmation of Acceptance for Studies) from Birmingham",
          icon: <LuCircleCheckBig size={28} />,
        },
        {
          text: "Apply for Student Visa (formerly Tier 4) online",
          icon: <LuCircleCheckBig size={28} />,
        },
        {
          text: "Provide proof of English proficiency",
          icon: <LuCircleCheckBig size={28} />,
        },
        {
          text: "Show evidence of sufficient funds (tuition + £1,023/month living costs)",
          icon: <LuCircleCheckBig size={28} />,
        },
        {
          text: "Attend visa appointment at local visa center",
          icon: <LuCircleCheckBig size={28} />,
        },
        {
          text: "Collect BRP card within 10 days of arrival",
          icon: <LuCircleCheckBig size={28} />,
        },
      ]}
      notice={{
        title: "98% Visa Success Rate",
        description: [
          "Our experienced visa counselors have helped thousands of students secure their UK study visas. Let us handle the complexities while you focus on your preparation.",
        ],
        buttonText: "Get Visa Assistance",
      }}
    />
  );
}
