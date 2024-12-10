"use client";

import React, { useEffect, useState } from "react";
import "./home.scss";
import Image from "next/image";

import { Add01Icon, Cancel01Icon, CircleArrowRight01Icon, CircleArrowLeft01Icon, ArrowRight02Icon, CheckmarkCircle02Icon } from "hugeicons-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import topImg from "../../public/home/3-kitchen-parallax.png";
import bottomImg from "../../public/home/1-kitchen-parallax.png";
import bottomImg2 from "../../public/home/7-kitchen-parallax.png";
import leftImg from "../../public/home/6-kitchen-parallax.png";
import rightImg from "../../public/home/5-kitchen-parallax.png";

import filter from "../../public/home/command-centre.png";

import blanching from "../../public/home/blanching-human.png";
import boiling from "../../public/home/egg-and-kitchen.png";
import poaching from "../../public/home/prawn-person.png";
import teaCoffee from "../../public/home/coffee.png";
import sterilising from "../../public/home/baby-bottle-sink.png";

import tumbler from "../../public/home/tumbler.png";

import useHomepage from "./hook/useHomepage";
import ReviewCard from "@/components/review-card/ReviewCard";


function Home() {
    const [faqAns, setFaqAns] = useState(undefined);
    const { reviewArr, insightArr, faqArr, footerArr } = useHomepage();

    function discover() {
        document.body.style.overflow = "auto";

        const createSecondST = () => {
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
                        start: "top top+=15%",
                        end: "+=5000",
                        markers: true,
                    },
                    onComplete: () => (document.body.style.overflowX = "hidden"),
                });
            });
        };

        const afterFirstLoadTl = gsap.timeline({
            // scrollTrigger: {
            //     trigger: ".first-panel",
            //     start: "top top",
            //     end: "bottom bottom-=5%",
            //     pin: true,
            //     scrub: 1,
            // },
            onStart: () => createSecondST(),
        });

        afterFirstLoadTl
            .fromTo(".top-img", { opacity: 1, y: "100%" }, { opacity: 0, y: "-100%", duration: 1 })
            .fromTo(".bottom-img", { y: "-100%" }, { y: "100%", duration: 1 }, "<")
            .fromTo(".bottom-img-2", { opacity: 1, y: "-100%" }, { opacity: 0, y: "100%", duration: 1 }, "<")
            .fromTo(".left-img", { opacity: 1, x: "100%" }, { opacity: 0, x: "-100%", duration: 1 }, "<")
            .fromTo(".right-img", { opacity: 1, x: "-100%" }, { opacity: 0, x: "100%", duration: 1 }, "<")
            .fromTo(".second-label", { opacity: 1, y: "-200%" }, { opacity: 0, y: "200%", duration: 1 }, "<")
            .fromTo(".first", { opacity: 1, y: "85%" }, { opacity: 0, y: "-85%", duration: 1 }, "<")
            .fromTo(".second", { opacity: 1, y: "85%" }, { opacity: 0, y: "-85%", duration: 1 }, "<")
            .fromTo(".first-panel", { opacity: 1 }, { opacity: 0, duration: 1 }, "<");
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        const firstLoadTl = gsap.timeline({
            onInterrupt: (document.body.style.overflow = "hidden"),
            // onComplete: () => createFirstST(),
        });
        firstLoadTl
            .to(".top-img", { opacity: 1, y: "100%", duration: 1 })
            .to(".bottom-img", { opacity: 1, y: "-100%", duration: 1 }, "<")
            .to(".bottom-img-2", { y: "-100%", duration: 1 }, "<")
            .to(".left-img", { opacity: 1, x: "100%", duration: 1 }, "<")
            .to(".right-img", { opacity: 1, x: "-100%", duration: 1 }, "<")
            .to(".first-label", { opacity: 1, y: "-120%", duration: 1, delay: 1 })
            .to(".first", { opacity: 1, y: "85%", duration: 1 }, "<")
            .to(".second-label", { zIndex: 1, opacity: 1, y: "-200%", duration: 1, delay: 2 })
            .to(".first-label", { opacity: 0, y: "100%", duration: 1 }, "<")
            .to(".second", { opacity: 1, y: "85%", duration: 1 }, "<")
            .to(".bottom-img-2", { opacity: 1, duration: 1 }, "<")
            .to(".bottom-img", { opacity: 0, duration: 1 }, "<");
    }, []);

    return (
        <div id="main-wrapper">
            <div id="home-wrapper">
                <section className="first-panel">
                    <Image alt="" className="top-img" src={topImg} />
                    <Image alt="" className="bottom-img" src={bottomImg} />
                    <Image alt="" className="bottom-img-2" src={bottomImg2} />
                    <Image alt="" className="left-img" src={leftImg} />
                    <Image alt="" className="right-img" src={rightImg} />

                    <div className="first-label">
                        <p className="brand">INTRIX</p>
                        <p className="product">ONE TAP</p>
                    </div>
                    <div className="shadow first"></div>

                    <div className="second-label">
                        <p className="label">
                            Invisible Innovation:
                            <br /> Transforming Your Space
                            <br /> With Just A Tap.
                        </p>
                        <button className="explore-btn" onClick={() => discover()}>
                            Discover Your Perfect Tap <ArrowRight02Icon />
                        </button>
                    </div>
                    <div className="shadow second"></div>
                </section>
                <div className="horizontal-wrapper">
                    <section className="panel h1">
                        <div className="label">
                            <p className="title">
                                Endless
                                <br /> Possibilities
                                <br /> of the INTRIX
                                <br /> One Tap
                            </p>
                            <p className="desc">
                                From prep to cooking, to cleaning and
                                <br /> beyond, the possibilities are limitless.
                                <br /> Let the INTRIX One Tap make things
                                <br /> easier for you.
                            </p>
                            <span className="horizontal-line" />
                            <div className="bullet-wrapper">
                                <p>80% Energy Saving*</p>
                                <p>95% Recyclable*</p>
                                <p>80% Reduced Waste*</p>
                                <p>66% Cost Reduction*</p>
                            </div>
                            <p className="disclaimer">
                                *Disclaimer: The above data represents the performance metrics of the
                                <br /> INTRIX product, specifically the Command Centre and filter. Results may
                                <br /> vary based on usage and environmental conditions.
                            </p>
                        </div>
                        <div className="filter-wrapper">
                            <Image alt="" className="image" src={filter} />
                        </div>
                    </section>
                    <section className="panel h2">
                        <div className="content-wrapper">
                            <div className="list img">
                                <Image alt="" className="list-img" src={blanching} />
                                <Image alt="" className="list-img" src={boiling} />
                                <Image alt="" className="list-img" src={poaching} />
                                <Image alt="" className="list-img" src={teaCoffee} />
                                <Image alt="" className="list-img" src={sterilising} />
                            </div>
                            <div className="list desc">
                                <div className="list-desc-wrapper-1">
                                    <p className="first-title">
                                        What&apos;s
                                        <br /> On Tap ?
                                    </p>
                                </div>
                                <span className="vertical-line" />
                                <div className="list-desc-wrapper-2">
                                    <p className="list-title">Confidence In Every Drop</p>
                                    <p className="list-desc">
                                        Experience the luxury of instant access to purified
                                        <br /> water, providing you peace of mind and allowing you
                                        <br /> to focus on what truly matters with every sip.
                                    </p>
                                </div>
                                <span className="vertical-line" />
                                <div className="list-desc-wrapper-2">
                                    <p className="list-title">Elevate Your Space</p>
                                    <p className="list-desc">
                                        Enjoy a sleek, sophisticated design that seamlessly
                                        <br /> integrates into your modern kitchen. Effortlessly easy
                                        <br /> to use and safe for all.
                                    </p>
                                </div>
                                <span className="vertical-line" />
                                <div className="list-desc-wrapper-2">
                                    <p className="list-title">Elegance Meets Endurance</p>
                                    <p className="list-desc">
                                        Embrace our EcoSmart technology that reduces
                                        <br /> plastic waste and promotes a greener future. Enjoy a<br /> cost-efficient solution that’s as
                                        low-maintenance as it is
                                        <br /> environmentally conscious.
                                    </p>
                                </div>
                                <span className="vertical-line" />
                                <div className="list-desc-wrapper-2">
                                    <p className="list-title">Pure Water For All</p>
                                    <p className="list-desc">
                                        The advanced filtration technology reduces
                                        <br /> contaminants, providing not only safer drinking water
                                        <br /> but also better-tasting water with fewer impurities for
                                        <br /> an all-around healthier choice.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="panel h3">
                        <Image alt="" className="image" src={tumbler} />
                        <div className="label">
                            <p className="small">Features</p>
                            <p className="title">
                                Hassle-Free Hydration
                                <br /> With A Design That Delivers.
                            </p>
                            <p className="desc">
                                Experience the highest quality water straight from your tap with INTRIX.
                                <br /> Our INTRIX One Tap is designed to unlock your kitchen&apos;s hidden potential, providing
                                <br /> you with pure, convenient water whenever you need it.
                            </p>
                            <div className="bullet-wrapper">
                                <div className="bullet-item">
                                    <ArrowRight02Icon />
                                    <div className="bullet-desc-wrapper">
                                        <p className="bullet-title">Removes 99.99% microbes</p>
                                        <p className="bullet-desc">
                                            Removes bacteria, algae and some
                                            <br /> viruses while preserving natural minerals.
                                        </p>
                                    </div>
                                </div>
                                <div className="bullet-item">
                                    <ArrowRight02Icon />
                                    <div className="bullet-desc-wrapper">
                                        <p className="bullet-title">Instant Purified Hot & Cold Water</p>
                                        <p className="bullet-desc">
                                            Perfect for drinking, cooking, washing, or
                                            <br /> sterilising, our system effortlessly enhances
                                            <br /> your kitchen&apos;s functionality.
                                        </p>
                                    </div>
                                </div>
                                <div className="bullet-item">
                                    <ArrowRight02Icon />
                                    <div className="bullet-desc-wrapper">
                                        <p className="bullet-title">Space Saving</p>
                                        <p className="bullet-desc">
                                            Seamlessly hides the command centre under
                                            <br /> the sink, maximising your preparation space.
                                        </p>
                                    </div>
                                </div>
                                <div className="bullet-item">
                                    <ArrowRight02Icon />
                                    <div className="bullet-desc-wrapper">
                                        <p className="bullet-title">Safety Child Lock</p>
                                        <p className="bullet-desc">
                                            The Push-To-Activate mechanism prevents
                                            <br /> accidents and keeps little hands safe.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="panel v1">
                    <div className="top">
                        <p className="title">
                            Curious About Us?
                            <br /> Here’s What People Have
                            <br /> Been Saying.
                        </p>
                        <div className="icon-wrapper">
                            <CircleArrowLeft01Icon />
                            <CircleArrowRight01Icon />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="review-wrapper">
                            {/* {reviewArr.map(
                                (reviewItem, index) => 
                                <ReviewCard key={index} item={reviewItem} />
                            )} */}

                            <div className="review-card"></div>
                            <div className="review-card"></div>
                            <div className="review-card"></div>
                            <div className="review-card"></div>
                            <div className="review-card"></div>
                        </div>
                    </div>
                </section>
                <section className="panel v2">
                    <div className="top">
                        <p className="title">Water Technology vs INTRIX One Tap</p>
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
                                        <CheckmarkCircle02Icon />
                                    </td>
                                    <td>
                                        <CheckmarkCircle02Icon />
                                    </td>
                                    <td>
                                        <CheckmarkCircle02Icon />
                                    </td>
                                    <td></td>
                                    <td>
                                        <CheckmarkCircle02Icon color="#f5a623" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Eliminates Heavy Metals</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <CheckmarkCircle02Icon />
                                    </td>
                                    <td>
                                        <CheckmarkCircle02Icon color="#f5a623" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mid Alkaline</td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <CheckmarkCircle02Icon />
                                    </td>
                                    <td></td>
                                    <td>
                                        <CheckmarkCircle02Icon color="#f5a623" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Eliminates Bacteria</td>
                                    <td>
                                        <CheckmarkCircle02Icon />
                                    </td>
                                    <td>
                                        <CheckmarkCircle02Icon />
                                    </td>
                                    <td></td>
                                    <td>
                                        <CheckmarkCircle02Icon />
                                    </td>
                                    <td>
                                        <CheckmarkCircle02Icon color="#f5a623" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Eliminates Viruses</td>
                                    <td>
                                        <CheckmarkCircle02Icon />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <CheckmarkCircle02Icon />
                                    </td>
                                    <td>
                                        <CheckmarkCircle02Icon color="#f5a623" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Eliminates Chemical Toxins</td>
                                    <td>
                                        <CheckmarkCircle02Icon />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <CheckmarkCircle02Icon />
                                    </td>
                                    <td>
                                        <CheckmarkCircle02Icon color="#f5a623" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="panel v3">
                    <div className="top">
                        <p className="title">Explore Our Core Features At A Glance</p>
                    </div>
                    <div className="middle">
                        <video width="100%" height="100" controls preload="none">
                            <source src="/Intrix-filter.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="bottom">
                        <p className="title">
                            Making Waves In
                            <br /> Water Purification
                        </p>
                        <div className="brand-logo">
                            <div className="logo">logo</div>
                            <div className="logo">logo</div>
                            <div className="logo">logo</div>
                            <div className="logo">logo</div>
                            <div className="logo">logo</div>
                            <div className="logo">logo</div>
                            <div className="logo">logo</div>
                        </div>
                    </div>
                </section>
                <section className="panel v4">
                    {insightArr.map((insightItem, index) => (
                        <div className="item-wrapper" key={index}>
                            <div className="top">
                                <p className="title">{insightItem.title}</p>
                            </div>
                            <div className="middle">
                                <Image alt="" className="img" src={insightItem.image} />
                            </div>
                            <div className="bottom">
                                <p className="title">{insightItem.subTitle}</p>
                                <p className="desc">{insightItem.subDesc}</p>
                                <p className="read-more">
                                    Read More <ArrowRight02Icon />
                                </p>
                            </div>
                        </div>
                    ))}
                </section>
                <section className="panel v5">
                    <div className="left">
                        <p className="title">
                            Commonly
                            <br /> Asked
                            <br /> Questions
                        </p>
                    </div>
                    <div className="right">
                        {faqArr.map((faqItem, index) => (
                            <div className="item-wrapper" key={index}>
                                <div className="item-top">
                                    <p className="title">{faqItem.title}</p>
                                    {faqAns && faqItem.title === faqAns ? (
                                        <Cancel01Icon onClick={() => setFaqAns(undefined)} />
                                    ) : (
                                        <Add01Icon onClick={() => setFaqAns(faqItem.title)} />
                                    )}
                                </div>
                                {faqItem.title === faqAns && <div className="item-bottom">{faqItem.ans}</div>}
                                <span className="horizontal-line" />
                            </div>
                        ))}
                    </div>
                </section>
                <section className="panel footer">
                    {footerArr.map((item, index) => (
                        <div className="footer-item" key={index}>
                            <p className="title" key={index}>
                                {item.title}
                            </p>
                            {item.children.map((childItem, index) => (
                                <p className="item" key={index}>
                                    {childItem.label}
                                </p>
                            ))}
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default Home;
