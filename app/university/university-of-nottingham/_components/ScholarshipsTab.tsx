import ScholarshipsSection from "../../_components/tabs/ScholarshipsSection";
import { LiaAwardSolid } from "react-icons/lia";

export default function ScholarshipsTab() {
  return (
    <ScholarshipsSection
      badgeText="Financial Aid & Scholarships"
      title="Scholarships & Financial Support"
      scholarships={[
        {
          icon: <LiaAwardSolid size={32} />,
          title: "Developing Solutions Scholarship",
          subtitle: "Full or 50% tuition fee waiver",
          description:
            "Students from Africa, India, and select developing countries",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "Vice-Chancellor&apos;s Scholarship for Research Excellence",
          subtitle: "Full tuition + living stipend",
          description:
            "Outstanding PhD candidates with exceptional research potential",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "International Excellence Scholarship",
          subtitle: "£5,000 - £10,000 fee reduction",
          description: "High-achieving international students",
        },
      ]}
    />
  );
}
