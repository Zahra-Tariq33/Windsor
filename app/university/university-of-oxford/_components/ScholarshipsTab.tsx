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
          title: "Clarendon Scholarship",
          subtitle: "Full tuition + living expenses",
          description: "Outstanding academic merit, all nationalities",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "Rhodes Scholarship",
          subtitle: "Full funding for 2-3 years",
          description: "Exceptional intellect, character, leadership",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "Oxford-Weidenfeld Scholarship",
          subtitle: "Full tuition + living allowance",
          description:
            "Students from selected countries",
        },
      ]}
    />
  );
}
