import React from "react";
import "./splash-screen.scss";

function SplashScreen() {
    return (
        <div id="splash-wrapper">
            <video src="/home/loading.mp4" muted autoPlay />
        </div>
    );
}

export default SplashScreen;
