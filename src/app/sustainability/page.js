"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";
import ExperienceCentreForm from "@/components/ExperienceCentreForm";
import SupportCards from "@/components/SupportCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

function Page() {
    const headerVideoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayIcon, setShowPlayIcon] = useState(true);

    const handlePlayPause = () => {
        if (headerVideoRef.current) {
            if (isPlaying) {
                headerVideoRef.current.pause();
                setShowPlayIcon(true);
            } else {
                headerVideoRef.current.play();
                setShowPlayIcon(false);
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVideoClick = () => {
        if (headerVideoRef.current) {
            if (isPlaying) {
                headerVideoRef.current.pause();
                setShowPlayIcon(true);
            } else {
                headerVideoRef.current.play();
                setShowPlayIcon(false);
            }
            setIsPlaying(!isPlaying);
        }
    };

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

    const cardData = [
        {
            title: "ONE",
            imageSrc: "/support/sms.png",
            description: "Contact Us Via Email",
            link: "mailto:intrix.ecommerce@intrixgroup.com",
        },
        // {
        //     title: "TWO",
        //     imageSrc: "/support/video.png",
        //     description: "Video Call Via Zoom",
        // },
        {
            title: "TWO",
            imageSrc: "/support/Vector.png",
            description: "Chat With Us On Whatsapp",
            link: "https://wa.me/+60123671380",
        },
    ];

    const cardData2 = [
        {
            title: "ONE",
            imageSrc: "/support/pdf-file.png",
            description: "Downloadable PDFs",
        },
        {
            title: "TWO",
            imageSrc: "/support/user-guide.png",
            description: "Installation Guides",
        },
        {
            title: "THREE",
            imageSrc: "/support/tutorial.png",
            description: "Video Tutorials",
        },
    ];

    let allTabs = [
        {
            id: "statistics",
            name: "Our Statistics",
            content: (
                <>
                    <div className="container mx-auto md:px-4">
                        {/* <h2 className="font-bold text-[#343637] mb-2 mt-12 md:text-[30px] text-center">What Every Tap Has Done</h2> */}
                        <h2 className="font-bold text-[#343637] mb-8 mt-6 md:mt-[60px] text-[20px] md:text-[30px] text-center leading-[1.2] max-w-[250px] md:max-w-[unset] px-4 mx-auto">
                            How Our EcoSmart Tech Helps You Save
                        </h2>
                        
                    </div>
                    <div className="relative mb-12 md:mb-24 md:container mx-auto px-4">
                            <video
                                preload="auto"
                                ref={headerVideoRef}
                                className="w-full"
                                // onClick={handleVideoClick}
                                controls
                                poster="/sustainability/video_poster.png"
                            >
                                <source src="/videos/Intrix-eco smart.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {/* {showPlayIcon && (
              <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="absolute w-[50px] h-[50px] md:w-[120px] md:h-[120px] inset-0 m-auto text-white text-6xl md:text-[12rem] cursor-pointer z-10"
                  onClick={handlePlayPause}
              />
              )} */}
                        </div>
                    <div className="container mx-auto mb-12 md:mb-6 px-4 flex flex-col md:flex-row gap-4 items-center">
                        <div className="rounded-[30px] bg-[#F79932] flex items-center justify-center gap-4 md:gap-12 px-4 md:px-[4vw] py-6 md:py-[4vw] w-full md:w-1/2">
                            <Image
                                alt="save energy"
                                className="block max-w-[70px] lg:max-w-[80px] min-[1600px]:max-w-[100px]"
                                src={"/sustainability/save_energy.png"}
                                width={500}
                                height={500}
                            />
                            <h3 className="font-[Montserrat-Bold] text-[20px] lg:text-[24px] min-[1600px]:text-[30px] leading-[1.2]">
                                Save up to<b className="text-[#421908]"> 80&#37; Energy</b>, Protect the Planet
                            </h3>
                        </div>
                        <div className="md:px-6 w-full md:w-1/2 text-[#292929] md:text-left text-center">
                            <div className="mb-6 text-[16px] xl:text-[20px] md:text-justify">
                               INTRIX One Tap is engineered for energy efficiency, using up to <b className="font-[Montserrat-Bold]">80&#37; less electricity</b> than conventional kettles&#42;. By delivering hot water instantly and precisely, it eliminates energy wasted on repetitive boiling, reducing your household or office power consumption dramatically. With every cup of hot water, you are actively lowering carbon emissions and contributing to a more sustainable future—without changing your routine.
                            </div>
                            <div className="italic text-[12px] xl:text-[14px]">
                                *An average electric kettle for a family of 4 will consume approximately between 1.8 to 2 kWh per day to boil water,
                                which is about RM0.64 to RM0.98 per day (depending on tariff category).
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto mb-6 px-4 flex flex-col md:flex-row-reverse items-center gap-4">
                        <div className="rounded-[30px] bg-[#F79932] flex items-center justify-center gap-4 md:gap-8 px-4 md:px-[3vw] py-6 md:py-[4vw] w-full md:w-1/2">
                            <Image
                                alt="save energy"
                                className="block max-w-[80px] lg:max-w-[120px] min-[1600px]:max-w-[150px]"
                                src={"/sustainability/recycle.png"}
                                width={500}
                                height={500}
                            />
                            <h3 className="font-[Montserrat-Bold] text-[20px] lg:text-[24px] min-[1600px]:text-[30px] leading-[1.2]">
                                Designed for a  <b className="text-[#421908]">Circular Futures</b>
                            </h3>
                        </div>
                        <div className="md:p-6 w-full md:w-1/2 text-[#292929]">
                            <div className="mb-6 text-[16px] xl:text-[20px] text-center md:text-justify">
                                Sustainability isn&apos;t just a feature—it&apos;s embedded into the design. Each INTRIX All-in-One Filter is crafted from <b className="font-[Montserrat-Bold]">95% recyclable materials</b>,
                                supporting a circular product lifecycle. At the end of its service life, the filter will be repurposed or recycled, diverting waste from landfills and reducing raw material consumption. By choosing INTRIX, you&apos;re not only accessing purified water—you&apos;re supporting a regenerative system that keeps resources in use and waste out of the environment.
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto mb-6 px-4 flex flex-col md:flex-row gap-4 items-center">
                        <div className="rounded-[30px] bg-[#F79932] flex items-center justify-center gap-6 px-4 md:px-[3vw] py-6 md:py-[4vw] w-full md:w-1/2">
                            <Image
                                alt="cost"
                                className="block max-w-[80px] lg:max-w-[120px] min-[1600px]:max-w-[150px]"
                                src={"/sustainability/trash.png"}
                                width={500}
                                height={500}
                            />
                            <h3 className="font-[Montserrat-Bold] text-[20px] lg:text-[24px] min-[1600px]:text-[30px] leading-[1.2]">
                                <b className="text-[#421908]">One Filter. One Year. </b> Big Environmental Impact
                            </h3>
                        </div>
                        <div className="md:p-6 w-full md:w-1/2 text-[#292929] md:text-justify text-center">
                            <div className="text-[16px] xl:text-[20px]">
                                With just one filter replacement per year, INTRIX dramatically reduces packaging waste, emissions from transport, and the volume of plastic filters ending up in landfills. And while it&apos;s just one filter, it&apos;s built to deliver safe, clean, great-tasting drinking water every day. Fewer filters, less waste, and no compromise on your health.
                            </div>
                        </div>
                    </div>
                    <div className="mt-24">
                        <ExploreOurTabs />
                    </div>
                    <div className="mt-12">
                        <ExperienceCentreForm />
                    </div>
                </>
            ),
        },
        // {
        //   id: "reducing_waste",
        //   name: "Reducing Waste",
        //   content: (
        //     <>

        //     </>
        //   ),
        // },
        // {
        //   id: "ecosmart_technology",
        //   name: "Ecosmart Technology",
        //   content: (
        //     <>

        //     </>
        //   ),
        // },
        // {
        //   id: "energy_savings",
        //   name: "Energy Savings",
        //   content: (
        //     <>

        //     </>
        //   ),
        // },
    ];
    return (
        <>
            <div className="container text-center mx-auto mt-[80px] md:mt-[120px] xl:mt-[150px] mb-4">
                <h1 className="text-[#343637] text-[16px] md:text-[30px] mb-4 font-300 !font-[Mulish-Light]">Sustainability</h1>
                <h2 className="font-bold text-[#343637] mb-6 text-[24px] md:text-[40px] max-w-[300px] md:max-w-[unset] mx-auto leading-[1.2]">Innovation Without Compromise</h2>
                <div className="font-[Montserrat-Regular] text-[16px] md:text-[20px] text-[#292929] md:w-full w-[250px] mx-auto">Championing sustainable solutions - One Tap at a time.</div>
                {/* <div className="overflow-x-scroll md:overflow-x-hidden w-full relative">
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
                </div> */}
            </div>
            {/* <div className="mt-4 relative h-full"> */}
            {allTabs.map((tab, index) => (
                <div
                    key={tab.id}
                    className={` inset-0 transition-opacity duration-300 ${
                        activeTabIndex === index ? "opacity-100 z-[3]" : "absolute opacity-0 pointer-events-none hidden"
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
