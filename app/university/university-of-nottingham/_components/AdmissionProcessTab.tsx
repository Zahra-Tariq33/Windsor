import ProcessSection from "../../_components/tabs/ProcessSection";

export default function AdmissionProcessTab() {
  return (
    <ProcessSection
      badgeText="Application Steps"
      title="Admission Process"
      steps={[
        {
          title: "Research programs and check entry requirements",
        },
        {
          title: "Submit UCAS application by January 25 (undergraduate)",
        },
        {
          title: "Apply directly through Nottingham portal (postgraduate)",
        },
        {
          title: "Upload supporting documents and transcripts",
        },
        {
          title: "Receive conditional or unconditional offer",
        },
        {
          title: "Accept offer and apply for Student Visa",
        },
      ]}
    />
  );
}
