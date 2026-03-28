import ProgramsSection from "../../_components/tabs/ProgramsSection";

const programs = [
  {
    title: "Business & Management",
    items: [
      "MBA (Rotman School)",
      "Master of Finance",
      "Master of Management Analytics",
      "Bachelor of Commerce",
    ],
  },
  {
    title: "Engineering & Technology",
    items: [
      "BASc Electrical Engineering",
      "MASc Computer Engineering",
      "MEng Mechanical Engineering",
      "PhD Biomedical Engineering",
    ],
  },
  {
    title: "Sciences",
    items: [
      "BSc Computer Science",
      "MSc Data Science",
      "PhD Physics",
      "MSc Chemistry",
    ],
  },
  {
    title: "Humanities & Social Sciences",
    items: [
      "BA Economics",
      "MA Political Science",
      "PhD Psychology",
      "MA International Relations",
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
