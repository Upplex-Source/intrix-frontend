import insights1 from "../../../public/home/Rectangle 10.png";
import insights2 from "../../../public/home/Rectangle 10-1.png";
import insights3 from "../../../public/home/image.png";

function useHomepage() {
    const insightArr = [
        {
            title: "Insights By INTRIX",
            image: insights1,
            subTitle: "Water and the Sustainable Development Goals",
            subDesc: "Sustainable Development Goal (SDG) 6 is to 'Ensure availability and sustainable management of water...",
        },
        {
            title: "Recent Events",
            image: insights2,
            subTitle: "IWA World Water Congress & Exhibition 2024",
            subDesc: "the 14th edition of ASIAWATER Expo & Forum, the region's leading water & wastewater platform for developing ...",
        },
        {
            title: "INTRIX In The Spotlight",
            image: insights3,
            subTitle: "INTRIX set to expand overseas, presence to Middle East, Australia, Hong Kong and Singapore",
            subDesc: "Home-grown hydro and thermal technology company Intrix Group expects to begin expanding to several countries ...",
        },
    ];

    const faqArr = [
        {
            title: "What is INTRIX One Tap?",
            ans: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ",
        },
        {
            title: "Can I drink water directly from INTRIX One Tap?",
            ans: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ",
        },
        {
            title: "What's the difference between 2 in 1 and 4 and 1 tap?",
            ans: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ",
        },
        {
            title: "Is the hot water stored in INTRIX One Tap kept boiling?",
            ans: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ",
        },
        {
            title: "Why is the temperature limited to 98'c?",
            ans: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ",
        },
        {
            title: "What safety features does INTRIX One Tap offer?",
            ans: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ",
        },
        {
            title: "How often do I need to replace the filter to the INTRIX One Tap?",
            ans: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. ",
        },
    ];

    const footerArr = [
        {
            title: "Consumer",
            children: [
                { label: "Products", url: "" },
                { label: "Book An Appointment", url: "" },
                { label: "FlexiOwnPlan", url: "" },
                { label: "Returns & Refunds", url: "" },
                { label: "Delivery", url: "" },
                { label: "Track My Order", url: "" },
                { label: "Order History", url: "" },
            ],
        },
        {
            title: "Discover INTRIX",
            children: [
                { label: "Our Story", url: "" },
                { label: "Our Values", url: "" },
                { label: "Mission & Vision", url: "" },
                { label: "Where We Are", url: "" },
                { label: "Companies We've Tapped", url: "" },
            ],
        },
        {
            title: "For Business",
            children: [
                { label: "Case Studies", url: "" },
                { label: "Products", url: "" },
                { label: "Clientele", url: "" },
                { label: "Become a Partner", url: "" },
            ],
        },
        {
            title: "Support",
            children: [
                { label: "Contact Us", url: "" },
                { label: "Installation", url: "" },
                { label: "Troubleshoot", url: "" },
                { label: "Resources", url: "" },
                { label: "Warranty", url: "" },
                { label: "Find A Store", url: "" },
                { label: "Terms & Conditions", url: "" },
                { label: "Privacy Policy", url: "" },
            ],
        },
        {
            title: "Sustainability",
            children: [
                { label: "Initiatives", url: "" },
                { label: "Research & Study", url: "" },
                { label: "EcoSmart Tech", url: "" },
            ],
        },
        {
            title: "Community",
            children: [
                { label: "LinkedIn", url: "" },
                { label: "Instagram", url: "" },
                { label: "Facebook", url: "" },
                { label: "Youtube", url: "" },
                { label: "TikTok", url: "" },
            ],
        },
        {
            title: "Stay Updated",
            children: [{ label: "Get the latest product news, special offers and promotions from us!", url: "" }],
        },
    ];
    return { insightArr, faqArr, footerArr };
}

export default useHomepage;
