"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SupportCards from "@/components/SupportCard";
import { useEffect, useRef, useState } from "react";
import FAQAccordionFlexiown from "@/components/FAQAccordionFlexiown";
import FAQAccordionEPP from "@/components/FAQAccordionEPP";
import ParticipatingBanks from "@/components/payment/ParticipatingBanks";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";


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

const cardData3 = [
  {
    title: "ONE",
    imageSrc: "/payment/pay.png",
    description: "Check Your Eligibility: <br/>See if your credit card is issued by a participating bank",
  },
  {
    title: "TWO",
    imageSrc: "/payment/calendar.png",
    description: "Check Your Tenure: <br/>Choose your instalment tenure according to your bank",
  },
  {
    title: "THREE",
    imageSrc: "/payment/tap.png",
    description: "Install &amp; Enjoy: <br/>Get purified, safe water at home with FREE installation!",
  },
];
function PaymentPlan() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  let allTabs = [
    {
      id: "0",
      name: "FlexiOwn Plan",
      content: (
        <>
        <div className="relative text-center mx-auto mb-4 h-[75vh] sm:h-[850px] lg:h-[700px] min-[1441px]:h-[900px] min-[1720px]:h-[1100px] payment_bg flex items-center mt-[55px] sm:mt-0">
          <div className="absolute top-0 w-[45vw] h-[700px] min-[1441px]:h-[900px] min-[1720px]:h-[1000px] vertical_overlay_bg md:block hidden"></div>
          <div className="absolute top-0 w-[100vw] h-[40vh] overlay_bg md:hidden block"></div>
          <div className="absolute bottom-0 lg:top-[550px] min-[1441px]:top-[680px] min-[1720px]:top-[820px] w-[100vw] h-[50px] sm:h-[150px] lg:h-[300px] blur_skin_bg"></div>
          <div className="container mx-auto absolute px-4 left-0 right-0 md:top-[unset] top-[20px]">
            <p className="md:hidden block text-white text-[16px] sm:text-[30px] text-left leading-[1.2] mb-2 sm:mb-4 font-[Montserrat-Regular]">Flexi Own</p>
            <h1 className="text-white text-[24px] md:text-[30px] xl:text-[40px] w-[280px] md:w-[450px] font-[Mulish-Regular] font-bold md:font-[Mulish-Black] text-left leading-[1.2]">Bring Your Dream Kitchen To Life with INTRIX FlexiOwn Plan</h1>
            <p className="text-white text-[20px] text-left leading-[1.2] md:w-[450px] mt-6 md:block hidden font-[Montserrat-Regular]">Upgrade your home affordably with plans that cater to your financial needs.</p>
          </div>
        </div>
        <p className="text-[#292929] text-[18px] font-[Montserrat-Regular] text-center leading-[1.2] md:mt-6 mb-12 md:hidden block px-4 mx-auto max-w-[350px]">Upgrade your home affordably with plans that cater to your budgetary needs.</p>
        <h2 className="z-[20] relative container mx-auto font-bold text-[#343637] mb-4 text-[24px] md:text-[30px] px-4 text-center md:text-left">What&apos;s In The FlexiOwn Plan</h2>
        <div className="z-[20] relative mb-8 mt-6 px-4 border-b border-[#421908]">
        <SupportCards cards={cardData} />
        </div>
        <h2 className="container mx-auto font-bold text-[#343637] mb-4 text-[24px] md:text-[30px] px-4 text-center md:text-left">How It Works</h2>
        <div className="mb-12 mt-6 px-4 border-b border-[#421908]">
        <SupportCards cards={cardData2} />
        </div>
        <div className="my-12 md:my-24 px-4">
          <FAQAccordionFlexiown />
        </div>
        </>
      ),
    },
    {
      id: "1",
      name: "Easy Payment Plan",
      content: (
        <>
        <div className="relative text-center mx-auto mb-4 h-[50vh] sm:h-[850px] lg:h-[700px] min-[1441px]:h-[900px] payment_bg2 flex items-center mt-[55px] sm:mt-0">
          <div className="absolute top-0 w-[45vw] h-[700px] min-[1441px]:h-[900px] vertical_overlay_bg md:block hidden"></div>
          <div className="md:block hidden absolute top-0 w-[100vw] h-[40vh] overlay_bg md:hidden block"></div>
          <div className="absolute bottom-0 lg:top-[550px] min-[1441px]:top-[680px] w-[100vw] h-[150px] sm:h-[150px] lg:h-[300px] blur_skin_bg"></div>
          <div className="container md:block hidden mx-auto absolute px-4 left-0 right-0 md:top-[unset] top-[20px]">
            <p className="text-white text-[16px] sm:text-[30px] text-left leading-[1.2] mb-2 sm:mb-4 font-[Montserrat-Regular]">Easy Payment Plan </p>
            <h1 className="mb-4 text-white text-[24px] md:text-[30px] xl:text-[40px] w-[280px] md:w-[450px] font-[Mulish-Regular] font-bold md:font-[Mulish-Black] text-left leading-[1.2]">Own your INTRIX One Tap with the Easy Payment Plan!</h1>
            <p className="text-white text-[20px] text-left leading-[1.2] md:w-[420px] mt-6 font-[Montserrat-Regular]">With the EPP, you are able to use your credit card to pay the instalment of your INTRIX One Tap with no upfront payment!*</p>
            <i className="text-white text-[12px] text-left leading-[1.2] mt-12 font-[Montserrat-Regular]">*processing fees apply</i>
          </div>
        </div>
        <div className="text-[#292929] md:hidden block text-center mb-6 mt-[-60px] relative">
          <p className="text-[16px] leading-[1.2] mb-4">Easy Payment Plan </p>
          <h1 className="mb-6 mx-auto text-[24px] w-[280px] sm:w-full font-[Mulish-Regular] font-bold leading-[1.2]">Own your INTRIX One Tap with the Easy Payment Plan!</h1>
          <p className="text-[18px] font-[Montserrat-Regular] text-center leading-[1.2] mb-2 px-4 mx-auto max-w-[350px] sm:max-w-full">
          With the EPP, you are able to use your credit card to pay the instalment of your INTRIX One Tap with no upfront payment*!
          </p>
          <p className="text-[12px] leading-[1.2] font-[Montserrat-Regular]">*Processing fees apply</p>
        </div>
        <h2 className="z-[2] relative container mx-auto font-bold text-[#343637] mb-4 text-[24px] md:text-[30px] px-4 text-center md:text-left">How It Works</h2>
        <div className="z-[2] relative mb-12 mt-6 px-4 md:border-b border-[#421908]">
        <SupportCards cards={cardData3} />
        </div>
        <div className="border-b border-[#421908] pb-12 px-4">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-12 items-center mb-6">
            <div className="bg-[#F79932] px-4 py-6 rounded-[32px] text-black flex items-center flex-col leading-[1.2] h-fit">
              <h2 className="text-center font-bold text-[18px] md:text-[30px]">Example of EPP Monthly <br/>Instalment Breakdown:</h2>
              <p className="text-center text-[14px] md:text-[20px] mt-4 md:mt-6 mb-4">If you&apos;re looking to buy an<br/> INTRIX One Tap 4-in-1 using EPP,</p>
              <p className="text-[14px] md:text-[16px] border-t border-[#000] flex items-center justify-between w-full py-2"><span>Outright price:</span><span>RM 5,200</span></p>
              <p className="text-[14px] md:text-[16px] border-t border-[#000] flex items-center justify-between w-full py-2"><span>Processing Fees:</span><span>RM 200</span></p>
              <p className="text-[14px] md:text-[16px] border-t border-[#000] flex items-center justify-between w-full py-2"><span>Tenure:</span><span>24 months</span></p>
              <p className="text-[14px] md:text-[16px] border-t border-[#000] flex items-center justify-between w-full py-2"><span>Total:</span><span>RM 5,400</span></p>
              <p className="text-[14px] md:text-[16px] pb-8 border-t border-[#000] flex items-center justify-between w-full py-2"><span>Monthly Payment:</span><span>RM 225 x 24 months</span></p>
            </div>
            <ParticipatingBanks />
          </div>
          <i className="container mx-auto text-[14px] text-[#525456] leading-[0.9] block">
          *A processing fee of RM 200 applies to your entire order when you choose EPP.
          </i>
          <i className="container mx-auto block text-[14px] text-[#525456]">
          **Easy Payment Plan (EPP) is only applicable to orders above RM 3,000.
          </i>
        </div>

        <div className="my-12 md:my-24 px-4">
          <FAQAccordionEPP />
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
    if (tabParam !== null) {
      const tabIndex = parseInt(tabParam, 10);
      if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex < allTabs.length) {
        setActiveTabIndex(tabIndex);
      }
    }
  }, [tabParam]);


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
        
          <div className="overflow-x-scroll md:overflow-x-hidden w-full absolute left-0 right-0 top-[40px] mx-auto z-[9] hidden">
          {/* <div className="overflow-x-scroll md:overflow-x-hidden w-full absolute left-0 right-0 top-[40px] mx-auto z-[9] md:block hidden"> */}
            <h1 className="text-[#fff] md:text-[30px] font-300 !font-[Mulish-Light] text-center">Payment Plans</h1>
            <div className="flex-row relative mx-auto flex h-12 rounded-3xl bg-[#E2DBC6] px-2 backdrop-blur-sm mt-2 w-full md:w-fit gap-4">
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
        
          {allTabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`relative inset-0 transition-opacity duration-300 [@media(max-height:800px)]:mt-[-15px] md:mt-24 ${
                activeTabIndex === index ? "opacity-100 z-[3] h-fit" : "absolute opacity-0 pointer-events-none hidden"
              }`}
            >
              {tab.content}
            </div>
          ))}
          
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
