import "./Navbar.css";

import React, { useState } from "react";

import NavItem from "./NavItem";

export const routes = {
  "01": "#home",
  "02": "#what-we-do",
  "03": "#work",
  "04": "#our-network",
  "05": "#about"
};

const Navbar: React.FC = () => {
  const [hash, setHash] = useState(window.location.hash ? window.location.hash : "#home");

  const onHashChange = () => {
    setHash(window.location.hash);
  };
  window.onhashchange = onHashChange;

  const navItems = [];
  for (let [number, route] of Object.entries(routes)) {
    navItems.push(
      <NavItem key={number} hash={hash} link={route} number={number as keyof typeof routes} />
    );
  }

  return (
    <nav className="navbar-container">
      <ul className="nav d-flex flex-column d-inline-block">{navItems}</ul>
    </nav>
  );
};

export default Navbar;
