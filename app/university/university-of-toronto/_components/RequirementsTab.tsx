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
                <span>High school diploma with minimum 85% average</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>IELTS: 6.5 overall (minimum 6.0 in each component)</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Supplementary Application (program-specific)</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Academic transcripts</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Personal statement of interest</span>
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
                <span>Bachelor&apos;s degree with B+ average or higher</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>GRE/GMAT scores (program-specific)</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Two academic reference letters</span>
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
