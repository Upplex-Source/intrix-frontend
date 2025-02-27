"use client";
import { useState } from "react";

function Page() {
  const [openIndex, setOpenIndex] = useState(null);

    const tnc = [
        {
            question: "Agreement to Terms",
            answer: `
            <div class="mb-4">These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and INTRIX LIFESTYLE SDN BHD, doing business as INTRIX (“INTRIX“, “we”, “us”, or “our”), concerning your access to and use of the <a href="https://www.intrixlifestyle.com.my" target="_blank">https://www.intrixlifestyle.com.my</a> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</div>
            <div class="mb-4">Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.</div>
            <div class="mb-4">The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</div>
            <div class="">All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Site. If you are a minor, you must have your parent or guardian read and agree to these Terms of Use prior to you using the Site.</div>
            
            `,
        },
        {
            question: "Intellectual Property Rights",
            answer: `
              <div class="mb-4">Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</div>
              <div>Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.</div>
            `,
        },
        
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
          <div className="w-full flex flex-col lg:flex-row justify-between mx-auto mt-8 py-4 gap-6 lg:gap-[15vw] container px-4">
            <h2 className="text-[24px] sm:text-[30px] md:text-[40px] text-left font-bold md:mb-4 text-[#343637] lg:max-w-[200px] leading-[1.2] sm:leading-10">Terms and Conditions</h2>
            <div className="space-y-2">
                {tnc.map((tnc, index) => (
                    <div key={index} className="border-b-2 border-[#DDDFE0]">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full text-left flex justify-between items-center py-3 focus:outline-none"
                        >
                            <span className="text-[18px] font-bold text-[#343637]">{tnc.question}</span>
                            <span
                                className={`transform transition-transform duration-300 text-[18px] sm:text-[1.5em] text-[#1A0F91] ${
                                    openIndex === index ? "rotate-45" : "rotate-0"
                                }`}
                            >
                                +
                            </span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-[800px] pb-6" : "max-h-0"}`}>
                            <div className="text-[16px] text-[#3C3C43D9] text-left" dangerouslySetInnerHTML={{ __html: tnc.answer }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Page;
