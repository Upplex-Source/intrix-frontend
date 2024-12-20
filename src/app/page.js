"use client";

import React, { useEffect, useState } from "react";
import "./home.scss";
import Image from "next/image";

import {
    StarIcon,
    Add01Icon,
    Cancel01Icon,
    CircleArrowRight01Icon,
    CircleArrowLeft01Icon,
    ArrowRight02Icon,
    CheckmarkCircle02Icon,
} from "hugeicons-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import topImg from "../../public/home/3-kitchen-parallax.png";
import topImg2 from "../../public/home/4-kitchen-parallax.png";
import bottomImg from "../../public/home/1-kitchen-parallax.png";
import bottomImg2 from "../../public/home/8-kitchen-parallax.png";
import leftImg from "../../public/home/6-kitchen-parallax.png";
import rightImg from "../../public/home/5-kitchen-parallax.png";

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

import tumbler from "../../public/home/tumbler.png";
import bacteria from "../../public/home/icon/bacteria.png";
import hotCold from "../../public/home/icon/hot-cold.png";
import space from "../../public/home/icon/space.png";
import childLock from "../../public/home/icon/child-lock.png";

import sirim from "../../public/home/brand/sirim.png";
import psa from "../../public/home/brand/psa-award.png";
import wipo from "../../public/home/brand/wipo.png";
import tuv from "../../public/home/brand/tuv-nord.png";
import tenaga from "../../public/home/brand/suruhanjaya-tenaga.png";
import ce from "../../public/home/brand/ce.png";

import insights1 from "../../public/home/Rectangle 10.png";
import insights2 from "../../public/home/Rectangle 10-1.png";
import insights3 from "../../public/home/image.png";

import { useRouter } from "next/navigation";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircleCheck, faCircleLeft, faCircleRight, faStar } from "@fortawesome/free-solid-svg-icons";

function Home() {
    const router = useRouter();

    const insightArr = [
        {
            title: "Insights By INTRIX",
            image: insights1,
            subTitle: "Water and the Sustainable Development Goals",
            subDesc: "Sustainable Development Goal (SDG) 6 is to 'Ensure availability and sustainable management of water...",
        },
        {
            title: "Recent Events",
            image: insights2,
            subTitle: "IWA World Water Congress & Exhibition 2024",
            subDesc: "the 14th edition of ASIAWATER Expo & Forum, the region's leading water & wastewater platform for developing ...",
        },
        {
            title: "INTRIX In The Spotlight",
            image: insights3,
            subTitle: "INTRIX set to expand overseas, presence to Middle East, Australia, Hong Kong and Singapore",
            subDesc: "Home-grown hydro and thermal technology company Intrix Group expects to begin expanding to several countries ...",
        },
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        window.scrollTo({ top: 0, behavior: "smooth" });

        const createSecondST = () => {
            document.body.classList.remove("no-scrolling");
            document.body.classList.add("horizontal-scrolling");
            const filterTl = gsap.timeline();
            filterTl.to(".filter-wrapper", { opacity: 1, duration: 1 }).to(".filter-wrapper", { opacity: 0, duration: 1, delay: 5 });

            let horizontalSections = gsap.utils.toArray(".horizontal-wrapper");

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
                    x: () => `-${maxWidth - window.innerWidth}`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: container,
                        pin: true,
                        scrub: 1,
                        start: "top top+=164px",
                        // markers: true,
                    },
                    onComplete: () => {
                        document.body.classList.remove("horizontal-scrolling");
                        document.body.classList.add("vertical-scrolling");
                        document.body.classList.add("no-horizontal-scrolling");
                    },
                });
            });
        };

        // function createFirstST() {
        //     document.body.classList.remove("no-scrolling");
        //     document.body.classList.add("horizontal-scrolling");

        //     const afterFirstLoadTl = gsap.timeline({
        //         scrollTrigger: {
        //             trigger: ".first-panel",
        //             start: "top top+=20%",
        //             end: "bottom bottom-=10%",
        //             pin: true,
        //             // markers: true,
        //             scrub: 1,
        //         },
        //         onStart: () => createSecondST(),
        //     });

        //     afterFirstLoadTl
        //         .fromTo(".top-img", { opacity: 1, yPercent: 50 }, { opacity: 0, yPercent: -50 })
        //         .fromTo(".bottom-img", { yPercent: -50 }, { yPercent: 50 }, "<")
        //         .fromTo(".bottom-img-2", { opacity: 1, yPercent: -50 }, { opacity: 0, yPercent: 50 }, "<")
        //         .fromTo(".left-img", { opacity: 1, xPercent: 50 }, { opacity: 0, xPercent: -50 }, "<")
        //         .fromTo(".right-img", { opacity: 1, xPercent: -50 }, { opacity: 0, xPercent: 50 }, "<")
        //         .fromTo(".second-label", { opacity: 1, yPercent: -180 }, { opacity: 0, yPercent: 180 }, "<")
        //         .fromTo(".first", { opacity: 1, yPercent: 85 }, { opacity: 0, yPercent: -85 }, "<")
        //         .fromTo(".second", { opacity: 1, yPercent: 85 }, { opacity: 0, yPercent: -85 }, "<")
        //         .fromTo(".first-panel", { opacity: 1 }, { opacity: 0 }, "<");
        // }

        const firstLoadTl = gsap.timeline({
            onInterrupt: document.body.classList.add("no-scrolling"),
            onComplete: () => createSecondST(),
        });

        firstLoadTl
            .to(".top-img", { opacity: 1, yPercent: 45 })
            .to(".top-img", { opacity: 1, yPercent: 50 }, "<")
            .to(".bottom-img", { opacity: 1, yPercent: -50 }, "<")
            .to(".bottom-img-2", { yPercent: -50 }, "<")
            .to(".left-img", { opacity: 1, xPercent: 50 }, "<")
            .to(".right-img", { opacity: 1, xPercent: -50 }, "<")
            .to(".first-label", { opacity: 1, yPercent: -120, delay: 1 })
            .to(".first", { opacity: 1, yPercent: 80 }, "<")
            .to(".second-label", { zIndex: 1, opacity: 1, yPercent: -180, delay: 2 })
            .to(".first-label", { opacity: 0, yPercent: 120 }, "<")
            .to(".second", { opacity: 1, yPercent: 80 }, "<")
            .to(".bottom-img-2", { opacity: 1 }, "<")
            .to(".bottom-img", { opacity: 0 }, "<");

        return () => {
            gsap.globalTimeline.clear();
        };
    }, []);

    return (
        <div id="main-wrapper">
            <div id="home-wrapper">
                <section className="first-panel">
                    <Image alt="" className="top-img" src={topImg} />
                    <Image alt="" className="top-img" src={topImg2} />
                    <Image alt="" className="bottom-img" src={bottomImg} />
                    <Image alt="" className="bottom-img-2" src={bottomImg2} />
                    <Image alt="" className="left-img" src={leftImg} />
                    <Image alt="" className="right-img" src={rightImg} />

                    <div className="first-label">
                        <div className="brand">INTRIX</div>
                        <div className="product">ONE TAP</div>
                    </div>
                    <div className="shadow first"></div>

                    <div className="second-label">
                        <div className="label">
                            Invisible Innovation:
                            <br /> Transforming Your Space
                            <br /> With Just A Tap.
                        </div>
                        <button className="explore-btn" onClick={() => router.push("/product")}>
                            Discover Your Perfect Tap <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                    <div className="shadow second"></div>
                </section>
                <div className="horizontal-wrapper">
                    <section className="panel h1">
                        <div className="label-wrapper">
                            <div className="label">
                                <div className="title">
                                    Endless
                                    <br /> Possibilities
                                    <br /> of the INTRIX
                                    <br /> One Tap
                                </div>
                                <div className="desc">
                                    From prep to cooking, to cleaning and
                                    <br /> beyond, the possibilities are limitless.
                                    <br /> Let the INTRIX One Tap make things
                                    <br /> easier for you.
                                </div>
                                <span className="horizontal-line" />
                                <div className="bullet-wrapper">
                                    <div className="bullet-item">
                                        <Image src={eco} alt="" />
                                        <div className="bullet-desc">80% Energy Saving*</div>
                                    </div>
                                    <div className="bullet-item">
                                        <Image src={recycle} alt="" />
                                        <div className="bullet-desc">95% Recyclable*</div>
                                    </div>
                                    <div className="bullet-item">
                                        <Image src={waste} alt="" />
                                        <div className="bullet-desc">80% Reduced Waste*</div>
                                    </div>
                                    <div className="bullet-item">
                                        <Image src={cost} alt="" />
                                        <div className="bullet-desc">66% Cost Reduction*</div>
                                    </div>
                                </div>
                                <div className="disclaimer">
                                    *Disclaimer: The above data represents the performance metrics of the
                                    <br /> INTRIX product, specifically the Command Centre and filter. Results may
                                    <br /> vary based on usage and environmental conditions.
                                </div>
                            </div>
                        </div>
                        <div className="filter-wrapper">
                            <Image alt="" className="image" src={filter} />
                        </div>
                    </section>
                    <section className="panel h2">
                        <div className="content-wrapper">
                            <div className="list">
                                <div className="list-item">
                                    <Image alt="" className="list-img" src={blanching} />
                                    <div className="list-label">Blanching</div>
                                </div>
                                <div className="list-item">
                                    <Image alt="" className="list-img" src={boiling} />
                                    <div className="list-label">Boiling</div>
                                </div>
                                <div className="list-item">
                                    <Image alt="" className="list-img" src={poaching} />
                                    <div className="list-label">Poaching</div>
                                </div>
                                <div className="list-item">
                                    <Image alt="" className="list-img" src={teaCoffee} />
                                    <div className="list-label">Tea & Coffee</div>
                                </div>
                                <div className="list-item">
                                    <Image alt="" className="list-img" src={sterilising} />
                                    <div className="list-label">Sterilising</div>
                                </div>
                            </div>
                            <div className="list desc">
                                <div className="list-desc-wrapper-1">
                                    <div className="first-title">
                                        What&apos;s
                                        <br /> On Tap ?
                                    </div>
                                </div>
                                <span className="vertical-line" />
                                <div className="list-desc-wrapper-2">
                                    <div className="list-title">Confidence In Every Drop</div>
                                    <div className="list-desc">
                                        Experience the luxury of instant access to purified
                                        <br /> water, providing you peace of mind and allowing you
                                        <br /> to focus on what truly matters with every sip.
                                    </div>
                                </div>
                                <span className="vertical-line" />
                                <div className="list-desc-wrapper-2">
                                    <div className="list-title">Elevate Your Space</div>
                                    <div className="list-desc">
                                        Enjoy a sleek, sophisticated design that seamlessly
                                        <br /> integrates into your modern kitchen. Effortlessly easy
                                        <br /> to use and safe for all.
                                    </div>
                                </div>
                                <span className="vertical-line" />
                                <div className="list-desc-wrapper-2">
                                    <div className="list-title">Elegance Meets Endurance</div>
                                    <div className="list-desc">
                                        Embrace our EcoSmart technology that reduces
                                        <br /> plastic waste and promotes a greener future. Enjoy a<br /> cost-efficient solution that’s as
                                        low-maintenance as it is
                                        <br /> environmentally conscious.
                                    </div>
                                </div>
                                <span className="vertical-line" />
                                <div className="list-desc-wrapper-2">
                                    <div className="list-title">Pure Water For All</div>
                                    <div className="list-desc">
                                        The advanced filtration technology reduces
                                        <br /> contaminants, providing not only safer drinking water
                                        <br /> but also better-tasting water with fewer impurities for
                                        <br /> an all-around healthier choice.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="panel h3">
                        <Image alt="" className="image" src={tumbler} />
                        <div className="label-wrapper">
                            <div className="label">
                                <div className="small">Features</div>
                                <div className="title">
                                    Hassle-Free Hydration
                                    <br /> With A Design That Delivers.
                                </div>
                                <div className="desc">
                                    Experience the highest quality water straight from your tap with INTRIX.
                                    <br /> Our INTRIX One Tap is designed to unlock your kitchen&apos;s hidden potential, providing
                                    <br /> you with pure, convenient water whenever you need it.
                                </div>
                                <div className="bullet-wrapper">
                                    <div className="bullet-item">
                                        <Image src={bacteria} alt="" />
                                        <div className="bullet-desc-wrapper">
                                            <div className="bullet-title">Removes 99.99% microbes</div>
                                            <div className="bullet-desc">
                                                Removes bacteria, algae and some
                                                <br /> viruses while preserving natural minerals.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bullet-item">
                                        <Image src={hotCold} alt="" />
                                        <div className="bullet-desc-wrapper">
                                            <div className="bullet-title">Instant Purified Hot & Cold Water</div>
                                            <div className="bullet-desc">
                                                Perfect for drinking, cooking, washing, or
                                                <br /> sterilising, our system effortlessly enhances
                                                <br /> your kitchen&apos;s functionality.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bullet-item">
                                        <Image src={space} alt="" />
                                        <div className="bullet-desc-wrapper">
                                            <div className="bullet-title">Space Saving</div>
                                            <div className="bullet-desc">
                                                Seamlessly hides the command centre under
                                                <br /> the sink, maximising your preparation space.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bullet-item">
                                        <Image src={childLock} alt="" />
                                        <div className="bullet-desc-wrapper">
                                            <div className="bullet-title">Safety Child Lock</div>
                                            <div className="bullet-desc">
                                                The Push-To-Activate mechanism prevents
                                                <br /> accidents and keeps little hands safe.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="panel v1">
                    <div className="top">
                        <div className="title">
                            Don&apos;t Take Our Word For It.
                            <br /> Here&apos;s What Our Customers
                            <br /> Say.
                        </div>
                        <div className="icon-wrapper">
                            <FontAwesomeIcon icon={faCircleLeft} />
                            <FontAwesomeIcon icon={faCircleRight} />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="review-wrapper">
                            {/* {reviewArr.map(
                                (reviewItem, index) => 
                                <ReviewCard key={index} item={reviewItem} />
                            )} */}

                            <div className="review-card">
                                <div className="card-1">
                                    <div className="top">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} />
                                        ))}
                                    </div>
                                    <div className="middle">
                                        <div>
                                            Finally, we are delighted to have completed the installation of the Intrix tap. My mom is extremely
                                            satisfied, as the tabletop is now immaculate and we can use it effortlessly. Mr. Taufiq meticulously
                                            planned and executed the installation with exceptional precision. Even the hole near the sink is perfectly
                                            accurate. His work is incredibly professional and clean. We couldn't be happier with the outstanding
                                            service he provided.
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div>Darshini Vasuthevan</div>
                                    </div>
                                </div>
                            </div>
                            <div className="review-card">
                                <div className="card-1">
                                    <div className="top">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} />
                                        ))}
                                    </div>
                                    <div className="middle">
                                        <div>
                                            Finally done with the installation of the intrix tap today. My mum is satisfy with it as the table top
                                            look neat now and we can get drinking/hot water instantly. I have to give the compliment to the
                                            technician, M. Arib Aiman who was patiently help to drill the hole on my concrete countertop. Although it
                                            was a hot day but he complete the installation patiently without any complain. He also further... [More on
                                            Google Review]
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div>Bkyen Lim</div>
                                    </div>
                                </div>
                            </div>
                            <div className="review-card">
                                <div className="card-1">
                                    <div className="top">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} />
                                        ))}
                                    </div>
                                    <div className="middle">
                                        <div>
                                            I'm an interior designer, and I can't praise Intrix Group's instant hot water tap enough. It's a
                                            game-changer for any home. This tap doesn't just dispense water—it delivers purified hot water at a
                                            staggering 98°C instantly. It's perfect for everything from making tea to sterilizing baby bottles. The
                                            tap's design is sleek and stylish, complementing ... [More on Google Review]
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div>Ashikin Azidee</div>
                                    </div>
                                </div>
                            </div>
                            <div className="review-card">
                                <div className="card-1">
                                    <div className="top">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} />
                                        ))}
                                    </div>
                                    <div className="middle">
                                        <div>
                                            I installed Intrix a year ago, and I've been very pleased with their prompt responses to any issues that
                                            arise. The technician, Taufiq, did an excellent job resolving my problem and explained everything clearly
                                            and courteously.
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div>Kim Yee Teh</div>
                                    </div>
                                </div>
                            </div>
                            <div className="review-card">
                                <div className="card-1">
                                    <div className="top">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} />
                                        ))}
                                    </div>
                                    <div className="middle">
                                        <div>
                                            Simply hassleless, been using for about a year now. Good sales team, good installation team. No complaint.
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div>Kris Lee</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="panel v2">
                    <div className="top">
                        <div className="title">Water Technology vs INTRIX One Tap</div>
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
                                    <td>Contains Minerals</td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#ae9161" />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#ae9161" />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#ae9161" />
                                    </td>
                                    <td></td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#f5a623" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Eliminates Heavy Metals</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#ae9161" />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#f5a623" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mid Alkaline</td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#ae9161" />
                                    </td>
                                    <td></td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#f5a623" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Eliminates Bacteria</td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#ae9161" />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#ae9161" />
                                    </td>
                                    <td></td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#ae9161" />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#f5a623" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Eliminates Viruses</td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#ae9161" />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#ae9161" />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#f5a623" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Eliminates Chemical Toxins</td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#ae9161" />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#ae9161" />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#f5a623" />
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
                    <div className="middle">
                        <video width="100%" height="100" controls preload="none">
                            <source src="/videos/Intrix-filter.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="bottom">
                        <div className="title">
                            Making Waves In
                            <br /> Water Purification
                        </div>
                        <div className="brand-logo">
                            <div className="logo">
                                <Image src={tuv} alt="" />
                            </div>
                            <div className="logo">
                                <Image src={wipo} alt="" />
                            </div>
                            <div className="logo">
                                <Image src={psa} alt="" />
                            </div>
                            <div className="logo">
                                <Image src={tenaga} alt="" />
                            </div>
                            <div className="logo">
                                <Image src={ce} alt="" />
                            </div>
                            <div className="logo">
                                <Image src={sirim} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="panel v4">
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
                                    Read More <ArrowRight02Icon />
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
                <section className="panel v5">
                    <FAQAccordion />
                </section>
                <section className="panel footer">
                    <Footer />
                </section>
            </div>
        </div>
    );
}

export default Home;
