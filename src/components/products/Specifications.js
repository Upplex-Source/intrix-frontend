"use client";

import React, { useState } from "react";

const specifications = [
  { title: "Display", value: "LED" },
  { title: "Power Rating", value: "2.0kW @ 8.3A" },
  { title: "Hot Water Temperature Range", value: "60°C to 98°C (adjustable)" },
  { title: "Hot Water Output/Hour (167ml/cup)", value: "130 cups, up to 98°C" },
  { title: "Eco Smart Timer Control", value: "YES" },
  { title: "Operating Voltage", value: "220V-240V" },
  { title: "Ambient Water Capacity", value: "Tankless, Instant, Continuous" },
  { title: "Hot Water Tank Capacity", value: "2.6L" },
  { title: "Hot Water Tank Material", value: "SUS304 Stainless Steel" },
  { title: "Heating Element Material", value: "Titanium" },
  { title: "Filter Cartridge Model", value: "INTRIX All-in-One Filter" },
  { title: "Filtration Method (0.01μm)", value: "Sediment + Activated Carbon Block + Nano Filtration Membrane" },
  { title: "Filter Cartridge Lifespan", value: "23,000L or One Year, whichever comes first" },
  { title: "Command Centre Dimension (mm) (WxHxD)", value: "190 x 360 x 340" },
  { title: "Tap Drilling Hole Size (mm)", value: "35" },
  { title: "Filter Change Reminder", value: "YES" },
];

const ProductSpecifications = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer border-b pb-2 mb-4"
        onClick={toggleExpand}
      >
        <h2 className="text-xl font-semibold">Product Specifications</h2>
        <span
          className={`transform transition-transform duration-300 ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </div>

      {/* Specifications List */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
          {specifications.map((spec, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-gray-500 text-sm">{spec.title}</span>
              <span className="font-medium text-gray-900">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSpecifications;
