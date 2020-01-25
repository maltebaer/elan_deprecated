import "./Menu.scss";

import React from "react";

import {routes} from "../App";
import MobileFooter from "./MobileFooter";

interface IMenuProps {
    onCloseMenu: () => void;
}

const Menu: React.FC<IMenuProps> = (props) => {
    const renderMenuItems = () => {
        const menuItems: any[] = [];

        routes.slice(1).forEach((route, i) => {
            menuItems.push(
                <li key={i}>
                    <a
                        className="text-uppercase"
                        href={"#" + route}
                        onClick={props.onCloseMenu}
                    >
                        {route.replace(/-/g, " ")}
                    </a>
                </li>,
            );
        });

        return menuItems;
    };

    return (
        <React.Fragment>
            <ul className="menu-list">{renderMenuItems()}</ul>
            <MobileFooter isHeader />
        </React.Fragment>
    );
};

export default Menu;
