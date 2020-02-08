import "./Home.scss";

import React from "react";
import {isIOS13, isMobile} from "react-device-detect";

const Home: React.FC = () => {
    return (
        <div className="Home h-100 d-flex justify-content-center align-items-center">
            <div className="background-container">
                <div className="background" />
            </div>
            <img
                className="negative-margin"
                src="/assets/holo.png"
                alt="holo"
            />
            <img src="/assets/cover.png" alt="cover" />
            {(isMobile || isIOS13) && (
                <div className="down">
                    <img id="iconDown" src="/assets/down.svg" alt="down" />
                </div>
            )}
        </div>
    );
};

export default Home;
