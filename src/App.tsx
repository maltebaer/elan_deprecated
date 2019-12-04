import "./App.css";

import React, { useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [hash, setHash] = useState(window.location.hash ? window.location.hash : "#home");

  const onHashChange = () => {
    setHash(window.location.hash);
  };
  window.onhashchange = onHashChange;

  const pageStyle = "vh-100 d-flex flex-colunm justify-content-center align-items-center";

  return (
    <div className="App container-fluid">
      <div className="extra-padding forground fixed-top">
        <Header hash={hash} />
      </div>
      <div className="extra-padding vh-100 fixed-top d-flex justify-content-end align-items-center">
        <Navbar hash={hash} />
      </div>
      <ScrollableAnchor id={"home"}>
        <div className={pageStyle}>
          <h1>HOME</h1>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={"what-we-do"}>
        <div className={pageStyle}>
          <h1>WHAT WE DO</h1>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={"work"}>
        <div className={pageStyle}>
          <h1>WORK</h1>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={"our-network"}>
        <div className={pageStyle}>
          <h1>OUR NETWORK</h1>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={"about"}>
        <div className={pageStyle}>
          <h1>ABOUT</h1>
        </div>
      </ScrollableAnchor>
      <div className="extra-padding forground fixed-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default App;
