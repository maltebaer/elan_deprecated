import "./NavItem.css";

import React, { useState, useEffect } from "react";

import { routes } from "./Navbar";

interface IVerticalbarProps {
  height: "single" | "double";
}

const VerticalBar: React.FC<IVerticalbarProps> = props => {
  return (
    <div className={`vertical-bar ${props.height} d-flex justify-content-center`}>
      <div className="h-100 bg-dark" />
    </div>
  );
};

interface INavItemProps {
  hash: string;
  link: string;
  number: keyof typeof routes;
}

const notFirst = (number: string) => {
  const routeKeys = Object.keys(routes);

  if (number === routeKeys[0]) {
    return false;
  }

  return true;
};

const notLast = (number: string) => {
  const routeKeys = Object.keys(routes);

  if (number === routeKeys[routeKeys.length - 1]) {
    return false;
  }

  return true;
};

const NavItem: React.FC<INavItemProps> = props => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (props.hash === routes[props.number]) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [props.hash, props.number]);

  let className = "nav-link text-center";
  if (active) {
    className += " active";
  }

  const renderItems = [
    <a className={className} href={props.link}>
      {props.number}
    </a>
  ];

  if (active && notFirst(props.number) && notLast(props.number)) {
    renderItems.unshift(<VerticalBar height="single" />);
    renderItems.push(<VerticalBar height="single" />);
  }
  if (active && !notFirst(props.number)) {
    renderItems.push(<VerticalBar height="double" />);
  }
  if (active && !notLast(props.number)) {
    renderItems.unshift(<VerticalBar height="double" />);
  }

  return (
    <li className={"nav-item"}>
      {/* <a className={className} href={props.link}>
        {props.number}
      </a> */}
      {renderItems}
    </li>
  );
};

export default NavItem;
