import React from "react";

import NavItem from "./NavItem";

export const routes = {
  "01": "/home",
  "02": "/what-we-do",
  "03": "/work",
  "04": "/our-network",
  "05": "/about"
};

const Navbar: React.FC = () => {
  const navItems = [];
  for (let [value, route] of Object.entries(routes)) {
    navItems.push(<NavItem key={value} link={route} value={value as keyof typeof routes} />);
  }

  return (
    <nav>
      <ul className="border nav flex-column d-inline-block">{navItems}</ul>
    </nav>
  );
};

export default Navbar;
