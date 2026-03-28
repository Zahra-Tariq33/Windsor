import ProcessStep from "@/app/components/ProcessStep";

type StepItem = {
  title: string;
};

type ProcessSectionProps = {
  badgeText?: string;
  title: string;
  steps: StepItem[];
};

export default function ProcessSection({
  badgeText,
  title,
  steps,
}: ProcessSectionProps) {
  return (
    <div className="bg-white rounded-xl p-9 shadow">
      {/* HEADER */}
      <div className="mb-6">
        {badgeText && (
          <p className="text-sm sm:text-lg md:text-xl font-semibold text-[#D99726] mb-2">
            {badgeText}
          </p>
        )}

        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#990422] font-bold mb-4">
          {title}
        </h2>
      </div>

      {/* STEPS */}
      <div className="space-y-12">
        {steps.map((step, index) => (
          <ProcessStep key={index} step={index + 1} title={step.title} />
        ))}
      </div>
    </div>
  );
}
