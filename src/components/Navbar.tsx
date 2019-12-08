import "./Navbar.scss";

import React from "react";
import {routes} from "../App";
import NavItem from "./NavItem";

interface INavbarProps {
    className?: string;
    getCurrentSlideIndex: () => number;
    onNext: () => void;
    onPrev: () => void;
    scrollToSlide: (index: number) => void;
    slidesCount: number;
    style?: CSSStyleSheet;
}

const Navbar: React.FC<INavbarProps> = (props) => {
    const renderNavItems = (currentSlideIndex: number) => {
        const navItems: any[] = [];

        routes.forEach((_, i) => {
            const navItemProps = {
                active: currentSlideIndex === i,
                key: i,
                index: i,
                onClick: () => props.scrollToSlide(i),
            };
            navItems.push(<NavItem {...navItemProps} />);
        });

        return navItems;
    };

    const currentSlideIndex = props.getCurrentSlideIndex();

    return (
        <nav className="Navbar vh-100 d-flex align-items-center">
            <ul className="nav d-flex flex-column d-inline-block">
                {renderNavItems(currentSlideIndex)}
            </ul>
        </nav>
    );
};

export default Navbar;
