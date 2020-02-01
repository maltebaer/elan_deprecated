import "./HorizontalBar.scss";

import React from "react";
import {isIOS13, isMobile} from "react-device-detect";

interface IHorizontalBarProps {
    isHeader?: boolean;
    large?: boolean;
}

const HorizontalBar: React.FC<IHorizontalBarProps> = (props) => {
    let className = `HorizontalBar d-flex flex-column justify-content-center mx-${
        isMobile || isIOS13 ? "2" : "3"
    }`;
    if (props.large) {
        className += " large";
    }

    let backgroundColor = "#343a40";
    if (props.isHeader) {
        backgroundColor = "#fff";
    }

    return (
        <div className={className}>
            <div
                style={{
                    backgroundColor,
                }}
                className="w-100"
            />
        </div>
    );
};

export default HorizontalBar;
