import "./Header.css";
import "./HeaderItem.css";

import React from "react";

import HeaderItem from "./HeaderItem";

export const headerRoutes = {
  "what-we-do": "#what-we-do",
  work: "#work",
  "our-network": "#our-network",
  about: "#about"
};

interface IHeaderProps {
  hash: string;
}

const Header: React.FC<IHeaderProps> = props => {
  const headerItems = [];
  for (let [keyName, route] of Object.entries(headerRoutes)) {
    headerItems.push(
      <HeaderItem
        key={keyName}
        hash={props.hash}
        link={route}
        keyName={keyName as keyof typeof headerRoutes}
      />
    );
  }

  const headerSectionStyle = "d-flex align-items-center";

  return (
    <div className="Header">
      <ul className="h-100 nav d-flex justify-content-between">
        <span className={headerSectionStyle}>
          <li className="HeaderItem">
            <a className="nav-link text-center" href="#home">
              {props.hash === "#home" ? "ELAN Berlin" : <img height="40px" src="/elan-logo.png" />}
            </a>
          </li>
        </span>
        <span className={headerSectionStyle}>{headerItems}</span>
      </ul>
    </div>
  );
};

export default Header;
