import React from "react";
import Image from "next/image";
import "./splash-screen.scss";

function SplashScreen() {
    return (
        <div id="splash-wrapper">
            <Image
                className="logo-img"
                alt=""
                width={1920}
                height={1080}
                src="https://resources.wobbjobs.com/companies/2ee9473f-23ff-4bd3-acff-c9d281ac23d2/company_logo/original/289f98b8-3690-420e-8c6e-6fa240233ad1-1168x305_IntrixLogo.png"
            />
        </div>
    );
}

export default SplashScreen;
