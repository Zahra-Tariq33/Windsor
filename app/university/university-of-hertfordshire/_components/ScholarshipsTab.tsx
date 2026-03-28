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
          title: "International Ambassador Scholarship",
          subtitle: "£2,000 tuition fee reduction",
          description:
            "International students demonstrating academic excellence",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "Vice Chancellor&apos;s Scholarship",
          subtitle: "£4,000 tuition fee reduction",
          description:
            "Outstanding international students with high academic achievement",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "Commonwealth Scholarship",
          subtitle: "Full tuition + living allowance",
          description: "Students from Commonwealth developing countries",
        },
      ]}
    />
  );
}
