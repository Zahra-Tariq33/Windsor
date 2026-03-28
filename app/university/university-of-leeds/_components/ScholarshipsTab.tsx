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
          title: "Leeds Masters Scholarship",
          subtitle: "£5,000 tuition fee reduction",
          description: "International students with strong academic records",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "Tetley & Lupton Scholarship",
          subtitle: "£3,000 per year for 3 years",
          description:
            "Undergraduate students demonstrating academic excellence",
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
