import React from "react";
import "./splash-screen.scss";

function Loading() {
    return (
        <div id="loading-overlay">
            <div className="spinner"></div>
        </div>
    );
}

export default Loading;
