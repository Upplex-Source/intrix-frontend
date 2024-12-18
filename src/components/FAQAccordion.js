import { useState } from "react";

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is INTRIX One Tap?",
            answer: "Nibh quisque suscipit fermentum metus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.",
        },
        {
            question: "Can I drink water directly from INTRIX One Tap?",
            answer: "Yes, you can directly drink clean, filtered water from INTRIX One Tap.",
        },
        {
            question: "What's the difference between 2 in 1 and 4 in 1 tap?",
            answer: "The difference lies in the features. The 4 in 1 tap offers additional functionalities like hot and cold water options.",
        },
        {
            question: "Is the hot water stored in INTRIX One Tap kept boiling?",
            answer: "No, the hot water is stored at an optimal temperature to prevent boiling.",
        },
        {
            question: "Why is the temperature limited to 98°C?",
            answer: "The temperature is limited for safety and energy efficiency.",
        },
        {
            question: "What safety features does INTRIX One Tap offer?",
            answer: "The tap includes safety locks and advanced temperature controls.",
        },
        {
            question: "How often do I need to replace the filter in the INTRIX One Tap?",
            answer: "You should replace the filter every 6 months for optimal performance.",
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full flex flex-col lg:flex-row justify-between mx-auto mt-8 p-4 gap-6 lg:gap-12 container">
            <h2 className="text-[40px] text-left font-bold mb-4 text-[#343637] leading-10 lg:max-w-[200px]">Commonly Asked Questions</h2>
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
                        <div
                            className={`overflow-hidden transition-all duration-300 ${
                                openIndex === index ? "max-h-[500px] py-2" : "max-h-0"
                            }`}
                        >
                            <p className="text-[16px] text-[#3C3C43D9] text-left">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;
