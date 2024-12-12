"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";

function Page() {
    return (
        <>
        <div className="container text-center mx-auto md:mt-12">
            <h1 className="text-[#343637] md:text-[30px] mb-4 font-300 !font-[Mulish-Light]">Support</h1>
            <h2 className="font-bold text-[#343637] mb-4 md:text-[40px]">How Can We Help?</h2>
            <p className="font-[Montserrat-Regular] md:text-[20px] text-[#292929]">We&apos;re here to assist you with every step, from quick answers to detailed support. Explore our resources or connect with us for tailored assistance.</p>
            <Image src={'/icons/bag-happy.svg'} alt="bag" width={100} height={100} />
            <FAQAccordion />
        </div>
        </>
    );
}

export default Page;
