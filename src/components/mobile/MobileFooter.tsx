import React from "react";

import Imprint from "../imprint/Imprint";
import Mail from "../mail/Mail";
import SocialLinks from "../social-links/SocialLinks";

interface IMobileFooterProps {
    inHeader?: boolean;
}

const MobileFooter: React.FC<IMobileFooterProps> = (props) => {
    return (
        <div>
            <span className="d-flex align-items-center">
                <SocialLinks isHeader={props.inHeader} />
            </span>
            <Mail />
            <br />
            <Imprint />
        </div>
    );
};

export default MobileFooter;
