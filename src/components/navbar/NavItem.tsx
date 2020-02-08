import "./NavItem.scss";

import React from "react";

import {routes} from "../../App";
import VerticalBar from "../vertical-bar/VerticalBar";

interface INavItemProps {
    index: number;
    active: boolean;
    onClick: () => void;
}

const notFirst = (index: number) => {
    if (index === 0) {
        return false;
    }

    return true;
};
const notLast = (index: number) => {
    if (index === routes.length - 1) {
        return false;
    }

    return true;
};

const NavItem: React.FC<INavItemProps> = (props) => {
    let className = "cursor-pointer nav-link text-center";
    if (props.active) {
        className += " active";
    }

    const renderItems = [
        <span key={0} className={className} onClick={props.onClick}>
            {"0" + (props.index + 1)}
        </span>,
    ];

    if (props.active && notFirst(props.index) && notLast(props.index)) {
        renderItems.unshift(<VerticalBar />);
        renderItems.push(<VerticalBar />);
    }
    if (props.active && !notFirst(props.index)) {
        renderItems.push(<VerticalBar large />);
    }
    if (props.active && !notLast(props.index)) {
        renderItems.unshift(<VerticalBar large />);
    }

    return <li className={"NavItem"}>{renderItems}</li>;
};

export default NavItem;
