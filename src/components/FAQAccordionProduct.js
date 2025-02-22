import { useState } from "react";

const FAQAccordionProduct = () => {
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
            question: "Why do I need INTRIX One Tap?",
            answer: `
            <div class="mb-4">It is a wonderful kitchen appliance designed to provide you with clean and safe water for cooking, drinking, washing, and sterilising.</div>
            <div class="">INTRIX One Tap creates an elegant, clean, spacious & safe kitchen while saving time & energy with no hassle when boiling water and cooking (e.g. instant pasta, instant noodle, rice vermicelli, half boiled eggs, oats, brew coffee, teas, soup, etc).</div>
            `,
        },
        {
            question: "Can we drink water directly from INTRIX One Tap?",
            answer: `
            <div class="">Yes because One Tap eliminates all the bacteria, viruses, suspended solids, parasites and organism macromolecules while preserving dissolved salts & essential minerals in water.</div>
            `,
        },
        {
            question: "What is the difference between 2-in-1 and 4-in-1 tap?",
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
            <div class="">For One Tap, the water at the hot water storage tank is safely filtered, and there are only minerals left in the water. Thus even with multiple reheats, there is no further contamination / toxins.</div>
            `,
        },
        {
            question: "Can I control the temperature?",
            answer: `
            <div>Yes, the temperature is adjustable on the boiling unit between 60 °C to 98 °C.</div>
            `,
        },
        {
            question: "Why is the temperature limited to 98 °C?",
            answer: `
            <div class="mb-4">Water reaches boiling point at different temperatures at different pressures.</div>
            <div class="mb-4">At 100 °C, boiling water turns into steam and can easily cause the tap to sputter.</div>
            <div>INTRIX One Tap limits the temperature at 98 °C without compromising boiling point to ensure safety for consumer use.</div>
            `,
        },
        {
            question: "What safety features does INTRIX One Tap offer?",
            answer: `
            <div class="mb-4">Intrix One Tap is tested, inspected, and approved by SIRIM for water and electrical safety requirements while also satisfying European and UK standards including UK's Water Regulations Approval Scheme (WRAS) and has passed stringent tests that comply with their water quality assurance, including checks for leaks, water contamination and waste minimisation.</div>
            <div class="mb-4">The tap is heat-proof to the touch and has an automatic temperature and altitude calibration to prevent sputtering.</div>
            <div class="mb-4">The advanced child-proof press-and-turn-to-activate system would prevent children from accessing boiling water without supervision.</div>
            <div>In the case of a water supply shortage, the Intrix One Tap would not overheat or cause dry burn.</div>
            `,
        },
        {
            question: "INTRIX One Tap purification system only consists of 1 filter cartridge. Is that sufficient to provide safe and purified water?",
            answer: `
            <div class="mb-4">INTRIX filters are designed to be 95% recyclable with 80% wastage reduction and are thoughtfully designed to reduce waste yet purify thoroughly.</div>
            <div class="mb-4">The 3-stage nano filter cartridge consists of sediment filters, activated carbon block filters and nanofiltration membranes so microbes as small as 10 nanometer and 99.99% of bacteria, algae and viruses are effectively removed while preserving natural minerals in water.</div>
            <div class="mb-4">Besides that, the filter cartridge is certified with international water safety standard NSF 42 & 53, and Halal certified.</div>
            <div>Built to last longer, the filter only requires changing once a year or as indicated on the filter alarm system.</div>
            `,
        },
        {
            question: "How often do I need to replace the filter for the Intrix One Tap? How much is the filter?",
            answer: `
            <div>The filter needs to be changed once a year. For FlexiOwn and outright customers, you may get the filter changed at only RM580 per year.</div>
            `,
        },
        {
            question: "Does Intrix One Tap need routine maintenance/service?",
            answer: `
            <div>No, INTRIX One Tap only needs one filter cartridge replacement yearly without any other maintenance.</div>
            `,
        },
        {
            question: "Does the product come with a warranty?",
            answer: `
            <div>Yes, each unit comes with a standard three (3) year defect warranty except for the filters. The filter lifespan highly depends on the quality of incoming water. The warranty also includes on-site comprehensive warranty (parts and labours covered) at no additional cost.</div>
            `,
        },
        {
            question: "What are the energy savings of INTRIX One Tap compared to an electric kettle?",
            answer: `
            <div class="mb-4">An average electric kettle for a family of 4 will consume approximately between 1.8 to 2 kWh per day to boil water.</div>
            <div>In contrast, INTRIX One Tap consumes between 0.6 to 0.8 kWh per day on Eco mode which translates up to 80% of energy saving compared to an electric kettle.</div>
            `,
        },
        {
            question: "What does that mean in terms of impact on the electricity bill?",
            answer: `
            <div class="mb-4">In terms of electricity bill, the electric kettle consumption based on the above assumption translates between RM 0.64 to RM 0.98 per day (depending on tariff category).</div>
            <div>In contrast, INTRIX One Tap provides you with a similar supply of hot water per day which costs between RM 0.23 to RM 0.39. On average, you can save up to 70% of your monthly electricity costs for hot water.</div>
            `,
        },
        {
            question: "Is the installation of One Tap provided by INTRIX? Any charges on delivery?",
            answer: `
            <div>Yes, delivery and installation is provided by INTRIX at F.O.C!</div>
            `,
        },
        {
            question: "What are the requirements necessary for installation of INTRIX One Tap?",
            answer: `
            <div class="mb-4">All that is needed is a 13A plug point below your counter, and space to place the unit. In case an electrical plug point is not available beneath the kitchen sink where the One Tap's boiler is installed, our installation team will pull a wire (from the nearest plug-point, within a 3-meter distance) and install a new plug-point there.</div>
            <div>Besides that, our team can install the tap onto almost any surface including quartz stone, marble, granite, tile, cement, stainless steel, and wood.</div>
            `,
        },
        {
            question: "How long does the installation take?",
            answer: `
            <div class="mb-4">The installation process usually takes within 1 to 2 hours, including hole-drilling on the countertop for One Tap's faucet installation and connection.</div>
            <div>Your kitchen will look more elegant, clean and spacious than before with no cleaning tasks required after the installation.</div>
            `,
        },
        {
            question: "Can I use my own tap?",
            answer: `
            <div class="mb-4">No, One Tap only works with the One Tap system, as it is designed specifically for hot water (up to 98°C).</div>
            <div class="mb-4">The One Tap is also certified by UK's Water Regulations Approval Scheme (WRAS) through stringent tests that comply with their water quality assurance, including checks for leaks, water contamination and waste minimisation.</div>
            <div>However, for personalisation customers can choose from two colour options according to preference and style - chrome or matte black.</div>
            `,
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full flex flex-col lg:flex-row justify-between mx-auto mt-8 py-0 md:py-4 gap-6 lg:gap-[15vw] container">
            <h2 className="text-[24px] sm:text-[30px] md:text-[40px] text-left font-bold md:mb-4 text-[#343637] leading-[1.2] sm:leading-10 lg:max-w-[200px]">Commonly Asked Questions</h2>
            <div className="space-y-2">
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
                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-[800px] pb-6" : "max-h-0"}`}>
                            <div className="text-[14px] md:text-[16px] text-[#3C3C43D9] text-left" dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordionProduct;
