import ProgramsSection from "../../_components/tabs/ProgramsSection";

const programs = [
  {
    title: "Business & Management",
    items: [
      "MBA",
      "MSc International Business",
      "BSc Accounting and Finance",
      "MSc Human Resource Management",
    ],
  },
  {
    title: "Engineering & Technology",
    items: [
      "BEng Civil Engineering",
      "MEng Mechanical Engineering",
      "MSc Computer Science",
      "PhD Electronic Engineering",
    ],
  },
  {
    title: "Sciences",
    items: [
      "BSc Biochemistry",
      "MSc Environmental Science",
      "PhD Chemistry",
      "BSc Mathematics",
    ],
  },
  {
    title: "Humanities & Social Sciences",
    items: [
      "BA English Literature",
      "MA International Relations",
      "LLB Law",
      "BA History",
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
