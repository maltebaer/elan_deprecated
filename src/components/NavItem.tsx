import "./NavItem.css";

import React from "react";

import { routes } from "../App";
import VerticalBar from "./VerticalBar";

interface INavItemProps {
  index: number;
  active: boolean;
  onClick: () => void;
}

const notFirst = (index: number) => {
  if (index === 0) {
    return false;
  }

  return true;
};

const notLast = (index: number) => {
  if (index === routes.length - 1) {
    return false;
  }

  return true;
};

const NavItem: React.FC<INavItemProps> = props => {
  let className = "nav-link text-center";
  if (props.active) {
    className += " active";
  }

  const renderItems = [
    <span className={className} style={{ cursor: "pointer" }} onClick={props.onClick}>
      {"0" + (props.index + 1)}
    </span>
  ];

  if (props.active && notFirst(props.index) && notLast(props.index)) {
    renderItems.unshift(<VerticalBar height="single" />);
    renderItems.push(<VerticalBar height="single" />);
  }
  if (props.active && !notFirst(props.index)) {
    renderItems.push(<VerticalBar height="double" />);
  }
  if (props.active && !notLast(props.index)) {
    renderItems.unshift(<VerticalBar height="double" />);
  }

  return <li className={"NavItem"}>{renderItems}</li>;
};

export default NavItem;
