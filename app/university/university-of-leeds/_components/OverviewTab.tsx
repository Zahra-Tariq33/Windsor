import OverviewSection from "../../_components/tabs/OverviewSection";

export default function OverviewTab() {
  return (
    <OverviewSection
      badgeText="About the University"
      title="University Overview"
      description={
        <>
          <p className="mb-3">
            The University of Leeds is a public research university in Leeds,
            West Yorkshire, England. Founded in 1904, it is one of the largest
            higher education institutions in the UK and a founding member of the
            prestigious Russell Group of research-intensive universities. The
            university traces its origins to the Leeds School of Medicine (1831)
            and the Yorkshire College of Science (1874).
          </p>

          <p>
            Located on a single campus in the heart of Leeds, the university
            offers over 700 undergraduate and 500 postgraduate programs across a
            wide range of disciplines. Leeds is renowned for its research
            excellence, particularly in health, engineering, and arts. With
            students from over 140 countries, it provides a vibrant
            multicultural learning environment and excellent career prospects.
          </p>
        </>
      }
      quickFacts={[
        { label: "Country", value: "United Kingdom" },
        { label: "City", value: "Leeds" },
        { label: "Established", value: "1904" },
        {
          label: "Ranking",
          value: "#15 in UK, #75 Globally",
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
