import "./Navbar.scss";

import React from "react";
import {isIOS13, isMobile} from "react-device-detect";

import {routes} from "../../App";
import NavItem from "./NavItem";

interface INavbarProps {
    className?: string;
    style?: CSSStyleSheet;

    slidesCount: number;
    scrollToSlide: (index: number) => void;
    getCurrentSlideIndex: () => number;
    onNext: () => void;
    onPrev: () => void;
}

const Navbar: React.FC<INavbarProps> = (props) => {
    const renderNavItems = (currentSlideIndex: number) => {
        const navItems: any[] = [];

        routes.forEach((_, i) => {
            const navItemProps = {
                active: currentSlideIndex === i,
                index: i,
                onClick: () => props.scrollToSlide(i),
            };
            navItems.push(<NavItem key={i} {...navItemProps} />);
        });

        return navItems;
    };

    return !isMobile || !isIOS13 ? (
        <nav className="Navbar vh-100 d-flex align-items-center">
            <ul className="nav d-flex flex-column d-inline-block">
                {renderNavItems(props.getCurrentSlideIndex())}
            </ul>
        </nav>
    ) : null;
};

export default Navbar;
