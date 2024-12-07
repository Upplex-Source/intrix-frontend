import React from "react";
import Image from "next/image";
import "./header.scss";

import { Search01Icon, MessageQuestionIcon, ShoppingBasket01Icon } from "hugeicons-react";

function Header() {
    return (
        <div id="header-container">
            <div className="header-1">
                <div className="header-1-wrapper">
                    <span>FREE Delivery & Installation</span>
                    <span className="vertical-line"></span>
                    <span>FlexiOwn Plan</span>
                    <span className="vertical-line"></span>
                    <span>3 Years Warranty</span>
                </div>
            </div>
            <div className="header-2">
                <div className="header-2-wrapper">
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
            <div className="header-3">
                <div className="header-3-wrapper">
                    <div className="logo">
                        <Image
                            alt=""
                            width={1920}
                            height={1080}
                            src="https://resources.wobbjobs.com/companies/2ee9473f-23ff-4bd3-acff-c9d281ac23d2/company_logo/original/289f98b8-3690-420e-8c6e-6fa240233ad1-1168x305_IntrixLogo.png"
                        />
                    </div>
                    <span>Explore Our Range</span>
                    <span>Insights</span>
                    <span>Sustainability</span>
                    <span>Discover INTRIX</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
