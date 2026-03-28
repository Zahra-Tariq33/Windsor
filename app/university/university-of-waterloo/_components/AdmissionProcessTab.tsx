import ProcessSection from "../../_components/tabs/ProcessSection";

export default function AdmissionProcessTab() {
  return (
    <ProcessSection
      badgeText="Application Steps"
      title="Admission Process"
      steps={[
        {
          title: "Apply through Ontario Universities Application Centre (OUAC)",
        },
        {
          title: "Submit Admission Information Form (AIF) by deadline",
        },
        {
          title: "Complete video interview (for competitive programs)",
        },
        {
          title: "Submit official transcripts and English test scores",
        },
        {
          title: "Receive offer of admission (February-May)",
        },
        {
          title: "Accept offer and apply for study permit",
        },
      ]}
    />
  );
}
