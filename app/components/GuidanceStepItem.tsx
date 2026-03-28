import { ReactNode } from "react";

type GuidanceStepItemProps = {
  icon?: ReactNode;
  text: string;
};

export default function GuidanceStepItem({
  icon,
  text,
}: GuidanceStepItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className=" text-[#D99726]">{icon}</div>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
