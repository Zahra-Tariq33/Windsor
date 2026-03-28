import ProgramsSection from "../../_components/tabs/ProgramsSection";

const programs = [
  {
    title: "Business & Management",
    items: [
      "MBA",
      "MSc International Business",
      "BA Business Administration",
      "MSc Project Management",
    ],
  },
  {
    title: "Engineering & Technology",
    items: [
      "BEng Aerospace Engineering",
      "MSc Computer Science",
      "BSc Cyber Security",
      "MEng Automotive Engineering",
    ],
  },
  {
    title: "Health Sciences",
    items: [
      "BSc Nursing",
      "MSc Physiotherapy",
      "BSc Paramedic Science",
      "MPH Public Health",
    ],
  },
  {
    title: "Creative Arts",
    items: [
      "BA Animation",
      "BA Film and Television",
      "BA Graphic Design",
      "MA Fine Art",
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
