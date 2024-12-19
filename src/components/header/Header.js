"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import "./header.scss";

import { Search01Icon, MessageQuestionIcon, ShoppingBasket01Icon } from "hugeicons-react";

function Header() {
    const router = useRouter();

    return (
        <div className="bg-white z-[100] w-[100vw] text-[black] text-[14px] fixed top-0">
            <div className="bg-[#F79932] py-2 px-4 flex items-center gap-x-4 justify-end">
                <div className="flex items-center text-[#463E3D] text-[14px] font-bold w-full justify-center">
                    <span className="block w-[500px] text-center">FREE Delivery & Installation</span>
                    <span className="h-[20px] w-[2px] bg-[#463E3D] block"></span>
                    {/* <span>Payment Plan</span>
                    <span className="vertical-line"></span> */}
                    <span className="block w-[500px] text-center">3 Years Warranty</span>
                </div>
            </div>
            <div className="w-full flex justify-end items-center border-[rgba(0,0,0,0.2)] border-b py-3">
                <div className="w-3/4 flex items-center justify-end gap-x-6 lg:gap-x-8 md:pr-12">
                    <span>Make An Appointment</span>
                    <Link href="/support">Support</Link>
                    <span>Find a Store</span>
                    <span>Events</span>
                    <span>FAQ</span>
                    <span>For Business</span>
                    <div className="flex items-center gap-x-6">
                        <span>
                            <Search01Icon />
                        </span>
                        <span>
                            <MessageQuestionIcon />
                        </span>
                        <span>
                            <ShoppingBasket01Icon />
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-x-12 px-12">
                    {/* <Link className="logo" onClick={() => router.push("/")}> */}
                    <Link className="logo" href={'/'}>
                        <Image alt="" className="" width={300} height={80} src={'/logo.png'} />
                    </Link>
                    <Link href={'explore'}>Explore Our Range</Link>
                    <span>Insights</span>
                    <Link href="/sustainability">Sustainability</Link>
                    <span onClick={() => router.push("discover")}>Discover INTRIX</span>
            </div>
        </div>
    );
}

export default Header;
