import React from "react";

import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";
import FooterMail from "./FooterMail";

const Footer: React.FC = () => {
    return (
        <div className="nav-height">
            <div className="h-100 nav d-flex justify-content-between">
                <span className="fixed-width d-flex align-items-center">
                    <FooterMail />
                </span>
                <span className="d-flex align-items-center">
                    <FooterLinks />
                </span>
                <span className="fixed-width d-flex justify-content-end align-items-center">
                    <FooterContact />
                </span>
            </div>
        </div>
    );
};

export default Footer;
