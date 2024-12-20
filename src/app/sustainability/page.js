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
        },
        {
            title: "TWO",
            imageSrc: "/support/video.png",
            description: "Video Call Via Zoom",
        },
        {
            title: "THREE",
            imageSrc: "/support/Vector.png",
            description: "Chat With Us On Whatsapp",
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
                    <div className="container mx-auto mb-12 md:px-4">
                        {/* <h2 className="font-bold text-[#343637] mb-2 mt-12 md:text-[30px] text-center">What Every Tap Has Done</h2> */}
                        <h2 className="font-bold text-[#343637] mb-2 mt-4 md:mt-12 md:text-[30px] text-center">
                            How Our EcoSmart Tech Helps You Save
                        </h2>
                        <div className="relative mb-6">
                            <video
                                preload="auto"
                                ref={headerVideoRef}
                                className="w-full"
                                // onClick={handleVideoClick}
                                controls
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
                    </div>
                    <div className="container mx-auto mb-6 px-4 flex flex-col md:flex-row gap-4">
                        <div className="rounded-[30px] bg-[#F79932] flex items-center justify-center gap-4 md:gap-12 px-4 md:px-[4vw] py-6 md:py-[5vw] w-full md:w-1/2">
                            <Image
                                alt="save energy"
                                className="block max-w-[70px] md:max-w-[120px]"
                                src={"/sustainability/save_energy.png"}
                                width={500}
                                height={500}
                            />
                            <h3 className="font-[Montserrat-Bold] text-[20px] md:text-[30px] leading-[1.2]">
                                Enjoy up to <b className="text-[#421908]">80&#37; energy saving</b> compared to an average electric kettle&#42;&#33;
                            </h3>
                        </div>
                        <div className="md:p-6 w-full md:w-1/2 text-[#292929]">
                            <div className="mb-6 text-[16px] xl:text-[20px]">
                                The INTRIX One Tap consumes between 0.6 to 0.8 kWh per day on Eco Mode for a similar supply of hot water. This
                                translates to RM0.23 to RM0.39 per day. On average, expect to save up to 80% of your monthly electricity costs for hot
                                water!
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
                                className="block max-w-[80px] md:max-w-[180px]"
                                src={"/sustainability/recycle.png"}
                                width={500}
                                height={500}
                            />
                            <h3 className="font-[Montserrat-Bold] text-[20px] md:text-[30px] leading-[1.2]">
                                Filter is crafted with <b className="text-[#421908]">95% recyclable materials</b> to allow for repurposing after use.
                            </h3>
                        </div>
                        <div className="md:p-6 w-full md:w-1/2 text-[#292929]">
                            <div className="mb-6 text-[16px] xl:text-[20px] md:text-right">
                                The INTRIX All-In-One Filter is designed with <b className="font-[Montserrat-Bold]">95% recyclable materials</b>,
                                allowing the components to be repurposed after use, ultimately reducing waste.
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto mb-6 px-4 flex flex-col md:flex-row gap-4">
                        <div className="rounded-[30px] bg-[#F79932] flex items-center justify-center gap-6 px-4 md:px-[4vw] py-6 md:py-[5vw] w-full md:w-1/2">
                            <Image
                                alt="cost"
                                className="block max-w-[80px] md:max-w-[150px]"
                                src={"/sustainability/cost.png"}
                                width={500}
                                height={500}
                            />
                            <h3 className="font-[Montserrat-Bold] text-[20px] md:text-[30px] leading-[1.2]">
                                Reduces <b className="text-[#421908]">overall cost by 75%</b> compared to other water purifier brands per year*!
                            </h3>
                        </div>
                        <div className="md:p-6 w-full md:w-1/2 text-[#292929]">
                            <div className="mb-6 text-[16px] xl:text-[20px]">
                                Not only that, the All-In-One Filter only requires a <b className="font-[Montserrat-Bold]">one-time filter change</b>{" "}
                                in a single year, compared to other water purifier brands which require up to four filter changes per year*.
                            </div>
                            <div className="text-[16px] xl:text-[20px]">
                                This significantly reduces waste and your overall cost, all at the same time!
                            </div>
                        </div>
                    </div>
                    <div className="my-24">
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
            <div className="container text-center mx-auto md:mt-[250px] mb-4">
                <h1 className="text-[#343637] md:text-[30px] mb-4 font-300 !font-[Mulish-Light]">Sustainability</h1>
                <h2 className="font-bold text-[#343637] mb-4 md:text-[40px]">Innovation Without Compromise</h2>
                <div className="font-[Montserrat-Regular] md:text-[20px] text-[#292929]">The road to sustainability starts with One Tap.</div>
                <div className="overflow-x-scroll w-full relative">
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
