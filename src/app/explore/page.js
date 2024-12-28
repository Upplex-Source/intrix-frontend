"use client";

import React, { useEffect, useRef, useState } from "react";
import "./explore.scss";
import Link from "next/link";
import Image from "next/image";
import ExperienceCentreForm from "@/components/ExperienceCentreForm";
import TitaniumInnerCore from "@/components/explore/TitaniumInnerCore";
import SafetyCarousel from "@/components/explore/SafetyCarousel";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";
import MakingWaves from "@/components/products/MakingWaves";
import ComparisonTable from "@/components/products/ComparisonTable";

function Explore() {
    let allTabs = [
        {
          id: "1",
          name: "Overview",
          url: "/explore"
        },
        {
          id: "2",
          name: "INTRIX One Tap 5-in-1",
          url: "/product"
        },
        {
          id: "3",
          name: "INTRIX One Tap 4-in-1",
          url: "/product"
        },
        {
          id: "4",
          name: "INTRIX One Tap 2-in-1",
          url: "/product"
        },
        {
          id: "5",
          name: "INTRIX One Tap Lite",
          url: "/product"
        }
    ]


    const tabsRef = useRef([]);
      const [activeTabIndex, setActiveTabIndex] = useState(0);
    
      useEffect(() => {
        if (activeTabIndex === null) return;
    
        const setTabPosition = () => {
          const currentTab = tabsRef.current[activeTabIndex];
        };
    
        setTabPosition();
      }, [activeTabIndex]);


      const leftBullets = [
        {
          image: 'bacteria',
          title: "Unmatched Purity",
          desc: "Our advanced filtration system removes 99.99% of microbes while preserving essential minerals.",
        },
        {
          image: 'hot-cold',
          title: "Instant Purified Hot & Chilled Water",
          desc: "Enjoy purified hot and chilled water on demand—perfect for drinking, cooking, washing, and sterilising.",
        },
        {
          image: 'eco',
          title: "Energy Efficiency",
          desc: "Our EcoSmart technology saves energy with less reheating. Save even more with Eco mode.",
        },
        {
          image: 'child-lock',
          title: "Safety First",
          desc: "The intuitive Push-To-Activate mechanism ensures safety for your loved ones, preventing accidents while offering peace of mind.",
        },
      ];
      
      const rightBullets = [
        {
          image: 'space',
          title: "Space Saving",
          desc: "Designed to seamlessly conceal the command centre under your sink and maximise your preparation area.",
        },
        {
          image: 'limescale',
          title: "Revolutionary Durability",
          desc: "Featuring the world's first and only Titanium Inner Core which is anti-corrosion and anti-limescale, ensuring longevity and superior performance.",
        },
        {
          image: 'recycle',
          title: "Eco-Conscious Design",
          desc: "The All-in-One Filter is crafted from 95% recyclable materials to promote sustainability, repurposing, and reducing up to 80% waste.",
        },
        {
          image: 'cost',
          title: "Low Maintenance",
          desc: "With low maintenance needs and long-lasting performance, enjoy reduced utility bills, servicing costs, and fewer replacements.",
        },
      ];
      const BulletSection = ({ bullets, alignment }) => (
        <div className={` ${alignment}`}>
          {bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-x-4 p-4">
              <Image src={`/explore/${bullet.image}.png`} alt={bullet.title} width={60} height={60} />
              <div className="bullet-desc-wrapper text-[#000000] text-[16px]">
                <div className="text-[20px] mb-1 font-bold">{bullet.title}</div>
                <div className="text-[16px] font-[Montserrat-Regular]">
                  {bullet.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      );

    return (
        <div id="explore_page">
            <div className="mt-[200px]">
                <div className="flex-row relative mx-auto flex h-12 rounded-3xl bg-[#DDDFE0] px-2 backdrop-blur-sm mt-6 w-full md:w-fit gap-4 mb-12">
                    {allTabs.map((tab, index) => {
                    const isActive = activeTabIndex === index;

                    return (
                        <Link
                        key={tab.id}
                        ref={(el) => (tabsRef.current[index] = el)}
                        className={`${
                            isActive ? "text-[#131212] bg-[#fff]" : " text-[#95999C]"
                        } my-auto cursor-pointer select-none rounded-full px-4 text-center py-2 font-light text-[14px] outline-0 block w-fit whitespace-nowrap`}
                        onClick={() => setActiveTabIndex(index)}
                        href={tab.url}
                        >
                        {tab.name}
                        </Link>
                    );
                    })}
                </div>
                <div className="water_bg mb-24 relative">
                    <div className="ellipse_bg"></div>
                    <h1 className="text-[#343637] font-bold text-[40px] text-center leading-[1.2]">
                        INTRIX One Tap:
                        <br /> The Tap That Simplifies Your Life
                    </h1>
                    <div className="flex justify-center items-end">
                        <Image src={'/product/tap-only.png'} alt="4 in 1 tap" width={150} height={200} />
                        <Image className="mb-4" src={'/product/matte-tap.png'} alt="4 in 1 tap" width={200} height={200} />
                        <Image className="mb-4" src={'/product/4-in-1-tap.png'} alt="4 in 1 tap" width={400} height={400} />
                        <Image src={'/product/satin.png'} alt="4 in 1 tap" width={150} height={200} />
                    </div>
                    <Image className="absolute bottom-0 z-[-1] h-[800px] w-[100vw] left-0 right-0 mx-auto" src={'/product/water.png'} alt="water" width={1950} height={1500} />
                </div>
                <h2 className="text-[#343637] font-bold text-center text-[40px] mb-6">Meet Your New Hydration Hero: The INTRIX One Tap</h2>
                <div className="flex lg:flex-row flex-col items-center gap-6 container mx-auto">
                    <BulletSection bullets={leftBullets} alignment="left" />
                    <Image src={'/explore/explore_middle.png'} alt="INTRIX One Tap" width={400} height={400} />
                    <BulletSection bullets={rightBullets} alignment="right" />
                </div>
            </div>
            <div className="my-12 md:my-24">
                <ExploreOurTabs />
            </div>
            <div className="my-12 md:my-24">
                <TitaniumInnerCore />
            </div>
            <div className="my-12 md:my-24 relative">
              <h3 className="text-[#343637] text-[40px] font-[Mulish-Bold] text-center mb-6">Your Safety Is Our Top Priority</h3>
              <SafetyCarousel />
            </div>
            <div className="my-12 md:my-24 container mx-auto">
              <MakingWaves />
            </div>
            <video width="100%" height="100" controls preload="none" poster="/explore/video_thumbnail.png">
                <source src="/videos/Intrix-Comand Centre.mp4" type="video/mp4" />
            </video>
            <div className="container mx-auto my-12 md:my-24 md:px-0 px-4">
                <h3 className="text-[#343637] text-[40px] font-[Mulish-Bold] text-center mb-6">Add The Finishing Touches</h3>
                <div className="flex gap-6 justify-between md:flex-row flex-col-reverse">
                  <div className="md:w-1/2 lg:w-3/5 relative text-[#000000]">
                    <h4 className="font-[Mulish-Bold] text-[30px] text-black mb-2">All-in-One Filter</h4>
                    <p className="text-[20px] mb-4">
                    Enjoy a hassle-free filter replacement process with our world-class filter, which only requires you to change it once a year.
                    </p>
                    <p className="text-[20px] pb-4 border-b border-[#000]">
                    INTRIX filters are designed to be 95% recyclable with more than 80% wastage reduction.
                    </p>
                    <p className="text-[20px] mb-4 mt-4">
                    Removal of microbes down to 0.01 micron (μm)
                    </p>
                    <p className="text-[20px] mb-4">
                    Ultra-high capacity 23,000L filter
                    </p>
                    <p className="text-[20px] pb-4 border-b border-[#000]">
                    Removes bacteria, algae and some viruses while preserving natural minerals
                    </p>
                    <div className="flex items-center justify-between font-[Mulish-Bold] py-4 gap-x-4">
                      <div className="flex flex-col w-1/2">
                        <span className="text-[#000] text-[20px] leading-[1]">Price</span>
                        <span className="text-[#131212] text-[28px] leading-[1]">RM 580.00</span>
                      </div>
                      <Link
                          href={'/product/filter'}
                          className="relative w-full send_now_btn max-w-[400px] text-center bg-[#F79932] text-[#421908] font-[Mulish-Light] transition py-3 rounded-md flex items-center justify-center gap-x-4 pl-6 pr-12"
                      >
                          <span>Buy Now</span> 
                          <Image className="absolute right-24" src={'/product/arrow-right.png'} alt="arrow" width={25} height={25} />
                      </Link>
                    </div>
                    <p className="text-[16px] pb-4 border-b border-[#000]">
                    *To ensure your warranty remains valid, we highly recommend changing the filter timely. Otherwise, your warranty will be impacted.
                    </p>
                  </div>
                  <div className="md:w-1/2 lg:w-2/5 relative flex items-center ml-[20vw] md:ml-0">
                    <Image src={'/explore/filter.png'} alt="filter" width={600} height={600} />
                    <Image className="absolute left-[200px]" src={'/explore/halal_logo.png'} alt="filter" width={80} height={300} />
                  </div>
                </div>
                <div className="flex gap-6 justify-between md:flex-row flex-col mt-24">
                  <div className="md:w-1/2 lg:w-2/5 relative flex flex-col">
                    <Image className="max-[1000px]:max-w-[400px] mx-auto" src={'/explore/font.png'} alt="font" width={600} height={600} />
                    <p className="text-[10px] pb-4 text-[#525456]">
                    *Disclaimer: Tap not included with INTRIX Font.
                    </p>
                  </div>
                  <div className="md:w-1/2 lg:w-3/5 relative text-[#000000]">
                    <h4 className="font-[Mulish-Bold] text-[30px] text-black mb-2">INTRIX Font</h4>
                    <p className="text-[20px] mb-4">
                    The perfect accessory for your INTRIX One Tap, offering the flexibility to place your tap anywhere on your kitchen counter - beyond just the sink.
                    </p>
                    <p className="text-[20px] pb-4 border-b border-[#000]">
                    Diameter 140mm
                    </p>
                    <p className="text-[20px] mb-4 mt-4">
                    Stylish Fit For Hydration Station 
                    </p>
                    <p className="text-[20px] mb-4">
                    Simple Installation
                    </p>
                    <p className="text-[20px] pb-4 border-b border-[#000]">
                    Stainless Steel
                    </p>
                    <div className="flex items-center justify-between font-[Mulish-Bold] py-4 gap-x-4">
                      <div className="flex flex-col w-1/2">
                        <span className="text-[#000] text-[20px] leading-[1]">Price</span>
                        <span className="text-[#131212] text-[28px] leading-[1]">RM 499.00</span>
                      </div>
                      <Link
                          href={'/product/filter'}
                          className="relative w-full send_now_btn max-w-[400px] text-center bg-[#F79932] text-[#421908] font-[Mulish-Light] transition py-3 rounded-md flex items-center justify-center gap-x-4 pl-6 pr-12"
                      >
                          <span>Buy Now</span> 
                          <Image className="absolute right-24" src={'/product/arrow-right.png'} alt="arrow" width={25} height={25} />
                      </Link>
                    </div>
                    
                  </div>
                  
                </div>
            </div>
            <div className="mb-24">
            <ComparisonTable />
            </div>
            
            <ExperienceCentreForm />
        </div>
    );
}

export default Explore;
