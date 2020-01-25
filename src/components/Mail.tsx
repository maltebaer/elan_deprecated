import React from "react";
import {isMobile} from "react-device-detect";

const FooterMail: React.FC = () => {
    let className = "footer-item";
    if (isMobile) {
        className += " small";
    }

    return (
        <span className={className}>
            <a className="nav-link" href="mailto:info@elanberlin.com">
                info@elanberlin.com
            </a>
        </span>
    );
};

export default FooterMail;
