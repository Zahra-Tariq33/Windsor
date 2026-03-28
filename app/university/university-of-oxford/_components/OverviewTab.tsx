import OverviewSection from "../../_components/tabs/OverviewSection";

export default function OverviewTab() {
  return (
    <OverviewSection
      badgeText="About the University"
      title="University Overview"
      description={
        <>
          <p className="mb-3">
            The University of Oxford is a collegiate research university located
            in Oxford, England, with a rich academic history dating back to
            1096, making it the oldest university in the English-speaking world
            and the second-oldest university in continuous operation globally.
            The institution experienced significant growth in 1167, when King
            Henry II restricted English students from studying at the University
            of Paris, leading to the expansion of Oxford as a leading center of
            learning.
          </p>

          <p>
            Renowned worldwide for its academic excellence, research impact, and
            scholarly tradition, the University of Oxford offers a wide range of
            rigorous undergraduate and postgraduate programs across the
            humanities, social sciences, natural sciences, medicine, and
            professional disciplines. With its unique collegiate system,
            world-class faculty, and strong global reputation, Oxford continues
            to shape leaders, innovators, and researchers who make a lasting
            impact across industries and societies worldwide
          </p>
        </>
      }
      quickFacts={[
        { label: "Country", value: "United Kingdom" },
        { label: "City", value: "Oxford" },
        { label: "Established", value: "1096" },
        {
          label: "Ranking",
          value: "#1 in UK, #4 Globally",
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
