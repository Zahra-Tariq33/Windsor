import OverviewSection from "../../_components/tabs/OverviewSection";

export default function OverviewTab() {
  return (
    <OverviewSection
      badgeText="About the University"
      title="University Overview"
      description={
        <>
          <p className="mb-3">
            The University of Hertfordshire is a public university in Hatfield,
            Hertfordshire, England. With origins dating back to 1952 as Hatfield
            Technical College, it gained university status in 1992. Known for
            its business-facing approach and strong industry links,
            Hertfordshire has become one of the UK&apos;s leading universities
            for employment-focused education.
          </p>

          <p>
            Located just 25 minutes from London, the university offers excellent
            accessibility to the UK capital while providing a vibrant campus
            environment. With state-of-the-art facilities, strong support for
            international students, and a wide range of programs designed with
            employer input, Hertfordshire is an ideal choice for students
            seeking career-ready qualifications at an affordable cost.
          </p>
        </>
      }
      quickFacts={[
        { label: "Country", value: "United Kingdom" },
        { label: "City", value: "Hatfield" },
        { label: "Established", value: "1952" },
        {
          label: "Ranking",
          value: "Top 50 UK Universities",
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
