"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
                        {item.children.map((childItem, index) => (
                            <Link href={childItem?.url || "#"} className="text-[#343637] text-[12px] md:text-[14px] block mb-2" key={index}>
                                {childItem.label}
                            </Link>
                        ))}
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
                                        className="w-full mt-4 px-3 py-3 bg-[#F79932] text-[#343637] text-[16px] hover:bg-[#F79932] hover:text-[#343637] transition max-w-[150px]"
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
                                    <Link href={"mailto:hello@intrixgroup.com"} className="text-[14px] hover:underline">
                                        hello@intrixgroup.com
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
