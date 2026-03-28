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
          title:
            "Submit UCAS application (undergraduate) or apply directly (postgraduate)",
        },
        {
          title: "Upload supporting documents and transcripts",
        },
        {
          title: "Receive conditional or unconditional offer",
        },
        {
          title: "Accept offer and pay deposit",
        },
        {
          title: "Obtain CAS and apply for Student Visa",
        },
      ]}
    />
  );
}
