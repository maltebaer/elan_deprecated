import "./Instagram.scss";

import React from "react";
import IGImage from "./IGImage";

const Instagram: React.FC = () => {
    return (
        <div className="Instagram d-flex justify-content-center align-items-center">
            <div className="instagram-container">
                <IGImage id={1} />
                <IGImage id={2} />
                <IGImage id={3} />
                <IGImage id={4} />
                <span className="cta">
                    Follow <a href="#">@elanberlin</a>
                    <br />
                    on Instagram
                </span>
            </div>
        </div>
    );
};

export default Instagram;
