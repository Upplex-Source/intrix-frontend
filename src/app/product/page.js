"use client";
import * as THREE from "three";

import Stats from "three/addons/libs/stats.module.js";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { useEffect } from "react";

import ProductSpecifications from "@/components/products/Specifications";
import Features from "@/components/products/Features";
import ExperienceCentreForm from "@/components/ExperienceCentreForm";
import ExploreOurTabs from "@/components/products/ExploreOurTabs";

import "./product.scss";

function Product() {
    // useEffect(() => {
    //     let mixer;

    //     const clock = new THREE.Clock();
    //     const container = document.getElementById("container2");

    //     const stats = new Stats();
    //     container.appendChild(stats.dom);

    //     const renderer = new THREE.WebGLRenderer({ antialias: true });
    //     renderer.setPixelRatio(window.devicePixelRatio);
    //     renderer.setSize(window.innerWidth, window.innerHeight);
    //     container.appendChild(renderer.domElement);

    //     const pmremGenerator = new THREE.PMREMGenerator(renderer);

    //     const scene = new THREE.Scene();
    //     scene.background = new THREE.Color(0xbfe3dd);
    //     scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

    //     const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
    //     camera.position.set(5, 2, 8);

    //     const controls = new OrbitControls(camera, renderer.domElement);
    //     controls.target.set(0, 0.5, 0);
    //     controls.update();
    //     controls.enablePan = false;
    //     controls.enableDamping = true;

    //     const dracoLoader = new DRACOLoader();
    //     dracoLoader.setDecoderPath("jsm/libs/draco/gltf/");

    //     const loader = new GLTFLoader();
    //     loader.setDRACOLoader(dracoLoader);
    //     loader.load(
    //         "/4_IN_1_Gunmeta_V1.glb",
    //         function (gltf) {
    //             const model = gltf.scene;
    //             model.position.set(0, 0, 0);
    //             model.scale.set(6, 6, 6);
    //             scene.add(model);

    //             mixer = new THREE.AnimationMixer(model);
    //             // mixer.clipAction(gltf.animations[0]).play();

    //             renderer.setAnimationLoop(animate);
    //         },
    //         undefined,
    //         function (e) {
    //             console.error(e);
    //         }
    //     );

    //     window.onresize = function () {
    //         camera.aspect = window.innerWidth / window.innerHeight;
    //         camera.updateProjectionMatrix();

    //         renderer.setSize(window.innerWidth, window.innerHeight);
    //     };

    //     function animate() {
    //         const delta = clock.getDelta();

    //         mixer.update(delta);

    //         controls.update();

    //         stats.update();

    //         renderer.render(scene, camera);
    //     }
    // }, []);

    return (
        <>
        <div id="container2">
            <div className="product-wrapper">
                <div className="product-desc">
                    <p className="product-name">INTRIX ONE TAP</p>
                    <p className="product-label">4-IN-1</p>
                    <p className="product-description">
                        Enjoy hot, boiling, and ambient filtered water with the INTRIX One Tap 4-in-1. The titanium inner core resists corrosion and
                        limescale, while our EcoSmart Technology saves energy.
                    </p>
                    <p className="product-description">
                        Seamless integration for any modern kitchen with safety lock and heatproof features in place – all wrapped up in a sleek,
                        timeless design.
                    </p>
                    <p className="label">OUTRIGHT</p>
                    <p className="amount big">RM 5,200.00</p>
                    <p className="label">FLEXIOWN PLAN</p>
                    <p className="amount small">RM 138.00/MTH*</p>
                    <button shape="round">BUY NOW</button>
                </div>
                {/* <div className="sketchfab-embed-wrapper">
                    <iframe
                        title="5_IN_1_Black_V1"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; fullscreen; accelerometer; gyroscope; xr-spatial-tracking"
                        className="w-full h-[500px]"
                        src="https://sketchfab.com/models/aaa954a10b2d4f4ebf9dd37acae9c5a8/embed?autostart=1&camera=0&preload=1&transparent=1"
                    ></iframe>
                    <p style={{ fontSize: 13, fontWeight: "normal", margin: 5, color: "#4A4A4A" }}>
                        <a
                            href="https://sketchfab.com/3d-models/5-in-1-black-v1-aaa954a10b2d4f4ebf9dd37acae9c5a8?utm_medium=embed&utm_campaign=share-popup&utm_content=aaa954a10b2d4f4ebf9dd37acae9c5a8"
                            target="_blank"
                            rel="nofollow"
                            style={{ fontWeight: "bold", color: "#1CAAD9" }}
                        >
                            5_IN_1_Black_V1
                        </a>
                        by
                        <a
                            href="https://sketchfab.com/skyax.virtual?utm_medium=embed&utm_campaign=share-popup&utm_content=aaa954a10b2d4f4ebf9dd37acae9c5a8"
                            target="_blank"
                            rel="nofollow"
                            style={{ fontWeight: "bold", color: "#1CAAD9" }}
                        >
                            skyax.virtual
                        </a>
                        on
                        <a
                            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=aaa954a10b2d4f4ebf9dd37acae9c5a8"
                            target="_blank"
                            rel="nofollow"
                            style={{ fontWeight: "bold", color: "#1CAAD9" }}
                        >
                            Sketchfab
                        </a>
                    </p>
                </div> */}
            </div>
        </div>
        <div className="my-24">
        <ProductSpecifications />
        </div>
        <div className="my-24">
        <Features />
        </div>
        <div className="my-24">
        <ExploreOurTabs />
        </div>
        <ExperienceCentreForm />
        </>
    );
}

export default Product;
