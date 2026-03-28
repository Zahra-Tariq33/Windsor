import OverviewSection from "../../_components/tabs/OverviewSection";

export default function OverviewTab() {
  return (
    <OverviewSection
      badgeText="About the University"
      title="University Overview"
      description={
        <>
          <p className="mb-3">
            The University of Waterloo is a public research university located
            in Waterloo, Ontario, Canada. Founded in 1957, it has grown to
            become one of Canada&apos;s leading comprehensive universities and
            is globally recognized for its innovation, entrepreneurship, and
            co-operative education programs – the largest of its kind in the
            world.
          </p>

          <p>
            Home to Canada&apos;s largest engineering school and the
            world&apos;s largest co-op program, Waterloo produces more tech
            talent than any other Canadian university. With strong ties to
            companies like Google, Microsoft, and Apple, graduates enjoy
            exceptional career outcomes. The university is particularly renowned
            for computer science, engineering, mathematics, and accounting
            programs.
          </p>
        </>
      }
      quickFacts={[
        { label: "Country", value: "Canada" },
        { label: "City", value: "Waterloo, Ontario" },
        { label: "Established", value: "1957" },
        {
          label: "Ranking",
          value: "#2 in Canada for Innovation",
          highlight: true,
        },
      ]}
      cta={{
        title: "Need Help?",
        description:
          "Our expert counselors can guide you through the application process.",
        buttonText: "Get Free Consultation",
      }}
    />
  );
}
