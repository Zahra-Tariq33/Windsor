import { LuCircleCheckBig } from "react-icons/lu";
import GuidanceSection from "../../_components/GuidanceSection";

export default function VisaGuidanceTab() {
  return (
    <GuidanceSection
      badgeText="Student Visa Support"
      title="Visa Guidance"
      steps={[
        {
          text: "Receive Letter of Acceptance from University of Toronto",
          icon: <LuCircleCheckBig size={28} />,
        },
        {
          text: "Apply for Canadian Study Permit online through IRCC",
          icon: <LuCircleCheckBig size={28} />,
        },
        {
          text: "Provide proof of English proficiency (IELTS/TOEFL)",
          icon: <LuCircleCheckBig size={28} />,
        },
        {
          text: "Show proof of funds (tuition + $10,000/year living costs)",
          icon: <LuCircleCheckBig size={28} />,
        },
        {
          text: "Submit biometrics at designated collection point",
          icon: <LuCircleCheckBig size={28} />,
        },
        {
          text: "Receive study permit approval and travel to Canada",
          icon: <LuCircleCheckBig size={28} />,
        },
      ]}
      notice={{
        title: "95% Visa Success Rate",
        description: [
          "Our experienced visa counselors have helped thousands of students secure their Canadian study permits. Let us handle the complexities while you focus on your preparation.",
        ],
        buttonText: "Get Visa Assistance",
      }}
    />
  );
}
