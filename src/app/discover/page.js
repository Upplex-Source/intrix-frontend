"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import SupportCardClickable from "@/components/SupportCardClickable";
import "./discover.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/pagination"; // Pagination module CSS
import { Pagination } from "swiper/modules";
import { Player } from '@lottiefiles/react-lottie-player';

import AOS from "aos";
import "aos/dist/aos.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
function Page() {
  const contentData = [
    {
      title: "DISRUPTIVE",
      description:
        "We are standard-setters and are constantly challenging the norm through our design and technology.",
    },
    {
      title: "SIMPLIFIED",
      description:
        "We develop practical and easy-to-use solutions to create convenient and simplified living.",
    },
    {
      title: "HUMANISED",
      description:
        "We observe every human behaviour, action and interaction with fresh eyes to identify undiscovered needs.",
    },
    {
      title: "AGILE",
      description:
        "We constantly reﬂect, adapt and change with times to do what is necessary to deliver value to our stakeholders.",
    },
    {
      title: "PRECISE",
      description:
        "We craft our products intricately, component by component to ensure we fulﬁll the needs of our customers.",
    },
    {
      title: "RESILIENT",
      description:
        "We have a can-do attitude and go the extra mile to achieve our goals and results, regardless of the roadblocks we face.",
    },
    {
      title: "IMPACTFUL",
      description:
        "We are a platform for disruptors to grow their lives with us and impact the world together.",
    },
  ];

  const firstFourItems = contentData.slice(0, 4);
  const remainingItems = contentData.slice(4);

  const cardData = [
    {
      title: "ONE",
      imageSrc: "/support/sms.png",
      description: "Contact Us Via Email",
      link: "mailto:intrix.ecommerce@intrixgroup.com",
    },
    // {
    //   title: "TWO",
    //   imageSrc: "/discover/video.png",
    //   description: "Video Call Via Zoom",
    // },
    {
      title: "TWO",
      imageSrc: "/support/Vector.png?v=1.1",
      description: "Chat With Us on Whatsapp",
      link: "https://wa.me/+60123671380",
    },
  ];

  const imageData = [
    {
      alt: "TRX",
      src: "/discover/trx-white.png",
      width: 180,
      height: 180,
      px: 4,
    },
    {
      alt: "London stadium",
      src: "/discover/london_stadium.png",
      width: 150,
      height: 150,
      px: 4,
    },
    {
      alt: "Genting",
      src: "/discover/genting.png",
      width: 160,
      height: 160,
      px: 2,
    },
    {
      alt: "Park Hyatt",
      src: "/discover/park-hyatt.png",
      width: 200,
      height: 120,
      px: 0,
    },
    {
      alt: "Skegness",
      src: "/discover/skegness.png",
      width: 180,
      height: 180,
      px: 2,
    },

    {
      alt: "Singapore Airline",
      src: "/discover/singapore.png",
      width: 200,
      height: 100,
      px: 2,
    },
    { alt: "PNB", src: "/discover/pnb.png", width: 200, height: 100, px: 2 },
    {
      alt: "Sunway",
      src: "/discover/sunway.png",
      width: 160,
      height: 120,
      px: 2,
    },
    {
      alt: "Shangri La",
      src: "/discover/shang.png",
      width: 200,
      height: 200,
      px: 2,
    },
    {
      alt: "Four Seasons",
      src: "/discover/four_season.png",
      width: 180,
      height: 180,
      px: 0,
    },
    {
      alt: "St Regis",
      src: "/discover/st_regis.png",
      width: 180,
      height: 120,
      px: 2,
    },
    { alt: "UOB", src: "/discover/uob.png", width: 160, height: 120, px: 2 },
    {
      alt: "Secret Recipe",
      src: "/discover/secret.png",
      width: 200,
      height: 12,
      px: 0,
    },
    {
      alt: "Banyan Tree",
      src: "/discover/banyan.png",
      width: 120,
      height: 80,
      px: 4,
    },
    {
      alt: "Double Tree",
      src: "/discover/double_tree.png",
      width: 140,
      height: 140,
      px: 4,
    },
    {
      alt: "Marriott",
      src: "/discover/marriot.png",
      width: 120,
      height: 120,
      px: 6,
    },
    {
      alt: "Sky World",
      src: "/discover/sky_world.png",
      width: 220,
      height: 120,
      px: 0,
    },
    {
      alt: "Sheraton",
      src: "/discover/sheraton.png",
      width: 150,
      height: 120,
      px: 2,
    },
    {
      alt: "Signature",
      src: "/discover/signature.png",
      width: 220,
      height: 120,
      px: 2,
    },
    {
      alt: "Gleneagles",
      src: "/discover/gleneagles.png",
      width: 220,
      height: 120,
      px: 0,
    },
    { alt: "YTL", src: "/discover/ytl.png", width: 120, height: 120, px: 6 },
    {
      alt: "Hard Rock Cafe",
      src: "/discover/hard_rock.png",
      width: 130,
      height: 120,
      px: 2,
    },
    {
      alt: "Marks & Spencer",
      src: "/discover/marks_and_spencer.png",
      width: 140,
      height: 120,
      px: 2,
    },
    {
      alt: "Westin",
      src: "/discover/westin.png",
      width: 150,
      height: 120,
      px: 2,
    },
    {
      alt: "Hyatt Regency",
      src: "/discover/hyatt.png",
      width: 160,
      height: 120,
      px: 0,
    },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.querySelector(".whole-page-wrapper").style.overflowX = "hidden";
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

    function exitAmin(direction) {
      if (direction === "forward") {
        const tl = gsap.timeline({
          onComplete: () => (hasFirstExit = true),
        });
        tl.to(".first-panel", {
          backgroundColor: "transparent",
        })
          .to(".first-text", { opacity: 0 }, "<")
          .to(
            ".first-img",
            {
              opacity: 0,
              scale: 4,
              transformOrigin: "30% 100%",
              duration: 1.5,
            },
            "<"
          );
      } else {
        const tl = gsap.timeline({
          onComplete: () => (hasFirstExit = false),
        });
        tl.to(".first-panel", {
          backgroundColor: "#f6efe2",
        })
          .to(".first-text", { opacity: 1 }, "<")
          .to(".first-img", { opacity: 1, scale: 1 }, "<");
      }
    }

    function gotoPanel(index, isScrollingDown) {
      animating = true;
      if (
        (index === swipePanels.length && isScrollingDown) ||
        (index === -1 && !isScrollingDown)
      ) {
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

      let target = isScrollingDown
        ? swipePanels[index]
        : swipePanels[currentIndex];

      gsap.to(target, {
        yPercent: isScrollingDown ? 0 : 100,
        duration: 1,
        onComplete: () => {
          animating = false;
        },
      });

      currentIndex = index;
    }
    // fade in time 2 seconds
    setTimeout(() => {
      exitAmin("forward");
      gotoPanel(currentIndex + 1, true);
      document.body.style.overflow = "";
    }, 1500);

    gsap.to(".second_panel", {
      scrollTrigger: {
        trigger: ".discover_needs",
        start: "-50% top",
        end: "200px",
        scrub: true,
        // markers: true,
        animate: true,
      },
      y: -200,
    });
  }, []);

  const { scrollY } = useScroll();
  const bubblingFastY = useTransform(scrollY, [0, 500], [0, -400]);
  const bubblingY = useTransform(scrollY, [0, 500], [0, -100]);
  const bubblingMediumY = useTransform(scrollY, [0, 500], [0, -200]);
  const mobileBubblingY = useTransform(scrollY, [300, 800], [0, -200]);
  const mobileBubblingFastY = useTransform(scrollY, [300, 800], [0, -400]);

  return (
    <>
      <div className="h-auto">
        <div
          id="discover-wrapper"
          className="swipe-section text-[#343637]"
        >
          <div className="first-panel !h-screen mx-auto relative flex sm:flex-row flex-col justify-end sm:justify-center min-[2000px]:justify-end">
            <div className="flex flex-col min-[768px]:flex-row items-start sm:items-center max-[1024px]:justify-end relative min-[2000px]:mx-auto max-w-[2000px] min-[768px]:mt-[-100px] w-full h-full">
              {/* <h1 className="first-text text-[40px] sm:text-[3.5em] [@media(max-height:800px)]:text-[4em] lg:text-[5em] xl:text-[6em] font-[Mulish-Black] leading-[1.1] sm:min-w-[500px] z-[2]  sm:pt-0 max-sm:self-start  left-4 sm:relative top-[-60px]">
                WE ARE <br />
                INTRIX
              </h1>
              <Image
                alt="intrix HQ"
                className="first-img mx-auto block ml-0 sm:ml-[-40vw] lg:w-1/2 lg:ml-[-12vw] "
                src={"/discover/HQ-INTRIX 1.png"}
                width={1200}
                height={860}
              /> */}
              <h1
                className="first-text text-[#343637] text-[3em] min-[640px]:text-[4em] min-[1440px]:text-[5em] max-[1024px]:left-4 max-[820px]:top-[220px] max-[1024px]:top-[120px] min-[2000px]:text-[7em] font-[Mulish-Black] leading-[1.1] pl-4 min-[768px]:pl-12 z-[2] mb-[-40px] sm:mb-0 sm:absolute"
              >
                WE ARE <br />
                INTRIX
              </h1>
              <Image
                alt="intrix HQ"
                className="first-img block w-full h-[80vh] min-[900px]:h-full object-cover"
                src={"/discover/hq_intrix_banner.png"}
                width={1200}
                height={860}
              />
            </div>
          </div>
          <div className="panel second_panel  !transform mx-auto ">
            <div className=" text-center mx-auto max-w-[810px] px-4 pt-[108px] md:pt-[58px] mb-[30px] sm:mb-[93px]">
              <h2 className="text-[24px] sm:text-[40px] mb-[17px]">
                Undiscovered Needs
              </h2>
              <p className="text-[14px] sm:text-[20px]">
                We see undiscovered needs as valuable yet unsolved issues,
                missed opportunities or utilities that have never been expressed
                before because people do not know that they need them until they
                experience them
              </p>
            </div>
            {/* mobile view */}
            <section className="xl:hidden pb-[73px]">
              <div className=" relative w-full max-w-screen-sm px-4 mx-auto h-[66vw] min-[600px]:h-[500px]">
                <Image
                  alt="tap"
                  style={{
                    translateY: bubblingFastY,
                  }}
                  className="absolute rounded-full object-cover h-full max-h-[64vw] bottom-0 max-w-[64vw] min-[600px]:max-w-[418px] min-[600px]:max-h-[418px]"
                  src={"/discover/mid_float.webp"}
                  width={647}
                  height={647}
                />

                <Image
                  alt="tap"
                  className="absolute right-[5%] top-0 object-cover rounded-full h-full max-w-[25vw] min-[600px]:max-w-[157px] max-h-[25vw] min-[600px]:max-h-[157px]"
                  src={"/discover/droplet-min.webp"}
                  style={{
                    translateY: bubblingMediumY,
                  }}
                  width={347}
                  height={347}
                />
                <Image
                  alt="tap"
                  style={{
                    translateY: bubblingY,
                  }}
                  className="absolute right-[5%] bottom-0 object-cover h-full max-h-[15vw] min-[600px]:max-h-[114px] rounded-full max-w-[15vw] min-[600px]:max-w-[114px]"
                  src={"/discover/tech.webp"}
                  width={347}
                  height={347}
                />
              </div>
              <div className="mt-[39px] sm:text-[20px] pb-[30px] text-[14px] text-center container mx-auto px-4">
                <p className="w-[70%] mx-auto">
                  Here at INTRIX, we&apos;re a team of innovative engineers
                  dedicated to uncovering and solving needs you didn&apos;t even
                  know you had.
                  <br />
                  <br />
                  Since our start in 2003 as experts in thermal and hydro
                  technology, we&apos;ve shifted focus to HVAC, renewable
                  energy, and water purification—industries where we make
                  everyday life simpler and smarter.
                </p>
              </div>
              <div className=" relative w-full max-w-screen-sm px-4 mx-auto h-[83vw] min-[600px]:h-[374px]">
                <Image
                  style={{
                    translateY: mobileBubblingFastY,
                  }}
                  alt="tap"
                  className=" absolute top-0 right-4 object-cover block rounded-full h-full max-w-[51vw] min-[600px]:max-w-[311px] max-h-[51vw] min-[600px]:max-h-[311px]"
                  src={"/discover/science.webp"}
                  width={347}
                  height={347}
                />
                <Image
                  alt="tap"
                  style={{
                    translateY: mobileBubblingY,
                  }}
                  className="absolute bottom-0 left-4 object-cover block rounded-full h-full max-h-[36vw] min-[600px]:max-h-[218px] max-w-[36vw] min-[600px]:max-w-[218px]"
                  src={"/discover/drink.webp"}
                  width={347}
                  height={347}
                />
              </div>

              <div className="mt-[39px] sm:text-[20px] text-[14px] text-center container mx-auto px-4">
                <p className="w-[70%] mx-auto">
                  With 19 patents and a global portfolio of top clients, we&apos;re
                  passionate about disrupting the norms and tackling day-to-day
                  challenges for a better, more efficient world.
                </p>
              </div>
            </section>

            {/* mobile view end */}

            {/* desktop view */}
            <div className="relative max-xl:hidden px-4 w-full h-[914px] flex  container mx-auto">
              <div className="max-w-[408px]">
                <p>
                  Here at INTRIX, we&apos;re a team of innovative engineers
                  dedicated to uncovering and solving needs you didn&apos;t even
                  know you had.
                  <br />
                  <br />
                  Since our start in 2003 as experts in thermal and hydro
                  technology, we&apos;ve shifted focus to HVAC, renewable
                  energy, and water purification—industries where we make
                  everyday life simpler and smarter.
                </p>
              </div>

              <Image
                alt="tap"
                style={{
                  translateY: bubblingMediumY,
                }}
                className="absolute top-[24%] block rounded-full max-w-[250px] max-h-[250px] h-full object-cover"
                src={"/discover/drink.webp"}
                width={347}
                height={347}
              />
              <Image
                style={{
                  translateY: bubblingY,
                }}
                alt="tap"
                className=" absolute top-[59%] left-[10%] h-full block rounded-full max-w-[300px] max-h-[300px] object-cover"
                src={"/discover/science.webp"}
                width={347}
                height={347}
              />
                <Image
                  alt="tap"
                  className="absolute left-0 right-0 block mx-auto rounded-full h-[430px] w-[430px] min-[1600px]:w-[580px] min-[1600px]:h-[580px] object-cover"
                  src={"/discover/mid_float.webp"}
                  width={647}
                  height={862}
                  style={{
                    translateY: bubblingFastY,
                  }}
                />
              <Image
                alt="tap"
                className="absolute right-[5%] top-0 rounded-full h-full max-h-[230px] 2xl:max-h-[300px] max-w-[230px] 2xl:max-w-[300px] object-cover"
                src={"/discover/droplet-min.webp"}
                style={{
                  translateY: bubblingMediumY,
                }}
                width={347}
                height={347}
              />
              <Image
                alt="tap"
                style={{
                  translateY: bubblingY,
                }}
                className="absolute right-[5%] bottom-[42%] h-full rounded-full max-h-[150px] max-w-[150px] object-cover"
                src={"/discover/tech.webp"}
                width={347}
                height={347}
              />
              <div className="max-w-[500px] absolute right-[5%] bottom-[21%]">
                <p className="[@media(max-height:800px)]:text-[14px] text-[20px]">
                  With 19 patents and a global portfolio of top clients,
                  we&apos;re passionate about disrupting the norms and tackling
                  day-to-day challenges for a better, more efficient world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center overflow-hidden max-xl:pt-[73px] relative">
        <div className="lg:container mx-auto flex items-start justify-between lg:flex-row flex-col-reverse w-full h-full">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 md:px-12 mt-6 md:mt-0">
            <div className="mx-auto max-w-[800px] w-full pt-4 ">
              <h2
                className="text-[24px] md:text-[40px] font-[Mulish-Bold] leading-[1.2] mb-12 [@media(max-height:800px)]:mb-4 w-full text-[#343637]"
                data-aos="fade-right"
              >
                Our Values
              </h2>
              <div className="hidden sm:block">
                {contentData.map((item, index) => (
                  <div
                    className="mb-2 min-[1350px]:mb-4 md:mb-8 min-[1440px]:mb-10"
                    data-aos="fade-up"
                    key={index}
                  >
                    <h2 className="text-[16px] md:text-[20px] [@media(max-height:800px)]:text-[16px] font-[Mulish-Bold] leading-[1.2] mb-1 min-[1350px]:mb-2 text-[#343637]">
                      {item.title}
                    </h2>
                    <p className="font-[Montserrat-Regular] text-[14px] min-[1440px]:text-[16px] min-[1600px]:text-[20px] text-[#343637]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                className="discover_swiper sm:!hidden !block"
                modules={[Pagination]}
                pagination={true}
              >
                <SwiperSlide>
                  {firstFourItems.map((item, index) => (
                    <div
                      className="mb-4 [@media(min-height:800px)]:mb-10"
                      data-aos="fade-up"
                      key={index}
                    >
                      <h2 className="text-[16px] md:text-[20px] [@media(max-height:800px)]:text-[16px] font-[Mulish-Bold] leading-[1.2] mb-2 text-[#343637]">
                        {item.title}
                      </h2>
                      <p className="font-[Montserrat-Regular] text-[14px] md:text-[20px] [@media(max-height:800px)]:text-[16px] text-[#343637]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </SwiperSlide>
                <SwiperSlide>
                  {remainingItems.map((item, index) => (
                    <div
                      className="mb-4 [@media(min-height:800px)]:mb-10"
                      data-aos="fade-up"
                      key={index + 4}
                    >
                      <h2 className="text-[16px] md:text-[20px] [@media(max-height:800px)]:text-[16px] font-[Mulish-Bold] leading-[1.2] mb-2 text-[#343637]">
                        {item.title}
                      </h2>
                      <p className="font-[Montserrat-Regular] text-[14px] md:text-[20px] [@media(max-height:800px)]:text-[16px]  text-[#343637]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="w-full hidden lg:block md:max-w-[calc(100%-50vw)] min-[1600px]:w-fit h-auto min-[1600px]:h-full relative md:absolute right-0" data-aos="fade-left">
            <Image
              alt="tap"
              className="block size-full  mr-auto"
              src={"/discover/group.png"}
              width={1280}
              height={960}
            />
          </div>
          <div className="w-full block lg:hidden" data-aos="fade-left">
            <Image
              alt="tap"
              className="block size-full  mr-auto"
              src={"/discover/group.jpg"}
              width={1280}
              height={960}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#4F4644] flex items-center overflow-hidden">
        <div className="w-full">
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-0 gap-6 mb-12 md:mb-0">
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="px-4">
                <h2
                  data-aos="fade-right"
                  className="text-center md:text-left mx-auto md:mx-0 max-w-[300px] text-[24px] md:text-[40px] font-[Mulish-Bold] leading-[1.2] mb-4 text-[#fff]"
                >
                  OUR PURPOSE &amp; MISSION
                </h2>
                <p
                  data-aos="fade-right"
                  className="text-center md:text-left font-[Montserrat-Regular] text-[14px] md:text-[20px] max-w-[450px]  text-[#fff]"
                >
                  We exist to fulfil undiscovered needs through disruptive
                  engineering.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                data-aos="fade-left"
                alt="purpose"
                className="block w-full"
                src={"/discover/purpose.png"}
                width={720}
                height={434}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center md:gap-0 gap-6 md:mb-0 mb-24">
            <div className="w-full md:w-1/2">
              <Image
                data-aos="fade-right"
                alt="vision"
                className="block w-full"
                src={"/discover/vision.png"}
                width={720}
                height={434}
              />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center ">
              <div className="px-4">
                <h2
                  data-aos="fade-left"
                  className="text-center md:text-left mx-auto md:mx-0 max-w-[300px] text-[24px] md:text-[40px] font-[Mulish-Bold] leading-[1.2] mb-4 text-[#fff]"
                >
                  OUR VISION
                </h2>
                <p
                  data-aos="fade-left"
                  className="text-center md:text-left font-[Montserrat-Regular] text-[14px] md:text-[20px] max-w-[450px] text-[#fff]"
                >
                  A world where engineers design disruptive solutions that
                  improve daily lives of mankind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col justify-between pt-0 md:pt-24">
        {/* <h2
          className="container mx-auto px-4 text-[#343637] text-[24px] md:text-[50px] xl:text-[60px] font-[Mulish-Bold] leading-[1.1] absolute left-0 right-0 z-[2]"
          data-aos="fade-down"
        >
          INTRIX AROUND <br /> THE WORLD
        </h2> */}
        <div className="overflow-x-auto block" data-aos="fade-up">
          <Image
            alt="world"
            className="relative min-w-[1000px] w-full object-right object-cover"
            src={"/discover/world_map_new.png?v=1.4"}
            width={2000}
            height={1034}
          />
          {/* <Player
            autoplay
            loop
            src={'/discover/lottie/Discover Lottie2.json'}
          /> */}
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
      <div
        className="md:mx-auto"
        style={{ height: "fit-content" }}
      >
        <div className="bg-[#4F4644] pt-24">
          <h2 className="text-[#fff] text-[30px] text-center sm:text-left leading-[1.2] px-4 container mx-auto">
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
        </div>
        <div className="mx-auto max-w-[900px] px-4 pb-0 pt-12 sm:pt-12 sm:pb-12">
          <h2 className="text-[#343637] text-[24px] md:text-[30px] mb-8 sm:mb-4 sm:w-full w-[300px]">
            Want To Work Together? Let&apos;s Talk!
          </h2>
          <SupportCardClickable cards={cardData} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Page;
