import "./HeaderItem.css";

import React from "react";

interface IHeaderItemProps {
  link: string;
  index: number;
  active: boolean;
  onClick: () => void;
}

const HeaderItem: React.FC<IHeaderItemProps> = props => {
  let className = "nav-link";
  if (props.active) {
    className += " active";
  }

  return (
    <li className="HeaderItem nav-item">
      <span className={className} style={{ cursor: "pointer" }} onClick={props.onClick}>
        {props.link.replace(/-/g, " ")}
      </span>
    </li>
  );
};

export default HeaderItem;
