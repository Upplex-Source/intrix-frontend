"use client";

import React, { useEffect } from "react";

import "./home.scss";

import Image from "next/image";
import Header from "@/components/header/Header";
import { gsap } from "gsap";
import { MessageQuestionIcon } from "hugeicons-react";

import top from "../assets/new2/top.png";
import bottomOpened from "../assets/new2/bottom-opened.png";
import bottomClosed from "../assets/new2/bottom-closed.png";
import left from "../assets/new2/left.png";
import right from "../assets/new2/right.png";

import one from "../assets/new/1.png";
import two from "../assets/new/2.png";
import three from "../assets/new/3.png";
import four from "../assets/new/4.png";
import five from "../assets/new/5.png";
import six from "../assets/new/asd.png";

function Home() {
    useEffect(() => {
        // const firstTl = gsap.timeline();
        // firstTl.fromTo(".top", { opacity: 0, y: "0%" }, { opacity: 1, y: "50%", duration: 1 });
        // firstTl.fromTo(".bottom", { opacity: 0, y: "0%" }, { opacity: 1, y: "-50%", duration: 1 }, "<");
        // firstTl.fromTo(".left", { opacity: 0, x: "0%" }, { opacity: 1, x: "50%", duration: 1 }, "<");
        // firstTl.fromTo(".right", { opacity: 0, x: "0%" }, { opacity: 1, x: "-50%", duration: 1 }, "<");
        // const firstLabelTl = gsap.timeline();
        // firstLabelTl.to(".first-label", { opacity: 1, y: "-250%", duration: 1, delay: 2 });
        // firstLabelTl.to(".first-shadow", { opacity: 1, y: "100%", duration: 1 }, "<");
        // firstLabelTl.to(".first-label", { opacity: 0, y: "0%", duration: 1, delay: 1 });
        // const secondLabelTl = gsap.timeline();
        // secondLabelTl.to(".second-label", { opacity: 1, y: "-150%", duration: 1, delay: 4 });
        // secondLabelTl.to(".second-shadow", { opacity: 1, y: "100%", duration: 1 }, "<");
        // secondLabelTl.fromTo(".bottom-2", { opacity: 0.7 }, { opacity: 1, visibility: "visible", duration: 1 }, "<");
        // secondLabelTl.to(".bottom", { opacity: 0.7, duration: 1 }, "<");

        // gsap.to(".container-3", {
        //     scrollTrigger: ".container-3", // start the animation when ".box" enters the viewport (once)
        //     x: "-1000%",
        // });
    }, []);

    return (
        <div id="home-container">
            <div className="header">
                <Header />
            </div>
            {/* <div className="container-1">
                <Image src={top} alt="Picture of the author" className="img top" />
                <Image src={bottomOpened} alt="Picture of the author" className="img bottom" />
                <Image src={bottomClosed} alt="Picture of the author" className="img bottom-2" />
                <Image src={left} alt="Picture of the author" className="img2 left" />
                <Image src={right} alt="Picture of the author" className="img2 right" />

                <div className="first-label">
                    <p className="brand">INTRIX</p>
                    <p className="product">ONE TAP</p>
                </div>
                <div className="first-shadow" />
                <div className="second-label">
                    <p className="label-2">Invisible Innovation: Transforming Your Space With Just A Tap.</p>
                    <button>Discover Your Perfect Tap</button>
                </div>
                <div className="second-shadow" />
            </div> */}
            {/* <div className="container-2">
                <div className="left-container">
                    <div className="endless">
                        <p>
                            Endless
                            <br />
                            Possibilities
                            <br />
                            of the INTRIX
                            <br />
                            One Tap
                        </p>
                    </div>
                    <div className="from">
                        <p>
                            From prep to cooking, to cleaning and
                            <br />
                            beyond, the possibilities are limitless.
                            <br />
                            Let the INTRIX One Tap make things
                            <br />
                            easier for you.
                        </p>
                    </div>
                    <span className="horizontal-line" />
                    <div className="bullet-wrapper">
                        <div className="bullet">
                            <MessageQuestionIcon /> 80% Energy Saving*
                        </div>
                        <div className="bullet">
                            <MessageQuestionIcon /> 95% Recyclable*
                        </div>
                        <div className="bullet">
                            <MessageQuestionIcon /> 80% Reduce Waste*
                        </div>
                        <div className="bullet">
                            <MessageQuestionIcon /> 66% Cost Reduction*
                        </div>
                    </div>
                    <div className="disclaimer">
                        <p>
                            *Disclaimer: The above data represents the performance metrics of the
                            <br />
                            INTRIX product, specifically the Command Centre and filter. Results may
                            <br />
                            vary based on usage and environmental conditions.
                        </p>
                    </div>
                </div>
                <div className="right-container"></div>
            </div> */}
            <div className="container-3">
                <div className="left-container">
                    <div className="top-wrapper">
                        <div className="img-wrapper">
                            <Image src={one} alt="Picture of the author" className="img" />
                            <p>Blanching</p>
                        </div>
                        <div className="img-wrapper">
                            <Image src={two} alt="Picture of the author" className="img" />
                            <p>Boiling</p>
                        </div>
                        <div className="img-wrapper">
                            <Image src={three} alt="Picture of the author" className="img" />
                            <p>Poaching</p>
                        </div>
                        <div className="img-wrapper">
                            <Image src={four} alt="Picture of the author" className="img" />
                            <p>Make Tea & Coffee</p>
                        </div>
                        <div className="img-wrapper">
                            <Image src={five} alt="Picture of the author" className="img" />
                            <p>Sterilising</p>
                        </div>
                    </div>
                    <div className="bottom-wrapper">
                        <div className="text text-1">
                            <p>
                                What's
                                <br /> On Tap?
                            </p>
                        </div>
                        <span className="vertical-line"></span>
                        <div className="text">
                            <p>Confidence In Every Drop</p>
                            <p>
                                Experience the luxury of instant access to purified
                                <br /> water, providing you peace of mind and allowing you
                                <br /> to focus on what truly matters with every sip.
                            </p>
                        </div>
                        <span className="vertical-line"></span>
                        <div className="text">
                            <p>Elevate Your Space</p>
                            <p>
                                Enjoy a sleek, sophisticated design that seamlessly
                                <br /> integrates into your modern kitchen. Effortlessly easy
                                <br /> to use and safe for all.
                            </p>
                        </div>
                        <span className="vertical-line"></span>
                        <div className="text">
                            <p>Elegance Meets Endurance</p>
                            <p>
                                Embrace our EcoSmart technology that reduces
                                <br /> plastic waste and promotes a greener future. Enjoy a<br /> cost-efficient solution that’s as low-maintenance as
                                it is
                                <br /> environmentally conscious.
                            </p>
                        </div>
                        <span className="vertical-line"></span>
                        <div className="text">
                            <p>Pure Water For All</p>
                            <p>
                                The advanced filtration technology reduces
                                <br /> contaminants, providing not only safer drinking water
                                <br /> but also better-tasting water with fewer impurities for
                                <br /> an all-around healthier choice.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <div className="left-wrapper">
                        <Image src={six} alt="Picture of the author" className="img" />
                    </div>
                    <div className="right-wrapper">
                        <div className="top-wrapper">
                            <p className="label">Features</p>
                            <p className="title">
                                Hassle-Free Hydration
                                <br /> With A Design That Delivers.
                            </p>
                            <p className="desc">
                                Experience the highest quality water straight from your tap with INTRIX.
                                <br /> Our INTRIX One Tap is designed to unlock your kitchen's hidden potential, providing
                                <br /> you with pure, convenient water whenever you need it.
                            </p>
                        </div>
                        <div className="bottom-wrapper">
                            <div className="item">
                                <MessageQuestionIcon />
                                <div className="content">
                                    <p className="title">Removes 99.99% microbes</p>
                                    <p className="desc">Removes bacteria, algae and some viruses while preserving natural minerals.</p>
                                </div>
                            </div>
                            <div className="item">
                                <MessageQuestionIcon />
                                <div className="content">
                                    <p className="title">Instant Purified Hot & Cold Water</p>
                                    <p className="desc">
                                        Perfect for drinking, cooking, washing, or
                                        <br /> sterilising, our system effortlessly enhances
                                        <br /> your kitchen's functionality.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <MessageQuestionIcon />
                                <div className="content">
                                    <p className="title">Space Saving</p>
                                    <p className="desc">
                                        Seamlessly hides the command centre under
                                        <br /> the sink, maximising your preparation space.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <MessageQuestionIcon />
                                <div className="content">
                                    <p className="title">Safety Child Lock</p>
                                    <p className="desc">
                                        The Push-To-Activate mechanism prevents
                                        <br /> accidents and keeps little hands safe.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
