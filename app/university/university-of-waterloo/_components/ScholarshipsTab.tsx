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
          title: "President&apos;s Scholarship of Distinction",
          subtitle: "$10,000",
          description: "Students admitted with 95%+ average",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "International Master&apos;s Award of Excellence",
          subtitle: "$2,500 - $12,500",
          description: "Outstanding international graduate students",
        },
        {
          icon: <LiaAwardSolid size={32} />,
          title: "Waterloo International Funding",
          subtitle: "Varies by program",
          description:
            "Merit-based support for international students across programs",
        },
      ]}
    />
  );
}
