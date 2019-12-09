import "./Portrait.scss";

import React from "react";

interface IPortraitProps {
    name: string;
    email: string;
    source: string;
    alignment: "left" | "right";
}

const Portrait: React.FC<IPortraitProps> = (props) => {
    const copyEmailAdress = () => {
        navigator.clipboard.writeText(props.email).then(
            () => {
                /* success */
            },
            () => {
                /* failure */
            },
        );
    };

    return (
        <div className="Portrait">
            <span
                className={`mb-2 text-uppercase d-block text-${props.alignment}`}
            >
                {props.name}
            </span>
            <div className="zoom-container">
                <img
                    src={props.source}
                    alt={props.name}
                    onClick={copyEmailAdress}
                />
            </div>
        </div>
    );
};

export default Portrait;
