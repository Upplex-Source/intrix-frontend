"use client";

import React, { useEffect } from "react";

import "./discover.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Page() {
    useEffect(() => {
        gsap.utils.toArray(".video-scrub").forEach((video) =>
            videoScrub(video, {
                scrollTrigger: {
                    trigger: video,
                    start: "center center",
                    end: "+=600",
                    markers: true,
                    scrub: true,
                    pin: true,
                },
            })
        );

        function videoScrub(video, vars) {
            video = gsap.utils.toArray(video)[0]; // in case selector text is fed in.
            let once = (el, event, fn) => {
                    let onceFn = function () {
                        el.removeEventListener(event, onceFn);
                        fn.apply(this, arguments);
                    };
                    el.addEventListener(event, onceFn);
                    return onceFn;
                },
                prepFunc = () => {
                    video.play();
                    video.pause();
                },
                prep = () => once(document.documentElement, "touchstart", prepFunc),
                src = video.currentSrc || video.src,
                tween = gsap.fromTo(
                    video,
                    { currentTime: 0 },
                    { paused: true, immediateRender: false, currentTime: video.duration || 1, ease: "none", ...vars }
                ),
                resetTime = () => (tween.vars.currentTime = video.duration || 1) && tween.invalidate();
            prep();
            video.readyState ? resetTime() : once(video, "loadedmetadata", resetTime);
            return tween;
        }
    }, []);
    return (
        <div id="discover-wrapper">
            <div className="content">
                <h2>Lorem ipsum dolor.</h2>
                <p>
                    Lorem, ipsum dolor consectetur adipisicing elit. Animi blanditiis recusandae distinctio optio commodi tenetur quisquam qui porro,
                    aliquid inventore perferendis quibusdam at! Quisquam illum distinctio eveniet corrupti cupiditate quis?
                </p>
                <p>
                    Lorem, ipsum dolor shit happens consectetur adipisicing elit. Animi blanditiis recusandae distinctio optio commodi tenetur
                    quisquam qui porro, aliquid inventore perferendis quibusdam at! Quisquam illum distinctio eveniet corrupti cupiditate quis?
                </p>

                <h2>Lorem ipsum dolor.</h2>
                <p>
                    Lorem ipsum dolor consectetur adipisicing elit. Provident sequi delectus ducimus temporibus debitis natus, aliquam impedit saepe,
                    doloribus a modi consectetur fugit unde? Maxime illo molestiae libero? Molestias labore ratione necessitatibus veniam. Doloremque
                    nesciunt rerum incidunt nam ad quo sed porro, molestias mollitia aut, quaerat provident minima ab harum?
                </p>
                <p>
                    Lorem ipsum dolor shit happens consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut eligendi, ullam accusantium
                    cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam deserunt et tenetur nihil quidem velit harum? Id
                    quisquam voluptates eligendi est nobis harum impedit commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae
                    omnis. Obcaecati ratione sapiente exercitationem quis dolore.
                </p>
                <h2>Lorem ipsum dolor.</h2>
            </div>
            <div className="video-container">
                <video
                    id="video1"
                    className="video-scrub"
                    src="https://assets.codepen.io/39255/output_960.mp4"
                    playsInline={true}
                    webkit-playsinline="true"
                    preload="metadata"
                    muted={true}
                ></video>
            </div>

            <div className="content">
                <h2>Lorem ipsum dolor.</h2>
                <p>
                    Lorem, ipsum dolor consectetur adipisicing elit. Animi blanditiis recusandae distinctio optio commodi tenetur quisquam qui porro,
                    aliquid inventore perferendis quibusdam at! Quisquam illum distinctio eveniet corrupti cupiditate quis?
                </p>
            </div>

            <div className="video-container">
                <video
                    id="video1"
                    className="video-scrub"
                    src="https://assets.codepen.io/39255/output_960.mp4"
                    playsInline={true}
                    webkit-playsinline="true"
                    preload="metadata"
                    muted={true}
                ></video>
            </div>

            <div className="content">
                <p>
                    Lorem, ipsum dolor shit happens consectetur adipisicing elit. Animi blanditiis recusandae distinctio optio commodi tenetur
                    quisquam qui porro, aliquid inventore perferendis quibusdam at! Quisquam illum distinctio eveniet corrupti cupiditate quis?
                </p>
                <h2>Lorem ipsum dolor shit happens.</h2>
                <p>
                    Lorem ipsum dolor shit happens consectetur adipisicing elit. Provident sequi delectus ducimus temporibus debitis natus, aliquam
                    impedit saepe, doloribus a modi consectetur fugit unde? Maxime illo molestiae libero? Molestias labore ratione necessitatibus
                    veniam. Doloremque nesciunt rerum incidunt nam ad quo sed porro, molestias mollitia aut, quaerat provident minima ab harum?
                </p>
                <p>
                    Lorem ipsum dolor shit happens consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut eligendi, ullam accusantium
                    cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam deserunt et tenetur nihil quidem velit harum? Id
                    quisquam voluptates eligendi est nobis harum impedit commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae
                    omnis. Obcaecati ratione sapiente exercitationem quis dolore.
                </p>
                <h2>Lorem ipsum dolor shit happens.</h2>
                <p>
                    Lorem ipsum dolor shit happens consectetur adipisicing elit. Provident sequi delectus ducimus temporibus debitis natus, aliquam
                    impedit saepe, doloribus a modi consectetur fugit unde? Maxime illo molestiae libero? Molestias labore ratione necessitatibus
                    veniam. Doloremque nesciunt rerum incidunt nam ad quo sed porro, molestias mollitia aut, quaerat provident minima ab harum?
                </p>
                <p>
                    Lorem ipsum dolor shit happens consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut eligendi, ullam accusantium
                    cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam deserunt et tenetur nihil quidem velit harum? Id
                    quisquam voluptates eligendi est nobis harum impedit commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae
                    omnis. Obcaecati ratione sapiente exercitationem quis dolore.
                </p>
            </div>
        </div>
    );
}

export default Page;
