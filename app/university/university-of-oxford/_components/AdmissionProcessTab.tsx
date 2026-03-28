import ProcessSection from "../../_components/tabs/ProcessSection";

export default function AdmissionProcessTab() {
  return (
    <ProcessSection
      badgeText="Application Steps"
      title="Admission Process"
      steps={[
        {
          title: "Research your course and check eligibility requirements",
        },
        {
          title: "Submit UCAS application by October 15 (undergraduate)",
        },
        {
          title: "Attend interview if shortlisted (December)",
        },
        {
          title: "Receive decision by mid-January",
        },
        {
          title: "Accept offer and complete visa requirements",
        },
      ]}
    />
  );
}
