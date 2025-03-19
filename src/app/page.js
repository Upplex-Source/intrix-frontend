"use client";

import React, { useEffect, useState } from "react";
import "./home.scss";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import topImg from "../../public/home/3-kitchen-parallax.png";
import topImg2 from "../../public/home/4-kitchen-parallax.png";
import bottomImg from "../../public/home/1-kitchen-parallax_open.png";
import bottomImg2 from "../../public/home/8-kitchen-parallax.png";
import leftImg from "../../public/home/6-kitchen-parallax.png";
import rightImg from "../../public/home/5-kitchen-parallax.png";

import cmdCentre from "../../public/home/command-centre.png";

import filter from "../../public/home/command-centre.png";
import eco from "../../public/home/icon/eco.png";
import recycle from "../../public/home/icon/recycle.png";
import waste from "../../public/home/icon/waste.png";
import cost from "../../public/home/icon/cost.png";

import blanching from "../../public/home/blanching-human.png";
import boiling from "../../public/home/egg-and-kitchen.png";
import poaching from "../../public/home/prawn-person.png";
import teaCoffee from "../../public/home/coffee.png";
import sterilising from "../../public/home/baby-bottle-sink.png";

import insights1 from "../../public/home/Rectangle 10.png";
import insights2 from "../../public/home/Rectangle 10-1.png";
import insights3 from "../../public/home/image.png";

import { useRouter } from "next/navigation";
import Features from "@/components/HomeFeatures";
import ReviewCarousel from "@/components/review-card/ReviewCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import ExperienceCentreForm from "@/components/ExperienceCentreForm";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import MobileHome from "./mobile-home/page";

function Home() {
  let isMobile = 768 >= window.innerWidth;

  const insightArr = [
    {
      title: "Insights By INTRIX",
      image: insights1,
      subTitle: "Water and the Sustainable Development Goals",
      subDesc:
        "Sustainable Development Goal (SDG) 6 is to 'Ensure availability and sustainable management of water...",
    },
    {
      title: "Recent Events",
      image: insights2,
      subTitle: "IWA World Water Congress & Exhibition 2024",
      subDesc:
        "the 14th edition of ASIAWATER Expo & Forum, the region's leading water & wastewater platform for developing ...",
    },
    {
      title: "INTRIX In The Spotlight",
      image: insights3,
      subTitle:
        "INTRIX set to expand overseas, presence to Middle East, Australia, Hong Kong and Singapore",
      subDesc:
        "Home-grown hydro and thermal technology company Intrix Group expects to begin expanding to several countries ...",
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

  const [defaultMargin, setDefaultMargin] = useState(true);
  const [defaultMargin2, setDefaultMargin2] = useState(false);

  useEffect(() => {
    document.querySelector(".whole-page-wrapper").style.overflowY = "hidden";
    gsap.registerPlugin(ScrollTrigger);
    if (!window.location.href.includes("#footer")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const createSecondST = () => {
      document.body.style.overflowY = "auto";
      document.querySelector(".whole-page-wrapper").style.overflowY = "";
      const filterTl = gsap.timeline();
      filterTl
        .to(".filter-wrapper", { opacity: 1, duration: 1 })
        .to(".filter-wrapper", { opacity: 0, duration: 1, delay: 5 });

      let horizontalSections = gsap.utils.toArray(".horizontal-wrapper");

      setDefaultMargin(false);
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
        setDefaultMargin2(false);
        gsap.to(sections, {
          x: () => -(maxWidth  - window.innerWidth),
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 3,
            start: "top",

            // window.innerHeight < 700
            //   ? "top top+=85px"
            //   : window.innerHeight < 800
            //   ? "top top+=100px"
            //   : "top top+=155px",
            // markers: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (self.progress === 1) {
                // Scroll is complete
                setDefaultMargin2(true);
              } else if (self.progress > 0.99 && self.progress < 1) {
                // To avoid flashing issue
                setDefaultMargin2(true);
              } else {
                setDefaultMargin2(false);
              }
            },
          },
        });
      });
    };

    const firstLoadTl = gsap.timeline({
      onInterrupt: (document.body.style.overflow = "hidden"),
      onComplete: () => createSecondST(),
    });

    firstLoadTl
      .to(".top-img", { opacity: 1, yPercent: 45 })
      .to(".top-img", { opacity: 1, yPercent: 50 }, "<")
      .to(".bottom-img", { opacity: 1, yPercent: -45 }, "<")
      .to(".bottom-img-2", { yPercent: -45 }, "<")
      .to(".left-img", { opacity: 1, xPercent: 10 }, "<")
      .to(".right-img", { opacity: 1, xPercent: -5 }, "<")
      .to(".cmdCentre-wrapper", { opacity: 1, yPercent: -100 }, ">")
      .to(
        ".first-label",
        { opacity: 1, yPercent: window.innerHeight < 768 ? -65 : -55 },
        ">"
      )
      .to(".first-shadow", { opacity: 1, yPercent: 80 }, "<")
      // .addPause()
      .to(".second-label", { zIndex: 1, opacity: 1, yPercent: -70, delay: 2 })
      .to(".first-label", { opacity: 0, yPercent: 120 }, "<")
      .to(".second-shadow", { opacity: 1, yPercent: 80 }, "<")
      .to(".bottom-img-2", { opacity: 1 }, "<")
      .to(".cmdCentre-wrapper", { opacity: 0 }, "<")
      .to(".bottom-img", { opacity: 0 }, "<");

    return () => {
      gsap.globalTimeline.clear();
      document.body.style.overflowY = "auto";
    };
  }, []);

  if (isMobile) {
    return <MobileHome />;
  }

  return (
    <div id="main-wrapper">
      <div id="home-wrapper">
        <section className={`first-panel fixed top-0`}>
          <Image
            alt=""
            className={`img top-img ${
              defaultMargin ? "absolute" : "fixed z-[-1]"
            }`}
            src={topImg}
          />
          <Image
            alt=""
            className={`img top-img ${
              defaultMargin ? "absolute" : "fixed z-[-1]"
            }`}
            src={topImg2}
          />
          <Image
            alt=""
            className={`img bottom-img ${
              defaultMargin ? "absolute" : "fixed z-[999]"
            }`}
            src={bottomImg}
          />
          <Image
            alt=""
            className={`img bottom-img-2 ${
              defaultMargin ? "absolute" : "fixed z-[-1]"
            }`}
            src={bottomImg2}
          />
          <Image
            alt=""
            className={`img left-img ${
              defaultMargin ? "absolute" : "fixed z-[-1]"
            }`}
            src={leftImg}
          />
          <Image
            alt=""
            className={`img right-img ${
              defaultMargin ? "absolute" : "fixed z-[-1]"
            }`}
            src={rightImg}
          />
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
                className="max-w-[1000px] w-[20vw] mx-auto block"
              />
            </div>
            <div className="text-[10vw] mx-auto w-fit font-[Montserrat-Bold] leading-[1]">
              ONE TAP
            </div>
          </div>
          <div className="shadow second-shadow"></div>
          <div className="label second-label">
            <div className="title">
            Invisible Innovation: 
              <br />
              <p className="block [@media(max-height:750px)]:hidden [@media(max-height:800px)]:max-w-[100%] max-w-[450px] mx-auto">
              Transforming Your Space 
              </p>
              <p className="block [@media(max-height:750px)]:hidden">
              With Just A Tap That Simplifies Your Life. 
              </p>
              <p className="hidden [@media(max-height:750px)]:block mx-auto">
              Transforming Your Space 
              
              With Just A Tap That Simplifies Your Life. 
              </p>
            </div>
            <Link
              href={"/explore"}
              className="relative w-fit send_now_btn bg-[#F79932] text-[#fff] transition py-3 rounded-lg flex items-center gap-x-4 pl-6 pr-24 [@media(max-height:800px)]:mt-2 mt-4"
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
          {/* <div
          className={`horizontal-wrapper mt-[200vh] !overflow-hidden ${

            defaultMargin2 == true
              ? "!fixed !transform !translate-x-0 !translate-y-[95px] [@media(max-height:700px)]:!translate-y-[85px] [@media(min-height:800px)]:!translate-y-[155px] !top-0"
              : ""
          }`} */}
        <div className="overflow-x-hidden">
          <div
            className={`horizontal-wrapper mt-[200vh] !overflow-hidden ${
              defaultMargin2 == true
                ? "!fixed !transform !translate-x-0 !top-0"
                : ""
            }`}
          >
            <section className="panel h1">
              <div className="label-wrapper">
                <div className="label">
                  <div className="font-[Mulish-Black] [@media(max-height:812px)]:text-[24px] text-[40px] leading-[1.2] text-[#525456]">
                    Endless
                    <br className="[@media(max-height:800px)]:hidden" />{" "}
                    Possibilities
                    <br /> of the INTRIX
                    <br className="[@media(max-height:800px)]:hidden" /> One Tap
                  </div>
                  <div className="font-[Montserrat-Regular] [@media(max-height:812px)]:text-[16px] text-[20px] text-[#525456] py-4 max-w-[400px]">
                  From prep to cooking, to cleaning and beyond, the possibilities are limitless. Let the INTRIX One Tap make things easier for you.
                  </div>
                  <span className="horizontal-line" />
                  <div className="font-[Montserrat-Regular] [@media(max-height:812px)]:text-[16px] text-[20px] text-[#525456] py-4 max-w-[400px]">
                  <b className="text-[18px] font-[Montserrat-Bold]">Innovative Design, Proven Efficiency</b>
                  <p  className="text-[16px]">From energy savings to reduced waste, the INTRIX One Tap makes every step count.</p>
                  </div>
                  <div className="bullet-wrapper">
                    <div className="bullet-item">
                      <Image
                        src={eco}
                        className="[@media(max-height:812px)]:w-[30px]"
                        alt=""
                      />
                      <div className="[@media(max-height:812px)]:text-[16px] text-[24px] text-[#343637]">
                        80% Energy Saving*
                      </div>
                    </div>
                    <div className="bullet-item">
                      <Image
                        src={recycle}
                        className="[@media(max-height:812px)]:w-[30px]"
                        alt=""
                      />
                      <div className="[@media(max-height:812px)]:text-[16px] text-[24px] text-[#343637">
                        95% Recyclable*
                      </div>
                    </div>
                    <div className="bullet-item">
                      <Image
                        src={waste}
                        className="[@media(max-height:812px)]:w-[30px]"
                        alt=""
                      />
                      <div className="[@media(max-height:812px)]:text-[16px] text-[24px] text-[#343637">
                        80% Reduced Waste*
                      </div>
                    </div>
                  </div>
                  <div className="disclaimer">
                    *Disclaimer: The above data represents the performance metrics
                    of the
                    <br /> INTRIX product, specifically the Command Centre and
                    filter. Results may
                    <br /> vary based on usage and environmental conditions.
                  </div>
                </div>
              </div>
              <div className="filter-wrapper">
                <Image alt="" className="image" src={filter} />
              </div>
            </section>
            <section className="panel h2">
              <div className="content-wrapper [@media(max-height:700px)]:gap-[40px] gap-[80px]">
                <div className="list">
                  <div className="list-item">
                    <Image alt="" className="list-img" src={blanching} />
                    <div className="list-label [@media(max-height:800px)]:!text-[14px]">
                      Blanching
                    </div>
                  </div>
                  <div className="list-item">
                    <Image alt="" className="list-img" src={boiling} />
                    <div className="list-label [@media(max-height:800px)]:!text-[14px]">
                      Boiling
                    </div>
                  </div>
                  <div className="list-item">
                    <Image alt="" className="list-img" src={poaching} />
                    <div className="list-label [@media(max-height:800px)]:!text-[14px]">
                      Poaching
                    </div>
                  </div>
                  <div className="list-item">
                    <Image alt="" className="list-img" src={teaCoffee} />
                    <div className="list-label [@media(max-height:800px)]:!text-[14px]">
                      Make Tea & Coffee
                    </div>
                  </div>
                  <div className="list-item">
                    <Image alt="" className="list-img" src={sterilising} />
                    <div className="list-label [@media(max-height:800px)]:!text-[14px]">
                      Sterilising
                    </div>
                  </div>
                </div>
                <div className="list desc">
                  <div className="list-desc-wrapper-1">
                    <div className="font-[Mulish-Black] text-[#525456] [@media(max-height:800px)]:text-[24px] text-[40px] w-fit mx-auto leading-[1.2]">
                      What&apos;s
                      <br /> On Tap?
                    </div>
                  </div>
                  <span className="vertical-line" />
                  <div className="list-desc-wrapper-2">
                    <div className="list-title">Confidence In Every Drop</div>
                    <div className="list-desc">
                      Experience the luxury of instant access to purified water,
                      providing you peace of mind and allowing you to
                      focus on what truly matters with every sip.
                    </div>
                  </div>
                  <span className="vertical-line" />
                  <div className="list-desc-wrapper-2">
                    <div className="list-title">Elevate Your Space</div>
                    <div className="list-desc">
                      Enjoy a sleek, sophisticated design that seamlessly 
                      integrates into your modern kitchen. Effortlessly easy to use
                      and safe for all.
                    </div>
                  </div>
                  <span className="vertical-line" />
                  <div className="list-desc-wrapper-2">
                    <div className="list-title">Elegance Meets Endurance</div>
                    <div className="list-desc">
                    Embrace our EcoSmart technology designed to reduce energy usage and promote a greener future. Enjoy a cost-efficient, long-lasting solution that&apos;s as low-maintenance as it is environmentally conscious.
                    </div>
                  </div>
                  <span className="vertical-line" />
                  <div className="list-desc-wrapper-2">
                    <div className="list-title">Purified Water For All</div>
                    <div className="list-desc">
                      The advanced filtration technology reduces contaminants, providing not only safer drinking water also water with fewer impurities for an all-around
                      healthier choice.
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="panel h3 overflow-y-hidden !justify-start">
              <Features />
            </section>
          </div>
        </div>
        <div className="homepage_overlay_bg z-[2] relative">
          <section className="panel v1 py-24 relative !h-full">
            <div className="top">
              <div className="text-[#343637] text-[40px] leading-[1.1] font-[Mulish-Bold] mb-12">
                Don&apos;t Take Our Word For It.
                <br /> Here&apos;s What Our Customers Say.
              </div>
            </div>
            <div className="bottom">
              <div className="ml-12 mr-0">
                <ReviewCarousel />
              </div>
            </div>
          </section>
          <section className="panel v2 mb-24 !h-full">
            <div className="top">
              <div className="title mb-6">
                Water Technology vs INTRIX One Tap
              </div>
            </div>
            <div className="bottom">
              <table>
                <tbody>
                  <tr>
                    <th></th>
                    <th>Boiled Water</th>
                    <th>Micro-Filtration Water</th>
                    <th>Alkaline Water</th>
                    <th>Reverse Osmosis Water</th>
                    <th>INTRIX One Tap</th>
                  </tr>
                  <tr>
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
          <section className="panel v3">
            <div className="top">
              <div className="title">Explore Our Core Features At A Glance</div>
            </div>
            <div className="middle container mx-auto px-4 mb-24">
              <video
                width="100%"
                height="100"
                controls
                preload="none"
                poster="/home/video.png"
              >
                <source src="/videos/Intrix-feature.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="bottom">
              <div className="container mx-auto flex items-center gap-x-24">
                <div className="title min-w-[300px] py-12 bg-white px-4 z-[2]">
                  Making Waves In
                  <br /> Water Purification
                </div>
                <div className="absolute right-0 w-2/3">
                  <Marquee autoFill={true} speed={100}>
                    {logoItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 px-4 whitespace-nowrap"
                      >
                        <Image
                          src={`/home/brand/${item.logo}.png`}
                          className={`w-[170px] object-cover block ${
                            index !== 2 && index !== 3 ? "p-8" : ""
                          }`}
                          alt={`logo ${index + 1}`}
                          width={300}
                          height={300}
                        />
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="panel v4 container mx-auto mt-24">
            {insightArr.map((insightItem, index) => (
              <div className="item-wrapper" key={index}>
                <div className="top">
                  <div className="title">{insightItem.title}</div>
                </div>
                <div className="middle">
                  <Image alt="" className="img" src={insightItem.image} />
                </div>
                <div className="bottom">
                  <div className="title">{insightItem.subTitle}</div>
                  <div className="desc">{insightItem.subDesc}</div>
                  <div className="read-more">
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
              </div>
            ))}
          </section> */}
          <section className="my-24 px-4">
            <FAQAccordion />
          </section>
          <div className="my-6">
            <ExperienceCentreForm />
          </div>
          <section className="">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
