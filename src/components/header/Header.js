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
            <div className="w-full flex justify-end items-center border-[rgba(0,0,0,0.2)] border-b [@media(max-height:800px)]:py-1 py-3">
                <div className="w-3/4 flex items-center justify-end gap-x-6 lg:gap-x-8 md:pr-12">
                    <span>Make An Appointment</span>
                    <Link href="/support">Support</Link>
                    <span>Find a Store</span>
                    {/* <span>Events</span> */}
                    <span>FAQ</span>
                    {/* <span>For Business</span> */}
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
            <div className="flex items-center px-12">
                    {/* <Link className="logo" onClick={() => router.push("/")}> */}
                    <Link className="logo mr-12" href={'/'}>
                        <Image alt="logo" className="w-[150px] min-[1600px]:w-[200px]" width={300} height={80} src={'/logo.png'} />
                    </Link>
                    <div className="group">
                        <Link href="/explore" className="group-hover:text-white transition group-hover:bg-[#292929] [@media(max-height:800px)]:py-4 py-6 px-6">Explore Our Range</Link>
                        <div className="absolute left-0 mt-[20px] hidden w-[100vw] bg-[#292929] text-white group-hover:block">
                            <div className="grid grid-cols-5 container mx-auto">
                                <div className="p-8">
                                    <h4 className="font-bold mb-2 text-[16px] ">Our Products</h4>
                                    <ul className="space-y-2 text-[12px]">
                                    <li><Link href="/explore" className="hover:underline">Overview</Link></li>
                                    <li><Link href="/product" className="hover:underline">INTRIX One Tap 5-in-1</Link></li>
                                    <li><Link href="/products/4-in-1" className="hover:underline">INTRIX One Tap 4-in-1</Link></li>
                                    <li><Link href="/products/2-in-1" className="hover:underline">INTRIX One Tap 2-in-1</Link></li>
                                    <li><Link href="/products/lite" className="hover:underline">INTRIX One Tap Lite</Link></li>
                                    </ul>
                                </div>
                                <div className="p-8">
                                    <h4 className="font-bold mb-2 text-[16px] ">Accessories</h4>
                                    <ul className="space-y-2 text-[12px]">
                                    <li><Link href="/accessories/filter" className="hover:underline">INTRIX All-in-One Filter</Link></li>
                                    <li><Link href="/accessories/font" className="hover:underline">INTRIX Font</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="group">
                        
                        <div className="absolute left-0 mt-[20px] hidden w-[100vw] bg-[#292929] text-white group-hover:block">
                            <div className="grid grid-cols-5 container mx-auto p-8">
                                <Link href="#" className="font-bold text-[16px] hover:underline">FlexiOwn Plan</Link>
                                <Link href="#" className="font-bold text-[16px] hover:underline">Easy Payment Plan</Link>
                            </div>
                        </div>
                    </div> */}
                    <Link href="#" className="hover:text-white transition hover:bg-[#292929] [@media(max-height:800px)]:py-4 py-6 px-6">Payment Plan</Link>
                    {/* <Link href='#'>Insights</Link> */}
                    <Link href="/sustainability" className="[@media(max-height:800px)]:py-4 py-6 px-6 transition hover:bg-[#292929] hover:text-white">Sustainability</Link>
                    <Link href="#" className="[@media(max-height:800px)]:py-4 py-6 px-6 transition hover:bg-[#292929] hover:text-white">Discover INTRIX</Link>
            </div>
        </div>
    );
}

export default Header;
