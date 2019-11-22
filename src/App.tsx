import React, { useState } from "react";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

// configureAnchors({ offset: -400 });

const App: React.FC = () => {
  const [hash, setHash] = useState(window.location.hash ? window.location.hash : "#home");

  const onHashChange = () => {
    setHash(window.location.hash);
  };
  window.onhashchange = onHashChange;

  return (
    <div className="container-fluid">
      <div style={{ zIndex: 1040 }} className="fixed-top">
        <Header hash={hash} />
      </div>
      <div className="vh-100 fixed-top d-flex justify-content-end align-items-center">
        <Navbar hash={hash} />
      </div>
      <ScrollableAnchor id={"home"}>
        <div className="vh-100 d-flex flex-colunm justify-content-center align-items-center">
          <h1>HOME</h1>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={"what-we-do"}>
        <div className="vh-100 d-flex flex-colunm justify-content-center align-items-center">
          <h1>WHAT WE DO</h1>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={"work"}>
        <div className="vh-100 d-flex flex-colunm justify-content-center align-items-center">
          <h1>WORK</h1>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={"our-network"}>
        <div className="vh-100 d-flex flex-colunm justify-content-center align-items-center">
          <h1>OUR NETWORK</h1>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={"about"}>
        <div className="vh-100 d-flex flex-colunm justify-content-center align-items-center">
          <h1>ABOUT</h1>
        </div>
      </ScrollableAnchor>
    </div>
  );
};

export default App;
