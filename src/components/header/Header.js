"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import "./header.scss";

import { Search01Icon, MessageQuestionIcon, ShoppingBasket01Icon } from "hugeicons-react";

function Header() {
    const router = useRouter();

    return (
        <div id="header-container">
            <div className="top-header">
                <div className="top-wrapper">
                    <span>FREE Delivery & Installation</span>
                    <span className="vertical-line"></span>
                    <span>FlexiOwn Plan</span>
                    <span className="vertical-line"></span>
                    <span>3 Years Warranty</span>
                </div>
            </div>
            <div className="middle-header">
                <div className="middle-wrapper">
                    <span>Make An Appointment</span>
                    <span>Support</span>
                    <span>Find a Store</span>
                    <span>Events</span>
                    <span>FAQ</span>
                    <span>For Business</span>
                    <div className="icon-wrapper">
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
            <div className="bottom-header">
                <div className="bottom-wrapper">
                    <div className="logo" onClick={() => router.push("/")}>
                        <Image alt="" width={400} height={180} src="/logo.png" />
                    </div>
                    <span onClick={() => router.push("explore")}>Explore Our Range</span>
                    <span>Insights</span>
                    <span>Sustainability</span>
                    <span onClick={() => router.push("discover")}>Discover INTRIX</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
