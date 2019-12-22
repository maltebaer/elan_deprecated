import React from "react";

import HorizontalBar from "./HorizontalBar";

const FooterLinks: React.FC = () => {
    return (
        <React.Fragment>
            <span className="footer-item">
                <a href="#" className="nav-link">
                    Facebook
                </a>
            </span>
            <HorizontalBar large />
            <span className="footer-item">
                <a href="#" className="nav-link">
                    Instagram
                </a>
            </span>
            <HorizontalBar large />
            <span className="footer-item">
                <a href="#" className="nav-link">
                    YouTube
                </a>
            </span>
            <HorizontalBar large />
            <span className="footer-item">
                <a href="#" className="nav-link">
                    Twitter
                </a>
            </span>
        </React.Fragment>
    );
};

export default FooterLinks;
