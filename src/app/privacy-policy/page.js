"use client";
import { useState } from "react";

function Page() {
    const [openIndex, setOpenIndex] = useState(null);

    const tnc = [
        {
            question: "Your Privacy",
            answer: `
                <div>This page explains our privacy policy which includes the use and protection of all information submitted by customers. If you choose to register and transact using our ecommerce platform or send an email containing personal data, these data will be shared internally within the company in order for us to provide assists to you as quickly and efficiently as possible. For example, to resolve or record complaints that require it extended to other departments in company.</div>
            `,
        },
        {
            question: "Cookies Policy",
            answer: `
                <div>Some websites (including our gate) generating ‘cookies’, which are collected by the server site to enable it to recognize you for the next visit. Cookies do not store your data permanently and it’s also not stored on the hard disk of your computer. Cookies will be deleted once you close your browser</div>
            `,
        },
        {
            question: "Information Log",
            answer: `
                <div>When you access to our webpage, our web servers automatically record information that your browser sends whenever you visit a website. These server logs include information such as your web request, Internet Protocol address, browser type, browser language, the date and time of your request and one or more cookies that uniquely identify your browser.</div>
            `,
        },
        {
            question: "Data Protection",
            answer: `
                <div>The latest technology including encryption software is used to safeguard any data given to us and strict security standards are maintained to prevent any unauthorised access.</div>
            `,
        },
        {
            question: "Cumulative Information",
            answer: `
                <div>No personal information is stored when you surf our webpage unless the information provided to you via e-mail / whatsapp, where it is in part a secure gateway</div>
            `,
        },
        {
            question: "Policy Change",
            answer: `
                <div>If there is any change in the privacy policy, it will be updated on this site. Make sure you always surf the privacy policy to make sure you always know which information is stored, how and when it is used and if there is, whether it is shared with other parties.</div>
            `,
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="w-full flex flex-col lg:flex-row justify-between mx-auto mt-[80px] md:mt-[150px] py-4 gap-6 lg:gap-[15vw] container px-4">
                <h2 className="text-[24px] sm:text-[30px] md:text-[40px] text-left font-bold md:mb-4 text-[#343637] lg:max-w-[200px] leading-[1.2] sm:leading-10">
                    Privacy Policy
                </h2>
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
