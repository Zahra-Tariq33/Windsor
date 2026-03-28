import OverviewSection from "../../_components/tabs/OverviewSection";

export default function OverviewTab() {
  return (
    <OverviewSection
      badgeText="About the University"
      title="University Overview"
      description={
        <>
          <p className="mb-3">
            Deakin University is a public university in Victoria, Australia,
            named after Alfred Deakin, Australia&apos;s second Prime Minister.
            Founded in 1974, Deakin has grown to become one of Australia&apos;s
            largest and most progressive universities, known for its innovative
            approach to education and strong industry connections.
          </p>

          <p>
            With four campuses across Victoria (Melbourne Burwood, Geelong
            Waterfront, Geelong Waurn Ponds, and Warrnambool), Deakin offers
            flexible study options including online learning. The university is
            ranked in the top 1% of universities worldwide and is particularly
            renowned for its programs in sports science, nursing, and business.
            Deakin&apos;s focus on career-ready graduates ensures high
            employment outcomes.
          </p>
        </>
      }
      quickFacts={[
        { label: "Country", value: "Australia" },
        { label: "City", value: "Melbourne/Geelong" },
        { label: "Established", value: "1974" },
        {
          label: "Ranking",
          value: "#9 in Australia, #266 Globally",
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
