"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import FAQAccordionFilter from "@/components/FAQAccordionFilter";
import FAQAccordionProduct from "@/components/FAQAccordionProduct";
import FAQAccordionFlexiown from "@/components/FAQAccordionFlexiown";

function Page() {
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

  let allTabs = [
    {
      id: "1",
      name: "General",
      content: (
        <>
        <div className="container mx-auto mb-6 px-4">
          <FAQAccordion />
        </div>
        </>
      ),
    },
    {
      id: "2",
      name: "INTRIX One Tap",
      content: (
        <>
        <div className="container mx-auto mb-6 px-4">
          <FAQAccordionProduct />
        </div>
        </>
      ),
    },
    {
      id: "3",
      name: "All-in-One Filter",
      content: (
        <>
        <div className="container mx-auto mb-6 px-4">
          <FAQAccordionFilter />
        </div>
        </>
      ),
    },
    {
      id: "4",
      name: "Payment Plan",
      content: (
        <>
        <div className="container mx-auto mb-6 px-4">
          <FAQAccordionFlexiown />
        </div>
        </>
      ),
    },
  ];
    return (
        <>
          <div className="text-center mx-auto md:mb-4">
            <h1 className="relative text-[#343637] md:text-[30px] font-300 text-[16px] !font-[Mulish-Light] pt-6 md:pt-12 mb-4 md:mb-0">Support</h1>
            <div className="overflow-x-scroll md:overflow-x-hidden w-full relative bg-[#E2DBC6] md:bg-transparent">
              <div className="flex-row relative mx-auto flex h-12 rounded-3xl bg-[#E2DBC6] px-2 backdrop-blur-sm md:mt-6 w-full sm:w-fit gap-4">
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
            {/* <div className="mt-4 relative h-full"> */}
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
              
          {/* </div> */}
        </>
    );
}

export default Page;
