import React from "react";

import Imprint from "../imprint/Imprint";
import Mail from "../mail/Mail";
import SocialLinks from "../social-links/SocialLinks";

interface IFooterProps {
    onImprintToggle: (isOpen: boolean) => void;
}

const Footer: React.FC<IFooterProps> = (props) => {
    return (
        <div className="margin-y padding-x nav-height fixed-bottom">
            <div className="h-100 nav d-flex justify-content-between">
                <span className="fixed-width d-flex align-items-center">
                    <Mail />
                </span>
                <span className="d-flex align-items-center">
                    <SocialLinks />
                </span>
                <span className="fixed-width d-flex justify-content-end align-items-center">
                    <Imprint onImprintToggle={props.onImprintToggle} />
                </span>
            </div>
        </div>
    );
};

export default Footer;
