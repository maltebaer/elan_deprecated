import React, {useState, useEffect, useRef} from "react";
import {FullPage, Slide} from "react-full-page";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";

export const routes = ["home", "what-we-do", "work", "our-network", "about"];

interface ChangeObject {
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

    const onAfterChange = (changeObject: ChangeObject) => {
        window.location.hash = routes[changeObject.to];
        setCurrentSlideIndex(changeObject.to);
    };

    const onControlsClick = (i: number) => {
        fullPageRef.current.scrollToSlide(i);
    };

    return (
        <div className="container-fluid">
            <div className="extra-padding forground fixed-top">
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
                    <h1>WHAT WE DO</h1>
                </Slide>
                <Slide id={"work"}>
                    <h1>WORK</h1>
                </Slide>
                <Slide id={"our-network"}>
                    <h1>OUR NETWORK</h1>
                </Slide>
                <Slide id={"about"}>
                    <h1>ABOUT</h1>
                </Slide>
            </FullPage>
            <div className="extra-padding forground fixed-bottom">
                <Footer />
            </div>
        </div>
    );
};

export default App;
