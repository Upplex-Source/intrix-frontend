import React from "react";
import "./loading-screen.scss";

function LoadingScreen() {
    return (
        <div id="loading-wrapper">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default LoadingScreen;
