"use client";

import React, { useEffect } from "react";

import "./home.scss";

import top from "../assets/new2/top.png";
import bottomOpened from "../assets/new2/bottom-opened.png";
import bottomClosed from "../assets/new2/bottom-closed.png";
import left from "../assets/new2/left.png";
import right from "../assets/new2/right.png";
import Image from "next/image";
import Header from "@/components/header/Header";

function Home() {
    useEffect(() => {
        setTimeout(() => {
            const target = document.getElementsByClassName("label-wrapper")[0];
            target.classList.add("label-out");

            const bottomTarget2 = document.getElementsByClassName("img-bottom-2")[0];
            bottomTarget2.classList.add("fade-in");
        }, 4000);
    }, []);

    return (
        <div id="home-container">
            <div className="header">
                <Header />
            </div>
            <div className="home-wrapper">
                <Image src={top} alt="Picture of the author" className="img-top" />
                <Image src={bottomOpened} alt="Picture of the author" className="img-bottom" />
                <Image src={bottomClosed} alt="Picture of the author" className="img-bottom-2" />
                <Image src={left} alt="Picture of the author" className="img-left" />
                <Image src={right} alt="Picture of the author" className="img-right" />
                <div className="top-shadow" />
                <div className="label-wrapper">
                    <p className="brand">INTRIX</p>
                    <p className="product">ONE TAP</p>
                </div>

                <div className="all-shadow" />
                <div className="label-2-wrapper">
                    <p className="label-2">Invisible Innovation: Transforming Your Space With Just A Tap.</p>
                    <button>Discover Your Perfect Tap</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
