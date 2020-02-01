import "./MobileHeader.scss";

import React from "react";

interface IMobileHeaderProps {
    toggleMobileMenu: () => void;
}

const MobileHeader: React.FC<IMobileHeaderProps> = (props) => {
    return (
        <div className="MobileHeader d-flex justify-content-between">
            <span className="text-uppercase">ELAN Berlin</span>
            <a
                href="#"
                className="text-uppercase"
                onClick={props.toggleMobileMenu}
            >
                Menu
            </a>
        </div>
    );
};

export default MobileHeader;
