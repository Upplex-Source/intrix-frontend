"use client";
import React, { useEffect } from "react";
import "./test.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import topImg from "../../../public/home/3-kitchen-parallax.png";
import topImg2 from "../../../public/home/4-kitchen-parallax.png";
import bottomImg from "../../../public/home/1-kitchen-parallax.png";
import bottomImg2 from "../../../public/home/8-kitchen-parallax.png";
import leftImg from "../../../public/home/6-kitchen-parallax.png";
import rightImg from "../../../public/home/5-kitchen-parallax.png";

import filter from "../../../public/home/command-centre.png";

import blanching from "../../../public/home/blanching-human.png";
import boiling from "../../../public/home/egg-and-kitchen.png";
import poaching from "../../../public/home/prawn-person.png";
import teaCoffee from "../../../public/home/coffee.png";
import sterilising from "../../../public/home/baby-bottle-sink.png";

import tumbler from "../../../public/home/tumbler.png";

import Image from "next/image";

function page() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let currentIndex = -1;
        let animating;
        let swipePanels = gsap.utils.toArray(".swipe-section .panel");

        gsap.set(".y-100", { yPercent: 100 });

        gsap.set(swipePanels, {
            zIndex: (i) => i,
        });

        let intentObserver = ScrollTrigger.observe({
            type: "wheel,touch",
            onUp: () => !animating && gotoPanel(currentIndex + 1, true),
            onDown: () => !animating && gotoPanel(currentIndex - 1, false),
            wheelSpeed: -1,
            tolerance: 10,
            preventDefault: true,
            onPress: (self) => {
                // on touch devices like iOS, if we want to prevent scrolling, we must call preventDefault() on the touchstart (Observer doesn't do that because that would also prevent side-scrolling which is undesirable in most cases)
                ScrollTrigger.isTouch && self.event.preventDefault();
            },
        });
        intentObserver.disable();

        // handle the panel swipe animations
        function gotoPanel(index, isScrollingDown) {
            animating = true;
            // return to normal scroll if we're at the end or back up to the start
            if ((index === swipePanels.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
                let target = index;
                gsap.to(target, {
                    // xPercent: isScrollingDown ? -100 : 0,
                    duration: 0.0,
                    onComplete: () => {
                        animating = false;
                        isScrollingDown && intentObserver.disable();
                    },
                });
                return;
            }

            //   target the second panel, last panel?
            let target = isScrollingDown ? swipePanels[index] : swipePanels[currentIndex];

            gsap.to(target, {
                yPercent: isScrollingDown ? 0 : 100,
                duration: 1,
                onComplete: () => {
                    animating = false;
                },
            });
            currentIndex = index;

            horizontalST();
        }

        function horizontalST() {
            let horizontalSections = gsap.utils.toArray(".horizontal");

            horizontalSections.forEach((container) => {
                let sections = container.querySelectorAll(".h-panel");
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
                        start: "top top+=20%",
                        end: "+=4000",
                        markers: true,
                    },
                });
            });
        }

        function exitAnim() {
            // pin swipe section and initiate observer
            ScrollTrigger.create({
                trigger: ".swipe-section",
                pin: true,
                start: "top top+=20%",
                end: "+=1",
                markers: true,
                onEnter: (self) => {
                    intentObserver.enable();
                    gotoPanel(currentIndex + 1, true);
                },
                onEnterBack: () => {
                    intentObserver.enable();
                    gotoPanel(currentIndex - 1, false);
                },
            });

            // horizontalST();
        }

        const firstLoadTl = gsap.timeline({
            onInterrupt: document.body.classList.add("no-scrolling"),
            onComplete: () => exitAnim(),
        });

        firstLoadTl
            .to(".top-img", { opacity: 1, yPercent: 50 })
            .to(".top-img", { opacity: 1, yPercent: 50 }, "<")
            .to(".bottom-img", { opacity: 1, yPercent: -40 }, "<")
            .to(".bottom-img-2", { yPercent: -40 }, "<")
            .to(".left-img", { opacity: 1, xPercent: 10 }, "<")
            .to(".right-img", { opacity: 1, xPercent: -5 }, "<")
            .to(".first-label", { opacity: 1, yPercent: -130, delay: 1 })
            .to(".first-shadow", { opacity: 1, yPercent: 85 }, "<")
            .to(".first-label", { opacity: 0, yPercent: 130, delay: 3 })
            .to(".second-label", { opacity: 1, yPercent: -200 }, "<")
            .to(".second-shadow", { opacity: 1, yPercent: 85 }, "<")
            .to(".purple", { opacity: 1 }, "<");
    }, []);

    return (
        <div className="swipe-section">
            <section className="panel red">
                <Image alt="" className="image top-img" src={topImg} />
                <Image alt="" className="image top-img" src={topImg2} />
                <Image alt="" className="image bottom-img" src={bottomImg} />
                <Image alt="" className="image bottom-img-2" src={bottomImg2} />
                <Image alt="" className="image left-img" src={leftImg} />
                <Image alt="" className="image right-img" src={rightImg} />

                <div className="label first-label">
                    <p className="brand">INTRIX</p>
                    <p className="product">ONE TAP</p>
                </div>
                <div className="shadow first-shadow" />

                <div className="label second-label">
                    <p className="title">
                        Invisible Innovation:
                        <br /> Transforming Your Space
                        <br /> With Just A Tap.
                    </p>
                    <button className="explore-btn" onClick={() => router.push("/product")}>
                        Discover Your Perfect Tap
                    </button>
                </div>
                <div className="shadow second-shadow" />
            </section>
            <section className="panel purple y-100">
                <section className="h-panel sub-1">1</section>
                <section className="h-panel sub-2">2</section>
                <section className="h-panel sub-3">3</section>
            </section>
            <section className="panel orange y-100 vh-200">
                <section className="v-panel sub-1">1</section>
                <section className="v-panel sub-2">2</section>
                <section className="v-panel sub-3">3</section>
            </section>
        </div>
    );
}

export default page;
