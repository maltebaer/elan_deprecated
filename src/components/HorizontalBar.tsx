import "./HorizontalBar.css";

import React from "react";

interface IHorizontalBarProps {
  size: "single" | "double";
}

const HorizontalBar: React.FC<IHorizontalBarProps> = props => {
  return (
    <div className={`HorizontalBar ${props.size} d-flex flex-column justify-content-center`}>
      <div className="w-100 bg-dark" />
    </div>
  );
};

export default HorizontalBar;
