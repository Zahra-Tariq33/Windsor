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
          title: "Global Masters Scholarship",
          subtitle: "£2,000 - £3,000 tuition fee reduction",
          description: "International students applying for Masters programs",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "Chancellors Scholarship",
          subtitle: "Full tuition fees",
          description:
            "Outstanding academic achievement and leadership potential",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "Commonwealth Shared Scholarship",
          subtitle: "Full tuition + living allowance",
          description: "Students from developing Commonwealth countries",
        },
      ]}
    />
  );
}
