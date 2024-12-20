"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container mx-auto text-[#343637]">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointerpb-2 mb-6 cursor-pointer"
        onClick={toggleExpand}
      >
        <h2 className="text-[30px] font-bold">Product Specifications</h2>
        <span
          className={`transform transition-transform duration-300 ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </div>

      {/* Specifications List */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6">
          {specifications.map((spec, index) => (
            <div key={index} className="flex flex-col pr-6 pb-6 border-b border-[#000]">
              <span className="text-[18px]">{spec.title}</span>
              <span className="font-bold text-[24px] leading-[1.2]">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSpecifications;
