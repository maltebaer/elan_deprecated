import React from "react";
import {isMobile} from "react-device-detect";

const FooterMail: React.FC = () => {
    return (
        <span className={`text-underline${isMobile ? " small" : ""}`}>
            hello@elanberlin.com
        </span>
    );
};

export default FooterMail;
