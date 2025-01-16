import React from "react";
import "./splash-screen.scss";

function SplashScreen() {
    return (
        <div id="splash-wrapper">
            <video src="/home/intrix_video.mp4" muted autoPlay />
        </div>
    );
}

export default SplashScreen;
