import React from "react";
import Image from "next/image";
import "./splash-screen.scss";

function SplashScreen() {
    return (
        <div id="splash-wrapper">
            <Image
                className="logo-img"
                alt=""
                width={400}
                height={180}
                src="/logo.png"
            />
        </div>
    );
}

export default SplashScreen;
