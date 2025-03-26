"use client";

import CountUp from "react-countup";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const MakingWaves = () => {
    const tabsRef = useRef([]);
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

    useEffect(() => {
        if (activeTabIndex === null) return;

        const setTabPosition = () => {
            const currentTab = tabsRef.current[activeTabIndex];
            if (currentTab) {
                setTabUnderlineLeft(currentTab.offsetLeft);
                setTabUnderlineWidth(currentTab.clientWidth);
            }
        };

        setTabPosition();
    }, [activeTabIndex]);
    const sections = [
        {
            title: "Australia",
            items: [
                "Australian Regulatory Compliance Mark (RCM)",
                "Australian Water Efficiency Labelling & Standard (Water Rating)",
                "WaterMark Certification Scheme",
            ],
        },

        {
            title: "European Union",
            items: ["European Safety Standards (CE)", "Restriction of Hazardous Substances Directive (RoHS Compliant) Germany"],
        },

        {
            title: "Germany",
            items: ["German Technical Inspection Association - System Certification ISO9001-2015"],
        },
        {
            title: "Global",
            items: [
                "International Electrotechnical Commission (IECEE CB Scheme)",
                "World Intellectual Property Organization (WIPO)",
                // "Patented Technology",
            ],
        },
    ];
    const sections2 = [
        {
            title: "Malaysia",
            items: [
                "Energy Commission of Malaysia (Suruhanjaya Tenaga)",
                // "Product Safety Award 2021 (Gold Award) by Suruhanjaya Tenaga",
                "Standard and Industrial Research Institute of Malaysia (SIRIM)",
            ],
        },
        {
            title: "South Korea",
            items: ["Korean Halal Certification"],
        },
        {
            title: "Switzerland (Global Operations)",
            items: ["International Testing, Inspection & Certification (SGS)"],
        },
        {
            title: "United Kingdom",
            items: ["UK Regulations Compliance of Water Fittings (WRAS Approved Product)", "UK Water Board Regulations (Kiwa Approved Product)"],
        },
        {
            title: "USA",
            items: ["Certified Water Specialist (Water Quality Association, USA)", "National Sanitation Foundation (NSF USA 42/53/401)"],
        },
    ];
    const sections3 = [
        {
            title: "Australia",
            items: [
                "Australian Regulatory Compliance Mark (RCM)",
                "Australian Water Efficiency Labelling & Standard (Water Rating)",
                "WaterMark Certification Scheme",
            ],
        },

        {
            title: "Germany",
            items: ["German Technical Inspection Association - System Certification ISO9001:2015"],
        },
        {
            title: "Global",
            items: ["World Intellectual Property Organization (WIPO)", "Patented Technology"],
        },
    ];
    const sections4 = [
        // {
        //     title: "Malaysia",
        //     items: ["Product Safety Award 2021 (Gold Award) by Suruhanjaya Tenaga"],
        // },
        {
            title: "South Korea",
            items: ["Korean Halal Certification"],
        },
        {
            title: "United Kingdom",
            items: ["UK Regulations Compliance of Water Fittings (WRAS Approved Product)"],
        },
        {
            title: "USA",
            items: ["National Sanitation Foundation (NSF USA 42/53/401)"],
        },
    ];
    const sections5 = [
        {
            title: "Australia",
            items: [
                "Australian Regulatory Compliance Mark (RCM)",
                "Australian Water Efficiency Labelling & Standard (Water Rating)",
                "WaterMark Certification Scheme",
            ],
        },

        {
            title: "European Union",
            items: ["European Safety Standards (CE)", "Restriction of Hazardous Substances Directive (RoHS Compliant) Germany"],
        },
        {
            title: "Global",
            items: [
                "International Electrotechnical Commission (IECEE CB Scheme)",
                "World Intellectual Property Organization (WIPO)",
                "Patented Technology",
            ],
        },
    ];
    const sections6 = [
        {
            title: "Malaysia",
            items: ["Energy Commission of Malaysia (Suruhanjaya Tenaga)", "Standard and Industrial Research Institute of Malaysia (SIRIM)"],
        },
        {
            title: "Switzerland (Global Operations)",
            items: ["International Testing, Inspection & Certification (SGS)"],
        },
        {
            title: "United Kingdom",
            items: ["UK Water Board Regulations (Kiwa Approved Product)"],
        },
        {
            title: "USA",
            items: ["Certified Water Specialist (Water Quality Association, USA)"],
        },
    ];

    let allTabs = [
        {
            id: "all",
            name: "All",
            content: (
                <>
                    <div className="grid grid-cols-1 min-[480px]:grid-cols-2 min-[480px]:gap-8">
                        {/* Left Section */}
                        <div className="col-span-1 ">
                            {sections.map((section, index) => (
                                <div key={index} className="mt-6">
                                    <h3 className="text-[16px] font-[Mulish-Bold] text-black border-t border-b border-black">{section.title}</h3>
                                    {section.items.map((item, idx) => (
                                        <p key={idx} className="text-black text-[12px] font-[Montserrat-Regular] border-b border-black py-2">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="col-span-1 ">
                            {sections2.map((section, index) => (
                                <div key={index} className="mt-6">
                                    <h3 className="text-[16px] font-[Mulish-Bold] text-black border-t border-b border-black">{section.title}</h3>
                                    {section.items.map((item, idx) => (
                                        <p key={idx} className="text-black text-[12px] font-[Montserrat-Regular] border-b border-black py-2">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ),
        },
        {
            id: "tap",
            name: "INTRIX One Tap",
            content: (
                <>
                    <div className="grid grid-cols-1 min-[480px]:grid-cols-2 min-[480px]:gap-8">
                        {/* Left Section */}
                        <div className="col-span-1 ">
                            {sections3.map((section, index) => (
                                <div key={index} className="mt-6">
                                    <h3 className="text-[16px] font-[Mulish-Bold] text-black border-t border-b border-black">{section.title}</h3>
                                    {section.items.map((item, idx) => (
                                        <p key={idx} className="text-black text-[12px] font-[Montserrat-Regular] border-b border-black py-2">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="col-span-1 ">
                            {sections4.map((section, index) => (
                                <div key={index} className="mt-6">
                                    <h3 className="text-[16px] font-[Mulish-Bold] text-black border-t border-b border-black">{section.title}</h3>
                                    {section.items.map((item, idx) => (
                                        <p key={idx} className="text-black text-[12px] font-[Montserrat-Regular] border-b border-black py-2">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ),
        },
        {
            id: "command_centre",
            name: "Command Centre",
            content: (
                <>
                    <div className="grid grid-cols-1 min-[480px]:grid-cols-2 min-[480px]:gap-8">
                        {/* Left Section */}
                        <div className="col-span-1 ">
                            {sections5.map((section, index) => (
                                <div key={index} className="mt-6">
                                    <h3 className="text-[16px] font-[Mulish-Bold] text-black border-t border-b border-black">{section.title}</h3>
                                    {section.items.map((item, idx) => (
                                        <p key={idx} className="text-black text-[12px] font-[Montserrat-Regular] border-b border-black py-2">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="col-span-1 ">
                            {sections6.map((section, index) => (
                                <div key={index} className="mt-6">
                                    <h3 className="text-[16px] font-[Mulish-Bold] text-black border-t border-b border-black">{section.title}</h3>
                                    {section.items.map((item, idx) => (
                                        <p key={idx} className="text-black text-[12px] font-[Montserrat-Regular] border-b border-black py-2">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ),
        },
    ];
    return (
        <>
            <h3 className="text-[20px] md:text-[32px] xl:text-[40px] font-bold text-[#343637] text-center leading-[1.2]">Making Waves In Water Purification</h3>
            <div className="overflow-x-scroll md:overflow-x-hidden w-full relative bg-[#E2DBC6] bg-transparent pt-8 sm:pt-12 max-w-7xl mx-auto">
                <div className="flex-row relative flex h-12 rounded-3xl bg-[#E2DBC6] px-2 backdrop-blur-sm md:mt-6 w-fit gap-2 min-[425px]:gap-4 mx-auto sm:mx-0">
                    <span
                        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-1 transition-all duration-300"
                        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
                    >
                        <span className="h-full w-full rounded-3xl bg-[#F79932]" />
                    </span>
                    {allTabs.map((tab, index) => {
                        const isActive = activeTabIndex === index;

                        return (
                            <button
                                key={tab.id}
                                ref={(el) => (tabsRef.current[index] = el)}
                                className={`${
                                    isActive ? "text-white" : " bg-[#fff]"
                                } my-auto cursor-pointer select-none rounded-full px-4 text-center py-2 font-light text-[#292929] text-[12px] min-[425px]:text-[14px] outline-0 block w-fit whitespace-nowrap`}
                                onClick={() => setActiveTabIndex(index)}
                            >
                                {tab.name}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-8 pb-0 sm:pb-12">
                {allTabs.map((tab, index) => (
                    <div
                        key={tab.id}
                        className={`relative inset-0 transition-opacity duration-300 col-span-2 gap-8 ${
                            activeTabIndex === index ? "opacity-100 z-[3] h-fit" : "absolute opacity-0 pointer-events-none hidden col-span-1"
                        }`}
                    >
                        {tab.content}
                    </div>
                ))}
                {/* Right Section */}
                <div className="space-y-8 col-span-1 mt-2 w-full">
                    {/* Patents */}
                    <div className="bg-[#F79932] text-white p-6 rounded-[25px] ">
                        <p className="text-[#421908] text-[16px]">PATENTS</p>
                        <h2 className="text-[50px] font-bold text-[#343637] leading-[1.2]">
                            <CountUp enableScrollSpy={true} scrollSpyOnce end={19} />
                        </h2>
                        <p className="mt-1 text-[12px] text-black">
                            These patents cover various aspects of water purification and heating technology, making INTRIX a leader in hydro and
                            thermal solutions both in Malaysia and abroad.
                        </p>
                    </div>

                    {/* Certifications */}
                    <div className="bg-[#F79932] text-white p-6 rounded-[25px] ">
                        <p className="text-[#421908] text-[16px]">CERTIFICATIONS</p>
                        <h2 className="text-[50px] font-bold text-[#343637] leading-[1.2]">
                            <CountUp enableScrollSpy={true} scrollSpyOnce end={16} />
                        </h2>
                        <p className="mt-1 text-[12px] text-black">
                            These certifications underscore INTRIX&apos;s dedication to providing safe, high-quality, and environmentally responsible
                            products.
                        </p>
                    </div>

                    {/* <div className="space-y-4">
                        <Link
                            href="#"
                            className="flex items-center justify-between text-[16px] font-semibold text-[#343637] border-t border-b border-[#343637] py-2 transition"
                        >
                            <span>Download List of Patents &amp; Logo</span>
                            <Image className="" src={"/product/arrow-right.png"} alt="arrow" width={25} height={25} />
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center justify-between text-center text-[16px] font-semibold text-[#343637] border-t border-b border-[#343637] py-2 transition"
                        >
                            <span>Download List of Certificates &amp; Logo</span>
                            <Image className="" src={"/product/arrow-right.png"} alt="arrow" width={25} height={25} />
                        </Link>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default MakingWaves;
