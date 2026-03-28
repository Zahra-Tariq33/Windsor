import OverviewSection from "../../_components/tabs/OverviewSection";

export default function OverviewTab() {
  return (
    <OverviewSection
      badgeText="About the University"
      title="University Overview"
      description={
        <>
          <p className="mb-3">
            The University of Nottingham is a public research university in
            Nottingham, England. Founded in 1881 as University College
            Nottingham, it received its Royal Charter in 1948. As a founding
            member of the Russell Group and Universitas 21, Nottingham is one of
            the UK&apos;s most prestigious universities, known for its global
            outlook with campuses in China and Malaysia.
          </p>

          <p>
            Set on a beautiful 330-acre parkland campus, University Park, the
            university offers an exceptional student experience with world-class
            facilities. Nottingham consistently ranks among the top 100
            universities globally and is renowned for excellence in pharmacy,
            engineering, and social sciences. The university has produced Nobel
            laureates and leaders across multiple industries.
          </p>
        </>
      }
      quickFacts={[
        { label: "Country", value: "United Kingdom" },
        { label: "City", value: "Nottingham" },
        { label: "Established", value: "1881" },
        {
          label: "Ranking",
          value: "#18 in UK, #100 Globally",
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
