"use client";
import dynamic from "next/dynamic";
import * as THREE from "three";
import Image from "next/image";
import Link from "next/link";
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
import React, { useEffect, useRef, useState } from "react";

import Marquee from "react-fast-marquee";
import SupportCards from "@/components/SupportCard";
import TapCanDoCarousel from "@/components/products/TapCanDoCarousel";
import CommandCentreSpecifications from "@/components/products/CommandCentreSpecifications";
import ArcticSpecifications from "@/components/products/ArcticSpecifications";
import ProductFeatures from "@/components/products/ProductFeatures";
import ExperienceCentreForm from "@/components/ExperienceCentreForm";
import ComparisonTable from "@/components/products/ComparisonTable";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram, faXTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";

import "../product.scss";
import CheckoutReview from "@/components/products/checkout-review/checkout-review";
import AddToCart from "@/components/products/add-to-cart/add-to-cart";
import { addToCart } from "@/service/cart-api/CartService";
import Cookies from "js-cookie";

// function Model({ filePath }) {
//   // const { scene } = useGLTF(filePath);
//   const { scene } = useFBX(filePath);
//   // scene.position.set(0, -3, 0); // Change the values to position the model as needed
//   // scene.rotation.set(0, 4, 0);
//   return <primitive object={scene} scale={[15, 15, 15]} />;
// }

function Product() {
    const [ready, setReady] = useState(false);
    const [addCartReady, setAddCartReady] = useState(false);
    const [activeModel, setActiveModel] = useState("ONE Tap 5-in-1");
    const [activeColour, setActiveColour] = useState(1);
    const [value, setValue] = useState({
        series: "ONE TAP",
        model: "5-IN-1",
        src: "/explore/tap-1.png",
        paymentPlan: 1,
        price: 7500,
        colour: 1,
        quantity: 1,
    });

    let allTabs = [
        {
            id: "1",
            name: "Overview",
            link: "/explore",
        },
        {
            id: "2",
            name: "INTRIX One Tap 5-in-1",
            link: "/product/intrix-one-tap-5-in-1",
        },
        {
            id: "3",
            name: "INTRIX One Tap 4-in-1",
            link: "/product/intrix-one-tap-4-in-1",
        },
        {
            id: "4",
            name: "INTRIX One Tap 2-in-1",
            link: "/product/intrix-one-tap-2-in-1",
        },
        {
            id: "5",
            name: "INTRIX One Tap Lite",
            link: "/product/intrix-one-tap-lite",
        },
    ];
    const cardData = [
        {
            title: "OUTRIGHT",
            imageSrc: "/product/cashless_payment.png",
            description: "Pay In Full: Make outright payment based on the model of choice",
        },
        {
            title: "FLEXIOWN PLAN",
            imageSrc: "/product/calendar.png",
            description: "Subscribe: Split your purchase into monthly payments across 24 months",
        },
        {
            title: "EASY PAYMENT PLAN",
            imageSrc: "/product/payment.png",
            description: "Own It With Ease: Pay monthly via selected banks",
        },
    ];
    const featureItems = [
        {
            icon: "guaranteed",
            text: "90-Day Tap Back Guaranteed*",
        },
        {
            icon: "delivery",
            text: "FREE Delivery",
        },
        {
            icon: "installation",
            text: "FREE Installation",
        },
        {
            icon: "warranty",
            text: "3 Years Warranty",
        },
        {
            icon: "wallet",
            text: "FlexiOwn Plan",
        },
    ];

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const tabsRef = useRef([]);
    const [activeTabIndex, setActiveTabIndex] = useState(1);

    useEffect(() => {
        if (activeTabIndex === null) return;

        const setTabPosition = () => {
            const currentTab = tabsRef.current[activeTabIndex];
        };

        setTabPosition();
    }, [activeTabIndex]);

    const iframeRef = useRef(null);
    const [iframeSrc, setIframeSrc] = useState(
        "https://sketchfab.com/models/a3e0c78608e14daca8aa435d2889c70b/embed?autostart=1&camera=0&preload=1&transparent=1"
    );

    const handleChangeModel = (newSrc, model) => {
        setIframeSrc(newSrc);
        setActiveModel(model);
    };

    const handleColorClick = (newSrc, colour) => {
        setIframeSrc(newSrc);
        setValue({ ...value, colour: colour });
        setActiveModel("ONE Tap 5-in-1");
        setActiveColour(colour);
    };

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

    const loadModel = () => {
        const uid = "731235038f6945d19f10d9331b78ea09";

        const iframe = iframeRef.current;
        const sketchfabClient = new window.Sketchfab(iframe);

        sketchfabClient.init(uid, {
            success: function onSuccess(api) {
                console.log("Success");
                setClient(api);
                api.load();
                api.start();

                api.addEventListener("viewerready", function () {
                    console.log("Viewer is ready");
                    setIsLoaded(true);
                });
            },
            error: function onError(error) {
                console.error("Sketchfab API error", error);
            },
        });
    };

    const buyNow = () => {
        setReady(true);
    };
    const addItemToCart = async () => {
        const sessionID = Cookies.get("sessionID");

        const obj1 = { product_code: "5-IN-1", color: "CHROME", session_id: sessionID, payment_plan: 1 };

        try {
            const result = await addToCart(obj1);
            Cookies.set("sessionID", result.sesion_key);
            setAddCartReady(true);
        } catch (error) {}
    };

    const models = [
        { name: "ONE Tap 5-in-1", url: "https://sketchfab.com/models/a3e0c78608e14daca8aa435d2889c70b/embed?autostart=1&camera=0&preload=1&transparent=1" },
        { name: "Arctic Command Centre", url: "https://sketchfab.com/models/0f4a28c680c144478497315bd92cf851/embed?autostart=1&camera=0&preload=1&transparent=1" },
        { name: "Command Centre", url: "https://sketchfab.com/models/1f05b8b07ed04193889cd6b81c96d71e/embed?autostart=1&camera=0&preload=1&transparent=1" },
        { name: "All-in-One Filter", url: "https://sketchfab.com/models/c811d7a4cc704bb0a4bb15dc590ac958/embed?autostart=1&camera=0&preload=1&transparent=1" }
    ];

    const handleSelectChange = (e) => {
        const selectedModel = models.find(model => model.name === e.target.value);
        if (selectedModel) {
            handleChangeModel(selectedModel.url, selectedModel.name);
        }
    };

    return (
        <>
            <div id="container2" className="!overflow-x-hidden mb-12 min-[1441px]:mb-24 pt-[50px]">
                <div className="flex-row overflow-auto relative mx-auto flex h-12 rounded-3xl bg-[#DDDFE0] px-2 backdrop-blur-sm w-full md:w-fit gap-4 my-6 md:mt-0">
                    {allTabs.map((tab, index) => {
                        const isActive = activeTabIndex === index;

                        return (
                            <Link
                                key={tab.id}
                                ref={(el) => (tabsRef.current[index] = el)}
                                className={`${
                                    isActive ? "text-[#fff] bg-[#F79932]" : " text-[#95999C]"
                                } my-auto cursor-pointer select-none rounded-full px-4 text-center py-2 font-light text-[14px] outline-0 block w-fit whitespace-nowrap`}
                                onClick={() => setActiveTabIndex(index)}
                                href={`${tab.link}`}
                            >
                                {tab.name}
                            </Link>
                        );
                    })}
                </div>
                <div className="lg:container mx-auto flex flex-wrap items-start justify-between relative">
                    <div className="product-desc hidden md:block h-[550px] text-[#343637] w-full max-w-[150px] z-[3] px-4 bg-[#F6EFE2]">
                        <p className="product-name">Select Colour</p>
                        <div className="flex gap-x-3 my-4 overflow-auto">
                            <div
                                onClick={() =>
                                    handleColorClick(
                                        "https://sketchfab.com/models/a3e0c78608e14daca8aa435d2889c70b/embed?autostart=1&camera=0&preload=1&transparent=1",
                                        1
                                    )
                                }
                                className={`cursor-pointer color_btn border-2 rounded-full ${
                                    activeColour === 1 ? "border-[#F79932]" : "border-transparent"
                                }`}
                            >
                                <div className="bg-chrome w-[35px] h-[35px] rounded-full"></div>
                            </div>
                            <div
                                onClick={() =>
                                    handleColorClick(
                                        "https://sketchfab.com/models/35fb4df5853e4eb0898884b76d448f21/embed?autostart=1&camera=0&preload=1&transparent=1",
                                        2
                                    )
                                }
                                className={`cursor-pointer color_btn border-2 rounded-full ${
                                    activeColour === 2 ? "border-[#F79932]" : "border-transparent"
                                }`}
                            >
                                <div className="bg-black w-[35px] h-[35px] rounded-full"></div>
                            </div>
                        </div>
                        <p className="text-[#131212] text-[14px] mb-4">FEATURES</p>
                        <p className="text-[#131212] text-[12px] mb-2">PURIFIED</p>
                        <div className="flex flex-col w-fit space-y-2 ">
                            <Link href="#" className="text-[14px] border-b border-[#777A7E] p-2 text-[#777A7E] text-[#131212]">
                                Chilled Water <br /> As Low As 3°C
                            </Link>
                            <Link href="#" className="text-[14px] border-b border-[#777A7E] p-2 text-[#777A7E] text-[#131212]">
                                Hot Boiling <br /> Water up to 98°C
                            </Link>
                            <Link href="#" className="text-[14px] border-b border-[#777A7E] p-2 text-[#777A7E] text-[#131212]">
                                Ambient Water
                            </Link>
                        </div>
                        <p className="text-[#131212] text-[12px] mt-6 min-[1441px]:mt-12 mb-2">NON PURIFIED</p>
                        <div className="flex flex-col w-fit space-y-2">
                            <Link href="#" className="text-[14px] border-b border-[#777A7E] p-2 text-[#777A7E] text-[#131212]">
                                Ambient Water Supply
                            </Link>
                            <Link href="#" className="text-[14px] border-b border-[#777A7E] p-2 text-[#777A7E] text-[#131212]">
                                Hot Tap Water Supply
                            </Link>
                        </div>
                    </div>
                    <div className="block md:hidden px-4 pb-4 z-[4] w-full bg-[rgb(246,239,226)]">
                        <select 
                            className="px-2 py-2 text-[#343637] bg-[rgb(246,239,226)] outline-none cursor-pointer"
                            value={activeModel}
                            onChange={handleSelectChange}
                        >
                            {models.map((model, index) => (
                                <option key={index} value={model.name}>
                                    {model.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <iframe
                        ref={iframeRef}
                        src={iframeSrc}
                        id="api-frame"
                        allow="autoplay; fullscreen; "
                        allowFullScreen
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                        className="w-full md:absolute mx-auto left-0 right-0 h-[500px] mt-[-50px] md:mt-0"
                    ></iframe>

                    <div className="product-desc pt-4 md:pt-0 text-[#343637] w-full md:max-w-[400px] z-[3] px-4 bg-[#F6EFE2] md:pb-12 mt-[-50px] md:mt-0">
                        <div className="flex gap-x-2 items-end justify-between mb-4">
                            <div className="flex gap-x-4 items-center">
                                <p className="text-[#131212] text-[14px] min-[1441px]:text-[15px] text-right w-[70px] min-[1441px]:w-[80px]">
                                    INTRIX ONE TAP
                                </p>
                                <p className="text-[#131212] text-[45px] min-[1441px]:text-[54px] leading-[0.9]">5-IN-1</p>
                            </div>
                            <div className="flex items-center gap-x-4">
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
                            The ultimate tap - perfect for hot, ambient & chilled purified water and hot & ambient non-purified water. Our Titanium
                            Inner Core is anti-corrosion and anti-limescale, while our EcoSmart Technology saves energy. Safety child lock and
                            heatproof features in place, all wrapped up in a sleek, timeless design.
                        </p>
                        <div className="py-2 border-b border-[#2F241B]">
                            <p className="text-[#131212]">OUTRIGHT</p>
                            <p className="text-[#131212] font-bold text-[28px] min-[1441px]:text-[32px] leading-[1.1]">RM 7,500.00</p>
                        </div>
                        <div className="flex justify-between items-center cursor-pointer py-2" onClick={toggleExpand}>
                            <h2 className="text-[14px] min-[1441px]:text-[16px] font-bold">PAYMENT OPTIONS</h2>
                            <span className={`transform transition-transform duration-300 ${isExpanded ? "rotate-0" : "rotate-[-90deg]"}`}>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-[1000px]" : "max-h-0"}`}>
                            <p className="text-[12px] font-bold underline text-[#131212] mb-1">FLEXIOWN PLAN</p>
                            <div className="grid grid-cols-2 gap-4 mb-1 pb-1">
                                {/* <div className="grid grid-cols-2 gap-4 border-b border-[#131212] mb-1 pb-1"> */}
                                <div className="border-r border-[#131212] text-[#131212]" onClick={() => setValue({ ...value, paymentPlan: 1 })}>
                                    <p className="text-[18px] leading-[1.1]">RM 138.00/Month*</p>
                                    <p className="text-[10px]">UPFRONT PAYMENT</p>
                                </div>
                                <div className="text-[#131212]" onClick={() => setValue({ ...value, paymentPlan: 2 })}>
                                    <p className="text-[18px] leading-[1.1]">RM 138.00/Month*</p>
                                    <p className="text-[10px]">MONTHLY PAYMENT</p>
                                </div>
                            </div>
                            {/* <p className="text-[12px] font-bold underline text-[#131212] mb-1 pb-1">EASY PAYMENT PLAN (EPP)</p>
                      <div className="grid grid-cols-2 gap-4 pb-1">
                        <div className="border-r border-[#131212] text-[#131212]">
                          <p className="text-[18px] leading-[1.1]">RM 200.00</p>
                          <p className="text-[10px]">PROCESSING FEE (ONE TIME)</p>
                        </div>
                        <div className="text-[#131212]">
                          <p className="text-[18px] leading-[1.1]">RM 138.00/Month*</p>
                          <p className="text-[10px]">MONTHLY PAYMENT</p>
                        </div>
                      </div> */}
                        </div>
                        <div className="py-4 border-b border-t border-[#131212]">
                            <div
                                // onClick={() => addItemToCart()}
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
                        </div>
                        <Link href="#" className="border-b border-[#131212] py-4 px-4 flex items-center justify-between">
                            <span>Download Brochure</span>
                            <Image className="" src={"/product/arrow-right.png"} alt="arrow" width={25} height={25} />
                        </Link>
                        <Link href="#specifications" className="border-b border-[#131212] py-4 px-4 flex items-center justify-between">
                            <span>Product Specification</span>
                            <Image className="" src={"/product/arrow-right.png"} alt="arrow" width={25} height={25} />
                        </Link>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 w-fit z-[9] mx-auto hidden md:flex items-center justify-center">
                        <div
                            onClick={() =>
                                handleChangeModel(
                                    "https://sketchfab.com/models/a3e0c78608e14daca8aa435d2889c70b/embed?autostart=1&camera=0&preload=1&transparent=1",
                                    "ONE Tap 5-in-1"
                                )
                            }
                            className={`cursor-pointer px-5 py-1 border-b-2 ${
                                activeModel === "ONE Tap 5-in-1" ? "border-[#343637] text-[#343637]" : "text-[#777A7E] border-transparent"
                            }`}
                        >
                            ONE Tap 5-in-1
                        </div>
                        <div
                            onClick={() =>
                                handleChangeModel(
                                    "https://sketchfab.com/models/0f4a28c680c144478497315bd92cf851/embed?autostart=1&camera=0&preload=1&transparent=1",
                                    "Arctic Command Centre"
                                )
                            }
                            className={`cursor-pointer px-5 py-1 border-b-2 ${
                                activeModel === "Arctic Command Centre" ? "border-[#343637] text-[#343637]" : "text-[#777A7E] border-transparent"
                            }`}
                        >
                            Arctic Command Centre
                        </div>
                        <div
                            onClick={() =>
                                handleChangeModel(
                                    "https://sketchfab.com/models/1f05b8b07ed04193889cd6b81c96d71e/embed?autostart=1&camera=0&preload=1&transparent=1",
                                    "Command Centre"
                                )
                            }
                            className={`cursor-pointer px-5 py-1 border-b-2 ${
                                activeModel === "Command Centre" ? "border-[#343637] text-[#343637]" : "text-[#777A7E] border-transparent"
                            }`}
                        >
                            Command Centre
                        </div>
                        <div
                            onClick={() =>
                                handleChangeModel(
                                    "https://sketchfab.com/models/c811d7a4cc704bb0a4bb15dc590ac958/embed?autostart=1&camera=0&preload=1&transparent=1",
                                    "All-in-One Filter"
                                )
                            }
                            className={`cursor-pointer px-5 py-1 border-b-2 ${
                                activeModel === "All-in-One Filter" ? "border-[#343637] text-[#343637]" : "text-[#777A7E] border-transparent"
                            }`}
                        >
                            All-in-One Filter
                        </div>
                    </div>
                </div>
            </div>
            <Marquee autoFill={true}>
                {featureItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 px-12 whitespace-nowrap">
                        <Image
                            src={`/product/${item.icon}.png`}
                            className="w-[35px] object-cover block"
                            alt={`icon ${index + 1}`}
                            width={40}
                            height={40}
                        />
                        <span className="font-bold text-[18px] text-[#BCA77B]">{item.text}</span>
                    </div>
                ))}
            </Marquee>
            <div className="!overflow-hidden mt-12 min-[1441px]:mt-24">
                <div className="container mx-auto">
                    <h1 className="text-[#525456] md:text-[30px] mb-6 font-[Mulish-Black] text-center">What&apos;s On Tap?</h1>
                </div>
                <div className="px-4 md:px-8">
                    <TapCanDoCarousel />
                </div>
                <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 px-4 pt-12 md:pt-16 border-t border-[#000000]">
                    <div className="flex items-center gap-4">
                        <Image alt="Confidence" className="max-w-[80px] px-2" src={"/product/confi.png"} width={278} height={325} />
                        <div className="text-[#343637]">
                            <h4 className="font-[Mulish-Bold] text-[16px] md:text-[20px]">Confidence In Every Drop</h4>
                            <p className="text-[14px] md:text-[16px] leading-[1.2]">
                                Experience the luxury of instant access to purified water, providing you peace of mind and allowing you to focus on
                                what truly matters with every sip.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image alt="Confidence" className="max-w-[80px] px-2" src={"/product/elevate.png"} width={278} height={325} />
                        <div className="text-[#343637]">
                            <h4 className="font-[Mulish-Bold] text-[16px] md:text-[20px]">Elevate Your Space</h4>
                            <p className="text-[14px] md:text-[16px] leading-[1.2]">
                                Enjoy a sleek, sophisticated design that seamlessly integrates into your modern kitchen. Effortlessly easy to use and
                                safe for all.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image alt="Confidence" className="max-w-[80px] px-4" src={"/product/elegance.png"} width={278} height={325} />
                        <div className="text-[#343637]">
                            <h4 className="font-[Mulish-Bold] text-[16px] md:text-[20px]">Elegance Meets Endurance</h4>
                            <p className="text-[14px] md:text-[16px] leading-[1.2]">
                                Embrace our EcoSmart technology designed to reduce energy usage and promote a greener future. Enjoy a cost-efficient
                                solution that&apos;s as low-maintenance as it is environmentally conscious.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image alt="Confidence" className="max-w-[80px] px-2" src={"/product/purified.png"} width={278} height={325} />
                        <div className="text-[#343637]">
                            <h4 className="font-[Mulish-Bold] text-[16px] md:text-[20px]">Purified Water For All</h4>
                            <p className="text-[14px] md:text-[16px] leading-[1.2]">
                                The advanced filtration technology reduces contaminants, providing not only safer drinking water but also water with
                                fewer impurities for an all-around healthier choice.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-16 relative border-t border-b border-[#000000] px-4" id="specifications">
                    <CommandCentreSpecifications />
                </div>
                <div className="container mx-auto mb-12 min-[1441px]:mb-16 relative border-b border-[#000000] px-4">
                    <ArcticSpecifications />
                </div>
                <div className="my-6 container mx-auto px-4">
                    <h4 className="text-[#343637] text-[24px] min-[1441px]:text-[30px] font-bold mb-6 ">Payment Method</h4>
                    <SupportCards cards={cardData} />
                </div>
                <div className="my-12 min-[1441px]:my-24">
                    <ProductFeatures />
                </div>
                <div className="my-24 min-[1441px]:my-24 pr-4">
                    <ComparisonTable />
                </div>
                <div className="mt-24 min-[1441px]:mt-24 mb-12 px-4 min-[1280px]:px-24">
                    <ExploreOurTabs />
                </div>
                <ExperienceCentreForm />
            </div>
            {ready && <CheckoutReview initialValue={value} ready={ready} setReady={setReady} />}
            {addCartReady && <AddToCart initialValue={value} addCartReady={addCartReady} setAddCartReady={setAddCartReady} />}
        </>
    );
}

export default Product;
