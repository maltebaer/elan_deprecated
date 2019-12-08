import "./HorizontalBar.scss";

import React from "react";

interface IHorizontalBarProps {
    large?: boolean;
}

const HorizontalBar: React.FC<IHorizontalBarProps> = (props) => {
    let className = "HorizontalBar d-flex flex-column justify-content-center";
    if (props.large) {
        className += " large";
    }

    return (
        <div className={className}>
            <div className="w-100 bg-dark" />
        </div>
    );
};

export default HorizontalBar;
