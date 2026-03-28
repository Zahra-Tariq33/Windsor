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
          title: "Sydney Scholars Award",
          subtitle: "$40,000 ($10,000 per year)",
          description: "High-achieving international undergraduate students",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "Vice-Chancellor&apos;s International Scholarship",
          subtitle: "Full tuition fee waiver",
          description:
            "Exceptional academic achievement and leadership potential",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "Research Training Program Scholarship",
          subtitle: "Full tuition + living stipend",
          description:
            "International research degree students (PhD/Masters by Research)",
        },
      ]}
    />
  );
}
