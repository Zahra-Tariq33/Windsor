"use client";

import { useState, ReactNode, memo, useMemo } from "react";

type TabItem = {
  id: string;
  label: string;
  icon?: ReactNode;
  content: ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  defaultTab?: string;
};

function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || "");

  const currentTab = useMemo(
    () => tabs.find((tab) => tab.id === activeTab),
    [tabs, activeTab],
  );

  return (
    <div className="w-full ">
      {/* TAB HEADERS */}
      <div className="flex flex-wrap gap-3 mb-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm md:text-xl font-medium transition
                ${
                  isActive
                    ? "bg-red-700 text-white shadow"
                    : "border border-[#990422] bg-white text-[#D99726] hover:bg-red-50"
                }
              `}
            >
              {tab.icon}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT */}
      <div className="transition-all duration-300">{currentTab?.content}</div>
    </div>
  );
}

export default memo(Tabs);
