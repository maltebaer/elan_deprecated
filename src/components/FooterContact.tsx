import React from "react";

import HorizontalBar from "./HorizontalBar";

const FooterContact: React.FC = () => {
    return (
        <span className="footer-item">
            <span className="nav-link d-flex align-items-center">
                +49 176 8738 6244, Bülowstraße 19
                <div className="p-1">
                    <HorizontalBar />
                </div>
                10961 Berlin
            </span>
        </span>
    );
};

export default FooterContact;
