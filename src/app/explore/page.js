"use client";

import React, { useEffect, useRef, useState } from "react";
import "./explore.scss";
import Link from "next/link";
import Image from "next/image";
import ExperienceCentreForm from "@/components/ExperienceCentreForm";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";
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
        <div id="">
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
            <div className="my-24">
                <ExploreOurTabs />
            </div>
            <div className="mb-24">
            <ComparisonTable />
            </div>
            
            <ExperienceCentreForm />
        </div>
    );
}

export default Explore;
