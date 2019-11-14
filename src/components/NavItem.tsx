import React, { useState, useEffect } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

import "./NavItem.css";

import { routes } from "./Navbar";

const VerticalBar: React.FC = () => {
  return (
    <div className="my-3 vertical-bar d-flex justify-content-center">
      <div className="h-100 bg-dark" />
    </div>
  );
};

interface INavItemProps extends RouteComponentProps {
  link: string;
  value: keyof typeof routes;
}

const NavItem: React.FC<INavItemProps> = props => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (props.location.pathname === routes[props.value]) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [props.location, props.value]);

  const routeKeys = Object.keys(routes);

  let className = "nav-link text-center";
  if (active) {
    className += " active";
  }

  return (
    <li className={"nav-item"}>
      {active && props.value !== routeKeys[0] && <VerticalBar />}
      <Link className={className} to={props.link}>
        {props.value}
      </Link>
      {active && props.value !== routeKeys[routeKeys.length - 1] && <VerticalBar />}
    </li>
  );
};

export default withRouter(NavItem);
