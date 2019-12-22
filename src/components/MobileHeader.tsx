import React from "react";

const MobileHeader: React.FC = () => {
    return (
        <div className="margin-y d-flex justify-content-between">
            <span className="cursor-pointer nav-link text-uppercase">
                ELAN Berlin
            </span>
            <span className="cursor-pointer nav-link text-uppercase">Menu</span>
        </div>
    );
};

export default MobileHeader;
