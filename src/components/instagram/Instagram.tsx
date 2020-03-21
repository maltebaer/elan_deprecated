import "./Instagram.scss";

import React from "react";
import InstagramImage from "./InstagramImage";

const Instagram: React.FC = () => {
    return (
        <div className="Instagram d-flex justify-content-center align-items-center">
            <div className="instagram-container">
                <InstagramImage id={1} />
                <InstagramImage id={2} />
                <InstagramImage id={3} />
                <InstagramImage id={4} />
                <span className="cta">
                    Follow{" "}
                    <a
                        href="https://www.instagram.com/elanberlin/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @elan.berlin
                    </a>
                    <br />
                    on Instagram
                </span>
            </div>
        </div>
    );
};

export default Instagram;
