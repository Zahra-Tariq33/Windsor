import { LuCircleCheckBig } from "react-icons/lu";
import RequirementsSection from "../../_components/tabs/RequirementsSection";

export default function RequirementsTab() {
  return (
    <RequirementsSection
      badgeText="Eligibility Requirements"
      title="Entry Requirements"
      requirements={[
        {
          title: "Undergraduate Requirements",
          icon: <LuCircleCheckBig className="text-red-600" />,
          content: (
            <ul className="space-y-2 text-[#737373] text-lg sm:text-xl md:text-[22px]">
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>A-Levels: AAB-BBB depending on program</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>
                  IELTS: 6.0-7.0 overall (minimum 5.5 in each component)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Personal Statement</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Academic Reference</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>GCSE Mathematics and English at grade C/4 or above</span>
              </li>
            </ul>
          ),
        },
        {
          title: "Postgraduate Requirements",
          icon: <LuCircleCheckBig className="text-red-600" />,
          content: (
            <ul className="space-y-2 text-[#737373] text-lg sm:text-xl md:text-[22px]">
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Bachelor&apos;s degree with 2:1 or equivalent</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>IELTS: 6.5-7.0 overall</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Two academic references</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Statement of purpose</span>
              </li>
            </ul>
          ),
        },
      ]}
    />
  );
}
