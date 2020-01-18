import React from "react";
import {isMobile} from "react-device-detect";

import HorizontalBar from "./HorizontalBar";

const FooterLinks: React.FC = () => {
    let className = "footer-item";
    if (isMobile) {
        className += " small";
    }

    return (
        <React.Fragment>
            <span className={className}>
                <a href="#" className="nav-link">
                    Facebook
                </a>
            </span>
            <HorizontalBar large />
            <span className={className}>
                <a href="#" className="nav-link">
                    Instagram
                </a>
            </span>
        </React.Fragment>
    );
};

export default FooterLinks;
