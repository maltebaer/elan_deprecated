import React from "react";
import {isMobile} from "react-device-detect";

const FooterMail: React.FC = () => {
    return (
        <span className={`text-underline ${isMobile ? "small" : ""}`}>
            <a href="#">hello@elanberlin.com</a>
        </span>
    );
};

export default FooterMail;
