"use client";

import React, { useEffect } from "react";
import "./explore.scss";

import Image from "next/image";
import ExperienceCentreForm from "@/components/ExperienceCentreForm";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";
import ComparisonTable from "@/components/products/ComparisonTable";
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

function Explore() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        function createFirstST() {
            document.body.style.overflowY = "auto";

            const afetrExploreTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".explore-container",
                    start: "top top+=138px",
                    end: "bottom center",
                    pin: true,
                    // markers: true,
                    scrub: 1,
                },
            });

            afetrExploreTl
                .to(".tap-3", { xPercent: -50, yPercent: -100 })
                .to(".label-1", { opacity: 0, yPercent: -100 }, "<")
                .to(".topbar", { opacity: 0 }, "<")
                .to(".label-2", { opacity: 1, yPercent: 50 }, "<")
                .to(".tap-1", { opacity: 0 }, "<")
                .to(".tap-2", { opacity: 0 }, "<")
                .to(".tap-4", { opacity: 0 }, "<")
                .to(".water-bg", { opacity: 0 }, "<")
                .to(".bullet-wrapper", { opacity: 1 }, "<");
        }

        const exploreTl = gsap.timeline({
            onInterrupt: (document.body.style.overflow = "hidden"),
            onComplete: () => createFirstST(),
        });
        exploreTl
            .to(".water-bg", { opacity: 1, yPercent: -30, duration: 1 })
            .to(".label-1", { opacity: 1, yPercent: 100, duration: 1 }, "<")
            .to(".tap-1", { opacity: 1, yPercent: -110, duration: 1 }, "<")
            .to(".tap-2", { opacity: 1, yPercent: -100, duration: 1 }, "<")
            .to(".tap-3", { opacity: 1, yPercent: -90, duration: 1 }, "<")
            .to(".tap-4", { opacity: 1, yPercent: -105, duration: 1 }, "<");

        return () => {
            gsap.globalTimeline.clear();
        };
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
                    <div>
                        INTRIX One Tap:
                        <br /> The Tap That Simplifies Your Life
                    </div>
                </div>
                <div className="label-wrapper label-2">
                    <div>Meet Your New Hydration Hero: The INTRIX One Tap</div>
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
                            <div className="bullet-title">Unmatched Purity</div>
                            <div className="bullet-desc">
                                Our advanced filtration system
                                <br /> removes 99.99% of microbes while
                                <br /> preserving essential minerals.
                            </div>
                        </div>
                    </div>
                    <div className="bullet-item">
                        <Image src={left2} alt="" />
                        <div className="bullet-desc-wrapper">
                            <div className="bullet-title">
                                Instant Purified
                                <br /> Hot & Chilled Water
                            </div>
                            <div className="bullet-desc">
                                Enjoy purified hot and chilled water
                                <br /> on demand-perfect for drinking,
                                <br /> cooking, washing, and sterilising
                            </div>
                        </div>
                    </div>
                    <div className="bullet-item">
                        <Image src={left3} alt="" />
                        <div className="bullet-desc-wrapper">
                            <div className="bullet-title">Energy Efficiency</div>
                            <div className="bullet-desc">
                                Our EcoSmart technology saves
                                <br /> energy with less reheating. Save
                                <br /> even more with Eco mode.
                            </div>
                        </div>
                    </div>
                    <div className="bullet-item">
                        <Image src={left4} alt="" />
                        <div className="bullet-desc-wrapper">
                            <div className="bullet-title">Safety First</div>
                            <div className="bullet-desc">
                                The intuitive Push-To-Activate
                                <br /> mechanism ensures safety for your
                                <br /> loved ones, preventing accidents,
                                <br /> while offering you peace of mind.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bullet-wrapper right">
                    <div className="bullet-item">
                        <Image src={right1} alt="" />
                        <div className="bullet-desc-wrapper">
                            <div className="bullet-title">Space Saving</div>
                            <div className="bullet-desc">
                                Designed to seamlessly conceal the
                                <br /> command centre under your sink
                                <br /> and maximise your preparation area.
                            </div>
                        </div>
                    </div>
                    <div className="bullet-item">
                        <Image src={right2} alt="" />
                        <div className="bullet-desc-wrapper">
                            <div className="bullet-title">
                                Revolutionary Durability
                                <br /> Hot & Cold Water
                            </div>
                            <div className="bullet-desc">
                                Featuring the world's first and only
                                <br /> Titanium Inner Core which is anti-
                                <br /> corrosion and anti-limescale,
                                <br /> ensuring longevity and superior
                                <br /> performance.
                            </div>
                        </div>
                    </div>
                    <div className="bullet-item">
                        <Image src={right3} alt="" />
                        <div className="bullet-desc-wrapper">
                            <div className="bullet-title">Eco-Conscious Design</div>
                            <div className="bullet-desc">
                                The All-in-One Filter is crafted from
                                <br /> 95% recyclable materials to promote
                                <br /> sustainability, repurposing and also
                                <br /> reducing up to 80% waste.
                            </div>
                        </div>
                    </div>
                    <div className="bullet-item">
                        <Image src={right4} alt="" />
                        <div className="bullet-desc-wrapper">
                            <div className="bullet-title">Low Maintenance</div>
                            <div className="bullet-desc">
                                With low maintenance needs and
                                <br /> long-lasting performance, enjoy
                                <br /> reduced utility bills, servicing costs,
                                <br /> and fewer replacements.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-24">
                <ExploreOurTabs />
            </div>

            <ComparisonTable />
            <ExperienceCentreForm />
        </div>
    );
}

export default Explore;
