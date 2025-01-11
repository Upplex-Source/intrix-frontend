"use client";
import dynamic from 'next/dynamic';
import * as THREE from "three";
import Image from "next/image";
import Link from "next/link";
import { Canvas, useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls, useFBX } from '@react-three/drei';
import Stats from "three/addons/libs/stats.module.js";
import React, { Suspense, useEffect, useRef, useState } from 'react';

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import Marquee from "react-fast-marquee";
import SupportCards from "@/components/SupportCard";
import TapCanDoCarousel from "@/components/products/TapCanDoCarousel";
import CommandCentreSpecifications from "@/components/products/CommandCentreSpecifications";
import ArcticSpecifications from "@/components/products/ArcticSpecifications";
import ProductFeatures from "@/components/products/ProductFeatures";
import ExperienceCentreForm from "@/components/ExperienceCentreForm";
import ComparisonTable from "@/components/products/ComparisonTable";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram, faXTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import "./product.scss";
const ThreeScene = dynamic(() => import('./5in1'), {
  ssr: false,
});
function Product() {
  let allTabs = [
    {
      id: "1",
      name: "Overview",
    },
    {
      id: "2",
      name: "INTRIX One Tap 5-in-1",
    },
    {
      id: "3",
      name: "INTRIX One Tap 4-in-1",
    },
    {
      id: "4",
      name: "INTRIX One Tap 2-in-1",
    },
    {
      id: "5",
      name: "INTRIX One Tap Lite",
    }
  ]
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
          description: "Own it with ease: Pay monthly via selected banks",
        },
    ];
    const featureItems = [
      {
        icon: "guaranteed",
        text: '90-Day Tap Back Guaranteed*',
      },
      {
        icon: "delivery",
        text: 'FREE Delivery',
      },
      {
        icon: "installation",
        text: 'FREE Installation',
      },
      {
        icon: "warranty",
        text: '3 Years Warranty',
      },
      {
        icon: "wallet",
        text: 'FlexiOwn Plan',
      },
    ];

    const [isExpanded, setIsExpanded] = useState(true);
    
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

    return (
        <>
        <div id="container2" className="!overflow-x-hidden mb-24 pt-[50px]">
          <div className="flex-row relative mx-auto flex h-12 rounded-3xl bg-[#DDDFE0] px-2 backdrop-blur-sm w-full md:w-fit gap-4 mb-12">
            
            {allTabs.map((tab, index) => {
              const isActive = activeTabIndex === index;

              return (
                <button
                  key={tab.id}
                  ref={(el) => (tabsRef.current[index] = el)}
                  className={`${
                    isActive ? "text-[#131212] bg-[#fff]" : " text-[#95999C]"
                  } my-auto cursor-pointer select-none rounded-full px-4 text-center py-2 font-light text-[14px] outline-0 block w-fit whitespace-nowrap`}
                  onClick={() => setActiveTabIndex(index)}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>
            <div className="container mx-auto flex items-center justify-between">
                <div className="product-desc text-[#343637] w-1/4 z-[3]">
                    <p className="product-name">Select Colour</p>
                    <div className="flex gap-x-4 my-4">
                      <Link href="#" className="bg-chrome w-[40px] h-[40px] rounded-full"></Link>
                      <Link href="#" className="bg-black w-[40px] h-[40px] rounded-full"></Link>
                    </div>
                    <p className="text-[#131212] text-[14px] mb-4">FEATURES</p>
                    <p className="text-[#131212] text-[12px] mb-2">PURIFIED</p>
                    <div className="flex flex-col w-fit space-y-2 ">
                      <Link href="#" className="text-[14px] border-b border-[#777A7E] p-2 text-[#777A7E] text-[#131212]">
                        Chilled Water As Low As 3°C
                      </Link>
                      <Link href="#" className="text-[14px] border-b border-[#777A7E] p-2 text-[#777A7E] text-[#131212]">
                        Hot Boiling Water up to 98°C
                      </Link>
                      <Link href="#" className="text-[14px] border-b border-[#777A7E] p-2 text-[#777A7E] text-[#131212]">
                        Ambient Water
                      </Link>
                    </div>
                    <p className="text-[#131212] text-[12px] mt-12 mb-2">NON PURIFIED</p>
                    <div className="flex flex-col w-fit space-y-2">
                      <Link href="#" className="text-[14px] border-b border-[#777A7E] p-2 text-[#777A7E] text-[#131212]">
                        Ambient Water Supply 
                      </Link>
                      <Link href="#" className="text-[14px] border-b border-[#777A7E] p-2 text-[#777A7E] text-[#131212]">
                        Hot Tap Water Supply
                      </Link>
                    </div>
                </div>
                <div className="sketchfab-embed-wrapper [@media(max-height:800px)]:max-w-[500px] max-w-[600px] lg:max-w-[1000px] w-full absolute right-0 [@media(max-height:800px)]:left-[-20vw] left-0 mx-auto">
                    <iframe
                        
                        frameBorder="0"
                        // allowFullScreen
                        // allow="autoplay; fullscreen; accelerometer; gyroscope; xr-spatial-tracking"
                        className="w-full h-[500px]"
                        src="https://sketchfab.com/models/aaa954a10b2d4f4ebf9dd37acae9c5a8/embed?autostart=1&camera=0&preload=1&transparent=1"
                    ></iframe>
                </div>
                <div className="product-desc text-[#343637] w-1/3">
                  <div className="flex gap-x-2 items-end justify-between mb-4">
                    <div className="flex gap-x-4 items-center">
                      <p className="text-[#131212] text-[15px] text-right w-[80px]">INTRIX ONE TAP</p>
                      <p className="text-[#131212] text-[54px] leading-[0.9]">5-IN-1</p>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <Link href="#"><FontAwesomeIcon icon={faSquareInstagram} /></Link>
                      <Link href="#"><FontAwesomeIcon icon={faXTwitter} /></Link>
                      <Link href="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
                    </div>
                  </div>  
                    <p className="py-4 border-t border-b border-[#2F241B] text-[12px] text-[#343637] font-[Montserrat-Regular]">
                    The ultimate tap – perfect for hot, ambient & chilled purified water and hot & ambient non-purified water. Our Titanium Inner Core is anti-corrosion and anti-limescale, while our EcoSmart Technology saves energy.
                    <br/>
                    <br/>
                    Safety child lock and heatproof features in place, all wrapped up in a sleek, timeless design.
                    </p>
                    <div className="py-2 border-b border-[#2F241B]">
                      <p className="text-[#131212]">OUTRIGHT</p>
                      <p className="text-[#131212] font-bold text-[32px] leading-[1.1]">RM 7,500.00</p>
                    </div>
                    <div
                      className="flex justify-between items-center cursor-pointer py-2"
                      onClick={toggleExpand}
                    >
                      <h2 className="text-[16px] font-bold">PAYMENT OPTIONS</h2>
                      <span
                        className={`transform transition-transform duration-300 ${
                          isExpanded ? "rotate-0" : "rotate-[-90deg]"
                        }`}
                      >
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isExpanded ? "max-h-[1000px]" : "max-h-0"
                      }`}
                    >
                      <p className="text-[12px] font-bold underline text-[#131212] mb-1">FLEXIOWN PLAN</p>
                      <div className="grid grid-cols-2 gap-4 mb-1 pb-1">
                      {/* <div className="grid grid-cols-2 gap-4 border-b border-[#131212] mb-1 pb-1"> */}
                        <div className="border-r border-[#131212] text-[#131212]">
                          <p className="text-[18px] leading-[1.1]">RM 138.00/Month*</p>
                          <p className="text-[10px]">UPFRONT PAYMENT</p>
                        </div>
                        <div className="text-[#131212]">
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
                      <Link
                          href={'#'}
                          className="relative w-full buy_now_btn text-center bg-[#F79932] text-[#421908] font-[Mulish-Light] transition py-3 rounded-md flex items-center justify-center gap-x-4 pl-6 pr-12"
                      >
                          <span>Buy Now</span> 
                          <Image className="absolute ml-[150px]" src={'/product/arrow-right.png'} alt="arrow" width={25} height={25} />
                      </Link>
                    </div>
                    <Link href="#" className="border-b border-[#131212] py-4 px-4 flex items-center justify-between">
                      <span>Download Brochure</span> 
                      <Image className="" src={'/product/arrow-right.png'} alt="arrow" width={25} height={25} />
                    </Link>
                    <Link href="#specifications" className="border-b border-[#131212] py-4 px-4 flex items-center justify-between">
                      <span>Product Specification</span> 
                      <Image className="" src={'/product/arrow-right.png'} alt="arrow" width={25} height={25} />
                    </Link>
                </div>
            </div>
        </div>
        <Marquee autoFill={true}>
          {featureItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-12 whitespace-nowrap"
            >
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
        <div className="!overflow-hidden mt-24">
          <div className="container mx-auto">
            <h1 className="text-[#525456] md:text-[30px] mb-6 font-[Mulish-Black] text-center">What&apos;s On Tap?</h1>
          </div>
          <div className="">
            <TapCanDoCarousel />
          </div>
          <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 px-4 pt-12 md:pt-16 border-t border-[#000000]">
            <div className="flex items-center gap-4">
              <Image alt="Confidence" className="max-w-[80px] px-2" src={'/product/confi.png'} width={278} height={325} />
              <div className="text-[#343637]">
                <h4 className="font-[Mulish-Bold] text-[16px] md:text-[20px]">Confidence In Every Drop</h4>
                <p className="text-[14px] md:text-[16px]">Experience the luxury of instant access to purified water, providing you peace of mind and allowing you to focus on what truly matters with every sip.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image alt="Confidence" className="max-w-[80px] px-2" src={'/product/elevate.png'} width={278} height={325} />
              <div className="text-[#343637]">
                <h4 className="font-[Mulish-Bold] text-[16px] md:text-[20px]">Elevate Your Space</h4>
                <p className="text-[14px] md:text-[16px]">Enjoy a sleek, sophisticated design that seamlessly integrates into your modern kitchen. Effortlessly easy to use and safe for all.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image alt="Confidence" className="max-w-[80px] px-4" src={'/product/elegance.png'} width={278} height={325} />
              <div className="text-[#343637]">
                <h4 className="font-[Mulish-Bold] text-[16px] md:text-[20px]">Elegance Meets Endurance</h4>
                <p className="text-[14px] md:text-[16px]">Embrace our EcoSmart technology designed to reduce energy usage and promote a greener future. Enjoy a cost-efficient solution that&apos;s as low-maintenance as it is environmentally conscious.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image alt="Confidence" className="max-w-[80px] px-2" src={'/product/purified.png'} width={278} height={325} />
              <div className="text-[#343637]">
                <h4 className="font-[Mulish-Bold] text-[16px] md:text-[20px]">Purified Water For All</h4>
                <p className="text-[14px] md:text-[16px]">The advanced filtration technology reduces contaminants, providing not only safer drinking water but also water with fewer impurities for an all-around healthier choice.</p>
              </div>
            </div>
          </div>
        <div className="container mx-auto mt-16 relative border-t border-b border-[#000000]" id="specifications">
          <CommandCentreSpecifications />
        </div>
        <div className="container mx-auto mb-16 relative border-b border-[#000000]">
          <ArcticSpecifications />
        </div>
        <div className="my-6 container mx-auto">
            <h4 className="text-[#343637] text-[30px] font-bold mb-6 ">Payment Method</h4>
            <SupportCards cards={cardData} />
        </div>
        <div className="my-24">
        <ProductFeatures />
        </div>
        <div className="my-24 pr-4">
        <ComparisonTable />
        </div>
        <div className="mt-24 mb-12">
        <ExploreOurTabs />
        </div>
        <ExperienceCentreForm />
        </div>
        </>
    );
}

export default Product;
