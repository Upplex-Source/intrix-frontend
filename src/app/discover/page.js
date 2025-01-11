"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import FooterWhite from "@/components/FooterWhite";
import SupportCardsWhite from "@/components/SupportCardWhite";
import "./discover.scss";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; // Core Swiper CSS
import "swiper/css/pagination"; // Pagination module CSS
import { Pagination } from 'swiper/modules';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
function Page() {
    const contentData = [
        {
            title: "DISRUPTIVE",
            description: "We are standard-setters and are constantly challenging the norm through our design and technology.",
        },
        {
            title: "SIMPLIFIED",
            description: "We develop practical and easy-to-use solutions to create convenient and simplified living.",
        },
        {
            title: "HUMANISED",
            description: "We observe every human behaviour, action and interaction with fresh eyes to identify undiscovered needs.",
        },
        {
            title: "AGILE",
            description: "We constantly reﬂect, adapt and change with times to do what is necessary to deliver value to our stakeholders.",
        },
        {
            title: "PRECISE",
            description: "We craft our products intricately, component by component to ensure we fulﬁll the needs of our customers.",
        },
        {
            title: "RESILIENT",
            description: "We have a can-do attitude and go the extra mile to achieve our goals and results, regardless of the roadblocks we face.",
        },
        {
            title: "IMPACTFUL",
            description: "We are a platform for disruptors to grow their lives with us and impact the world together.",
        },
    ];

    const firstFourItems = contentData.slice(0, 4);
    const remainingItems = contentData.slice(4);

    const cardData = [
        {
            title: "ONE",
            imageSrc: "/discover/sms.png",
            description: "Contact Us Via Email",
        },
        {
            title: "TWO",
            imageSrc: "/discover/video.png",
            description: "Video Call Via Zoom",
        },
        {
            title: "THREE",
            imageSrc: "/discover/whatsapp.png?v=1.1",
            description: "Chat With Us on Whatsapp",
        },
    ];

    const imageData = [
        { alt: "TRX", src: "/discover/trx-white.png", width: 180, height: 180, px: 4 },
        { alt: "London stadium", src: "/discover/london_stadium.png", width: 150, height: 150, px: 4 },
        { alt: "Genting", src: "/discover/genting.png", width: 160, height: 160, px: 2 },
        { alt: "Park Hyatt", src: "/discover/park-hyatt.png", width: 200, height: 120, px: 0 },
        { alt: "Skegness", src: "/discover/skegness.png", width: 180, height: 180, px: 2 },

        { alt: "Singapore Airline", src: "/discover/singapore.png", width: 200, height: 100, px: 2 },
        { alt: "PNB", src: "/discover/pnb.png", width: 200, height: 100, px: 2 },
        { alt: "Sunway", src: "/discover/sunway.png", width: 160, height: 120, px: 2 },
        { alt: "Shangri La", src: "/discover/shang.png", width: 200, height: 200, px: 2 },
        { alt: "Four Seasons", src: "/discover/four_season.png", width: 180, height: 180, px: 0 },
        { alt: "St Regis", src: "/discover/st_regis.png", width: 180, height: 120, px: 2 },
        { alt: "UOB", src: "/discover/uob.png", width: 160, height: 120, px: 2 },
        { alt: "Secret Recipe", src: "/discover/secret.png", width: 200, height: 12, px: 0 },
        { alt: "Banyan Tree", src: "/discover/banyan.png", width: 120, height: 80, px: 4 },
        { alt: "Double Tree", src: "/discover/double_tree.png", width: 140, height: 140, px: 4 },
        { alt: "Marriott", src: "/discover/marriot.png", width: 120, height: 120, px: 6 },
        { alt: "Sky World", src: "/discover/sky_world.png", width: 220, height: 120, px: 0 },
        { alt: "Sheraton", src: "/discover/sheraton.png", width: 150, height: 120, px: 2 },
        { alt: "Signature", src: "/discover/signature.png", width: 220, height: 120, px: 2 },
        { alt: "Gleneagles", src: "/discover/gleneagles.png", width: 220, height: 120, px: 0 },
        { alt: "YTL", src: "/discover/ytl.png", width: 120, height: 120, px: 6 },
        { alt: "Hard Rock Cafe", src: "/discover/hard_rock.png", width: 130, height: 120, px: 2 },
        { alt: "Marks & Spencer", src: "/discover/marks_and_spencer.png", width: 140, height: 120, px: 2 },
        { alt: "Westin", src: "/discover/westin.png", width: 150, height: 120, px: 2 },
        { alt: "Hyatt Regency", src: "/discover/hyatt.png", width: 160, height: 120, px: 0 },
    ];

    useEffect(()=>{
        AOS.init({
            once: true,
        });
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        window.scrollTo({ top: 0, behavior: "smooth" });

        let currentIndex = -1;
        let animating;
        let hasFirstExit;
        let swipePanels = gsap.utils.toArray(".swipe-section .panel");

        gsap.set(".move-100", { yPercent: 100 });

        gsap.set(swipePanels, {
            zIndex: (i) => i,
        });

        let intentObserver = ScrollTrigger.observe({
            type: "wheel,touch",
            onUp: () => (hasFirstExit ? !animating && gotoPanel(currentIndex + 1, true) : exitAmin("forward")),
            onDown: () => (!hasFirstExit ? !animating && gotoPanel(currentIndex - 1, false) : exitAmin("reverse")),
            wheelSpeed: -1,
            tolerance: 10,
            preventDefault: true,
            onPress: (self) => {
                ScrollTrigger.isTouch && self.event.preventDefault();
            },
        });
        intentObserver.disable();

        function exitAmin(direction) {
            if (direction === "forward") {
                const tl = gsap.timeline({
                    onComplete: () => (hasFirstExit = true),
                });
                tl.to(".first-panel", { backgroundColor: "transparent" })
                    .to(".first-text", { opacity: 0 }, "<")
                    .to(".first-img", { opacity: 0, scale: 2 }, "<");
            } else {
                const tl = gsap.timeline({
                    onComplete: () => (hasFirstExit = false),
                });
                tl.to(".first-panel", { backgroundColor: "black" })
                    .to(".first-text", { opacity: 1 }, "<")
                    .to(".first-img", { opacity: 1, scale: 1 }, "<");
            }
        }

        function gotoPanel(index, isScrollingDown) {
            animating = true;
            if ((index === swipePanels.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
                let target = index;
                gsap.to(target, {
                    duration: 0.0,
                    onComplete: () => {
                        animating = false;
                        isScrollingDown && intentObserver.disable();
                    },
                });
                return;
            }

            let target = isScrollingDown ? swipePanels[index] : swipePanels[currentIndex];

            gsap.to(target, {
                yPercent: isScrollingDown ? 0 : 100,
                duration: 1,
                onComplete: () => {
                    animating = false;
                },
            });

            currentIndex = index;
        }

        ScrollTrigger.create({
            trigger: ".first-panel",
            pin: true,
            start: "top top+=50px",
            end: "+=1",
            // markers: true,
            onEnter: (self) => {
                intentObserver.enable();
                gotoPanel(currentIndex + 1, true);
            },
            onEnterBack: () => {
                intentObserver.enable();
                gotoPanel(currentIndex - 1, false);
            },
        });
    }, []);

    return (
        <>
        <div id="discover-wrapper" className="swipe-section bg-black text-white">
            <div className="first-panel mx-auto px-4 relative flex sm:flex-row flex-col items-center sm:items-center justify-center">
                <h1 className="first-text text-[40px] sm:text-[3.5em] [@media(max-height:800px)]:text-[4em] lg:text-[5em] xl:text-[6em] font-[Mulish-Black] leading-[1.1] sm:min-w-[500px] z-[2] pt-12 sm:pt-0 absolute left-4 sm:relative top-0">
                    WE ARE <br />
                    INTRIX
                </h1>
                <Image
                    alt="intrix HQ"
                    className="first-img block ml-0 sm:ml-[-40vw] [@media(max-height:800px)]:ml-[-25vw] lg:ml-[-30vw] xl:ml-[-16vw] sm:max-w-[65vw] max-w-[120vw] pt-[160px] sm:pt-0"
                    src={"/discover/HQ-INTRIX 1.png"}
                    width={1200}
                    height={860}
                />
            </div>
            <div className="panel mx-auto px-4 py-4 [@media(min-height:800px)]:py-12">
                <div className="mx-auto w-fit px-4 pb-8 [@media(min-height:800px)]:pb-4">
                    <h2 className="text-[24px] md:text-[40px] [@media(max-height:800px)]:text-[24px] font-[Mulish-Bold] text-center mb-2">Undiscovered Needs</h2>
                    <p className="text-[16px] [@media(max-height:800px)]:text-[16px] md:text-[20px] text-center max-w-[800px] mx-auto">
                        We see undiscovered needs as valuable yet unsolved issues, missed opportunities or utilities that have never been expressed
                        before because people do not know that they need them until they experience them
                    </p>
                </div>
                <div className="relative discover_needs min-[1280px]:min-h-[900px] min-[1600px]:min-h-[80vh] flex items-center container mx-auto">
                    <div className="absolute left-0 top-0">
                        <p className="max-w-[380px] [@media(max-height:800px)]:text-[14px] text-[20px] [@media(max-height:800px)]:mb-2 mb-6">
                            Here at INTRIX, we&apos;re a team of innovative engineers dedicated to uncovering and solving needs you didn&apos;t even
                            know you had.
                        </p>
                        <p className="[@media(max-height:700px)]:max-w-[400px] max-w-[300px] [@media(max-height:800px)]:text-[14px] text-[20px]">
                            Since our start in 2003 as experts in thermal and hydro technology, we&apos;ve shifted focus to HVAC, renewable energy,
                            and water purification—industries where we make everyday life simpler and smarter.{" "}
                        </p>
                    </div>
                    <div className="absolute left-0 right-0 mx-auto w-fit">
                        <Image
                            alt="tap"
                            className="fire block rounded-full min-[1280px]:max-w-[550px] min-[1600px]:max-w-[650px]"
                            src={"/discover/mid_float.png"}
                            width={647}
                            height={862}
                        />
                    </div>
                    <Image
                        alt="tap"
                        className="block droplet rounded-full min-[1280px]:max-w-[250px] xl:max-w-[300px]"
                        src={"/discover/droplet.png"}
                        width={347}
                        height={347}
                    />
                    <Image
                        alt="tap"
                        className="tech block rounded-full min-[1280px]:max-w-[150px] xl:max-w-[200px]"
                        src={"/discover/tech.png"}
                        width={347}
                        height={347}
                    />
                    <Image
                        alt="tap"
                        className="drink left-4 min-[1280px]:bottom-[300px] xl:bottom-[45vh] min-[1800px]:bottom-[35vh] block rounded-full min-[1280px]:max-w-[200px] xl:max-w-[250px]"
                        src={"/discover/drink.png"}
                        width={347}
                        height={347}
                    />
                    <Image
                        alt="tap"
                        className="science absolute left-24 min-[1280px]:bottom-[5vh] xl:bottom-[15vh] min-[1800px]:bottom-[12vh] block rounded-full min-[1280px]:max-w-[250px] xl:max-w-[325px] h-fit object-cover"
                        src={"/discover/science.png"}
                        width={347}
                        height={347}
                    />
                    <div className="max-w-[380px] absolute right-0 [@media(max-height:800px)]:bottom-0 bottom-[15vh]">
                        <p className="[@media(max-height:800px)]:text-[14px] text-[20px]">
                            With 19 patents and a global portfolio of top clients, we&apos;re passionate about disrupting the norms and tackling
                            day-to-day challenges for a better, more efficient world.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="bg-black flex items-center overflow-hidden">
                <div className="container mx-auto flex items-start min-[1700px]:items-center justify-between pb-24 md:flex-row flex-col-reverse w-full h-full">
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-4 md:px-12 mt-6 md:mt-0">
                        <div className="mx-auto max-w-[800px] w-full pt-4 min-h-[100vh]">
                            <h2 className="text-[24px] md:text-[40px] font-[Mulish-Bold] leading-[1.2] mb-12 [@media(max-height:800px)]:mb-4 w-full text-white" data-aos="fade-right">Our Values</h2>
                            <div className=" [@media(max-height:800px)]:hidden block">
                            {contentData.map((item, index) => (
                                <div className="mb-4 [@media(min-height:800px)]:mb-10" data-aos="fade-up" key={index}>
                                    <h2 className="text-[16px] md:text-[20px] [@media(max-height:800px)]:text-[16px] font-[Mulish-Bold] leading-[1.2] mb-2 text-white">{item.title}</h2>
                                    <p className="font-[Montserrat-Regular] text-[14px] md:text-[20px] [@media(max-height:800px)]:text-[16px] text-white">{item.description}</p>
                                </div>
                            ))}
                            </div>
                        
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                className="discover_swiper [@media(max-height:800px)]:!block !hidden"
                                modules={[Pagination]}
                                pagination={true}
                            >
                                <SwiperSlide>
                                    {firstFourItems.map((item, index) => (
                                    <div className="mb-4 [@media(min-height:800px)]:mb-10" data-aos="fade-up" key={index}>
                                        <h2 className="text-[16px] md:text-[20px] [@media(max-height:800px)]:text-[16px] font-[Mulish-Bold] leading-[1.2] mb-2 text-white">{item.title}</h2>
                                        <p className="font-[Montserrat-Regular] text-[14px] md:text-[20px] [@media(max-height:800px)]:text-[16px] text-white">{item.description}</p>
                                    </div>
                                    ))}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {remainingItems.map((item, index) => (
                                    <div className="mb-4 [@media(min-height:800px)]:mb-10" data-aos="fade-up" key={index + 4}>
                                        <h2 className="text-[16px] md:text-[20px] [@media(max-height:800px)]:text-[16px] font-[Mulish-Bold] leading-[1.2] mb-2 text-white">{item.title}</h2>
                                        <p className="font-[Montserrat-Regular] text-[14px] md:text-[20px] [@media(max-height:800px)]:text-[16px]  text-white">{item.description}</p>
                                    </div>
                                    ))}
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="w-full md:w-fit h-full absolute right-0 " data-aos="fade-left">
                        <Image alt="tap" className="block w-fit h-full mr-auto" src={"/discover/tap.png"} width={647} height={862} />
                    </div>
                </div>
            </div>
            <div className="bg-black  flex items-center overflow-hidden">
                <div className="w-full">
                    <div className="flex md:flex-row flex-col-reverse items-center md:gap-0 gap-6 mb-12 md:mb-0">
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                            <div className="px-4">
                                <h2 data-aos="fade-right" className="text-center md:text-left mx-auto md:mx-0 max-w-[300px] text-[24px] md:text-[40px] font-[Mulish-Bold] leading-[1.2] mb-4 text-white">
                                    OUR PURPOSE &amp; MISSION
                                </h2>
                                <p data-aos="fade-right" className="text-center md:text-left font-[Montserrat-Regular] text-[14px] md:text-[20px] max-w-[450px]  text-white">
                                    We exist to fulfil undiscovered needs through disruptive engineering.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Image data-aos="fade-left" alt="purpose" className="block w-full" src={"/discover/purpose.png"} width={720} height={434} />
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col items-center md:gap-0 gap-6 md:mb-0 mb-24">
                        <div className="w-full md:w-1/2">
                            <Image data-aos="fade-right" alt="vision" className="block w-full" src={"/discover/vision.png"} width={720} height={434} />
                        </div>
                        <div className="w-full md:w-1/2 flex items-center justify-center ">
                            <div className="px-4">
                                <h2 data-aos="fade-left" className="text-center md:text-left mx-auto md:mx-0 max-w-[300px] text-[24px] md:text-[40px] font-[Mulish-Bold] leading-[1.2] mb-4 text-white">
                                    OUR VISION
                                </h2>
                                <p data-aos="fade-left" className="text-center md:text-left font-[Montserrat-Regular] text-[14px] md:text-[20px] max-w-[450px] text-white">
                                    A world where engineers design disruptive solutions that improve daily lives of mankind.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black relative w-full flex flex-col justify-between pt-24">
                <h2 className="container mx-auto px-4 text-white text-[24px] md:text-[50px] xl:text-[60px] font-[Mulish-Bold] leading-[1.1] absolute left-0 right-0 z-[2]" data-aos="fade-down">
                    INTRIX AROUND <br /> THE WORLD
                </h2>
                <div className="overflow-x-auto block" data-aos="fade-up">
                    <Image
                        alt="world"
                        className="relative min-w-[1000px] object-right object-cover"
                        src={"/discover/world.jpg"}
                        width={2000}
                        height={1034}
                    />
                </div>
                {/* <div className="relative hidden sm:block world_bg">
                    <Image
                        alt="Hong Kong"
                        className="flag_hk"
                        src={"/discover/flag_hk.png"}
                        width={300}
                        height={700}
                    />
                    <Image
                        alt="Malaysia"
                        className="block absolute top-[33%] min-[768px]:top-[35%] min-[850px]:top-[36%] min-[900px]:top-[37%] min-[1024px]:top-[38%] min-[1120px]:top-[39%] min-[1280px]:top-[41%] min-[1440px]:top-[42%] min-[1620px]:top-[43%] min-[1900px]:top-[44%] w-[120px] sm:w-[90px] md:w-[100px] right-[25vw]"
                        src={"/discover/flag_my.png"}
                        width={300}
                        height={700}
                    />
                    <Image
                        alt="Australia"
                        className="block absolute top-[14vw] sm:top-[22vw] md:top-[14vw] xl:top-[16vw] w-[120px] sm:w-[90px] md:w-[110px] right-[13vw]"
                        src={"/discover/flag_au.png"}
                        width={300}
                        height={700}
                    />
                    <Image
                        alt="United Kingdom"
                        className="block absolute top-[14vw] sm:top-[22vw] md:top-[20vw] xl:top-[21vw] w-[120px] sm:w-[90px] md:w-[150px] md:left-[32vw] xl:left-[34vw]"
                        src={"/discover/flag_uk.png"}
                        width={300}
                        height={700}
                    />
                </div> */}
            </div>
            <div className="bg-black  md: mx-auto pt-4 [@media(min-height:800px)]:pt-24" style={{ height: "fit-content" }}>
                <h2 className="text-white text-[30px] text-center sm:text-left leading-[1.2] px-4 container mx-auto">
                    COMPANIES <br /> WE&apos;VE TAPPED
                </h2>
                {/* <div className="grid grid-cols-5 gap-4 py-24"> */}
                <div className="flex flex-wrap items-center gap-y-8 py-20 md:py-24 container mx-auto">
                    {imageData.map((image, index) => (
                        <div className="w-1/5" key={index}>
                            <Image
                                alt={image.alt}
                                src={image.src}
                                width={image.width}
                                height={image.height}
                                className={`block mx-auto sm:px-4 px-` + image.px}
                            />
                        </div>
                    ))}
                </div>
                <div className="mx-auto px-4 border-t border-white pb-0 pt-12 sm:pt-12 sm:pb-12">
                    <h2 className="container mx-auto text-white text-[24px] md:text-[30px] mb-4 sm:w-full w-[300px]">
                        Want To Work Together? Let&apos;s Talk!
                    </h2>
                    <SupportCardsWhite cards={cardData} />
                </div>
                <FooterWhite />
            </div>
        </>
    );
}

export default Page;