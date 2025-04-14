"use client";
import * as THREE from "three";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import FAQAccordionFilter from "@/components/FAQAccordionFilter";
import ExperienceCentreForm from "@/components/ExperienceCentreForm";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faXTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import CheckoutReview from "@/components/products/checkout-review/checkout-review";
import AddToCart from "@/components/products/add-to-cart/add-to-cart";
import Cookies from "js-cookie";
import { addToCart } from "@/service/cart-api/CartService";

function Font() {
    const [ready, setReady] = useState(false);
    const [addCartReady, setAddCartReady] = useState(false);
    const [activeModel, setActiveModel] = useState("FONT");
    const [hoveredColour, setHoveredColour] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [activeColour, setActiveColour] = useState(1);
    const [value, setValue] = useState({
        series: "ONE TAP",
        model: "FONT",
        src: "/explore/font-transparent.png",
        paymentPlan: 3,
        price: 580,
        colour: 1,
        quantity: 1,
    });

    let allTabs = [
        {
            id: "1",
            name: "All-in-One Filter",
            href: "filter",
        },
        {
            id: "2",
            name: "INTRIX Font",
            href: "font",
        },
    ];
    const cardData = [
        {
            title: "Diameter 140mm",
            imageSrc: "/product/diameter.png",
        },
        {
            title: "Easy Installation",
            imageSrc: "/product/easy.png",
        },
        {
            title: "Stainless Steel",
            imageSrc: "/product/steel.png",
        },
        {
            title: "Stylish Fit For Hydration Station",
            imageSrc: "/product/hydration.png",
        },
    ];

    const colorOptions = [
        {
            id: 1,
            name: "Chrome",
            bgColor: "bg-chrome",
            modelSrc: "https://sketchfab.com/models/13ff5622b4f344159097234f0d797407/embed?autostart=1&camera=0&preload=1&transparent=1",
        },
    ];
    const tabsRef = useRef([]);
    const [activeTabIndex, setActiveTabIndex] = useState(1);

    useEffect(() => {
        if (activeTabIndex === null) return;

        const setTabPosition = () => {
            const currentTab = tabsRef.current[activeTabIndex];
        };

        setTabPosition();
    }, [activeTabIndex]);

    useEffect(() => {
        const toggleBtn = document.querySelector(".toggle_btn");
        const toggleSections = document.querySelectorAll(".toggle-section > div.hidden");

        const handleToggle = () => {
            toggleSections.forEach((section) => {
                section.classList.toggle("hidden");
            });
        };

        toggleBtn?.addEventListener("click", handleToggle);

        // Cleanup listener on unmount
        return () => {
            toggleBtn?.removeEventListener("click", handleToggle);
        };
    }, []);

    const iframeRef = useRef(null);
    const [iframeSrc, setIframeSrc] = useState(
        "https://sketchfab.com/models/13ff5622b4f344159097234f0d797407/embed?autostart=1&camera=0&preload=1&transparent=1"
    );

    useEffect(() => {
        const loadScript = () => {
            const script = document.createElement("script");
            script.src = "https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js";
            script.type = "text/javascript";
            script.onload = () => {
                console.log("Sketchfab script loaded");
            };
            document.body.appendChild(script);
        };

        loadScript();
    }, []);

    const buyNow = () => {
        setReady(true);
    };
    const addItemToCart = async () => {
        try {
            const cur_session_key = Cookies.get("session_key") ? Cookies.get("session_key") : undefined;

            const addObj = {
                product_code: value.model,
                color: value.colour,
                quantity: value.quantity,
                session_key: cur_session_key,
                payment_plan: value.paymentPlan,
            };

            const result = await addToCart(addObj);
            if (result) {
                Cookies.set("session_key", result.sesion_key);
                setAddCartReady(true);
            }
        } catch (error) {}
    };

    return (
        <>
            <div id="container2" className="!overflow-x-hidden mb-12 lg:mb-24 mt-14 lg:mt-12 lg:mt-[150px] w-full px-4 lg:px-0 relative">
                <div className="sticky_product_summary">
                    <div className="flex justify-between items-center cursor-pointer">
                        <h2
                            onClick={() => setIsOpen(!isOpen)}
                            className="toggle_btn text-sm uppercase font-[Mulish-Light] flex items-center gap-x-4 leading-[1.2]"
                        >
                            <span>
                                INTRIX ALL-IN-ONE <br /> REPLACEMENT FONT
                            </span>
                            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="transition-transform" />
                        </h2>
                        <button onClick={() => buyNow()} className="bg-[#F79932] text-white px-4 py-1.5 rounded text-sm">
                            Buy Now
                        </button>
                    </div>
                    {isOpen && (
                        <>
                            <div className="toggle-section">
                                <p className="text-[12px] text-white font-[Montserrat-Regular] py-4">
                                    The perfect accessory for your INTRIX One Tap, offering the flexibility to place your tap anywhere on your kitchen
                                    counter-beyond just the sink.
                                </p>
                                <div className="font-[Montserrat-Regular] py-4 border-t border-b border-[#FFF8ED60]">
                                    <p className="text-[#fff] text-[12px]">PRICE</p>
                                    <p className="text-[#fff] font-[Mulish-Regular] font-bold text-[24px] leading-[1.1]">RM 580.00</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="flex-row relative container mx-auto flex h-12 rounded-3xl bg-[#DDDFE0] px-2 backdrop-blur-sm mt-20 md:mt-6 w-full lg:w-fit gap-4 lg:mb-12">
                    {allTabs.map((tab, index) => {
                        const isActive = activeTabIndex === index;

                        return (
                            <Link
                                key={tab.id}
                                ref={(el) => (tabsRef.current[index] = el)}
                                className={`${
                                    isActive ? "text-[#fff] bg-[#F79932]" : " text-[#343637] bg-[#fff]"
                                } my-auto cursor-pointer select-none rounded-full px-4 text-center py-2 font-light text-[14px] outline-0 block w-1/2 whitespace-nowrap`}
                                onClick={() => setActiveTabIndex(index)}
                                href={`/product/${tab.href}`}
                            >
                                {tab.name}
                            </Link>
                        );
                    })}
                </div>
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-end relative overflow-hidden">
                    <div className="w-full lg:w-[250px] z-[3] px-4 bg-[#F6EFE2] min-h-[60px] lg:min-h-[500px] absolute lg:h-[550px] left-0 md:top-unset top-0">
                        <div className="product-desc hidden lg:block h-[550px] text-[#343637] w-full max-w-[250px] z-[3] px-4 bg-[#F6EFE2]">
                            <p className="product-name">Select Colour</p>
                            <div className="flex gap-x-3 my-4 relative">
                                {colorOptions.map((color) => (
                                    <div
                                        key={color.id}
                                        onMouseEnter={() => setHoveredColour(color.id)}
                                        onMouseLeave={() => setHoveredColour(null)}
                                        className={`relative cursor-pointer color_btn border-2 rounded-full ${
                                            activeColour === color.id ? "border-[#F79932]" : "border-transparent"
                                        }`}
                                    >
                                        {/* Color Circle */}
                                        <div className={`${color.bgColor} w-[35px] h-[35px] rounded-full`}></div>

                                        {/* Tooltip */}
                                        {hoveredColour === color.id && (
                                            <div className="absolute left-[20px] bottom-[-20px] mb-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap z-[2]">
                                                {color.name}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <p className="text-[#131212] text-[12px] mb-2 mt-12">MATERIALS</p>
                            <div className="flex flex-col w-fit space-y-2 ">
                                <div className="text-[14px] border-b border-[#777A7E] p-2 text-[#777A7E] text-[#131212]">Stainless Steel</div>
                            </div>
                        </div>
                    </div>
                    <iframe
                        ref={iframeRef}
                        src={iframeSrc}
                        id="api-frame"
                        allow="autoplay; fullscreen; "
                        allowFullScreen
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                        className="w-full lg:w-[80vw] min-[1500px]:w-full lg:absolute mx-auto left-0 h-[400px] lg:h-[550px]"
                    ></iframe>
                    <div className="block lg:hidden mt-[-50px] bg-[rgb(246,239,226)] p-4 my-4 w-full relative z-[2]">
                        <div className="flex gap-x-6">
                            <div className="flex flex-col gap-2 relative">
                                <div className={`cursor-pointer w-fit color_btn border-2 rounded-full`}>
                                    <div className="bg-chrome w-[35px] h-[35px] rounded-full"></div>
                                </div>

                                <div className="text-[10px] uppercase text-[#131212] mt-1 absolute left-0 bottom-[-20px] whitespace-nowrap">
                                    Chrome
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-desc text-[#343637] w-full lg:max-w-[400px] z-[3] lg:px-4 bg-[#F6EFE2] lg:mt-0 pt-4 lg:pt-0 lg:min-h-[500px]">
                        <div className="flex gap-x-2 items-end justify-between mb-4">
                            <div className="flex gap-x-2 sm:gap-x-4 items-start">
                                <p className="text-[#131212] text-[13px] lg:text-[15px] text-right w-fit lg:w-[120px] leading-[1] pt-2">INTRIX</p>
                                <p className="text-[#131212] text-[40px] lg:text-[54px] leading-[0.9]">FONT</p>
                            </div>
                            <div className="flex items-center gap-x-2 sm:gap-x-4">
                                <Link href="#">
                                    <FontAwesomeIcon icon={faSquareInstagram} />
                                </Link>
                                <Link href="#">
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </Link>
                                <Link href="#">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </Link>
                            </div>
                        </div>
                        <p className="py-4 border-t border-b border-[#2F241B] text-[12px] text-[#343637] font-[Montserrat-Regular]">
                            The perfect accessory for your INTRIX One Tap, offering the flexibility to place your tap anywhere on your kitchen
                            counter-beyond just the sink.
                        </p>
                        <div className="py-2 border-b border-[#2F241B]">
                            <p className="text-[#131212] text-[14px] lg:text-[16px]">PRICE</p>
                            <p className="text-[#131212] font-bold text-[24px] lg:text-[32px] leading-[1.1]">RM 580.00</p>
                        </div>
                        <div className="py-4 border-b border-[#131212]">
                            <div
                                onClick={() => addItemToCart()}
                                className="cursor-pointer relative w-full buy_now_btn text-center bg-[#F79932] text-[#fff] font-[Mulish-Light] transition py-3 rounded-md flex items-center justify-center gap-x-4 pl-6 pr-12"
                            >
                                <span>Add to Cart</span>
                                <Image className="absolute ml-[150px]" src={"/product/arrow-right-white.png"} alt="arrow" width={25} height={25} />
                            </div>
                            <div
                                onClick={() => buyNow()}
                                className="cursor-pointer relative w-full buy_now_btn text-center text-[#343637] font-[Mulish-Light] border-[#343637] border mt-2 transition py-3 rounded-md flex items-center justify-center gap-x-4 pl-6 pr-12"
                            >
                                <span>Buy Now</span>
                                <Image className="absolute ml-[150px]" src={"/product/arrow-right.png"} alt="arrow" width={25} height={25} />
                            </div>
                            {/* <Link
                                href={'https://wa.me/+60123671380'}
                                className="cursor-pointer relative w-full buy_now_btn text-center bg-[#F79932] text-[#fff] font-[Mulish-Light] transition py-3 rounded-md flex items-center justify-center gap-x-4 pl-6 pr-12"
                            >
                                <span>Chat With Us</span>
                                <Image className="absolute ml-[150px]" src={"/product/arrow-right-white.png"} alt="arrow" width={25} height={25} />
                            </Link> */}
                        </div>
                        <Link
                            href="/product/brochure/INTRIX_Font Flyer_2025.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-[#131212] py-4 px-4 flex items-center justify-between"
                        >
                            <span>Download Brochure</span>
                            <Image className="" src={"/product/arrow-right.png"} alt="arrow" width={25} height={25} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative flex items-center">
                <Image alt="product outline" className="w-full" src={"/product/hero_image.webp"} width={2300} height={1555} />
                {/* <Image alt="product outline" className="w-full md:hidden block" src={"/product/mobile_hero_image.png"} width={768} height={1000} />
                <div className="absolute container mx-auto text-[#343637] left-0 right-0 md:px-0 px-4 top-[16vw] md:top-[unset] md:hidden block">
                    <h4 className="text-[20px] md:text-[40px] font-[Mulish-Bold] leading-[1.2]">
                        Skip The Sink. <br />
                        Meet The INTRIX Font*
                    </h4>
                    <p className="text-[16px] md:text-[20px] leading-[1.2]">
                        Form and Function: <br className="md:hidden block" /> The Perfect Fusion
                    </p>
                </div> */}
            </div>
            <div className="mb-12 md:mb-24 container mx-auto grid lg:grid-cols-4 grid-cols-2 gap-4 sm:gap-6 px-4 md:px-0 mt-[40px] lg:mt-[-50px] xl:mt-[-60px] relative">
                {cardData.map((card, index) => (
                    <Card key={index} title={card.title} imageSrc={card.imageSrc} />
                ))}
            </div>
            {/* <div className="container mx-auto md:px-0 px-4 mt-12 md:mt-24">
                <h1 className="text-center md:text-left text-[#525456] text-[20px] md:text-[40px] mb-6 font-[Mulish-Black] leading-[1.1]">
                    The Possibilities Are Endless
                </h1>
                <p className="text-center md:text-left text-[#343637] text-[14px] md:text-[16px] font-[Montserrat-Regular] mb-6 max-w-[800px]">
                    The INTRIX Font can replace a traditional basin or sink in areas that calls for a compact and minimalist design without
                    compromising your hydration needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <Image alt="Kitchen Island" className="" src={"/product/kitchen_island.png"} width={1600} height={1000} />
                    <Image alt="Coffee Island" className="" src={"/product/coffee_station.png"} width={1600} height={1000} />
                    <Image alt="Pantry Area" className="" src={"/product/pantry_area.png"} width={1600} height={1000} />
                </div>
            </div> */}

            <div className="my-12 md:my-24 container mx-auto px-4 min-[1280px]:px-24">
                <ExploreOurTabs />
            </div>
            {/* <div className="my-12 md:my-24 px-4">
                <FAQAccordionFilter />
            </div> */}
            <ExperienceCentreForm />
            {ready && <CheckoutReview initialValue={value} ready={ready} setReady={setReady} />}
            {addCartReady && <AddToCart addCartReady={addCartReady} setAddCartReady={setAddCartReady} />}
        </>
    );
}
const Card = ({ title, imageSrc, description }) => {
    return (
        <div className="min-[425px]:p-6 p-4 bg-white rounded-[20px] flex items-center gap-4 text-black">
            <Image src={imageSrc} alt={title} className="block md:max-w-[60px] min-[425px]:max-w-[50px] max-w-[30px]" width={60} height={60} />
            <div>
                <h3 className="text-[12px] sm:text-[16px] xl:text-[20px] font-bold max-w-[150px] leading-[1.2]">{title}</h3>
            </div>
        </div>
    );
};

export default Font;
