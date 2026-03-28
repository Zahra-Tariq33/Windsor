import OverviewSection from "../../_components/tabs/OverviewSection";

export default function OverviewTab() {
  return (
    <OverviewSection
      badgeText="About the University"
      title="University Overview"
      description={
        <>
          <p className="mb-3">
            The University of Birmingham is a public research university located
            in Edgbaston, Birmingham, United Kingdom. Founded in 1900 as the
            first English civic or &apos;red brick&apos; university to receive
            its Royal Charter, Birmingham has since become one of the UK&apos;s
            most prestigious institutions and a founding member of the Russell
            Group.
          </p>

          <p>
            With a beautiful 350-acre campus featuring iconic red-brick
            architecture, including the famous Joseph Chamberlain Memorial Clock
            Tower, the university offers over 500 undergraduate and postgraduate
            programs. Birmingham is renowned for its world-leading research
            across disciplines including medicine, engineering, and social
            sciences, attracting students from over 150 countries.
          </p>
        </>
      }
      quickFacts={[
        { label: "Country", value: "United Kingdom" },
        { label: "City", value: "Birmingham" },
        { label: "Established", value: "1900" },
        {
          label: "Ranking",
          value: "#14 in UK, #84 Globally",
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
