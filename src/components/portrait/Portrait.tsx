import "./Portrait.scss";

import React from "react";

interface IPortraitProps {
    name: "Raquel Fedato" | "Ricardo Oswald";
    email: string;
    source: string;
    alignment: "left" | "right";
}

const Portrait: React.FC<IPortraitProps> = (props) => {
    return (
        <div className="Portrait d-flex">
            {props.alignment === "left" && (
                <span className="mr-2 aside">
                    <div
                        id="mail-raquel"
                        className="negative-rotated text-underline"
                    >
                        {props.email}
                    </div>
                </span>
            )}
            <div>
                <span
                    className={`name mb-2 text-uppercase d-block text-${props.alignment}`}
                >
                    {props.name}
                </span>
                <div className="zoom-container">
                    <a
                        href={`https://www.linkedin.com/in/${
                            props.name === "Raquel Fedato"
                                ? "raquelfedato"
                                : "ricardooswald"
                        }/`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="cursor-pointer"
                            src={props.source}
                            alt={props.name}
                        />
                    </a>
                </div>
            </div>
            {props.alignment === "right" && (
                <span className="ml-2 aside">
                    <div className="rotated  text-underline">{props.email}</div>
                </span>
            )}
        </div>
    );
};

export default Portrait;
