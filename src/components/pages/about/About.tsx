import "./About.scss";

import React from "react";
import {isIOS13, isMobile, isMobileOnly} from "react-device-detect";

import MobileFooter from "../../mobile/MobileFooter";
import Page from "../../page/Page";
import Portrait from "../../portrait/Portrait";

const About: React.FC = () => {
    return (
        <Page title="About" aside={Aside} isAbout>
            {Main}
        </Page>
    );
};

const Aside = (
    <React.Fragment>
        <p>
            ELAN was born out of the need to challenge existing power dynamics
            and the traditional flow of knowledge that exists in both the
            corporate world and the cultural zeitgeist. .
        </p>
        <p>
            User adoption is often thought of as a challenge for businesses to
            try to find product market fit. How do they do it? They listen to
            their customers, but in the end what dictates their decisions is a
            preexisting idea of who their customer should be. We at ELAN don’t
            believe in what consumers should be or shouldn’t be. We believe that
            products and their messaging need to shift to fit this newer,
            emerging world.
        </p>
        <p>
            Additionally, we know that the mechanism for this dual change has to
            come through exposure to diversity & inclusion, giving something
            back to the community and supporting the local scene.
        </p>
        <p>The unnegotiable.</p>
        <p>
            The clients we work with embrace &#8212; or are open to embracing
            &#8212; this changing world wholeheartedly.
        </p>
    </React.Fragment>
);

const Main = (
    <div className="About">
        <div
            className={`d-flex justify-content-center align-items-center${
                isMobileOnly ? "" : " pt-5"
            }`}
        >
            <div className="pr-3 higher">
                <Portrait
                    name="Raquel Fedato"
                    email="raquel@elanberlin.com"
                    source="/assets/raquel.png"
                    alignment="left"
                />
            </div>
            <div className="pl-3 lower">
                <Portrait
                    name="Ricardo Oswald"
                    email="ricardo@elanberlin.com"
                    source="/assets/ricardo.png"
                    alignment="right"
                />
            </div>
        </div>
        {(isMobile || isIOS13) && (
            <div className="margin-y">
                <MobileFooter />
            </div>
        )}
    </div>
);

export default About;
