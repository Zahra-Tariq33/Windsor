// src/components/ReusableHeader.tsx
"use client";

import React from "react";

interface ReusableHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: string;
  bgImage?: string;
  overlayColor?: string;
  height?: string; // Now accepts CSS height value like "350px", "20rem", etc.
}

export default function ReusableHeader({
  title,
  description,
  breadcrumb,
  bgImage,
  overlayColor = "bg-black/40",
  height = "16rem",
}: ReusableHeaderProps) {
  return (
    <div
      className="relative w-full flex items-center justify-center"
      style={{
        height: height,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayColor}`} />

      {/* Content */}
      <div className="relative text-center text-white px-4 max-w-6xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          {title}
        </h1>
        {breadcrumb && (
          <p className="mt-3 text-2xl md:text-3xl text-gray-200">
            {breadcrumb.split(" > ").map((part, index, array) => (
              <React.Fragment key={index}>
                {index === array.length - 1 ? (
                  <span className="text-[#D99726] mt-6 font-semibold">
                    {part}
                  </span>
                ) : (
                  <span>{part}</span>
                )}
                {index < array.length - 1 && (
                  <span className="mx-4 text-[#D99726]  font-semibold">
                    &gt;
                  </span>
                )}
              </React.Fragment>
            ))}
          </p>
        )}
        {description && (
          <p className="mt-4 text-xl md:text-2xl text-gray-100">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
