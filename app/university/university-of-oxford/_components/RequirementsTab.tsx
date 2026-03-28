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
                <span>A-Levels: AAA or equivalent</span>
              </li>

              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>IELTS: 7.0 overall (minimum 6.5 in each component)</span>
              </li>

              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Personal Statement</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Academic References</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Admissions Test (subject-specific)</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Interview</span>
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
                <span>Bachelor’s degree in relevant field</span>
              </li>

              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Statement of purpose</span>
              </li>

              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Letters of recommendation</span>
              </li>
            </ul>
          ),
        },
      ]}
    />
  );
}
