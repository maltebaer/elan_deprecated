import React from "react";

export interface IHeaderItemProps {
    link: string;
    index: number;
    active: boolean;
    onClick: () => void;
}

const HeaderItem: React.FC<IHeaderItemProps> = (props) => {
    let className = "cursor-pointer nav-link text-uppercase";
    if (props.active) {
        className += " line-through";
    }

    return (
        <li className="nav-item">
            <span className={className} onClick={props.onClick}>
                {props.link.replace(/-/g, " ")}
            </span>
        </li>
    );
};

export default HeaderItem;
