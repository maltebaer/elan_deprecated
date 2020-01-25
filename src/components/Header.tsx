import React from "react";

import {routes} from "../App";
import HeaderItem from "./HeaderItem";

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
                index: i,
                key: i,
                link: route,
                onClick: () => props.onClick(i + 1),
            };

            headerItems.push(<HeaderItem {...headerItemProps} />);
        });

        return headerItems;
    };

    const headerSectionStyle = "d-flex align-items-center";

    return (
        <div className="margin-y padding-x nav-height fixed-top">
            <ul className="h-100 nav d-flex justify-content-between">
                <span className={headerSectionStyle}>
                    <li>
                        <span
                            className="cursor-pointer text-uppercase"
                            // tslint:disable-next-line: jsx-no-lambda
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
