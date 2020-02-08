import React from "react";
import {isMobile} from "react-device-detect";

import HorizontalBar from "../horizontal-bar/HorizontalBar";

interface ISocialLinksProps {
    isHeader?: boolean;
}

const SocialLinks: React.FC<ISocialLinksProps> = (props) => {
    return (
        <React.Fragment>
            <span className={isMobile ? "small" : undefined}>
                <a
                    href="https://www.linkedin.com/company/elanberlin/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </span>
            <HorizontalBar large isHeader={props.isHeader} />
            <span className={isMobile ? "small" : undefined}>
                <a
                    href="https://www.instagram.com/elan.berlin/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>
            </span>
        </React.Fragment>
    );
};

export default SocialLinks;
