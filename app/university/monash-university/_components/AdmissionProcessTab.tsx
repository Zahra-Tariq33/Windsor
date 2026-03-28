import ProcessSection from "../../_components/tabs/ProcessSection";

export default function AdmissionProcessTab() {
  return (
    <ProcessSection
      badgeText="Application Steps"
      title="Admission Process"
      steps={[
        {
          title: "Research courses and check entry requirements",
        },
        {
          title: "Submit online application through Monash portal",
        },
        {
          title: "Upload academic transcripts and English proficiency results",
        },
        {
          title: "Receive offer letter (usually within 2-4 weeks)",
        },
        {
          title: "Accept offer and pay deposit to secure place",
        },
        {
          title: "Receive CoE and apply for Student Visa (subclass 500)",
        },
      ]}
    />
  );
}
