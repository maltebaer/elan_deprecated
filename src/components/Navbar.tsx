import "./Navbar.css";

import React from "react";
import { routes } from "../App";
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

const Navbar: React.FC<INavbarProps> = props => {
  const renderNavItems = (currentSlideIndex: number) => {
    const navItems = [];

    routes.forEach((route, i) => {
      const navItemProps = {
        active: currentSlideIndex === i,
        key: i,
        index: i,
        onClick: () => props.scrollToSlide(i)
      };
      navItems.push(<NavItem {...navItemProps} />);
    });

    return navItems;
  };

  const currentSlideIndex = props.getCurrentSlideIndex();

  return (
    <nav
      // className="Navbar"
      className="extra-padding vh-100 fixed-top d-flex justify-content-end align-items-center">
      <ul className="nav d-flex flex-column d-inline-block">{renderNavItems(currentSlideIndex)}</ul>
    </nav>
  );
};

export default Navbar;
