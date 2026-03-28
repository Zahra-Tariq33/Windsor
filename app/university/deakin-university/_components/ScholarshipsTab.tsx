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
          title: "Deakin International Scholarship",
          subtitle: "25% tuition fee reduction",
          description:
            "High-achieving international students for undergraduate and postgraduate courses",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "Deakin Vice-Chancellor&apos;s International Scholarship",
          subtitle: "100% tuition fee waiver",
          description:
            "Exceptional international students with outstanding academic records",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "STEM Scholarship",
          subtitle: "20% tuition fee reduction",
          description:
            "Students pursuing Science, Technology, Engineering, or Mathematics courses",
        },
      ]}
    />
  );
}
