import ProgramsSection from "../../_components/tabs/ProgramsSection";

const programs = [
  {
    title: "Business & Management",
    items: [
      "MBA",
      "MSc Financial Economics",
      "MSc Management",
      "Executive MBA",
    ],
  },
  {
    title: "Engineering & Technology",
    items: [
      "MEng Engineering Science",
      "MSc Computer Science",
      "DPhil Engineering",
    ],
  },
  {
    title: "Sciences",
    items: ["MSc Chemistry", "DPhil Physics", "MSc Mathematics", "MSc Biology"],
  },
  {
    title: "Humanities & Social Sciences",
    items: [
      "BA Philosophy, Politics and Economics",
      "MSc International Relations",
      "MA History",
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
