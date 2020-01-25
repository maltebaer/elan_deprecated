import React from "react";

import Imprint from "./Imprint";
import Mail from "./Mail";
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
    return (
        <div className="margin-y padding-x nav-height fixed-bottom">
            <div className="h-100 nav d-flex justify-content-between">
                <span className="fixed-width d-flex align-items-center">
                    <Mail />
                </span>
                w
                <span className="fixed-width d-flex justify-content-end align-items-center">
                    <Imprint />
                </span>
            </div>
        </div>
    );
};

export default Footer;
