"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const specifications = [
  { title: "Display", value: "NONE" },
  { title: "Power Rating", value: "190W @  0.8A" },
  { title: "Chilled Water Temperature Range", value: "As Low As 3°C (Eco Mode at 6°C)" },
  { title: "Chilled Water Output/Hour (167ml/cup)", value: "38 cups" },
  { title: "Eco Smart Timer Control", value: "No" },
  { title: "Operating Voltage", value: "220V-240V" },
  { title: "Chilled Water Tank Capacity", value: "1.2L" },
  { title: " ", value: " " },
  { title: "Chilled Water Tank Material", value: "SUS304 Stainless Steel" },
  { title: "Filter Cartridge Model", value: "INTRIX All-in-One Filter" },
  { title: "Filtration Method (0.01μm)", value: "Sediment + Activated Carbon Block + Nano Filtration Membrane" },
  { title: " ", value: " " },
  { title: "Filter Cartridge Lifespan", value: "23,000L or One Year, whichever comes first" },
  { title: "Command Centre Dimension (mm) (WxHxD)", value: "180 x 370 x 320" },
  { title: "Tap Drilling Hole Size (mm)", value: "35" },
  { title: "Filter Change Reminder", value: "YES" },
];

const ArcticSpecifications = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    // Ensure `window` is only accessed on the client
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Set the initial width on component mount
    setWindowWidth(window.innerWidth);

    // Update width on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowWidth === null) {
    // Avoid rendering logic until `windowWidth` is available
    return null;
  }

  return (
    <div className="container mx-auto text-[#343637]">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer py-4"
        onClick={toggleExpand}
      >
        <h2 className="text-[24px] min-[1441px]:text-[30px] font-bold">Arctic Command Centre Specifications</h2>
        <span
          className={`transform transition-transform duration-300 ${
            isExpanded ? "rotate-0" : "rotate-[-90deg]"
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
        {specifications.map((spec, index) => {
          const isLastSpec =
            (window.innerWidth >= 768 && index >= specifications.length - 4) ||
            (window.innerWidth >= 640 && window.innerWidth < 768 && index >= specifications.length - 2) ||
            (window.innerWidth < 640 && index >= specifications.length - 1);

          return (
            <div
              key={index}
              className={`flex flex-col pr-6 pb-6 ${
                !isLastSpec ? "border-b border-[#000]" : ""
              }`}
            >
              <span className="text-[16px] min-[1441px]:text-[18px]">{spec.title}</span>
              <span className="font-bold text-[20px] min-[1441px]:text-[24px] leading-[1.2]">{spec.value}</span>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default ArcticSpecifications;
