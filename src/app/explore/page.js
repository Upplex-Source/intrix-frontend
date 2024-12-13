"use client";

import React, { useEffect } from "react";
import "./explore.scss";

import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// image-asset
import waterBg from "../../../public/product/water.png";
import tap1 from "../../../public/product/One Tap Lite (tap only).png";
import tap2 from "../../../public/product/Matte-Black-handle-left 1.png";
import tap3 from "../../../public/product/One Tap 4-in-1_Gunmental Gray.png";
import tap4 from "../../../public/product/Satin Gold_02.png";

// import tap1 from "../../../public/product/tap1.png";
// import tap2 from "../../../public/product/tap2.png";
// import tap3 from "../../../public/product/tap3.png";
// import tap4 from "../../../public/product/tap4.png";

function Explore() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        const exploreTl = gsap.timeline({});
        exploreTl
            .fromTo(".water-bg", { opacity: 0, y: "30%", duration: 1 }, { opacity: 1, y: "0%", duration: 1 })
            .fromTo(".tap-1", { opacity: 0, y: "30%", duration: 1 }, { opacity: 1, y: "0%", duration: 1 }, "<")
            .fromTo(".tap-2", { opacity: 0, y: "30%", duration: 1 }, { opacity: 1, y: "0%", duration: 1 }, "<")
            .fromTo(".tap-3", { opacity: 0, y: "30%", duration: 1 }, { opacity: 1, y: "0%", duration: 1 }, "<")
            .fromTo(".tap-4", { opacity: 0, y: "30%", duration: 1 }, { opacity: 1, y: "0%", duration: 1 }, "<");
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
                <div className="label-wrapper">
                    <p className="label">
                        Elevate Your Everyday: Hydration By
                        <br /> Design with INTRIX One Tap
                    </p>
                </div>
                {/* <div></div> */}
                <Image className="tap tap-1" src={tap1} alt="" />
                <Image className="tap tap-2" src={tap2} alt="" />
                <Image className="tap tap-3" src={tap3} alt="" />
                <Image className="tap tap-4" src={tap4} alt="" />
                <Image className="water-bg" src={waterBg} alt="" />
            </div>

            {/* <Image className="tap tap-1" src={tap1} alt="" /> */}
            {/* <Image className="tap tap-2" src={tap2} alt="" /> */}
            {/* <Image className="tap tap-4" src={tap4} alt="" /> */}
            {/* <Image className="water-bg" src={waterBg} alt="" /> */}
        </div>
    );
}

export default Explore;
