import ProgramsSection from "../../_components/tabs/ProgramsSection";

const programs = [
  {
    title: "Business & Management",
    items: [
      "MBA",
      "MSc International Business",
      "BA Business Management",
      "MSc Finance",
    ],
  },
  {
    title: "Engineering & Technology",
    items: [
      "MEng Civil Engineering",
      "BEng Electronic Engineering",
      "MSc Advanced Computer Science",
      "MSc Automotive Engineering",
    ],
  },
  {
    title: "Sciences",
    items: [
      "BSc Biology",
      "MSc Biodiversity and Conservation",
      "BSc Chemistry",
      "MSc Geographical Information Systems",
    ],
  },
  {
    title: "Arts & Humanities",
    items: [
      "BA English Literature",
      "MA Cultural Studies",
      "BA History of Art",
      "MA Music",
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
