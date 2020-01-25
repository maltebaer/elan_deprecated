import "./About.scss";

import React from "react";
import {isMobile, isIOS13} from "react-device-detect";

import MobileFooter from "../MobileFooter";
import Page from "../Page";
import Portrait from "../Portrait";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            itaque dolores error sapiente eveniet doloribus culpa at nisi
            corrupti vel veritatis eum quaerat qui ratione quidem, tenetur
            laudantium autem? Maiores?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            itaque dolores error sapiente eveniet doloribus culpa at nisi
            corrupti vel veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. At nisi corrupti vel veritatis eum quaerat qui
            ratione quidem, tenetur laudantium autem? Maiores?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            itaque dolores error sapiente eveniet doloribus culpa at nisi
            corrupti vel veritatis eum quaerat qui ratione quidem, tenetur
            laudantium autem? Maiores?
        </p>
    </React.Fragment>
);

const Main = (
    <div className="About">
        <div
            className={`d-flex justify-content-${
                isMobile ? "between" : "center pt-5"
            } align-items-center`}
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
        {(isMobile || isIOS13) && <MobileFooter />}
    </div>
);

export default About;
