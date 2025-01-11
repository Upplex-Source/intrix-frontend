"use client";
import Image from "next/image";
import Link from "next/link";
import SupportCards from "@/components/SupportCard";
import { useEffect, useRef, useState } from "react";
import FAQAccordionFlexiown from "@/components/FAQAccordionFlexiown";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faXTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const cardData = [
  {
    title: "ONE",
    imageSrc: "/payment/credit_card.png",
    description: "Accessible monthly instalment charges",
  },
  {
    title: "TWO",
    imageSrc: "/payment/hassle.png",
    description: "Hassle-free payment method",
  },
  {
    title: "THREE",
    imageSrc: "/payment/maintenance.png",
    description: "Worry-free maintenance during lease period",
  },
];

const cardData2 = [
  {
    title: "ONE",
    imageSrc: "/payment/pay.png",
    description: "Pay Upfront: Make an initial payment based on your model",
  },
  {
    title: "TWO",
    imageSrc: "/payment/calendar.png",
    description: "Subscribe: Manage your purchase with monthly payments across 24 months",
  },
  {
    title: "THREE",
    imageSrc: "/payment/tap.png",
    description: "Install & Enjoy: Get purified, safe water at home with FREE installation ",
  },
];
function PaymentPlan() {
  let allTabs = [
    {
      id: "1",
      name: "FlexiOwn Plan",
      content: (
        <>
        <p className="text-[#292929] text-[18px] font-[Montserrat-Regular] text-center leading-[1.2] mt-6 mb-12 md:hidden block px-4 mx-auto max-w-[350px]">Upgrade your home affordably with plans that cater to your budgetary needs.</p>
        <h2 className="container mx-auto font-bold text-[#343637] mb-4 text-[24px] md:text-[30px] px-4 text-center md:text-left">What&apos;s In The FlexiOwn Plan</h2>
        <div className="my-6 px-4 border-b border-[#421908]">
        <SupportCards cards={cardData} />
        </div>
        <h2 className="container mx-auto font-bold text-[#343637] mb-4 text-[24px] md:text-[30px] px-4 text-center md:text-left">How It Works</h2>
        <div className="my-6 px-4 border-b border-[#421908]">
        <SupportCards cards={cardData2} />
        </div>
        </>
      ),
    },
    {
      id: "2",
      name: "Easy Payment Plan",
      content: (
        <>
        <div className="container mx-auto mb-6 px-4">
          <h2 className="font-bold text-[#343637] mt-12 md:text-[30px] text-center">Ready To Install Your INTRIX?</h2>
          <h2 className="font-bold text-[#343637] md:text-[30px] text-center">Here&apos;s What You Need At Home.</h2>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-6 justify-between mb-12 px-4">
          <div className="">
            <Image alt="delivery" className="block object-cover md:max-h-[300px]" src={'/support/image.png'} width={500} height={500} />
            <h4 className="text-[20px] font-bold text-black my-4 leading-[1.1]">
            Ample Space Below Kitchen Sink
            </h4>
            <div className="text-[16px] text-black font-[Montserrat-Regular] leading-[1.2]">
              <p className="mb-4">The Command Centre fits neatly under the counter, requiring a space* of just W190 x H360 x D340 mm.</p>
              <p className="mb-4">This leaves you with all the space you need to store your other kitchen essentials!</p>
              <p className="">*For INTRIX One Tap 5-in-1 model, an additional space of W180 x H370 x D320 mm is required for the second command centre.</p>
            </div>
          </div>
          <div className="">
            <Image alt="delivery" className="block object-cover md:max-h-[300px]" src={'/support/plug.png'} width={500} height={500} />
            <h4 className="text-[20px] font-bold text-black my-4 leading-[1.1]">
            13A Plug Point
            </h4>
            <div className="text-[16px] text-black font-[Montserrat-Regular] leading-[1.2]">
              <p className="mb-4">All you need is a 13A plug point beneath your counter and space for the unit.</p>
              <p className="mb-4">If a plug point isn&apos;t available under the sink, our installation team can extend a wire from the nearest outlet within 3 metres and install a new plug-point there.</p>
            </div>
          </div>
          <div className="">
            <Image alt="delivery" className="block object-cover md:max-h-[300px]" src={'/support/kitchen3.png'} width={500} height={500} />
            <h4 className="text-[20px] font-bold text-black my-4 leading-[1.1]">
            One Tap, Many Tops
            </h4>
            <div className="text-[16px] text-black font-[Montserrat-Regular] leading-[1.2]">
              <p className="mb-4">We can install the tap on various surfaces, including quartz, marble, granite, tile, cement, stainless steel, and wood.</p>
              <p className="mb-4">The entire process typically takes 1 to 2 hours, including drilling a hole for the One Tap faucet installation and making the necessary connections.</p>
              <p className="">Installation is provided for FREE with every INTRIX One Tap purchase.</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mb-6">
          <h2 className="font-bold text-[#343637] mt-12 md:text-[30px]">Didn&apos;t Find What You Were Looking For? Let&apos;s Chat.</h2>
        </div>
        <div className="my-6 px-4">
        <SupportCards cards={cardData} />
        </div>
        </>
      ),
    },
  ]
    
   
  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) return;

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      if (currentTab) {
        setTabUnderlineLeft(currentTab.offsetLeft);
        setTabUnderlineWidth(currentTab.clientWidth);
      }
    };

    setTabPosition();
  }, [activeTabIndex]);

    return (
        <>
        <div className="text-center mx-auto mb-4 h-[75vh] sm:h-[850px] lg:h-[700px] min-[1441px]:h-[900px] payment_bg flex items-center">
            <div className="absolute top-0 w-[45vw] h-[700px] min-[1441px]:h-[900px] vertical_overlay_bg md:block hidden"></div>
            <div className="absolute top-0 w-[100vw] h-[40vh] overlay_bg md:hidden block"></div>
            <div className="absolute md:bottom-[unset] bottom-0 lg:top-[550px] min-[1441px]:top-[680px] w-[100vw] h-[50vh] sm:h-[300px] blur_skin_bg"></div>
            {/* <h1 className="absolute top-[200px] left-0 right-0 text-[#fff] md:text-[30px] mb-4 font-300 !font-[Mulish-Light] md:block hidden">Payment Plans</h1> */}
            <div className="container mx-auto absolute px-4 left-0 right-0 md:mt-[-150px] md:top-[unset] top-[20px]">
              <h1 className="text-white text-[24px] md:text-[30px] xl:text-[40px] w-[280px] md:w-[450px] font-[Mulish-Regular] font-bold md:font-[Mulish-Black] text-left leading-[1.2]">Bring Your Dream Kitchen To Life with INTRIX FlexiOwn Plan</h1>
              <p className="text-white text-[20px] text-left leading-[1.2] md:w-[450px] mt-6 md:block hidden">Upgrade your home affordably with plans that cater to your financial needs.</p>
            </div>
            
            <div className="overflow-x-scroll md:overflow-x-hidden w-full relative hidden">
              <div className="flex-row relative mx-auto flex h-12 rounded-3xl bg-[#E2DBC6] px-2 backdrop-blur-sm mt-6 w-full md:w-fit gap-4">
                <span
                  className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-1 transition-all duration-300"
                  style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
                >
                  <span className="h-full w-full rounded-3xl bg-[#F79932]" />
                </span>
                {allTabs.map((tab, index) => {
                  const isActive = activeTabIndex === index;

                  return (
                    <button
                      key={tab.id}
                      ref={(el) => (tabsRef.current[index] = el)}
                      className={`${
                        isActive ? "text-white" : " bg-[#fff]"
                      } my-auto cursor-pointer select-none rounded-full px-4 text-center py-2 font-light text-[#292929] text-[14px] outline-0 block w-fit whitespace-nowrap`}
                      onClick={() => setActiveTabIndex(index)}
                    >
                      {tab.name}
                    </button>
                  ); 
                })}
              </div>
            </div>
          </div>
          {allTabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`relative inset-0 transition-opacity duration-300 ${
                activeTabIndex === index ? "opacity-100 z-[3] h-fit" : "absolute opacity-0 pointer-events-none hidden"
              }`}
            >
              {tab.content}
            </div>
          ))}
          <div className="my-12 md:my-24 px-4">
          <FAQAccordionFlexiown />
          </div>
          <div className="my-12 md:my-24 container mx-auto px-0">
          <ExploreOurTabs />
          </div>
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

export default PaymentPlan;
