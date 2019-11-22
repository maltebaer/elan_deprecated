import "./Navbar.css";

import React from "react";

import NavItem from "./NavItem";

export const routes = {
  "01": "#home",
  "02": "#what-we-do",
  "03": "#work",
  "04": "#our-network",
  "05": "#about"
};

interface INavbarProps {
  hash: string;
}

const Navbar: React.FC<INavbarProps> = props => {
  const navItems = [];
  for (let [number, route] of Object.entries(routes)) {
    navItems.push(
      <NavItem key={number} hash={props.hash} link={route} number={number as keyof typeof routes} />
    );
  }

  return (
    <nav className="navbar-container">
      <ul className="nav d-flex flex-column d-inline-block">{navItems}</ul>
    </nav>
  );
};

export default Navbar;
