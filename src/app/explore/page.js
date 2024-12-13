"use client";

import React, { useEffect } from "react";
import "./explore.scss";

import Image from "next/image";
import { ArrowRight02Icon } from "hugeicons-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

if (typeof window !== "undefined") {
    // gsap.registerPlugin(ScrollTrigger, useGSAP);
    gsap.registerPlugin(ScrollTrigger);
}

// image-asset
import waterBg from "../../../public/product/water.png";
import tap1 from "../../../public/product/One Tap Lite (tap only).png";
import tap2 from "../../../public/product/Matte-Black-handle-left 1.png";
import tap3 from "../../../public/product/One Tap 4-in-1_Gunmental Gray.png";
import tap4 from "../../../public/product/Satin Gold_02.png";

import left1 from "../../../public/explore/bacteria.png";
import left2 from "../../../public/explore/hot-cold.png";
import left3 from "../../../public/explore/eco.png";
import left4 from "../../../public/explore/child-lock.png";

import right1 from "../../../public/explore/space.png";
import right2 from "../../../public/explore/limescale.png";
import right3 from "../../../public/explore/recycle.png";
import right4 from "../../../public/explore/cost.png";

import product1 from "../../../public/explore/tap-1.png";

function Explore() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        function createFirstST() {
            // document.body.style.overflow = "auto";

            // const createSecondST = () => {};

            const afetrExploreTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".explore-container",
                    start: "top top+=15%",
                    end: "bottom center",
                    pin: true,
                    // markers: true,
                    scrub: 1,
                },
                // onStart: () => createSecondST(),
            });

            afetrExploreTl
                .to(".tap-3", { x: "-20%", y: "20%", scale: 1.2 })
                .to(".label-1", { opacity: 0 }, "<")
                .to(".label-2", { opacity: 1 }, "<")
                .to(".tap-1", { opacity: 0 }, "<")
                .to(".tap-2", { opacity: 0 }, "<")
                .to(".tap-4", { opacity: 0 }, "<")
                .to(".water-bg", { opacity: 0 }, "<")
                .to(".bullet-wrapper", { opacity: 1 }, "<");
        }

        const exploreTl = gsap.timeline({ onComplete: () => createFirstST() });
        exploreTl
            .fromTo(".water-bg", { opacity: 0, y: "30%" }, { opacity: 1, y: "0%", duration: 1 })
            .fromTo(".label-1", { opacity: 0, y: "-100%" }, { opacity: 1, y: "0%", duration: 1 }, "<")
            .fromTo(".tap-1", { opacity: 0, y: "30%" }, { opacity: 1, y: "0%", duration: 1 }, "<")
            .fromTo(".tap-2", { opacity: 0, y: "30%" }, { opacity: 1, y: "0%", duration: 1 }, "<")
            .fromTo(".tap-3", { opacity: 0, y: "30%" }, { opacity: 1, y: "0%", duration: 1 }, "<")
            .fromTo(".tap-4", { opacity: 0, y: "30%" }, { opacity: 1, y: "0%", duration: 1 }, "<");
    }, []);

    return (
        <div id="explore-wrapper">
            <div className="explore-container">
                <div className="topbar">
                    <div className="topbar-item selected">All Series</div>
                    <div className="topbar-item">INTRIX One Tap 5-in-1</div>
                    <div className="topbar-item">INTRIX One Tap 4-in-1</div>
                    <div className="topbar-item">INTRIX One Tap 2-in-1</div>
                    <div className="topbar-item">INTRIX One Tap Lite</div>
                </div>
                <div className="label-wrapper label-1">
                    <p>
                        Elevate Your Everyday: Hydration By
                        <br /> Design with INTRIX One Tap
                    </p>
                </div>
                <div className="label-wrapper label-2">
                    <p>Meet Your New Hydration Hero: The INTRIX One Tap</p>
                </div>
                <Image className="tap tap-1" src={tap1} alt="" />
                <Image className="tap tap-2" src={tap2} alt="" />
                <Image className="tap tap-3" src={tap3} alt="" />
                <Image className="tap tap-4" src={tap4} alt="" />
                <Image className="water-bg" src={waterBg} alt="" />
                <div className="bullet-wrapper left">
                    <div className="bullet-item">
                        <Image src={left1} alt="" />
                        <div className="bullet-desc-wrapper">
                            <p className="bullet-title">Removes 99.99% microbes</p>
                            <p className="bullet-desc">
                                Removes bacteria, algae and some
                                <br /> viruses while preserving natural
                                <br /> minerals.
                            </p>
                        </div>
                    </div>
                    <div className="bullet-item">
                        <Image src={left2} alt="" />
                        <div className="bullet-desc-wrapper">
                            <p className="bullet-title">
                                Instant Purified
                                <br /> Hot & Cold Water
                            </p>
                            <p className="bullet-desc">
                                Perfect for drinking, cooking,
                                <br /> washing, or sterilising.
                            </p>
                        </div>
                    </div>
                    <div className="bullet-item">
                        <Image src={left3} alt="" />
                        <div className="bullet-desc-wrapper">
                            <p className="bullet-title">Energy Saving</p>
                            <p className="bullet-desc">
                                Our EcoSmart technology saves
                                <br /> energy with less reheating. Save
                                <br /> even more with Eco mode.
                            </p>
                        </div>
                    </div>
                    <div className="bullet-item">
                        <Image src={left4} alt="" />
                        <div className="bullet-desc-wrapper">
                            <p className="bullet-title">Safety Child Lock</p>
                            <p className="bullet-desc">
                                The Push-To-Activate mechanism
                                <br /> prevents accidents and keeps your
                                <br /> loved ones safe.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bullet-wrapper right">
                    <div className="bullet-item">
                        <Image src={right1} alt="" />
                        <div className="bullet-desc-wrapper">
                            <p className="bullet-title">Removes 99.99% microbes</p>
                            <p className="bullet-desc">
                                Removes bacteria, algae and some
                                <br /> viruses while preserving natural
                                <br /> minerals.
                            </p>
                        </div>
                    </div>
                    <div className="bullet-item">
                        <Image src={right2} alt="" />
                        <div className="bullet-desc-wrapper">
                            <p className="bullet-title">
                                Instant Purified
                                <br /> Hot & Cold Water
                            </p>
                            <p className="bullet-desc">
                                Perfect for drinking, cooking,
                                <br /> washing, or sterilising.
                            </p>
                        </div>
                    </div>
                    <div className="bullet-item">
                        <Image src={right3} alt="" />
                        <div className="bullet-desc-wrapper">
                            <p className="bullet-title">Energy Saving</p>
                            <p className="bullet-desc">
                                Our EcoSmart technology saves
                                <br /> energy with less reheating. Save
                                <br /> even more with Eco mode.
                            </p>
                        </div>
                    </div>
                    <div className="bullet-item">
                        <Image src={right4} alt="" />
                        <div className="bullet-desc-wrapper">
                            <p className="bullet-title">Safety Child Lock</p>
                            <p className="bullet-desc">
                                The Push-To-Activate mechanism
                                <br /> prevents accidents and keeps your
                                <br /> loved ones safe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore-container sub">
                <p className="label">Explore Our One Tap Series</p>
                <div className="product-list-wrapper">
                    <div className="product-wrapper">
                        <Image src={product1} alt="" className="product-image" />
                        <div className="product-detail">
                            <p className="name">INTRIX One Tap Lite</p>
                            <p className="price">RM 3,988.00</p>
                            <p className="desc">
                                This 2 piece set is an outfit for both male
                                <br /> and female. It is also available in different sizes
                                <br /> and colors.
                            </p>
                            <div className="button-wrapper">
                                <div className="color-selector">Chrome</div>
                                <button className="learn-btn">Learn More</button>
                            </div>
                            <p className="buy-now">Buy Now</p>
                        </div>
                    </div>
                    <div className="product-wrapper">
                        <Image src={product1} alt="" className="product-image" />
                        <div className="product-detail">
                            <p className="name">INTRIX One Tap 2-in-1</p>
                            <p className="price">RM 4,500.00</p>
                            <p className="desc">
                                This 2 piece set is an outfit for both male
                                <br /> and female. It is also available in different sizes
                                <br /> and colors.
                            </p>
                            <div className="button-wrapper">
                                <div className="color-selector">Matte Black</div>
                                <button className="learn-btn">Learn More</button>
                            </div>
                            <p className="buy-now">Buy Now</p>
                        </div>
                    </div>
                    <div className="product-wrapper">
                        <Image src={product1} alt="" className="product-image" />
                        <div className="product-detail">
                            <p className="name">INTRIX One Tap 4-in-1</p>
                            <p className="price">RM 5,200.00</p>
                            <p className="desc">
                                This 2 piece set is an outfit for both male
                                <br /> and female. It is also available in different sizes
                                <br /> and colors.
                            </p>
                            <div className="button-wrapper">
                                <div className="color-selector">Satin Gold</div>
                                <button className="learn-btn">Learn More</button>
                            </div>
                            <p className="buy-now">Buy Now</p>
                        </div>
                    </div>
                    <div className="product-wrapper">
                        <Image src={product1} alt="" className="product-image" />
                        <div className="product-detail">
                            <p className="name">INTRIX One Tap 5-in-1</p>
                            <p className="price">RM 7,500.00</p>
                            <p className="desc">
                                This 2 piece set is an outfit for both male
                                <br /> and female. It is also available in different sizes
                                <br /> and colors.
                            </p>
                            <div className="button-wrapper">
                                <div className="color-selector">Chrome</div>
                                <button className="learn-btn">Learn More</button>
                            </div>
                            <p className="buy-now">Buy Now</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore-container sub">
                <p className="label">Making Waves In Water Purification</p>
                <div className="patents-list-wrapper">
                    <div className="list-col col-1"></div>
                    <div className="list-col col-2"></div>
                    <div className="list-col col-3">
                        <div className="orange"></div>
                        <div className="orange"></div>
                        <div className="item"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
