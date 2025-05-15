"use client";

import { useState } from "react";

const Dropdown = ({ allowedOptions, isOpen, setOpenDropdown, handleSelect, productId }) => {
    const [selectedOption, setSelectedOption] = useState(allowedOptions[0] || "Chrome");
    // const [isOpen, setIsOpen] = useState(false);

    const options = ["Chrome", "Satin Gold", "Gunmetal Grey", "Matte Black"];

    const handleOptionClick = (option) => {
        handleSelect(option, productId);
        setSelectedOption(option);
        setOpenDropdown(null); // Close the dropdown after selection
    };

    return (
        <div className="relative w-full sm:max-w-[200px] mx-auto">
            {/* Dropdown Trigger */}
            <button className="flex items-center justify-between w-full px-3 py-2 border rounded-lg border-gray-300" onClick={setOpenDropdown}>
                <span className="flex items-center gap-2">
                    {/* Circle Indicator */}
                    <span
                        className={`w-3 h-3 rounded-full ${
                            selectedOption === "Chrome"
                                ? "bg-chrome"
                                : selectedOption === "Satin Gold"
                                ? "bg-satin"
                                : selectedOption === "Gunmetal Grey"
                                ? "bg-gunmetal"
                                : "bg-[#000]"
                        }`}
                    ></span>
                    {selectedOption}
                </span>
                <svg
                    className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Options */}
            {isOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white border rounded-lg shadow-lg border-gray-300">
                    {options
                        .filter((option) => allowedOptions.includes(option))
                        .map((option) => (
                            <div
                                key={option}
                                className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleOptionClick(option)}
                            >
                                <span
                                    className={`w-3 h-3 rounded-full ${
                                        option === "Chrome"
                                            ? "bg-chrome"
                                            : option === "Satin Gold"
                                            ? "bg-satin"
                                            : option === "Gunmetal Grey"
                                            ? "bg-gunmetal"
                                            : "bg-[#000]"
                                    }`}
                                ></span>
                                {option}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
