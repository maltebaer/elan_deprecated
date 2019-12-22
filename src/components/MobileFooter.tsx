import React from "react";

import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";
import FooterMail from "./FooterMail";

const MobileFooter: React.FC = () => {
    return (
        <div className="margin-y">
            <FooterLinks />
            <FooterContact />
            <FooterMail />
        </div>
    );
};

export default MobileFooter;
