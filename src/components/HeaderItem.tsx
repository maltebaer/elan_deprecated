import "./HeaderItem.css";

import React, { useState, useEffect } from "react";

import { headerRoutes } from "./Header";

interface INavItemProps {
  hash: string;
  link: string;
  keyName: keyof typeof headerRoutes;
}

const HeaderItem: React.FC<INavItemProps> = props => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (props.hash === headerRoutes[props.keyName]) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [props.hash, props.keyName]);

  let className = "nav-link";
  if (active) {
    className += " active";
  }

  return (
    <li className="HeaderItem nav-item">
      <a className={className} href={props.link}>
        {props.keyName.replace(/-/g, " ")}
      </a>
    </li>
  );
};

export default HeaderItem;
