import ProcessSection from "../../_components/tabs/ProcessSection";

export default function AdmissionProcessTab() {
  return (
    <ProcessSection
      badgeText="Application Steps"
      title="Admission Process"
      steps={[
        {
          title:
            "Create an account on OUAC (Ontario Universities Application Centre)",
        },
        {
          title: "Submit your application by January 15 (undergraduate)",
        },
        {
          title: "Upload required documents and transcripts",
        },
        {
          title: "Complete supplementary application if required",
        },
        {
          title: "Receive admission decision by May",
        },
        {
          title: "Accept offer and apply for study permit",
        },
      ]}
    />
  );
}
