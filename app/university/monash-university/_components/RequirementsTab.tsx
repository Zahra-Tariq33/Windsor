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
                <span>Completion of Year 12 or equivalent qualification</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>IELTS: 6.5 overall (minimum 6.0 in each band)</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Specific prerequisite subjects for certain courses</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Academic transcripts and certificates</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Personal statement (for some courses)</span>
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
                <span>Bachelor&apos;s degree from recognized institution</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>Minimum GPA of 3.0/4.0 or equivalent</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>IELTS: 6.5-7.0 overall depending on program</span>
              </li>
              <li className="flex items-start gap-2">
                <LuCircleCheckBig className="w-5 h-5 text-[#D99726] mt-0.5 shrink-0" />
                <span>CV and statement of purpose</span>
              </li>
            </ul>
          ),
        },
      ]}
    />
  );
}
