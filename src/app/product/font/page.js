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
            const [iframeSrc, setIframeSrc] = useState('https://sketchfab.com/models/13ff5622b4f344159097234f0d797407/embed?autostart=1&camera=0&preload=1&transparent=1');
        
          
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
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-end relative overflow-hidden">
              <div className="w-[150px] z-[3] px-4 bg-[#F6EFE2] min-h-[500px] absolute h-[550px] left-0"></div>
                <iframe
                    ref={iframeRef}
                    src={iframeSrc}
                    id="api-frame"
                    allow="autoplay; fullscreen; "
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    className='w-[80vw] min-[1500px]:w-full absolute mx-auto left-0 h-[550px]'
                ></iframe>
                <div className="product-desc text-[#343637] w-full max-w-[400px] z-[3] px-4 bg-[#F6EFE2] min-h-[500px]">
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
                          href={'#'}
                          className="relative w-full buy_now_btn text-center bg-[#F79932] text-[#fff] font-[Mulish-Light] transition py-3 rounded-md flex items-center justify-center gap-x-4 pl-6 pr-12"
                      >
                          <span>Add to Cart</span> 
                          <Image className="absolute ml-[150px]" src={'/product/arrow-right-white.png'} alt="arrow" width={25} height={25} />
                      </Link>
                      <Link
                          href={'#'}
                          className="relative w-full buy_now_btn text-center text-[#343637] font-[Mulish-Light] border-[#343637] border mt-2 transition py-3 rounded-md flex items-center justify-center gap-x-4 pl-6 pr-12"
                      >
                          <span>Buy Now</span> 
                          <Image className="absolute ml-[150px]" src={'/product/arrow-right.png'} alt="arrow" width={25} height={25} />
                      </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative flex items-center">
          <Image alt='product outline' className="w-full md:block hidden" src={'/product/hero_image.png'} width={2300} height={1555} />
          <Image alt='product outline' className="w-full md:hidden block" src={'/product/mobile_hero_image.png'} width={768} height={1000} />
          <div className="absolute container mx-auto text-[#343637] left-0 right-0 md:px-0 px-4 top-[16vw] md:top-[unset]">
            <h4 className="text-[20px] md:text-[40px] font-[Mulish-Bold] leading-[1.2]">Skip The Sink. <br/>Meet The INTRIX Font*</h4>
            <p className="text-[16px] md:text-[20px] leading-[1.2]">Form and Function: <br className="md:hidden block"/> The Perfect Fusion</p>
          </div>
          <p className="hidden md:block absolute bottom-12 lg:bottom-24 xl:bottom-32 container mx-auto left-0 right-0 text-[10px] text-[#525456] font-[Montserrat-Regular] mt-[100px]">*Disclaimer: Tap not included with INTRIX Font.</p>
        </div>
        <div className="mb-12 md:mb-24 container mx-auto grid lg:grid-cols-4 grid-cols-2 gap-4 sm:gap-6 px-4 md:px-0 mt-[40px] lg:mt-[-50px] xl:mt-[-60px] relative">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                imageSrc={card.imageSrc}
              />
            ))}
        </div>
        <div className="container mx-auto md:px-0 px-4 mt-12 md:mt-24">
          <h1 className="text-center md:text-left text-[#525456] text-[20px] md:text-[40px] mb-6 font-[Mulish-Black] leading-[1.1]">The Possibilities Are Endless</h1>
          <p className="text-center md:text-left text-[#343637] text-[14px] md:text-[16px] font-[Montserrat-Regular] mb-6 max-w-[800px]">The INTRIX Font can replace a traditional basin or sink in areas that calls for a compact and minimalist design without compromising your hydration needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Image alt='Kitchen Island' className="" src={'/product/kitchen_island.png'} width={1600} height={1000} />
          <Image alt='Coffee Island' className="" src={'/product/coffee_station.png'} width={1600} height={1000} />
          <Image alt='Pantry Area' className="" src={'/product/pantry_area.png'} width={1600} height={1000} />
          </div>
        </div> 
        
        <div className="my-12 md:my-24 container mx-auto px-0">
        <ExploreOurTabs />
        </div>
        <div className="my-12 md:my-24 px-4">
        <FAQAccordionFilter />
        </div>
        <ExperienceCentreForm />
        </>
    );
}
const Card = ({ title, imageSrc, description }) => {
  return (
    <div className="p-6 bg-white rounded-[20px] flex items-center gap-4 text-black">
        <Image src={imageSrc} alt={title} className="block md:max-w-[60px] max-w-[50px]" width={60} height={60} />
      <div>
        <h3 className="text-[12px] sm:text-[16px] xl:text-[20px] font-bold max-w-[150px] leading-[1.2]">{title}</h3>
      </div>
    </div>
  );
};

export default Font;
