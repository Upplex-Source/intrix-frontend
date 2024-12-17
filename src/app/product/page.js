"use client";

import React, { useEffect } from "react";
import "./product.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

if (typeof window !== "undefined") {
    // gsap.registerPlugin(ScrollTrigger, useGSAP);
    gsap.registerPlugin(ScrollTrigger);
}

// image-asset

function Product() {
    return <div id="product-wrapper"></div>;
}

export default Product;
