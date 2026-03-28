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
          title: "Lester B. Pearson Scholarship",
          subtitle: "Full tuition + living expenses for 4 years",
          description:
            "Outstanding international students with exceptional academic achievement",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "University of Toronto Scholars Program",
          subtitle: "$7,500 - $10,000 annually",
          description: "Top-tier students admitted to undergraduate programs",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "Ontario Graduate Scholarship",
          subtitle: "$15,000 per year",
          description: "Graduate students with excellent academic records",
        },
      ]}
    />
  );
}
