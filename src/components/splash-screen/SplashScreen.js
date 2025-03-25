import React from "react";
import "./splash-screen.scss";

function SplashScreen() {
    return (
        <>
            <div id="splash-wrapper">
                <video src="/home/intrix_video.mp4" muted autoPlay />
            </div>
            <div id="splash-wrapper-mobile">
                <video autoPlay={true} muted={true} loop={true} playsInline={true} defaultmuted="" webkit-playsinline="" preload="auto" className="fixed block top-0 left-0 right-0 bottom-0 w-full h-full min-h-[100vh] z-[-1] object-cover">
                    <source src="/home/intrix_video.mp4" type='video/mp4' />
                    <source src="/home/intrix_video.mov" type="video/mp4" />
                </video>
            </div>
        </>
        
    );
}

export default SplashScreen;
