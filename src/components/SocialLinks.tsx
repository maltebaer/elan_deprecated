import React from "react";
import {isMobile} from "react-device-detect";

import HorizontalBar from "./HorizontalBar";

interface ISocialLinksProps {
    isHeader?: boolean;
}

const SocialLinks: React.FC<ISocialLinksProps> = (props) => {
    return (
        <React.Fragment>
            <span className={isMobile ? "small" : undefined}>
                <a href="#">Facebook</a>
            </span>
            <HorizontalBar large isHeader={props.isHeader} />
            <span className={isMobile ? "small" : undefined}>
                <a href="#">Instagram</a>
            </span>
        </React.Fragment>
    );
};

export default SocialLinks;
