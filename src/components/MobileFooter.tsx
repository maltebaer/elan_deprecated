import React from "react";

import Imprint from "./Imprint";
import Mail from "./Mail";
import SocialLinks from "./SocialLinks";

const MobileFooter: React.FC = () => {
    return (
        <div className="margin-y">
            <SocialLinks />
            <Mail />
            <Imprint />
        </div>
    );
};

export default MobileFooter;
