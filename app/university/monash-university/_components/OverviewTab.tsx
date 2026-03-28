import OverviewSection from "../../_components/tabs/OverviewSection";

export default function OverviewTab() {
  return (
    <OverviewSection
      badgeText="About the University"
      title="University Overview"
      description={
        <>
          <p className="mb-3">
            Monash University is a public research university based in
            Melbourne, Australia. Founded in 1958, it is the second oldest
            university in Victoria and is named after Sir John Monash, a
            distinguished military commander and civil engineer. Monash is a
            member of the prestigious Group of Eight, a coalition of
            Australia&apos;s leading research-intensive universities.
          </p>

          <p>
            With campuses across four continents, Monash is Australia&apos;s
            largest university by enrollment. The university is globally
            recognized for its excellence in research and teaching, particularly
            in pharmacy, engineering, medicine, and business. Monash
            consistently ranks among the top 60 universities worldwide and
            offers students a truly international education experience.
          </p>
        </>
      }
      quickFacts={[
        { label: "Country", value: "Australia" },
        { label: "City", value: "Melbourne" },
        { label: "Established", value: "1958" },
        {
          label: "Ranking",
          value: "#6 in Australia, #42 Globally",
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
