import insights1 from "../../../public/home/Rectangle 10.png";
import insights2 from "../../../public/home/Rectangle 10-1.png";
import insights3 from "../../../public/home/image.png";

import image from "../../../public/home/Satin Gold_01.png";

function useHomepage() {
    const reviewArr = [
        {
            type: 1,
            rating: 5,
            comment:
                "Finally, we are delighted to have completed the installation of the Intrix tap. My mom is extremely satisfied, as the tabletop is now immaculate and we can use it effortlessly. Mr. Taufiq meticulously planned and executed the installation with exceptional precision. Even the hole near the sink is perfectly accurate. His work is incredibly professional and clean. We couldn't be happier with the outstanding service he provided.",
            user: "Darshini Vasuthevan",
        },
        {
            type: 2,
            rating: 5,
            video: "",
            user: "Bkyen Lim",
        },
        {
            type: 3,
            rating: 5,
            comment:
                "I'm an interior designer, and I can't praise Intrix Group's instant hot water tap enough. It's a game-changer for any home. This tap doesn't just dispense water—it delivers purified hot water at a staggering 98°C instantly. It's perfect for everything from making tea to sterilizing baby bottles. The tap's design is sleek and stylish, complementing ...",
            user: "Ashikin Azidee",
            image: image,
        },
        {
            type: 1,
            rating: 5,
            comment:
                "I installed Intrix a year ago, and I've been very pleased with their prompt responses to any issues that arise. The technician, Taufiq, did an excellent job resolving my problem and explained everything clearly and courteously.",
            user: "Kim Yee Teh",
        },
        {
            type: 2,
            rating: 5,
            comment: "Simply hassleless, been using for about a year now. Good sales team, good installation team. No complaint.",
            user: "Kris Lee",
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
                { label: "Payment Plan", url: "" },
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
                { label: "Initiatives", url: "/sustainability" },
                { label: "Research & Study", url: "/sustainability" },
                { label: "EcoSmart Tech", url: "/sustainability" },
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
    return { reviewArr, insightArr, faqArr, footerArr };
}

export default useHomepage;
