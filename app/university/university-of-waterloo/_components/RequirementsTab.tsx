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
                <span>High school diploma with minimum 85-90% average</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>
                  IELTS: 6.5 overall (minimum 6.0 in writing, 6.5 in speaking)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Admission Information Form (AIF)</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Math courses required for most programs</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Video interview (for some competitive programs)</span>
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
                <span>
                  Bachelor&apos;s degree with minimum B+ average (78%)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>
                  IELTS: 7.0 overall (minimum 6.5 in writing and speaking)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>GRE scores (for engineering and science programs)</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Three letters of recommendation</span>
              </li>
            </ul>
          ),
        },
      ]}
    />
  );
}
