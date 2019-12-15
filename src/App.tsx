import React, {useEffect, useRef, useState} from "react";
import {FullPage, Slide} from "react-full-page";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import WhatWeDo from "./components/pages/WhatWeDo";
import Work from "./components/pages/Work";
import {isMobile} from "react-device-detect";
import OurNetwork from "./components/pages/OurNetwork";

export const routes = ["home", "what-we-do", "work", "our-network", "about"];

interface IChangeObject {
    from: number;
    to: number;
}

const App: React.FC = () => {
    const fullPageRef = useRef<any>();

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const onDown = (e: any) => {
        switch (e.keyCode) {
            case 38:
                e.preventDefault();
                if (currentSlideIndex - 1 >= 0) {
                    onControlsClick(currentSlideIndex - 1);
                }
                return;

            case 40:
                e.preventDefault();
                if (currentSlideIndex + 1 < routes.length) {
                    onControlsClick(currentSlideIndex + 1);
                }
                return;

            default:
                return;
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", onDown);
        return () => {
            document.removeEventListener("keydown", onDown);
        };
    });

    const onAfterChange = (changeObject: IChangeObject) => {
        window.location.hash = routes[changeObject.to];
        setCurrentSlideIndex(changeObject.to);
    };

    const onControlsClick = (i: number) => {
        fullPageRef.current.scrollToSlide(i);
    };

    return (
        <div className="container-fluid">
            {!isMobile ? (
                <React.Fragment>
                    <div className="padding-x forground fixed-top">
                        <Header
                            currentSlideIndex={currentSlideIndex}
                            onClick={onControlsClick}
                        />
                    </div>
                    <FullPage
                        ref={fullPageRef}
                        controls={Navbar}
                        afterChange={onAfterChange}
                    >
                        <Slide id={"home"}>
                            <Home />
                        </Slide>
                        <Slide id={"what-we-do"}>
                            <WhatWeDo />
                        </Slide>
                        <Slide id={"work"}>
                            <Work />
                        </Slide>
                        <Slide id={"our-network"}>
                            <OurNetwork />
                        </Slide>
                        <Slide id={"about"}>
                            <About />
                        </Slide>
                    </FullPage>
                    <div className="padding-x forground fixed-bottom">
                        <Footer />
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div id={"home"}>
                        <Home />
                    </div>
                    <div id={"what-we-do"}>
                        <WhatWeDo />
                    </div>
                    <div id={"work"}>
                        <Work />
                    </div>
                    <div id={"our-network"}>
                        <OurNetwork />
                    </div>
                    <div id={"about"}>
                        <About />
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};

export default App;
