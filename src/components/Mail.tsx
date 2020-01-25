import React from "react";
import {isMobile} from "react-device-detect";

const FooterMail: React.FC = () => {
    return (
        <span className={isMobile ? "small" : undefined}>
            <a href="#">info@elanberlin.com</a>
        </span>
    );
};

export default FooterMail;
