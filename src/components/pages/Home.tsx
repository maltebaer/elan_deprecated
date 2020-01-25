import "./Home.scss";

import React from "react";
import {deviceType} from "react-device-detect";

const Home: React.FC = () => {
    return (
        <div className="Home h-100 d-flex justify-content-center align-items-center bg-secondary">
            {deviceType}
            {/* <div className="background-container">
                <div className="background" />
            </div>
            <img className="negative-margin" src="/assets/holo" alt="holo" />
            <img src="/assets/cover" alt="holo" /> */}
        </div>
    );
};

export default Home;
