"use client";
import * as THREE from "three";
import Image from "next/image";
import Link from "next/link";
import Stats from "three/addons/libs/stats.module.js";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { useEffect, useRef, useState } from "react";
import FAQAccordionFilter from "@/components/FAQAccordionFilter";
import ExperienceCentreForm from "@/components/ExperienceCentreForm";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faXTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Font() {
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
  ]
    const cardData = [
        {
          title: "Removes 99.99% microbes",
          imageSrc: "/product/icon.png",
          description: "Ultra-high capacity 23,000L filter that filters out microbes down to 0.01 microns (μm).",
        },
        {
          title: "95% Recyclable",
          imageSrc: "/product/recycle.png",
          description: "Designed with 95% recyclable materials, allowing the components to be repurposed after use, reducing waste.",
        },
        {
          title: "Waste Reduction",
          imageSrc: "/product/trash.png",
          description: "Requires a one-time filter change per year, compared to other brands which require up to five filter changes a year.",
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

    return (
        <>
        <div id="container2" className="!overflow-x-hidden mb-12 md:mb-24 mt-12 md:mt-[150px] w-full px-4 md:px-0">
          <div className="flex-row relative container mx-auto flex h-12 rounded-3xl bg-[#DDDFE0] px-2 backdrop-blur-sm mt-6 w-full md:w-fit gap-4 mb-12">
            
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
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="flex justify-between w-full lg:w-1/2">
                  <div className="mx-auto">
                    <Image src={'/product/font-3D.png'} className="md:w-fit w-[200px]" alt="Font" width={300} height={500} />
                  </div>
                </div>
                <div className="product-desc text-[#343637] w-full lg:w-1/2 sm:min-w-[400px]">
                  <div className="flex gap-x-2 items-end justify-between mb-4">
                    <div className="flex gap-x-2 sm:gap-x-4 items-center">
                      <p className="text-[#131212] text-[13px] md:text-[15px] text-right w-[95px] md:w-[120px] leading-[1]">INTRIX</p>
                      <p className="text-[#131212] text-[40px] md:text-[54px] leading-[0.9]">FONT</p>
                    </div>
                    <div className="flex items-center gap-x-2 sm:gap-x-4">
                      <Link href="#"><FontAwesomeIcon icon={faSquareInstagram} /></Link>
                      <Link href="#"><FontAwesomeIcon icon={faXTwitter} /></Link>
                      <Link href="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
                    </div>
                  </div>  
                    <p className="py-4 border-t border-b border-[#2F241B] text-[12px] text-[#343637] font-[Montserrat-Regular]">
                    The perfect accessory for your INTRIX One Tap, offering the flexibility to place your tap anywhere on your kitchen counter-beyond just the sink.
                    </p>
                    <div className="py-2 border-b border-[#2F241B]">
                      <p className="text-[#131212] text-[14px] md:text-[16px]">PRICE</p>
                      <p className="text-[#131212] font-bold text-[24px] md:text-[32px] leading-[1.1]">RM 580.00</p>
                    </div>
                    <div className="py-4 border-t border-[#131212]">
                    <Link
                        href="#"
                        className="relative w-full send_now_btn bg-[#F79932] text-[#fff] font-[Mulish-Light] transition py-3 rounded-[15px] flex items-center justify-center gap-x-4"
                    >
                        <span>Buy Now</span> 
                        <Image className="" src={'/product/arrow-right-white.png'} alt="arrow" width={25} height={25} />
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mx-auto md:px-0 px-4 mt-12 md:mt-24">
          <div className="flex gap-12 justify-between items-start lg:flex-row flex-col">
            <div className="lg:w-[350px]">
              <h1 className="text-[#525456] text-[20px] md:text-[40px] mb-6 font-[Mulish-Black] leading-[1.1]">Your All-in-One Solution for Cleaner, Safer Water</h1>
              <p className="text-[#343637] text-[14px] md:text-[20px] font-[Montserrat-Regular] mb-6">Our world-class All-in-One filter allows you to enjoy a hassle-free filter replacement process, and only requires a once-a-year change!</p>
              <p className="text-[#343637] text-[14px] md:text-[20px] font-[Montserrat-Regular]">Designed to be 95% recyclable, our ultra-high capacity 23,000L filter removes up to 99.9% microbes, bacteria, algae and some viruses without compromising the natural mineral preservation.</p>
            </div>
            <div className="flex items-center md:items-end">
            <Image alt='product outline' className="w-[100px] min-[520px]:w-[150px] md:w-[200px] lg:w-[300px] min-[520px]:px-6" src={'/product/product-outline.png'} width={300} height={1555} />
            <div className="flex flex-col gap-6 max-w-[600px] pl-4 min-[520px]:pl-8 md:pl-16 sm:pb-8 md:pb-16">
              <div className="flex items-start">
                <b className="font-[Montserrat-Bold] text-[24px] text-[#F99D1C] pr-2">1</b>
                <Image alt='Sediment Filter' className="w-[80px] sm:w-fit" src={'/product/sediment.png'} width={100} height={100} />
                <div className="text-[#343637] pl-2 min-[520px]:pl-4">
                  <h6 className="font-[Montserrat-Bold] text-[16px] md:text-[24px]">Sediment Filter</h6>
                  <p className="text-[14px] md:text-[20px] font-[Montserrat-Regular]">Removes soil, rust, sediment and bigger particles.</p>
                </div>
              </div>
              <div className="flex items-start">
                <b className="font-[Montserrat-Bold] text-[24px] text-[#F99D1C] pr-2">2</b>
                <Image alt='Sediment Filter' className="w-[80px] sm:w-fit" src={'/product/carbon.png'} width={100} height={100} />
                <div className="text-[#343637] pl-2 min-[520px]:pl-4">
                  <h6 className="font-[Montserrat-Bold] text-[16px] md:text-[24px]">Activated Carbon Black</h6>
                  <p className="text-[14px] md:text-[20px] font-[Montserrat-Regular]">Remove cysts, unpleasant odours, chlorine, chloramine, trihalomethane, VOCs and heavy metals</p>
                </div>
              </div>
              <div className="flex items-start">
                <b className="font-[Montserrat-Bold] text-[24px] text-[#F99D1C] pr-2">3</b>
                <Image alt='Sediment Filter' className="w-[80px] sm:w-fit" src={'/product/nano.png'} width={100} height={100} />
                <div className="text-[#343637] pl-2 min-[520px]:pl-4">
                  <h6 className="font-[Montserrat-Bold] text-[16px] md:text-[24px]">Nanofiltration Membrane</h6>
                  <p className="text-[14px] md:text-[20px] font-[Montserrat-Regular]">Removes bacteria, algae and some viruses while preserving natural minerals.</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div> 
        <div className="my-12 md:my-24 container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-6 px-4 md:px-0">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                imageSrc={card.imageSrc}
                description={card.description}
              />
            ))}
        </div>
        <div className="my-12 md:my-24 container mx-auto px-0">
        <ExploreOurTabs />
        </div>
        <div className="my-12 md:my-24">
        <FAQAccordionFilter />
        </div>
        <ExperienceCentreForm />
        </>
    );
}
const Card = ({ title, imageSrc, description }) => {
  return (
    <div className="p-6 bg-white rounded-[20px] flex items-center gap-6 text-black">
        <Image src={imageSrc} alt={title} className="block" width={80} height={80} />
      <div>
        <h3 className="text-[20px] font-bold mb-1">{title}</h3>
        <p className="text-[16px]">{description}</p>
      </div>
    </div>
  );
};

export default Font;
