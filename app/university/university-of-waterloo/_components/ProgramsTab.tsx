import ProgramsSection from "../../_components/tabs/ProgramsSection";

const programs = [
  {
    title: "Engineering",
    items: [
      "BASc Software Engineering",
      "BASc Computer Engineering",
      "BASc Mechatronics Engineering",
      "MASc Electrical Engineering",
    ],
  },
  {
    title: "Mathematics & Computer Science",
    items: [
      "Bachelor of Computer Science",
      "Bachelor of Mathematics",
      "Master of Data Science",
      "MMath Combinatorics and Optimization",
    ],
  },
  {
    title: "Business & Accounting",
    items: [
      "Bachelor of Accounting and Financial Management",
      "Master of Accounting",
      "Bachelor of Business Administration",
      "Master of Taxation",
    ],
  },
  {
    title: "Sciences",
    items: [
      "BSc Biology",
      "Bachelor of Environmental Studies",
      "MSc Physics",
      "PhD Chemistry",
    ],
  },
];

export default function ProgramsTab() {
  return (
    <ProgramsSection
      badgeText="About the University"
      title="Available Programs"
      programs={programs}
      filterPlaceholder="Degree Level"
    />
  );
}
