import React from "react";
import {isMobile} from "react-device-detect";

import HorizontalBar from "./HorizontalBar";

const FooterContact: React.FC = () => {
    let className = "footer-item";
    if (isMobile) {
        className += " small";
    }

    return (
        <span className={className}>
            <span className="nav-link d-flex align-items-center">
                +49 176 8738 6244, Bülowstraße 19
                <div className="p-1">
                    <HorizontalBar />
                </div>
                10961 Berlin
            </span>
        </span>
    );
};

export default FooterContact;
