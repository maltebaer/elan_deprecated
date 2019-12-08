import "./VerticalBar.scss";

import React from "react";

interface IVerticalbarProps {
    large?: boolean;
}

const VerticalBar: React.FC<IVerticalbarProps> = (props) => {
    let className = "VerticalBar d-flex justify-content-center";
    if (props.large) {
        className += " large";
    }

    return (
        <div className={className}>
            <div className="h-100 bg-dark" />
        </div>
    );
};

export default VerticalBar;
