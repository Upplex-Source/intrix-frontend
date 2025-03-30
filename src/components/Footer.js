"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const footerArr = [
    {
        title: "Consumer",
        children: [
            { label: "Products", url: "/explore" },
            { label: "Book An Appointment", url: "/find-a-store#exp_form" },
            { label: "FlexiOwnPlan", url: "/payment-plan?tab=0" },
            // { label: "Easy Payment Plan", url: "" },
            { label: "Returns & Refunds", url: "/support?tab=2" },
            // { label: "Track My Order", url: "" },
            // { label: "Order History", url: "" },
        ],
    },
    {
        title: "Discover",
        children: [
            { label: "Our Story", url: "/discover" },
            { label: "Our Values", url: "/discover" },
            { label: "Mission & Vision", url: "/discover" },
            { label: "Where We Are", url: "/discover" },
            // { label: "Our Partners", url: "" },
        ],
    },
    // {
    //     title: "Insight",
    //     children: [
    //         { label: "Blogs", url: "" },
    //         { label: "News", url: "" },
    //         { label: "Interior Partners", url: "" },
    //     ],
    // },
    {
        title: "Support",
        children: [
            { label: "Contact Us", url: "https://wa.me/+60123671380" },
            { label: "Installation", url: "/support?tab=1" },
            { label: "Product Care", url: "/support" },
            // { label: "Resources", url: "" },
            { label: "Warranty", url: "/support?tab=3" },
            { label: "Find A Store", url: "/find-a-store" },
            { label: "Terms & Conditions", url: "/terms-and-conditions" },
            { label: "Privacy Policy", url: "/privacy-policy" },
        ],
    },
    {
        title: "Sustainability",
        children: [
            // { label: "Initiatives", url: "" },
            // { label: "Research & Study", url: "" },
            { label: "EcoSmart Tech", url: "/sustainability" },
        ],
    },
    {
        title: "Community",
        children: [
            { label: "LinkedIn", url: "https://www.linkedin.com/company/intrixgroup/" },
            { label: "Instagram", url: "https://www.instagram.com/intrixgroup/" },
            { label: "Facebook", url: "https://www.facebook.com/IntrixMalaysia" },
            { label: "Youtube", url: "https://www.youtube.com/@intrixgroup" },
            { label: "TikTok", url: "https://www.tiktok.com/@intrixonetap" },
        ],
    },
    {
        title: "Stay Updated",
        children: [{ label: "Get the latest product news, special offers and promotions from us!", url: "" }],
    },
];

const Footer = () => {
    const [email, setEmail] = useState("");
    const [year, setYear] = useState(new Date().getFullYear());
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle email submission (e.g., send to an API or alert the user)
        alert(`Submitted email: ${email}`);
    };

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <div className="pt-6 sm:pt-12 mt-6 sm:mt-12 border-t border-[rgba(0,0,0,0.3)]" id="footer">
            <div className="container mx-auto grid grid-cols-2 xs:grid-cols-4 lg:flex lg:flex-row gap-4 xs:gap-8 md:gap-6 justify-between pb-12 px-4 ">
                {footerArr.map((item, index) => (
                    <div
                        className={`${
                            item.title == "Stay Updated" ? "col-span-2 lg:col-span-1" : ""
                        } min-[1280px]:min-w-[140px] min-[1550px]:min-w-[170px]`}
                        key={index}
                    >
                        <div className="text-[#343637] text-[16px] md:text-[18px] font-[Mulish-Bold] mb-2" key={index}>
                            {item.title}
                        </div>
                        {item.children?.map((childItem, index) => {
                            const openInNewTab = ["LinkedIn", "Instagram", "Facebook", "Youtube", "TikTok"].includes(childItem.label);

                            return (
                                <Link 
                                href={childItem.url || "#"} 
                                className="text-[#343637] text-[12px] md:text-[14px] block mb-2" 
                                key={index}
                                target={openInNewTab ? "_blank" : "_self"}
                                rel={openInNewTab ? "noopener noreferrer" : undefined}
                                >
                                {childItem.label}
                                </Link>
                            );
                        })}
                        {item.title === "Stay Updated" && (
                            <>
                                <form onSubmit={handleSubmit} className="mt-2 flex flex-col mb-6">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Type email here"
                                        className="w-full px-3 py-2 border border-[#95999C] text-[14px] text-[#343637] bg-transparent outline-0 max-w-[300px]"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="w-full mt-4 px-3 py-3 bg-[#F79932] text-[#fff] text-[16px] hover:bg-[#F79932] hover:text-[#fff] transition max-w-[150px]"
                                    >
                                        Submit
                                    </button>
                                </form>
                                <p className="font-[Mulish-Bold] text-[#343637] text-[16px] mb-2">Connect With Us.</p>
                                <p className="flex items-center gap-x-2 text-[#343637] mb-2">
                                    <Image src={"/home/icon/phone.png"} alt="phone icon" width={20} height={20} />
                                    <Link href={"tel:+1700816608"} className="text-[14px] hover:underline">
                                        1700 81 6608
                                    </Link>
                                </p>
                                <p className="flex items-center gap-x-2 text-[#343637]">
                                    <Image src={"/home/icon/sms.png"} alt="phone icon" width={20} height={20} />
                                    <Link href={"mailto:intrix.ecommerce@intrixgroup.com"} className="text-[14px] hover:underline">
                                    intrix.ecommerce@intrixgroup.com
                                    </Link>
                                </p>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className="border-t border-[#0000004D] py-6">
                <p className="container mx-auto text-[#343637] text-[12px] px-4 md:px-0 text-center md:text-left">
                    Copyright © {year} INTRIX LIFESTYLE SDN BHD (1046031-D) All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
