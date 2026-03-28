import ProgramsSection from "../../_components/tabs/ProgramsSection";

const programs = [
  {
    title: "Business & Management",
    items: [
      "Master of Business Administration",
      "Bachelor of Commerce",
      "Master of Management",
      "Master of Professional Accounting",
    ],
  },
  {
    title: "Engineering & Technology",
    items: [
      "Bachelor of Engineering Honours",
      "Master of Information Technology",
      "Master of Data Science",
      "Bachelor of Computer Science",
    ],
  },
  {
    title: "Sciences",
    items: [
      "Bachelor of Science",
      "Master of Environmental Science",
      "Bachelor of Medical Science",
      "Master of Marine Science",
    ],
  },
  {
    title: "Arts & Humanities",
    items: [
      "Bachelor of Arts",
      "Master of Creative Writing",
      "Bachelor of Music",
      "Master of Museum and Heritage Studies",
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
