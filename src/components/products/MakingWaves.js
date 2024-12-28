"use client";

import React from "react";
import CountUp from 'react-countup';
import Link from "next/link";
import Image from "next/image";

const MakingWaves = () => {
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
        items: [
            "European Safety Standards (CE)",
            "Restriction of Hazardous Substances Directive (RoHS Compliant) Germany",
        ],
    },
    
    {
        title: "Germany",
        items: [
            "German Technical Inspection Association - System Certification ISO9001:2015",
        ],
    },
    {
        title: "Global",
        items: [
            "International Electrotechnical Commission (IECEE CB Scheme)",
            "World Intellectual Property Organization (WIPO)",
            "Patented Technology",
        ],
    }
  ]
  const sections2 = [
    {
      title: "Malaysia",
      items: [
          "Energy Commission of Malaysia (Suruhanjaya Tenaga)",
          "Product Safety Award 2021 (Gold Award) by Suruhanjaya Tenaga",
          "Standard and Industrial Research Institute of Malaysia (SIRIM)",
      ],
    },
    {
      title: "South Korea",
      items: ["European Safety Standards (CE)"],
    },
    {
        title: "Switzerland (Global Operations)",
        items: ["International Testing, Inspection & Certification (SGS)"],
    },
    {
        title: "United Kingdom",
        items: [
            "UK Regulations Compliance of Water Fittings (WRAS Approved Product)",
            "UK Water Board Regulations (Kiwa Approved Product)",
        ],
    },
    {
        title: "USA",
        items: [
            "Certified Water Specialist (Water Quality Association, USA)",
            "National Sanitation Foundation (NSF USA 42/53/401)",
        ],
    },
];
  return (
    <>
      <h3 className="text-[20px] sm:text-[30px] lg:text-[40px] font-bold text-[#343637] text-center">Making Waves In Water Purification</h3>
      <div className="px-6 py-12 lg:py-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                {/* Right Section */}
                <div className="space-y-8 col-span-1 mt-2">
                    {/* Patents */}
                    <div className="bg-[#F79932] text-white p-6 rounded-[25px] ">
                      <p className="text-[#421908] text-[16px]">PATENTS</p>
                        <h2 className="text-[50px] font-bold text-[#343637] leading-[1.2]"><CountUp enableScrollSpy={true} scrollSpyOnce end={19} /></h2>
                        <p className="mt-1 text-[12px] text-black">
                            These patents cover various aspects of water purification and heating
                            technology, making Intrix a leader in hydro and thermal solutions both
                            in Malaysia and abroad.
                        </p>
                    </div>

                    {/* Certifications */}
                    <div className="bg-[#F79932] text-white p-6 rounded-[25px] ">
                    <p className="text-[#421908] text-[16px]">CERTIFICATIONS</p>
                        <h2 className="text-[50px] font-bold text-[#343637] leading-[1.2]"><CountUp enableScrollSpy={true} scrollSpyOnce end={15} /></h2>
                        <p className="mt-1 text-[12px] text-black">
                            These certifications underscore INTRIX&apos;s dedication to providing safe,
                            high-quality, and environmentally responsible products.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <Link
                            href="#"
                            className="flex items-center justify-between text-[16px] font-semibold text-[#343637] border-t border-b border-[#343637] py-2 transition"
                        >
                            <span>Download List of Patents &amp; Logo</span>
                            <Image className="" src={'/product/arrow-right.png'} alt="arrow" width={25} height={25} />
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center justify-between text-center text-[16px] font-semibold text-[#343637] border-t border-b border-[#343637] py-2 transition"
                        >
                            <span>Download List of Certificates &amp; Logo</span>
                            <Image className="" src={'/product/arrow-right.png'} alt="arrow" width={25} height={25} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default MakingWaves;
