"use client";

import React from "react";

const universities = [
  "University of Sydney",
  "MIT",
  "Oxford University",
  "University of Toronto",
  "Melbourne",
  "Stanford University",
  "Harvard University",
];

export default function PartnerUniversitiesMarquee() {
  return (
    <section className="w-full bg-[#990422] mb-10 py-10 overflow-hidden">
      {/* Title */}
      <h2 className="mb-8 text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white">
        Our Partner Universities
      </h2>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#990422] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#990422] to-transparent" />

        {/* Marquee Track */}
        <div
          className="flex w-max gap-3"
          style={{
            animation: "marquee 25s linear infinite",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = "running")
          }
        >
          {[...universities, ...universities, ...universities].map(
            (name, index) => (
              <div
                key={index}
                className="whitespace-nowrap rounded-md bg-white/10 px-5 py-2 font-semibold text-base md:text-lg text-white backdrop-blur-md"
              >
                {name}
              </div>
            ),
          )}
        </div>
      </div>

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
