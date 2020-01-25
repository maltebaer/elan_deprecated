import React, {useEffect, useRef, useState} from "react";
import {isIOS13, isMobile} from "react-device-detect";
import {FullPage, Slide} from "react-full-page";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MobileHeader from "./components/MobileHeader";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import OurNetwork from "./components/pages/OurNetwork";
import WhatWeDo from "./components/pages/WhatWeDo";
import Work from "./components/pages/Work";

export const routes = ["home", "what-we-do", "work", "our-network", "about"];

interface IChangeObject {
    from: number;
    to: number;
}

const App: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    // const [vh, setVh] = useState(window.innerHeight * 0.01);

    const fullPageRef = useRef<any>();

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const onDown = (e: any) => {
        switch (e.keyCode) {
            case 38: // down
                e.preventDefault();
                if (currentSlideIndex - 1 >= 0) {
                    onControlsClick(currentSlideIndex - 1);
                }
                return;

            case 40: // up
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

    useEffect(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, []);

    const onAfterChange = (changeObject: IChangeObject) => {
        window.location.hash = routes[changeObject.to];
        setCurrentSlideIndex(changeObject.to);
    };

    const onControlsClick = (i: number) => {
        fullPageRef.current.scrollToSlide(i);
    };

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };
    const closeMenu = () => {
        setMenuIsOpen(false);
    };

    return (
        <React.Fragment>
            {isMobile || isIOS13 ? (
                <React.Fragment>
                    {menuIsOpen ? (
                        <div
                            id="menu"
                            className="menu padding-y bg-dark text-white"
                        >
                            <div className="container-fluid d-flex flex-column justify-content-between h-100">
                                <MobileHeader toggleMobileMenu={toggleMenu} />
                                <Menu onCloseMenu={closeMenu} />
                            </div>
                        </div>
                    ) : (
                        <div className="container-fluid">
                            <div
                                className="padding-y"
                                style={{
                                    height: "100vh",
                                }}
                            >
                                <MobileHeader toggleMobileMenu={toggleMenu} />
                                <div id={"home"}>
                                    <Home />
                                </div>
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
                        </div>
                    )}
                </React.Fragment>
            ) : (
                <div className="container-fluid">
                    <Header
                        currentSlideIndex={currentSlideIndex}
                        onClick={onControlsClick}
                    />
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
                    <Footer />
                </div>
            )}
        </React.Fragment>
    );
};

export default App;
