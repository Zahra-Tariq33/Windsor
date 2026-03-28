import OverviewSection from "../../_components/tabs/OverviewSection";

export default function OverviewTab() {
  return (
    <OverviewSection
      badgeText="About the University"
      title="University Overview"
      description={
        <>
          <p className="mb-3">
            The University of Sydney is Australia&apos;s first university,
            founded in 1850. Located in the heart of one of the world&apos;s
            most vibrant cities, it is consistently ranked among the top 50
            universities globally. As a member of the prestigious Group of Eight
            and the Association of Pacific Rim Universities, Sydney is renowned
            for its academic excellence and research impact.
          </p>

          <p>
            The university&apos;s historic sandstone campus is one of the most
            beautiful in the world, featuring iconic Gothic Revival
            architecture. With over 400 areas of study across 16 faculties and
            schools, the University of Sydney offers unparalleled opportunities
            for academic and personal growth. The institution has produced Prime
            Ministers, Nobel Laureates, and leaders in every field.
          </p>
        </>
      }
      quickFacts={[
        { label: "Country", value: "Australia" },
        { label: "City", value: "Sydney" },
        { label: "Established", value: "1850" },
        {
          label: "Ranking",
          value: "#3 in Australia, #19 Globally",
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
