import { useState } from "react";

const FAQAccordionFlexiown = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is INTRIX FlexiOwn?",
            answer: `
            <div class="">INTRIX FlexiOwn offers an affordable monthly subscription payment option to instantly pursue the quality lifestyle desired with INTRIX at minimal financial commitment.</div>
            
            `,
        },
        {
            question: "What's the payment process to subscribe for INTRIX FlexiOwn?",
            answer: `<div>A certain amount of up-front payment (depending on the tap selected) will be collected upon confirmation of order. Before installation, we will send a subscription registration link for you to fill-in your preferred credit card details. Auto debit deduction of monthly subscription charges will take place following that.</div>`,
        },
        {
            question: "What happens to the INTRIX unit after the 24-months subscription period?",
            answer: `
            <div class="">The product ownership is transferred to the customer at the end of the 24-months contract, with no outstanding balance.</div>
            `,
        },
        {
            question: "Is there a processing fee for INTRIX FlexiOwn?",
            answer: `
            <div class="">Yes, the upfront payment includes a processing fee of RM 300.</div>
            `,
        },
        {
            question: "What does the INTRIX FlexiOwn plan include?",
            answer: `
            <div class="">The INTRIX FlexiOwn plan includes free delivery and careful dust-free installation of the INTRIX One Tap. You also get a 3-year on-site warranty for manufacturing defects during the leasing period.</div>
            `,
        },
        {
            question: "Can I terminate the plan in advance? What happens next?",
            answer: `
            <div class="">30 days notice is needed for termination. You can email us the termination request at hello@intrixgroup.com. A certain penalty fee will be imposed for the termination. The penalty calculation is shown below: (Monthly subscription charges) x (Total remaining months of the 24-month period)</div>
            `,
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full flex flex-col lg:flex-row justify-between mx-auto mt-8 py-0 md:py-4 gap-6 lg:gap-[15vw] container">
            <h2 className="text-[24px] sm:text-[30px] md:text-[40px] text-center sm:text-left font-bold md:mb-4 text-[#343637] leading-[1.2] sm:leading-10 lg:max-w-[200px]">Got Questions About Our FlexiOwn Plan?</h2>
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

export default FAQAccordionFlexiown;
