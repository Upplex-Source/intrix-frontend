import { useState } from "react";

const FAQAccordionFilter = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "INTRIX One Tap purification system only consists of 1 filter cartridge. Is that sufficient to provide safe and purified water?",
            answer: `
            <div class="mb-4">INTRIX filters are designed to be 95% recyclable with 80% wastage reduction and are thoughtfully designed to reduce waste yet purify thoroughly.</div>
            <div class="mb-4">The 3-stage nano filter cartridge consists of sediment filters, activated carbon block filters and nanofiltration membranes so microbes as small as 10 nanometer and 99.99% of bacteria, algae and viruses are effectively removed while preserving natural minerals in water.</div>
            <div class="mb-4">Besides that, the filter cartridge is certified with international water safety standard NSF 42 & 53, and Halal certified.</div>
            <div class="mb-4">Built to last longer, the filter only requires changing once a year or as indicated on the filter alarm system.</div>
            
            `,
        },
        {
            question: "How often do I need to replace the filter for the Intrix One Tap? How much is the filter?",
            answer: `<div>The filter needs to be changed once a year. For FlexiOwn and outright customers, you may get the filter changed at only RM580 per year.</div>`,
        },
        {
            question: "Does Intrix One Tap need routine maintenance/service?",
            answer: `
            <div class="">No, INTRIX One Tap only needs one filter cartridge replacement yearly without any other maintenance.</div>
            `,
        },
        {
            question: "Does the product come with a warranty?",
            answer: `
            <div class="">Yes, each unit comes with a standard three (3) year defect warranty except for the filters. The filter lifespan highly depends on the quality of incoming water. The warranty also includes on-site comprehensive warranty (parts and labours covered) at no additional cost.</div>
            `,
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full flex flex-col lg:flex-row justify-between mx-auto mt-8 py-0 md:py-4 gap-6 lg:gap-[15vw] container">
            <h2 className="text-[24px] sm:text-[30px] md:text-[40px] text-left font-bold md:mb-4 text-[#343637] leading-[1.2] lg:max-w-[200px]">Commonly Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b-2 border-[#DDDFE0]">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full text-left flex justify-between items-center py-3 focus:outline-none"
                        >
                            <span className="text-[18px] font-bold text-[#343637]">{faq.question}</span>
                            <span
                                className={`transform transition-transform duration-300 text-[1.5em] text-[#1A0F91] ${
                                    openIndex === index ? "rotate-45" : "rotate-0"
                                }`}
                            >
                                +
                            </span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-[500px] py-2" : "max-h-0"}`}>
                            <div className="text-[16px] text-[#3C3C43D9] text-left" dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordionFilter;
