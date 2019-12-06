import "./Header.css";
import "./HeaderItem.css";

import React from "react";

import HeaderItem from "./HeaderItem";
import {routes} from "../App";

interface IHeaderProps {
    currentSlideIndex: number;
    onClick: (i: number) => void;
}

const Header: React.FC<IHeaderProps> = (props) => {
    const renderHeaderItems = (currentSlideIndex: number) => {
        const headerItems: any[] = [];

        routes.slice(1).forEach((route, i) => {
            const headerItemProps = {
                active: currentSlideIndex === i + 1,
                key: i,
                index: i,
                link: route,
                onClick: () => props.onClick(i + 1),
            };

            headerItems.push(<HeaderItem {...headerItemProps} />);
        });

        return headerItems;
    };

    const headerSectionStyle = "d-flex align-items-center";

    return (
        <div className="Header">
            <ul className="h-100 nav d-flex justify-content-between">
                <span className={headerSectionStyle}>
                    <li className="HeaderItem">
                        <span
                            className="nav-link text-center"
                            style={{cursor: "pointer"}}
                            onClick={() => props.onClick(0)}
                        >
                            {props.currentSlideIndex === 0 ? (
                                "ELAN Berlin"
                            ) : (
                                <img
                                    height="40px"
                                    src="/assets/logo.svg"
                                    alt="logo"
                                />
                            )}
                        </span>
                    </li>
                </span>
                <span className={headerSectionStyle}>
                    {renderHeaderItems(props.currentSlideIndex)}
                </span>
            </ul>
        </div>
    );
};

export default Header;
