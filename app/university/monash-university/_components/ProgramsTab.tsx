import ProgramsSection from "../../_components/tabs/ProgramsSection";

const programs = [
  {
    title: "Business & Management",
    items: [
      "Master of Business Administration",
      "Bachelor of Commerce",
      "Master of Applied Finance",
      "Master of Marketing",
    ],
  },
  {
    title: "Engineering & Technology",
    items: [
      "Bachelor of Engineering (Honours)",
      "Master of Cybersecurity",
      "Master of Data Science",
      "Bachelor of Information Technology",
    ],
  },
  {
    title: "Sciences",
    items: [
      "Bachelor of Pharmacy",
      "Master of Biotechnology",
      "Bachelor of Science",
      "Master of Environment and Sustainability",
    ],
  },
  {
    title: "Health & Medicine",
    items: [
      "Doctor of Medicine",
      "Master of Nursing Practice",
      "Bachelor of Biomedical Science",
      "Master of Public Health",
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
