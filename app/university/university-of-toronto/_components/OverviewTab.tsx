import OverviewSection from "../../_components/tabs/OverviewSection";

export default function OverviewTab() {
  return (
    <OverviewSection
      badgeText="About the University"
      title="University Overview"
      description={
        <>
          <p className="mb-3">
            The University of Toronto is a public research university in
            Toronto, Ontario, Canada, established in 1827 as King&apos;s
            College, making it the oldest university in the province of Ontario.
            It is consistently ranked as one of the top universities globally
            and is Canada&apos;s leading institution of learning, discovery, and
            knowledge creation.
          </p>

          <p>
            With three campuses – St. George (downtown Toronto), Mississauga,
            and Scarborough – the university offers an extraordinary range of
            programs and research opportunities. U of T is home to
            world-renowned faculty, cutting-edge facilities, and a diverse
            community of over 90,000 students from more than 160 countries,
            making it a global leader in innovation and academic excellence.
          </p>
        </>
      }
      quickFacts={[
        { label: "Country", value: "Canada" },
        { label: "City", value: "Toronto" },
        { label: "Established", value: "1827" },
        {
          label: "Ranking",
          value: "#1 in Canada, #21 Globally",
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
