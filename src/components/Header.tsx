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

  return (
    <div>
      <ul className="nav d-flex justify-content-between">
        <div>
          <li className="nav-item header-item">
            <a className="nav-link text-center" href="#home">
              {props.hash === "#home" ? "ELAN Berlin" : <img height="40px" src="/elan-logo.png" />}
            </a>
          </li>
        </div>
        <div className="d-flex">{headerItems}</div>
      </ul>
    </div>
  );
};

export default Header;
