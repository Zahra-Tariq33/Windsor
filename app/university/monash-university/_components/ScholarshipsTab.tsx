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
          title: "Monash International Leadership Scholarship",
          subtitle: "100% tuition fee waiver",
          description:
            "Outstanding international students with exceptional academic records",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "Monash International Merit Scholarship",
          subtitle: "$10,000 per year",
          description:
            "High-achieving international undergraduate and postgraduate students",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "Australia Awards Scholarships",
          subtitle: "Full tuition + living expenses",
          description: "Students from eligible developing countries",
        },
      ]}
    />
  );
}
