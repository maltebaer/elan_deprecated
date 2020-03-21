import React, {useEffect, useRef, useState} from "react";
import {isIOS13, isMobile} from "react-device-detect";
import {FullPage, Slide} from "react-full-page";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MobileHeader from "./components/mobile/MobileHeader";
import MobileMenu from "./components/mobile/MobileMenu";
import Navbar from "./components/navbar/Navbar";
import About from "./components/pages/about/About";
import Home from "./components/pages/home/Home";
import OurNetwork from "./components/pages/our-network/OurNetwork";
import WhatWeDo from "./components/pages/what-we-do/WhatWeDo";
import Work from "./components/pages/work/Work";

export const routes = ["home", "what-we-do", "work", "our-network", "about"];

interface IChangeObject {
    from: number;
    to: number;
}

const App: React.FC = () => {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [scrollMode, setScrollMode] = useState<"full-page" | "normal">(
        "full-page",
    );
    const [isOverList, setIsOverList] = useState(false);
    const [fullPageScrollDisabled, setFullPageScrollDisabled] = useState(false);
    const [isPortrait, setIsPortrait] = useState(true);

    const fullPageRef = useRef<any>();

    useEffect(() => {
        if (fullPageScrollDisabled) {
            setScrollMode("normal");
        } else {
            setScrollMode("full-page");
        }
    }, [fullPageScrollDisabled]);

    useEffect(() => {
        if (currentSlideIndex === 2 && isOverList) {
            setScrollMode("normal");
        } else {
            setScrollMode("full-page");
        }
    }, [currentSlideIndex, isOverList]);

    useEffect(() => {
        const checkOrientationChange = () => {
            // eslint-disable-next-line no-restricted-globals
            const orientation = screen.orientation;
            if (orientation) {
                switch (orientation.type) {
                    case "portrait-primary":
                    case "portrait-secondary":
                        console.log("portrait");
                        setIsPortrait(true);
                        break;
                    case "landscape-primary":
                    case "landscape-secondary":
                        console.log("landscape");
                        setIsPortrait(false);
                        break;
                    default:
                        setIsPortrait(true);
                        console.log("default (screen.orientation)");
                }

                return;
            }

            const screenOrientation = window.orientation;
            switch (screenOrientation) {
                case 0:
                case 180:
                    console.log("portrait");
                    setIsPortrait(true);
                    break;
                case 90:
                case -90:
                    console.log("landscape");
                    setIsPortrait(false);
                    break;
                default:
                    setIsPortrait(true);
                    console.log("default (window.orientation)");
            }
        };
        window.addEventListener("orientationchange", checkOrientationChange);
        checkOrientationChange();

        return () => {
            window.removeEventListener(
                "orientationchange",
                checkOrientationChange,
            );
        };
    });

    useEffect(() => {
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

        document.addEventListener("keydown", onDown);

        return () => {
            document.removeEventListener("keydown", onDown);
        };
    }, [currentSlideIndex]);

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
        setMobileMenuIsOpen(!mobileMenuIsOpen);
    };
    const closeMenu = () => {
        setMobileMenuIsOpen(false);
    };

    return (
        <React.Fragment>
            {isMobile || isIOS13 ? (
                !isPortrait ? (
                    <div className="mt-5 d-flex justify-content-center align-items-center">
                        <h2>
                            To ensure the best experience, please rotate your
                            device.
                        </h2>
                    </div>
                ) : (
                    <React.Fragment>
                        {mobileMenuIsOpen ? (
                            <div
                                id="menu"
                                className="mobile-height padding-y bg-dark text-white"
                            >
                                <div className="container-fluid d-flex flex-column justify-content-between h-100">
                                    <MobileHeader
                                        toggleMobileMenu={toggleMenu}
                                    />
                                    <MobileMenu onCloseMenu={closeMenu} />
                                </div>
                            </div>
                        ) : (
                            <React.Fragment>
                                <div className="mobile-height padding-y">
                                    <div className="container-fluid">
                                        <MobileHeader
                                            toggleMobileMenu={toggleMenu}
                                        />
                                    </div>
                                    <div id={"home"} className="h-100">
                                        <Home />
                                    </div>
                                </div>
                                <div className="container-fluid">
                                    <div id={"what-we-do"}>
                                        <WhatWeDo />
                                    </div>
                                    <div id={"work"}>
                                        <Work setIsOverList={setIsOverList} />
                                    </div>
                                    <div id={"our-network"}>
                                        <OurNetwork />
                                    </div>
                                    <div id={"about"}>
                                        <About />
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                )
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
                        scrollMode={scrollMode}
                    >
                        <Slide id={"home"}>
                            <Home />
                        </Slide>
                        <Slide id={"what-we-do"}>
                            <WhatWeDo />
                        </Slide>
                        <Slide id={"work"}>
                            <Work setIsOverList={setIsOverList} />
                        </Slide>
                        <Slide id={"our-network"}>
                            <OurNetwork />
                        </Slide>
                        <Slide id={"about"}>
                            <About />
                        </Slide>
                    </FullPage>
                    <Footer onImprintToggle={setFullPageScrollDisabled} />
                </div>
            )}
        </React.Fragment>
    );
};

export default App;
