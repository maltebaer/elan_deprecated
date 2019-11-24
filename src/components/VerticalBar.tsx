import "./VerticalBar.css";

import React from "react";

interface IVerticalbarProps {
  height: "single" | "double";
}

const VerticalBar: React.FC<IVerticalbarProps> = props => {
  return (
    <div className={`VerticalBar ${props.height} d-flex justify-content-center`}>
      <div className="h-100 bg-dark" />
    </div>
  );
};

export default VerticalBar;
