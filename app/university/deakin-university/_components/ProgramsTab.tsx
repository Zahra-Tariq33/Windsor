import ProgramsSection from "../../_components/tabs/ProgramsSection";

const programs = [
  {
    title: "Business & Management",
    items: [
      "Master of Business Administration",
      "Bachelor of Commerce",
      "Master of Professional Accounting",
      "Bachelor of Business",
    ],
  },
  {
    title: "Engineering & Technology",
    items: [
      "Bachelor of Information Technology",
      "Master of Cyber Security",
      "Bachelor of Engineering",
      "Master of Data Science",
    ],
  },
  {
    title: "Health Sciences",
    items: [
      "Bachelor of Nursing",
      "Master of Public Health",
      "Bachelor of Exercise and Sport Science",
      "Master of Nutrition and Population Health",
    ],
  },
  {
    title: "Arts & Humanities",
    items: [
      "Bachelor of Arts",
      "Master of Communication",
      "Bachelor of Criminology",
      "Master of Teaching",
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
