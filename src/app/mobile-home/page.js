"use client";
import React, { useEffect, useRef, useState } from "react";
import "./test.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCircleCheck,
  faCircleChevronLeft,
  faCircleChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/navigation"; // Navigation module CSS
import "swiper/css/pagination"; // Pagination module CSS
import { Navigation } from "swiper/modules";
import Marquee from "react-fast-marquee";

import topImg from "../../../public/home/3-kitchen-parallax.png";
import topImg2 from "../../../public/home/4-kitchen-parallax.png";
import bottomImg from "../../../public/home/1-kitchen-parallax-new.png";
import bottomImg2 from "../../../public/home/8-kitchen-parallax.png";
import leftImg from "../../../public/home/6-kitchen-parallax.png";
import rightImg from "../../../public/home/5-kitchen-parallax.png";

import cmdCentre from "../../../public/home/command-centre.png";

import eco from "../../../public/home/icon/eco.png";
import recycle from "../../../public/home/icon/recycle.png";
import waste from "../../../public/home/icon/waste.png";
import cost from "../../../public/home/icon/cost.png";

import blanching from "../../../public/home/blanching-human.png";
import boiling from "../../../public/home/egg-and-kitchen.png";
import poaching from "../../../public/home/prawn-person.png";
import teaCoffee from "../../../public/home/coffee.png";
import sterilising from "../../../public/home/baby-bottle-sink.png";

import insights1 from "../../../public/home/Rectangle 10.png";
import insights2 from "../../../public/home/Rectangle 10-1.png";
import insights3 from "../../../public/home/image.png";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";

function MobileHome() {
  const reviews = [
    {
      text: `Finally, we are delighted to have completed the installation of the Intrix tap. My mom is extremely satisfied, as the tabletop is now immaculate and we can use it effortlessly. Mr. Taufiq meticulously planned and executed the installation with exceptional precision. Even the hole near the sink is perfectly accurate. His work is incredibly professional and clean. We couldn't be happier with the outstanding service he provided.`,
      name: "Darshini Vasuthevan",
    },
    {
      text: `Finally done with the installation of the Intrix tap today. My mum is satisfy with it as the table top look neat now and we can get drinking/hot water instantly. I have to give the compliment to the technician, M. Arib Aiman who was patiently help to drill the hole on my concrete countertop. Although it was a hot day but he complete the installation patiently without any complain. He also further... [More on Google Review]`,
      name: "Bkyen Lim",
    },
    {
      text: `I'm an interior designer, and I can't praise Intrix Group's instant hot water tap enough. It's a game-changer for any home. This tap doesn't just dispense water—it delivers purified hot water at a staggering 98°C instantly. It's perfect for everything from making tea to sterilizing baby bottles. The tap's design is sleek and stylish, complementing ... [More on Google Review]`,
      name: "Ashikin Azidee",
    },
    {
      text: `I installed Intrix a year ago, and I've been very pleased with their prompt responses to any issues that arise. The technician, Taufiq, did an excellent job resolving my problem and explained everything clearly and courteously.`,
      name: "Kim Yee Teh",
    },
    {
      text: `Simply hassleless, been using for about a year now. Good sales team, good installation team. No complaint.`,
      name: "Kris Lee",
    },
  ];

  const logoItems = [
    {
      logo: "tuv-nord",
    },
    {
      logo: "wipo",
    },
    {
      logo: "psa-award",
    },
    {
      logo: "suruhanjaya-tenaga",
    },
    {
      logo: "ce",
    },
    {
      logo: "sirim",
    },
  ];
  const [finishHorizontal, setFinishHorizontal] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!window.location.href.includes("#footer")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function horizontalST() {
      document.body.style.overflowY = "auto";
      document.querySelector(".whole-page-wrapper").style.overflowY = "";
      document.querySelector(".whole-page-wrapper").style.overflowY = "";

      const filterTl = gsap.timeline();
      filterTl
        .to(".filter-wrapper", { opacity: 1, duration: 1 })
        .to(".filter-wrapper", { opacity: 0, duration: 1, delay: 175 });

      let horizontalSections = gsap.utils.toArray(".horizontal-sections");
      horizontalSections.forEach((container) => {
        let sections = container.querySelectorAll(".panel");
        let maxWidth = 0;

        const getMaxWidth = () => {
          maxWidth = 0;
          sections.forEach((section) => {
            maxWidth += section.offsetWidth;
          });
        };
        getMaxWidth();

        gsap.to(sections, {
          x: () => -(maxWidth - window.innerWidth),
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 3,
            start: "top",
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (self.progress === 1) {
                // Scroll is complete
                setFinishHorizontal(true);
              } else if (self.progress > 0.99 && self.progress < 1) {
                // To avoid flashing issue
                setFinishHorizontal(true);
              } else {
                setFinishHorizontal(false);
              }
            },
          },
        });

        // gsap
        //   .timeline({
        //     scrollTrigger: {
        //       trigger: firstPanel,
        //       start: "top top",
        //       scrub: 2,
        //       pin: true,
        //       anticipatePin: 1,
        //       invalidateOnRefresh: true,
        //       markers: true,
        //     },
        //   })
        //   .to(container, {
        //     y: "-100%",
        //     ease: "none",
        //   });
      });
    }

    const firstLoadTl = gsap.timeline({
      onInterrupt: () => {
        document.body.style.overflow = "hidden";
        document.querySelector(".whole-page-wrapper").style.overflowY =
          "hidden";
      },
      onComplete: () => horizontalST(),
    });

    firstLoadTl
      .to(".top-img", { opacity: 1, yPercent: 45 })
      .to(".top-img", { opacity: 1, yPercent: 50 }, "<")
      .to(".bottom-img", { opacity: 1, yPercent: -45 }, "<")
      .to(".bottom-img-2", { yPercent: -45 }, "<")
      .to(".left-img", { opacity: 1, xPercent: 10 }, "<")
      .to(".right-img", { opacity: 1, xPercent: -5 }, "<")
      .to(".cmdCentre-wrapper", { opacity: 1, yPercent: -100 }, ">")
      .to(".first-label", { opacity: 1, yPercent: -60 }, ">")
      .to(".first-shadow", { opacity: 1, yPercent: 100 }, "<")
      // .addPause()
      .to(".second-label", { zIndex: 1, opacity: 1, yPercent: -70, delay: 2 })
      .to(".first-label", { opacity: 0, yPercent: 50 }, "<")
      .to(".second-shadow", { opacity: 1, yPercent: 80 }, "<")
      .to(".cmdCentre-wrapper", { opacity: 0 }, "<")
      .to(".bottom-img-2", { opacity: 1 }, "<")
      .to(".bottom-img", { opacity: 0 }, "<");
    return () => {
      gsap.globalTimeline.clear();
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div id="mobile-wrapper">
      <section
        className={`panel panel-1 fixed -z-50 top-1 ${
          finishHorizontal && "homepage_overlay_bg"
        } `}
      >
        <Image alt="" className="img top-img" src={topImg} />
        <Image alt="" className="img top-img" src={topImg2} />
        <Image alt="" className="img bottom-img" src={bottomImg} />
        <Image alt="" className="img bottom-img-2" src={bottomImg2} />
        <Image alt="" className="img left-img" src={leftImg} />
        <Image alt="" className="img right-img" src={rightImg} />
        <div className="cmdCentre-wrapper">
          <Image alt="" className="cmd-centre" src={cmdCentre} />
        </div>
        <div className="shadow first-shadow"></div>
        <div className="label first-label">
          <div className="brand">
            <Image
              src="/logo_white.png"
              alt="white logo"
              width={1200}
              height={400}
              className="max-w-[1000px] w-[50vw] mx-auto block"
            />
          </div>
          <div className="[@media(min-height:768px)]:text-[20vw] text-[30vw] mx-auto w-fit font-[Montserrat-Bold] leading-[1]">
            ONE TAP
          </div>
        </div>
        <div className="shadow second-shadow"></div>
        <div className="label second-label !z-[4]">
          <div className="title !text-[20px] px-4 max-w-[450px]">
          Invisible Innovation: <br/>Transforming Your Space With Just A Tap That Simplifies Your Life.
          </div>
          <Link
            href={"/product"}
            className="relative w-fit send_now_btn bg-[#F79932] text-[#fff] transition py-4 rounded-lg flex items-center gap-x-4 pl-6 pr-20 mt-4"
          >
            <span>Discover Your Perfect Tap</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              color="#fff"
              className="absolute right-8 block"
            />
          </Link>
        </div>
      </section>
      <div className="relative overflow-x-hidden">
        <div
          className={`horizontal-sections  bg-[#f6efe2] mt-[100vh]  ${
            finishHorizontal ? "!fixed !left-0 !top-[0] !transform " : ""
          } `}
        >
          <section className="panel panel-2  ">
            <div className="label-wrapper">
              <div className="label">
                <div className="title">
                  Endless Possibilities
                  <br /> of the INTRIX One Tap
                </div>
                <div className="desc">
                  From prep to cooking, to cleaning and beyond, the
                  possibilities are limitless. Let the INTRIX One Tap make
                  things easier for you.
                </div>
                <span className="horizontal-line" />
                <div className="font-[Montserrat-Regular] text-[#525456] pb-4 max-w-[400px]">
                  <b className="text-[14px] min-[420px]:text-[16px] font-[Montserrat-Bold]">Innovative Design, Proven Efficiency</b>
                  <p  className="text-[12px] min-[420px]:text-[14px]">From energy savings to reduced waste, the INTRIX One Tap makes every step count.</p>
                  </div>
                <div className="bullet-wrapper">
                  <div className="bullet-item">
                    <Image className="bullet-icon" src={eco} alt="" />
                    <div className="bullet-desc">80% Energy Saving*</div>
                  </div>
                  <div className="bullet-item">
                    <Image className="bullet-icon" src={recycle} alt="" />
                    <div className="bullet-desc">95% Recyclable*</div>
                  </div>
                  <div className="bullet-item">
                    <Image className="bullet-icon" src={waste} alt="" />
                    <div className="bullet-desc">80% Reduced Waste*</div>
                  </div>
                  {/* <div className="bullet-item">
                  <Image className="bullet-icon" src={cost} alt="" />
                  <div className="bullet-desc">66% Cost Reduction*</div>
                </div> */}
                </div>
              </div>
              
            </div>
            <div className="filter-wrapper">
                <Image alt="" className="filter-image" src={cmdCentre} />
              </div>
            <div className="disclaimer">
              *Disclaimer: The above data represents the performance metrics of
              the INTRIX product, specifically the Command Centre and filter.
              Results may vary based on usage and environmental conditions.
            </div>
          </section>
          <section className="panel panel-3 ">
            <div className="image-wrapper">
              <Image src={'/product/Blanching.webp'} alt="Blanching" width={400} height={400} className="image" />
              <div className="desc">Blanching</div>
            </div>
            <div className="image-wrapper">
              <Image src={'/product/Boiling.webp'} alt="Boiling" width={400} height={400} className="image" />
              <div className="desc">Boiling</div>
            </div>
            <div className="image-wrapper">
              <Image src={'/product/Poaching.webp'} alt="Poaching" width={400} height={400} className="image" />
              <div className="desc">Poaching</div>
            </div>
            <div className="image-wrapper">
              <Image src={'/product/Make-Tea-n-Coffee.webp'} alt="Make Tea & Coffee" width={400} height={400} className="image" />
              <div className="desc">Make Tea & Coffee</div>
            </div>
            <div className="image-wrapper !mb-0">
              <Image src={'/product/Sterilising_02.webp'} alt="Sterilising" width={400} height={400} className="image" />
              <div className="desc">Sterilising</div>
            </div>
          </section>
          <section className="panel panel-4">
            <div className="title">What On Tap?</div>
            <span className="horizontal-line" />
            <div className="item-wrapper">
              <div className="label item-label">Confidence In Every Drop</div>
              <div className="label item-desc">
                Experience the luxury of instant access to purified water,
                providing you peace of mind and allowing you to focus on what
                truly matters with every sip.
              </div>
            </div>
            <span className="horizontal-line" />
            <div className="item-wrapper">
              <div className="label item-label">Elevate Your Space</div>
              <div className="label item-desc">
                Enjoy a sleek, sophisticated design that seamlessly integrates
                into your modern kitchen. Effortlessly easy to use and safe for
                all.
              </div>
            </div>
            <span className="horizontal-line" />
            <div className="item-wrapper">
              <div className="label item-label">Elegance Meets Endurance</div>
              <div className="label item-desc">
              Embrace our EcoSmart technology designed to reduce energy usage and promote a greener future. Enjoy a cost-efficient, long-lasting solution that&apos;s as low-maintenance as it is environmentally conscious.
              </div>
            </div>
            <span className="horizontal-line" />
            <div className="item-wrapper">
              <div className="label item-label">Purified Water For All</div>
              <div className="label item-desc">
                The advanced filtration technology reduces contaminants,
                providing not only safer drinking water but also better- tasting
                water with fewer impurities for an all-around healthier choice.
              </div>
            </div>
          </section>
          <section className="panel panel-5" />
          <section className="panel panel-6">
            <div className="w-full">
              <div className="text-[#343637] text-[12px]">
                Features
              </div>
              <div className="title text-[20px] text-[#343637] font-[Mulish-Bold] leading-[1.2] mb-4">
                Hassle-Free Hydration
                <br /> With A Design That Delivers.
              </div>
              <div className="desc font-[Montserrat-Regular] text-black [@media(max-height:800px)]:max-w-[700px] [@media(max-height:800px)]:mb-3 mb-8 text-[14px] [@media(max-height:800px)]:text-[14px] md:text-[16px]">
                Experience the highest quality water straight from your tap with
                INTRIX. Our INTRIX One Tap is designed to unlock your
                kitchen&apos;s hidden potential, providing you with pure,
                convenient water whenever you need it.
              </div>
              <div className="text-[#000] space-y-6 [@media(max-height:800px)]:space-y-2 md:space-y-4 w-fit [@media(max-height:800px)]:mx-0 mx-auto">
                <div className="flex items-center gap-x-6 xl:gap-x-8 max-w-[600px] mx-auto">
                  <Image
                    alt="microbes"
                    className="block [@media(max-height:800px)]:max-w-[35px] max-w-[50px]"
                    src={"/product/icon.png"}
                    width={240}
                    height={240}
                  />
                  <div className="">
                    <div className="title font-bold text-[16px] [@media(max-height:800px)]:text-[16px] md:text-[20px]">
                      Removes 99.99% Microbes Down to Micron
                    </div>
                    <div className="desc font-[Montserrat-Regular] text-[12px] [@media(max-height:800px)]:text-[14px] md:text-[16px]">
                      Removes bacteria, algae and some viruses while preserving natural minerals.
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-6 xl:gap-x-8 max-w-[600px] mx-auto">
                  <Image
                    alt="hot and cold water"
                    className="block [@media(max-height:800px)]:max-w-[35px] max-w-[50px]"
                    src={"/product/heat_cold.png"}
                    width={240}
                    height={240}
                  />
                  <div className="">
                    <div className="title font-bold text-[16px] [@media(max-height:800px)]:text-[16px] md:text-[20px]">
                      Instant Purified Hot & Cold Water
                    </div>
                    <div className="desc font-[Montserrat-Regular] text-[12px] [@media(max-height:800px)]:text-[14px] md:text-[16px]">
                      Perfect for drinking, cooking, washing, or sterilising,
                      our system effortlessly enhances your kitchen&apos;s
                      functionality.
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-6 xl:gap-x-8 max-w-[600px] mx-auto">
                  <Image
                    alt="space"
                    className="block [@media(max-height:800px)]:max-w-[35px] max-w-[50px]"
                    src={"/product/space.png"}
                    width={240}
                    height={240}
                  />
                  <div className="">
                    <div className="title font-bold text-[16px] [@media(max-height:800px)]:text-[16px] md:text-[20px]">
                      Space Saving
                    </div>
                    <div className="desc font-[Montserrat-Regular] text-[12px] [@media(max-height:800px)]:text-[14px] md:text-[16px]">
                      Seamlessly hides the command centre under the sink,
                      maximising your preparation space.
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-6 xl:gap-x-8 max-w-[600px] mx-auto">
                  <Image
                    alt="isolation"
                    className="block [@media(max-height:800px)]:max-w-[35px] max-w-[50px]"
                    src={"/product/isolation.png"}
                    width={240}
                    height={240}
                  />
                  <div className="">
                    <div className="title font-bold text-[16px] [@media(max-height:800px)]:text-[16px] md:text-[20px]">
                      Safety Child Lock
                    </div>
                    <div className="desc font-[Montserrat-Regular] text-[12px] [@media(max-height:800px)]:text-[14px] md:text-[16px]">
                      The Push-To-Activate mechanism prevents accidents and
                      keeps little hands safe.
                    </div>
                  </div>
                </div>
                <Link
                  href={"/explore"}
                  className="relative w-fit send_now_btn bg-[#F79932] text-[#fff] transition py-3 rounded-lg flex items-center gap-x-4 pl-6 pr-24 mx-auto !mt-8"
                >
                  <span>Discover Your Perfect Tap</span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    color="#fff"
                    className="absolute right-8 block"
                  />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="homepage_overlay_bg relative pt-10 z-10 overlap-panel !overflow-x-hidden">
        <section className="panel panel-7  ">
          <div className="title max-w-[320px] leading-[1.2] mb-4">
            Don&apos;t Take Our Word For It. Here&apos;s What Our Customers Say.
          </div>
          <div className="bottom">
            <div className="flex items-center gap-x-4 mb-4">
              <div className="custom-prev cursor-pointer text-[#343637] hover:text-gray-900">
                <FontAwesomeIcon icon={faCircleChevronLeft} size="2x" />
              </div>
              <div className="custom-next cursor-pointer text-[#343637] hover:text-gray-900">
                <FontAwesomeIcon icon={faCircleChevronRight} size="2x" />
              </div>
            </div>
            <Swiper
              slidesPerView={1.8}
              spaceBetween={20}
              className="review-swiper"
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                },
                768: {
                  slidesPerView: 1.8,
                },
                1600: {
                  slidesPerView: 2.8,
                },
              }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <Image
                    src="/home/quote.png"
                    className="absolute right-8 top-8 opacity-20 "
                    alt="quote"
                    width={50}
                    height={50}
                  />
                  <div className="content-wrapper">
                    <div className="rating">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          className="text-white"
                        />
                      ))}
                    </div>
                    <p className="review-text">{review.text}</p>
                    <p className="reviewer">{review.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="panel panel-8 my-12">
          <div className="title !text-[24px] max-w-[300px] mx-auto">
            Water Technology vs INTRIX One Tap
          </div>
          <div className="bottom">
            <table>
              <tbody>
                <tr>
                  <th></th>
                  <th className="leading-[1.2]">Boiled Water</th>
                  <th className="leading-[1.2]">Micro-Filtration Water</th>
                  <th className="leading-[1.2]">Alkaline Water</th>
                  <th className="leading-[1.2]">Reverse Osmosis Water</th>
                  <th className="leading-[1.2]">INTRIX One Tap</th>
                </tr>
                <tr className="leading-[1.2]">
                  <td className="!text-left">Contains Minerals</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#ae9161"
                      size="2x"
                    />
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#ae9161"
                      size="2x"
                    />
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#ae9161"
                      size="2x"
                    />
                  </td>
                  <td></td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#f5a623"
                      size="2x"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="!text-left">Eliminates Heavy Metals</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#ae9161"
                      size="2x"
                    />
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#f5a623"
                      size="2x"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="!text-left">Mid Alkaline</td>
                  <td></td>
                  <td></td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#ae9161"
                      size="2x"
                    />
                  </td>
                  <td></td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#f5a623"
                      size="2x"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="!text-left">Eliminates Bacteria</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#ae9161"
                      size="2x"
                    />
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#ae9161"
                      size="2x"
                    />
                  </td>
                  <td></td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#ae9161"
                      size="2x"
                    />
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#f5a623"
                      size="2x"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="!text-left">Eliminates Viruses</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#ae9161"
                      size="2x"
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#ae9161"
                      size="2x"
                    />
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#f5a623"
                      size="2x"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="!text-left">Eliminates Chemical Toxins</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#ae9161"
                      size="2x"
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#ae9161"
                      size="2x"
                    />
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      color="#f5a623"
                      size="2x"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="panel panel-9 mt-12">
          <div className="title leading-[1.2] !text-[24px] max-w-[300px] mx-auto mb-6">
            Explore Our Core Features At A Glance
          </div>
          <div className="middle px-4">
            <video
              width="100%"
              height="100"
              controls
              preload="none"
              poster="/home/video.png"
            >
              <source src="/videos/Intrix-filter.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="bottom">
            <div className="title !text-left text-[14px] leading-[1.2]">
              Making Waves In
              <br /> Water Purification
            </div>
            <Marquee autoFill={true} className="brand-marque">
              {logoItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 px-4 whitespace-nowrap"
                >
                  <Image
                    src={`/home/brand/${item.logo}.png`}
                    className={`w-[100px] object-cover block ${
                      index !== 2 && index !== 3 ? "p-2" : ""
                    }`}
                    alt={`logo ${index + 1}`}
                    width={150}
                    height={150}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </section>
        {/* <section className="panel panel-10">
          <div className="blog-wrapper">
            <div className="blog-title !text-[24px]">Insights By INTRIX</div>
            <Image src={insights1} alt="" className="blog-image" />
            <div className="blog-content">
              <div className="blog-label">
                Water and the Sustainable
                <br /> Development Goals
              </div>
              <div className="blog-desc">
                Sustainable Development Goal (SDG) 6 is to “Ensure availability
                and sustainable management of water...
              </div>
              <div className="read-more">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
          <div className="blog-wrapper">
            <div className="blog-title !text-[24px]">Recent Events</div>
            <Image src={insights1} alt="" className="blog-image" />
            <div className="blog-content">
              <div className="blog-label">
                IWA World Water
                <br /> Congress & Exhibition 2024
              </div>
              <div className="blog-desc">
                the 14th edition of ASIAWATER Expo & Forum, the region&apos;s
                leading water & wastewater platform for developing ...
              </div>
              <div className="read-more">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
          <div className="blog-wrapper">
            <div className="blog-title !text-[24px]">
              INTRIS In The Spotlight
            </div>
            <Image src={insights1} alt="" className="blog-image" />
            <div className="blog-content">
              <div className="blog-label">
                INTRIX set to expanf overseas,
                <br /> presence to Middle East, Australia,
                <br /> Hong Kong and Singapore
              </div>
              <div className="blog-desc">
                Home-grown hydro and thermal technology company Intrix Group
                expects to begin expanding to several countries ...
              </div>
              <div className="read-more">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </section> */}
        <section className="panel panel-11">
          <FAQAccordion />
        </section>
        <section className="panel ">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default MobileHome;
