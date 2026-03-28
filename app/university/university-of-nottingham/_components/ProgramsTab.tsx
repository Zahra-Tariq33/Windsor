import ProgramsSection from "../../_components/tabs/ProgramsSection";

const programs = [
  {
    title: "Business & Management",
    items: [
      "MBA",
      "MSc Management",
      "BA Business and Management",
      "MSc Finance and Investment",
    ],
  },
  {
    title: "Engineering & Technology",
    items: [
      "MEng Civil Engineering",
      "BEng Electrical Engineering",
      "MSc Human-Computer Interaction",
      "MSc Additive Manufacturing",
    ],
  },
  {
    title: "Sciences",
    items: [
      "MPharm Pharmacy",
      "BSc Chemistry",
      "MSc Biotechnology",
      "BSc Physics with Astronomy",
    ],
  },
  {
    title: "Arts & Humanities",
    items: [
      "BA English",
      "MA Creative Writing",
      "BA History",
      "MA Film, Television and Screen Industries",
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
