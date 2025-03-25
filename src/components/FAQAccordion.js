import { useState } from "react";

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is INTRIX One Tap?",
            answer: `
            <div class="mb-4">INTRIX One Tap represents the innovative features that our world-class water purification system will provide to consumers - all in just One Tap.</div>
            <div class="mb-4">It is an instant boiling water tap, hot enough to cook instantly and brew tea and coffee; as well as a water purifier that provides fresh, pure & safe drinking water at ambient temperature.</div>
            <div class="">It is a smarter, contemporary and high quality lifestyle product for this generation.</div>
            
            `,
        },
        {
            question: "Can I drink water directly from INTRIX One Tap?",
            answer: `<div>Yes because One Tap eliminates all the bacteria, viruses, suspended solids, parasites and organism macromolecules while preserving dissolved salts & essential minerals in water.</div>`,
        },
        {
            question: "What's the difference between 2 in 1 and 4 in 1 tap?",
            answer: `
            <div class="mb-4">Both use the same INTRIX One Tap boiling unit, however they have slightly different features.</div>
            <div class="mb-4">2-in-1 is a supplementary tap that supplies only purified hot and ambient drinking water, while the 4-in-1 tap supplies the same plus non-purified hot and ambient tap water.</div>
            <div class="mb-4">In other words, you can replace your kitchen faucet completely with the 4-in-1 tap and enjoy washing your dishes or hands with warm or hot water.</div>
            <div>4-in-1 tap comes with two tap levers, one for purified hot and ambient water vs the other for regular hot and ambient tap water, no additional toggling required.</div>
            `,
        },
        {
            question: "Is the hot water stored in INTRIX One Tap kept boiling?",
            answer: `
            <div class="mb-4">No, the hot water stored in One Tap will only be reheated after a set temperature drop.</div>
            <div>For One Tap, the water at the hot water storage tank is safely filtered, and there are only minerals left in the water. Thus even with multiple reheats, there is no further contamination / toxins.</div>
            `,
        },
        {
            question: "Why is the temperature limited to 98°C?",
            answer: `
            <div class="mb-4">The temperature is limited for safety and energy efficiency.</div>
            <div class="mb-4">At 100 °C, boiling water turns into steam and can easily cause the tap to sputter.</div>
            <div>INTRIX One Tap limits the temperature at 98 °C without compromising boiling point to ensure safety for consumer use.</div>
            `,
        },
        {
            question: "What safety features does INTRIX One Tap offer?",
            answer: `
            <div class="mb-4">INTRIX One Tap is tested, inspected, and approved by SIRIM for water and electrical safety requirements while also satisfying European and UK standards including UK's Water Regulations Approval Scheme (WRAS) and has passed stringent tests that comply with their water quality assurance, including checks for leaks, water contamination and waste minimisation.</div>
            <div class="mb-4">The tap is heat-proof to the touch and has an automatic temperature and altitude calibration to prevent sputtering.</div>
            <div class="mb-4">The advanced child-proof press-and-turn-to-activate system would prevent children from accessing boiling water without supervision.</div>
            <div>In the case of a water supply shortage, the INTRIX One Tap would not overheat or cause dry burn.</div>
            `,
        },
        {
            question: "How often do I need to replace the filter for the INTRIX One Tap? How much is the filter?",
            answer: `
            <div>The filter needs to be changed once a year. For FlexiOwn and outright customers, you may get the filter changed at only RM580 per year.</div>
            `,
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full flex flex-col lg:flex-row justify-between mx-auto mt-8 py-0 md:py-4 gap-6 lg:gap-[15vw] container">
            <h2 className="text-[24px] sm:text-[30px] md:text-[40px] text-left font-bold md:mb-4 text-[#343637] sm:max-w-[200px] leading-[1.2] sm:leading-10">Commonly <br className="block sm:hidden"/> Asked Questions</h2>
            <div className="space-y-2">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b-2 border-[#DDDFE0]">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full text-left flex justify-between items-center py-3 focus:outline-none"
                        >
                            <span className="text-[18px] font-bold text-[#343637]">{faq.question}</span>
                            <span
                                className={`transform transition-transform duration-300 text-[18px] sm:text-[1.5em] text-[#1A0F91] ${
                                    openIndex === index ? "rotate-45" : "rotate-0"
                                }`}
                            >
                                +
                            </span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-[800px] pb-6" : "max-h-0"}`}>
                            <div className="text-[14px] sm:text-[16px] text-[#3C3C43D9] text-left" dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;
