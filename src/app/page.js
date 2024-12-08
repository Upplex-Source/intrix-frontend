"use client";

import React, { useEffect } from "react";
import "./home.scss";
import Image from "next/image";

import { ArrowRight01Icon, ArrowLeft01Icon, ArrowRight02Icon } from "hugeicons-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import topImg from "../../public/home/3-kitchen-parallax.png";
import bottomImg from "../../public/home/1-kitchen-parallax.png";
import bottomImg2 from "../../public/home/7-kitchen-parallax.png";
import leftImg from "../../public/home/6-kitchen-parallax.png";
import rightImg from "../../public/home/5-kitchen-parallax.png";

import blanching from "../../public/home/blanching-human.png";
import boiling from "../../public/home/egg-and-kitchen.png";
import poaching from "../../public/home/prawn-person.png";
import teaCoffee from "../../public/home/coffee.png";
import sterilising from "../../public/home/baby-bottle-sink.png";

import tumbler from "../../public/home/tumbler.png";

function Home() {
    useEffect(() => {
        const createFirstST = () => {
            const createSecondST = () => {
                let horizontalSections = gsap.utils.toArray(".horizontal-wrapper");

                horizontalSections.forEach((container) => {
                    let sections = container.querySelectorAll(".panel");

                    gsap.to(sections, {
                        xPercent: -100 * (sections.length - 1),
                        ease: "none",
                        scrollTrigger: {
                            trigger: container,
                            pin: true,
                            scrub: 1,
                            end: "+=3500",
                            // markers: true,
                        },
                    });
                });
            };

            const afterFirstLoadTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".first-load",
                    start: "top top",
                    end: "bottom bottom-=5%",
                    markers: true,
                    pin: true,
                    scrub: 1,
                },
                onComplete: () => createSecondST(),
            });

            afterFirstLoadTl
                .fromTo(".top-img", { opacity: 1, y: "100%" }, { opacity: 0, y: "-100%", duration: 1 })
                .fromTo(".bottom-img", { y: "-100%" }, { y: "100%", duration: 1 }, "<")
                .fromTo(".bottom-img-2", { opacity: 1, y: "-100%" }, { opacity: 0, y: "100%", duration: 1 }, "<")
                .fromTo(".left-img", { opacity: 1, x: "100%" }, { opacity: 0, x: "-100%", duration: 1 }, "<")
                .fromTo(".right-img", { opacity: 1, x: "-100%" }, { opacity: 0, x: "100%", duration: 1 }, "<")
                .fromTo(".second-label", { opacity: 1, y: "-250%" }, { opacity: 0, y: "250%", duration: 1 }, "<")
                .fromTo(".first", { opacity: 1, y: "100%" }, { opacity: 0, y: "-100%", duration: 1 }, "<")
                .fromTo(".second", { opacity: 1, y: "100%" }, { opacity: 0, y: "-100%", duration: 1 }, "<");
        };

        const firstLoadTl = gsap.timeline({
            onComplete: () => createFirstST(),
        });
        firstLoadTl
            .to(".top-img", { opacity: 1, y: "100%", duration: 1 })
            .to(".bottom-img", { opacity: 1, y: "-100%", duration: 1 }, "<")
            .to(".bottom-img-2", { y: "-100%", duration: 1 }, "<")
            .to(".left-img", { opacity: 1, x: "100%", duration: 1 }, "<")
            .to(".right-img", { opacity: 1, x: "-100%", duration: 1 }, "<")
            .to(".first-label", { opacity: 1, y: "-150%", duration: 1, delay: 1 })
            .to(".first", { opacity: 1, y: "100%", duration: 1 }, "<")
            .to(".second-label", { opacity: 1, y: "-250%", duration: 1, delay: 2 })
            .to(".first-label", { opacity: 0, y: "100%", duration: 1 }, "<")
            .to(".second", { opacity: 1, y: "100%", duration: 1 }, "<")
            .to(".bottom-img-2", { opacity: 1, duration: 1 }, "<")
            .to(".bottom-img", { opacity: 0, duration: 1 }, "<");
    }, []);

    return (
        <div id="home-wrapper">
            <section className="panel first-load">
                <Image className="top-img" src={topImg} />
                <Image className="bottom-img" src={bottomImg} />
                <Image className="bottom-img-2" src={bottomImg2} />
                <Image className="left-img" src={leftImg} />
                <Image className="right-img" src={rightImg} />

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
                    <button className="explore-btn">
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
                </section>
                <section className="panel h2">
                    <div className="content-wrapper">
                        <div className="list img">
                            <Image className="list-img" src={blanching} />
                            <Image className="list-img" src={boiling} />
                            <Image className="list-img" src={poaching} />
                            <Image className="list-img" src={teaCoffee} />
                            <Image className="list-img" src={sterilising} />
                        </div>
                        <div className="list desc">
                            <div className="list-desc-wrapper-1">
                                <p className="first-title">
                                    What',
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
                    <Image className="image" src={tumbler} />
                    <div className="label">
                        <p className="small">Features</p>
                        <p className="title">
                            Hassle-Free Hydration
                            <br /> With A Design That Delivers.
                        </p>
                        <p className="desc">
                            Experience the highest quality water straight from your tap with INTRIX.
                            <br /> Our INTRIX One Tap is designed to unlock your kitchen's hidden potential, providing
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
                                        <br /> your kitchen's functionality.
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
                    <div className="icon">
                        <ArrowLeft01Icon />
                        <ArrowRight01Icon />
                    </div>
                </div>
                <div className="bottom"></div>
            </section>
            <section className="panel v2">
                <div className="top">
                    <p className="title">Water Technology vs INTRIX One Tap</p>
                </div>
                <div className="bottom"></div>
            </section>
            <section className="panel v3">
                <div className="top">
                    <p className="title">Explore Our Core Features At A Glance</p>
                </div>
                <div className="middle"></div>
                <div className="bottom"></div>
            </section>
            <section className="panel v4">
                <div className="item-wrapper">
                    <div className="top">
                        <p>Insights By INTRIX</p>
                    </div>
                    <div className="middle"></div>
                    <div className="bottom">
                        <p>Water and the Sustainable Development Goals</p>
                        <p>Sustainable Development Goal (SDG) 6 is to “Ensure availability and sustainable management of water...</p>
                        <p>Read More</p>
                    </div>
                </div>
                <div className="item-wrapper">
                    <div className="top">
                        <p>Recent Events</p>
                    </div>
                    <div className="middle"></div>
                    <div className="bottom">
                        <p>IWA World Water Congress & Exhibition 2024</p>
                        <p>the 14th edition of ASIAWATER Expo & Forum, the region’s leading water & wastewater platform for developing ...</p>
                        <p>Read More</p>
                    </div>
                </div>
                <div className="item-wrapper">
                    <div className="top">
                        <p>INTRIX In The Spotlight</p>
                    </div>
                    <div className="middle"></div>
                    <div className="bottom">
                        <p>INTRIX set to expand overseas, presence to Middle East, Australia, Hong Kong and Singapore</p>
                        <p>Home-grown hydro and thermal technology company Intrix Group expects to begin expanding to several countries ...</p>
                        <p>Read More</p>
                    </div>
                </div>
            </section>
            <section className="panel v5">
                <div className="left"></div>
                <div className="right"></div>
            </section>
            <section className="panel v6">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </section>
        </div>
    );
}

export default Home;
