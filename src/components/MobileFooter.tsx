import React from "react";

import Imprint from "./Imprint";
import Mail from "./Mail";
import SocialLinks from "./SocialLinks";

interface IMobileFooterProps {
    isHeader?: boolean;
}

const MobileFooter: React.FC<IMobileFooterProps> = (props) => {
    return (
        <div>
            <span className="d-flex align-items-center">
                <SocialLinks isHeader={props.isHeader} />
            </span>
            <Mail />
            <br />
            <Imprint />
        </div>
    );
};

export default MobileFooter;
