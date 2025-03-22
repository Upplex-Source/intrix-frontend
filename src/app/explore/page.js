"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import "./explore.scss";
import Link from "next/link";
import Image from "next/image";
import ExperienceCentreForm from "@/components/ExperienceCentreForm";
import TitaniumInnerCore from "@/components/explore/TitaniumInnerCore";
import PrecisionCooling from "@/components/explore/PrecisionCooling";
import SafetyCarousel from "@/components/explore/SafetyCarousel";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";
import MakingWaves from "@/components/products/MakingWaves";
import ComparisonTable from "@/components/products/ComparisonTable";
import { SliderSection } from "@/components/explore/SliderSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function Explore() {
    const [activeSlide, setActiveSlide] = useState(0);

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

    const tabsRef = useRef([]);
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    useEffect(() => {
        if (activeTabIndex === null) return;

        const setTabPosition = () => {
            const currentTab = tabsRef.current[activeTabIndex];
        };

        setTabPosition();
    }, [activeTabIndex]);

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    const bullets = [
        {
            title: "Instant Purified Hot, <br class='hidden md:block'/>Ambient & Chilled Water",
            desc: "Enjoy purified hot, ambient and chilled water on demand – perfect for drinking, cooking, washing, and sterilising.",
        },
        {
            title: "Made for Multi-Use",
            desc: "From blanching and boiling to sterilising kitchenware, relish in the various purposes of the INTRIX One Tap to ease your life.",
        },
        {
            title: "Space Saving",
            desc: "Designed to seamlessly conceal the command centre under your sink and maximise your preparation area.",
        },
        {
            title: "Low Maintenance",
            desc: "With low maintenance just need one filter replacement yearly and long-lasting performance, enjoy reduced utility bills, servicing costs, and fewer replacements.",
        },
    ];

    const BulletSection = ({ bullets, alignment }) => (
        <div className={`${alignment} bullet-wrapper w-full md:w-1/2 md:px-4`}>
            {bullets.map((bullet, index) => (
                <div id="bullet-item" key={index} className="flex items-start gap-x-4 p-4">
                    {/* <div className="bullet-desc-wrapper text-[#808080] text-[16px]"> */}
                    <div className={`bullet-desc-wrapper ${activeSlide === index ? "text-[#000000]" : "text-[#808080]"} text-[16px]`}>
                        <div className="text-[20px] mb-1 font-bold leading-[1.2]" dangerouslySetInnerHTML={{ __html: bullet.title }}></div>
                        <div className="text-[16px] font-[Montserrat-Regular]" dangerouslySetInnerHTML={{ __html: bullet.desc }}></div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div id="explore_page">
            <div className="pt-[50px]">
                <div className="flex-row relative mx-auto flex h-12 rounded-3xl bg-[#DDDFE0] px-2 backdrop-blur-sm mt-6 w-full md:w-fit gap-4 mb-12">
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
                                href={tab.link}
                            >
                                {tab.name}
                            </Link>
                        );
                    })}
                </div>
                <div className="water_bg mb-12 lg:mb-24 relative">
                    <div className="ellipse_bg"></div>
                    <h1 data-aos="fade-down" data-aos-duration="1000" className="px-4 text-[#343637] font-bold text-[24px] md:text-[32px] xl:text-[40px] text-center leading-[1.2]">
                        INTRIX One Tap:
                        <br /> The Tap That Simplifies Your Life
                    </h1>
                    <div className="flex justify-center items-end min-h-[180px]">
                        <Image
                            src={"/product/tap-only.png"}
                            alt="4 in 1 tap"
                            width={150}
                            height={200}
                            data-aos="fade-up"
                            data-aos-delay="250"
                            data-aos-duration="1000"
                            className="w-[65px] min-[500px]:w-[80px] sm:w-[100px] lg:w-[150px]"
                        />
                        <Image
                            className="w-[70px] min-[500px]:w-[100px] sm:w-[120px] lg:w-[200px] mb-2 min-[500px]:mb-4"
                            src={"/product/matte-tap.png"}
                            alt="4 in 1 tap"
                            width={200}
                            height={200}
                            data-aos="fade-up"
                            data-aos-delay="350"
                            data-aos-duration="1000"
                        />
                        <Image
                            className="w-[150px] min-[500px]:w-[200px] sm:w-[280px] lg:w-[400px] mb-2 min-[500px]:mb-4"
                            src={"/product/4-in-1-tap.png"}
                            alt="4 in 1 tap"
                            width={400}
                            height={400}
                            data-aos="fade-up"
                            data-aos-delay="450"
                            data-aos-duration="1000"
                        />
                        <Image
                            src={"/product/satin.png"}
                            alt="4 in 1 tap"
                            width={150}
                            height={200}
                            data-aos="fade-up"
                            data-aos-delay="550"
                            data-aos-duration="1000"
                            className="w-[65px] min-[500px]:w-[80px] sm:w-[100px] lg:w-[150px]"
                        />
                    </div>
                    <Image
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="hidden min-[649.5px]:block absolute bottom-0 z-[-1] h-[400px] sm:h-[550px] md:h-[650px] lg:h-[800px] sm:w-[100vw] left-0 right-0 mx-auto"
                        src={"/product/water.png"}
                        alt="water"
                        width={1950}
                        height={1500}
                    />
                    <Image
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="block min-[649.5px]:hidden absolute bottom-0 z-[-1] h-[400px] object-cover left-0 right-0 mx-auto"
                        src={"/product/water.png"}
                        alt="water"
                        width={1950}
                        height={1500}
                    />
                </div>
                <h2 className="text-[#343637] font-bold text-center text-[24px] md:text-[32px] xl:text-[40px] mb-6 px-4">Meet Your New Hydration Hero: The INTRIX One Tap</h2>
                <div className="flex md:flex-row flex-col items-center gap-6 lg:container mx-auto lg:px-0 px-4">
                    <SliderSection
                        activeSlide={activeSlide}
                        setActiveSlide={(index) => {
                            setActiveSlide(index);
                        }}
                    />
                    <BulletSection bullets={bullets} alignment="right" />
                </div>
            </div>
            <div className="my-12 lg:my-24">
                <ExploreOurTabs />
            </div>
            <div className="my-12 lg:my-24">
                <TitaniumInnerCore />
            </div>
            <div className="my-12 lg:my-24 relative">
                <h3 className="text-[#343637] text-[24px] md:text-[32px] xl:text-[40px] font-[Mulish-Bold] text-center mb-20 md:mb-6">Your Safety Is Our Top Priority</h3>
                <SafetyCarousel />
            </div>
            <div className="my-12 lg:my-24 md:container mx-4 md:mx-auto">
                <MakingWaves />
            </div>
            <div className="md:container mx-auto px-4">
                <video width="100%" height="100" controls preload="none" poster="/explore/video_thumbnail.png">
                    <source src="/videos/Intrix-Comand Centre.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="my-12 lg:my-24">
                <PrecisionCooling />
            </div>
            <div className="my-12 md:my-24 px-0">
                <h3 className="container mx-auto text-[#343637] text-[24px] md:text-[32px] xl:text-[40px] font-[Mulish-Bold] text-center mb-12 md:mb-24 leading-[1.2]">
                    Optimise Your One Tap Experience
                </h3>
                <div className="md:container mx-auto flex gap-6 justify-between md:flex-row flex-col-reverse items-center xl:pb-24">
                    <div className="md:w-1/2 lg:w-3/5 min-[2000px]:w-4/5 relative text-[#000000] px-4 md:px-0 lg:px-16">
                        <h4 className="font-[Mulish-Bold] text-[24px] md:text-[30px] text-black mb-2">All-in-One Filter</h4>
                        <p className="text-[16px] md:text-[20px] mb-4 leading-[1.2]">
                            Enjoy a hassle-free filter replacement process with our world-class filter, which only requires you to change it once a
                            year.
                        </p>
                        <p className="text-[16px] md:text-[20px] pb-4 border-b border-[#000] leading-[1.2]">
                            INTRIX filters are designed to be 95% recyclable with more than 80% wastage reduction.
                        </p>
                        <p className="text-[16px] md:text-[20px] mb-4 mt-4 leading-[1.2]">Removal of microbes down to 0.01 micron (μm)</p>
                        <p className="text-[16px] md:text-[20px] mb-4 leading-[1.2]">Ultra-high capacity 23,000L filter</p>
                        <p className="text-[16px] md:text-[20px] pb-4 border-b border-[#000] leading-[1.2]">
                            Removes bacteria, algae and some viruses while preserving natural minerals
                        </p>
                        <div className="flex items-center justify-between font-[Mulish-Bold] py-4 gap-x-4">
                            <div className="flex flex-col w-1/2">
                                <span className="text-[#000] text-[20px] leading-[1]">Price</span>
                                <span className="text-[#131212] text-[28px] leading-[1]">RM 580.00</span>
                            </div>
                            <Link
                                href={"/product/filter"}
                                className="relative w-full send_now_btn max-w-[350px] text-center bg-[#F79932] text-[#fff] font-[Mulish-Light] transition py-3 rounded-md flex items-center justify-center gap-x-4 pl-6 pr-12"
                            >
                                <span>Buy Now</span>
                                <Image className="absolute right-24" src={"/product/arrow-right-white.png"} alt="arrow" width={25} height={25} />
                            </Link>
                        </div>
                        <p className="text-[14px] md:text-[16px] pb-4 border-b border-[#000] leading-[1.2]">
                            *To ensure your warranty remains valid, we highly recommend changing the filter timely. Otherwise, your warranty will be
                            impacted.
                        </p>
                    </div>
                    <Image
                        src={"/explore/filter.png?v=1.1"}
                        alt="filter"
                        width={600}
                        height={600}
                        // className="md:w-1/2 lg:w-2/5 absolute right-0 max-w-[650px]"
                        className="w-full md:w-1/2 lg:w-2/5 max-w-[650px]"
                    />
                </div>
                <div className="flex gap-6 justify-between md:flex-row flex-col mt-24 container mx-auto px-4 md:px-16">
                    <div className="md:w-1/2 lg:w-2/5 relative flex flex-col">
                        <Image className="max-[1000px]:max-w-[400px] mx-auto" src={"/explore/font.png"} alt="font" width={600} height={600} />
                        <p className="text-[10px] pb-4 text-[#525456]">*Disclaimer: Tap not included with INTRIX Font.</p>
                    </div>
                    <div className="md:w-1/2 lg:w-3/5 relative text-[#000000]">
                        <h4 className="font-[Mulish-Bold] text-[24px] md:text-[30px] text-black mb-2">INTRIX Font</h4>
                        <p className="text-[16px] md:text-[20px] mb-4 leading-[1.2]">
                            The perfect accessory for your INTRIX One Tap, offering the flexibility to place your tap anywhere on your kitchen counter
                            - beyond just the sink.
                        </p>
                        <p className="text-[16px] md:text-[20px] pt-4 mb-4 mt-4 border-t border-[#000] leading-[1.2]">Diameter 140mm</p>
                        <p className="text-[16px] md:text-[20px] mb-4 mt-4 leading-[1.2]">Stylish Fit For Hydration Station</p>
                        <p className="text-[16px] md:text-[20px] mb-4 leading-[1.2]">Simple Installation</p>
                        <p className="text-[16px] md:text-[20px] pb-4 border-b border-[#000] leading-[1.2]">Stainless Steel</p>
                        <div className="flex items-center justify-between font-[Mulish-Bold] py-4 gap-x-4">
                            <div className="flex flex-col w-1/2">
                                <span className="text-[#000] text-[20px] leading-[1]">Price</span>
                                <span className="text-[#131212] text-[28px] leading-[1]">RM 499.00</span>
                            </div>
                            <Link
                                href={"/product/filter"}
                                className="relative w-full send_now_btn max-w-[350px] text-center bg-[#F79932] text-[#fff] font-[Mulish-Light] transition py-3 rounded-md flex items-center justify-center gap-x-4 pl-6 pr-12"
                            >
                                <span>Buy Now</span>
                                <Image className="absolute right-24" src={"/product/arrow-right-white.png"} alt="arrow" width={25} height={25} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-24">
                <ComparisonTable />
            </div>
            <div className="container mx-auto mb-6 px-4">
                      <h2 className="font-bold text-[#343637] mt-12 text-[24px] md:text-[30px] text-center md:block hidden">Ready To Install Your INTRIX?</h2>
                      <h2 className="font-bold text-[#343637] text-[24px] md:text-[30px] text-center md:block hidden">Here&apos;s What You Need At Home.</h2>
                      <h2 className="font-bold text-[#343637] text-[24px] md:hidden text-center block max-w-[280px] leading-[1.2] mx-auto md:mt-0 mt-12">Ready To Install Your INTRIX? Here&apos;s What You Need At Home.</h2>
                    </div>
                    <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-6 justify-between mb-8 sm:mb-24 px-0 sm:px-4">
                      <div className="">
                        <Image alt="delivery" className="block object-cover w-full lg:max-h-[300px]" src={'/support/image.png'} width={500} height={500} />
                        <h4 className="text-[20px] font-bold text-black my-4 leading-[1.1] px-4 sm:px-0">
                        Ample Space Below Kitchen Sink
                        </h4>
                        <div className="text-[16px] text-black font-[Montserrat-Regular] leading-[1.2] px-4 sm:px-0">
                          <p className="mb-4">The Command Centre fits neatly under the counter, requiring just W190 x H360 x D340 mm, leaving you with plenty of storage space.</p>
                          <p className="mb-4">For the INTRIX One Tap 5-in-1 model, an additional W180 x H370 x D320 mm is required for the second Command Centre.</p>
                        </div>
                      </div>
                      <div className="">
                        <Image alt="delivery" className="block object-cover w-full lg:max-h-[300px]" src={'/support/plug.png'} width={500} height={500} />
                        <h4 className="text-[20px] font-bold text-black my-4 leading-[1.1] px-4 sm:px-0">
                        13A Plug Point
                        </h4>
                        <div className="text-[16px] text-black font-[Montserrat-Regular] leading-[1.2] px-4 sm:px-0">
                          <p className="mb-4">A 13A plug point is needed under the sink. If unavailable, our team can install a Schneider plug point within 3 metres.</p>
                          <p className="mb-4">The INTRIX One Tap 5-in-1 model requires two plug points. A water inlet must also be prepared, and our Certified Technicians will handle the connection.</p>
                        </div>
                      </div>
                      <div className="">
                        <Image alt="delivery" className="block object-cover w-full lg:max-h-[300px]" src={'/support/kitchen3.png'} width={500} height={500} />
                        <h4 className="text-[20px] font-bold text-black my-4 leading-[1.1] px-4 sm:px-0">
                        One Tap, Many Tops
                        </h4>
                        <div className="text-[16px] text-black font-[Montserrat-Regular] leading-[1.2] px-4 sm:px-0">
                          <p className="mb-4">We install taps on quartz, marble, granite, tile, cement, stainless steel, and wood.</p>
                          <p className="mb-4">Installation takes 1 to 2 hours, including faucet drilling and connections, and is FREE with every INTRIX One Tap purchase.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-24">
                        <Link
                            href={"/support?tab=2"}
                            className="relative w-fit send_now_btn bg-[#F79932] text-[#fff] transition py-3 rounded-lg flex items-center gap-x-4 pl-10 pr-20 [@media(max-height:800px)]:mt-2 mt-4 mx-auto"
                            >
                            <span>Find Out More</span>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                color="#fff"
                                className="absolute right-8 block"
                            />
                        </Link>
                    </div>
            <ExperienceCentreForm />
        </div>
    );
}

export default Explore;
