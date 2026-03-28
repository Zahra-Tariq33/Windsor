import { ReactNode } from "react";

type ScholarshipCardProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
};

export default function ScholarshipCard({
  icon,
  title,
  subtitle,
  description,
}: ScholarshipCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition">
      {/* ICON */}
      <div className="w-14 h-14  flex items-center justify-center rounded-md border border-[#990422] bg-[#9904221A] text-[#990422] mb-4">
        {icon}
      </div>

      {/* CONTENT */}
      <h3 className="font-bold text-base mb-4">{title}</h3>

      <p className="text-base font-semibold text-[#D99726] mb-4">{subtitle}</p>

      <p className="text-base text-[#474740] font-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
}
