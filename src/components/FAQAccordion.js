import { useState } from "react";

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is INTRIX One Tap?",
            answer: `
            <p class="mb-4">INTRIX One Tap represents the innovative features that our world-class water purification system will provide to consumers - all in just One Tap.</p>
            <p class="mb-4">It is an instant boiling water tap, hot enough to cook instantly and brew tea and coffee; as well as a water purifier that provides fresh, pure & safe drinking water at ambient temperature.</p>
            <p class="mb-4">It is a smarter, contemporary and high quality lifestyle product for this generation.</p>
            
            `,
        },
        {
            question: "Can I drink water directly from INTRIX One Tap?",
            answer: `<p>Yes because One Tap eliminates all the bacteria, viruses, suspended solids, parasites and organism macromolecules while preserving dissolved salts & essential minerals in water.</p>`,
        },
        {
            question: "What's the difference between 2 in 1 and 4 in 1 tap?",
            answer: `
            <p class="mb-4">Both use the same INTRIX One Tap boiling unit, however they have slightly different features.</p>
            <p class="mb-4">2-in-1 is a supplementary tap that supplies only purified hot and ambient drinking water, while the 4-in-1 tap supplies the same plus non-purified hot and ambient tap water.</p>
            <p class="mb-4">In other words, you can replace your kitchen faucet completely with the 4-in-1 tap and enjoy washing your dishes or hands with warm or hot water.</p>
            <p>4-in-1 tap comes with two tap levers, one for purified hot and ambient water vs the other for regular hot and ambient tap water, no additional toggling required.</p>
            `,
        },
        {
            question: "Is the hot water stored in INTRIX One Tap kept boiling?",
            answer: `
            <p class="mb-4">No, the hot water stored in One Tap will only be reheated after a set temperature drop.</p>
            <p>For One Tap, the water at the hot water storage tank is safely filtered, and there are only minerals left in the water. Thus even with multiple reheats, there is no further contamination / toxins.</p>
            `,
        },
        {
            question: "Why is the temperature limited to 98°C?",
            answer: `
            <p class="mb-4">The temperature is limited for safety and energy efficiency.</p>
            <p class="mb-4">At 100 °C, boiling water turns into steam and can easily cause the tap to sputter.</p>
            <p>INTRIX One Tap limits the temperature at 98 °C without compromising boiling point to ensure safety for consumer use.</p>
            `,
        },
        {
            question: "What safety features does INTRIX One Tap offer?",
            answer: `
            <p class="mb-4">Intrix One Tap is tested, inspected, and approved by SIRIM for water and electrical safety requirements while also satisfying European and UK standards including UK's Water Regulations Approval Scheme (WRAS) and has passed stringent tests that comply with their water quality assurance, including checks for leaks, water contamination and waste minimisation.</p>
            <p class="mb-4">The tap is heat-proof to the touch and has an automatic temperature and altitude calibration to prevent sputtering.</p>
            <p class="mb-4">The advanced child-proof press-and-turn-to-activate system would prevent children from accessing boiling water without supervision.</p>
            <p>In the case of a water supply shortage, the Intrix One Tap would not overheat or cause dry burn.</p>
            `,
        },
        {
            question: "How often do I need to replace the filter for the Intrix One Tap? How much is the filter?",
            answer: `
            <p>The filter needs to be changed once a year. For FlexiOwn and outright customers, you may get the filter changed at only RM580 per year.</p>
            `,
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
                            <p className="text-[16px] text-[#3C3C43D9] text-left" dangerouslySetInnerHTML={{__html:faq.answer}}></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;
