import React from "react";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";

import Navbar from "./components/Navbar";

configureAnchors({ offset: -400 });

const App: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="vh-100 fixed-top d-flex justify-content-end align-items-center">
        <Navbar />
      </div>
      <ScrollableAnchor id={"home"}>
        <div className="vh-100">
          <h1>HOME</h1>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={"what-we-do"}>
        <div className="vh-100">
          <h1>WHAT WE DO</h1>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={"work"}>
        <div className="vh-100">
          <h1>WORK</h1>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={"our-network"}>
        <div className="vh-100">
          <h1>OUR NETWORK</h1>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={"about"}>
        <div className="vh-100">
          <h1>ABOUT</h1>
        </div>
      </ScrollableAnchor>
    </div>
  );
};

export default App;
