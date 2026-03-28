"use client";

import { useEffect, useRef, useState } from "react";
import { LiaAwardSolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";
import { BsGlobe2 } from "react-icons/bs";

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: <LiaAwardSolid size={42} />,
    value: 15,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: <LuGraduationCap size={42} />,
    value: 10000,
    suffix: "+",
    label: "Students Placed",
  },
  {
    icon: <LiaAwardSolid size={42} />,
    value: 98,
    suffix: "%",
    label: "Visa Success Rate",
  },
  {
    icon: <BsGlobe2 size={42} />,
    value: 150,
    suffix: "+",
    label: "Partner Universities",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        } else {
          setStartCount(false); // 👈 reset when leaving
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#990421] py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} start={startCount} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0); // 👈 reset counter
      return;
    }

    let current = 0;
    const increment = stat.value / 60;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [start, stat.value]);

  return (
    <div className="flex flex-col items-center text-white">
      {/* Icon */}
      <div className="mb-4 flex h-16 w-16 bg-white/20 items-center justify-center rounded-sm border border-white">
        {stat.icon}
      </div>

      {/* Number */}
      <h3 className="text-4xl md:text-5xl font-bold">
        {count.toLocaleString()}
        {stat.suffix}
      </h3>

      {/* Label */}
      <p className="mt-2 font-semibold text-xl md:text-2xl text-white">
        {stat.label}
      </p>
    </div>
  );
}
