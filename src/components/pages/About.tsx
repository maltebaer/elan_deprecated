import "./About.scss";

import React from "react";
import {isMobile} from "react-device-detect";

import Page from "../Page";
import Portrait from "../Portrait";
import MobileFooter from "../MobileFooter";

const About: React.FC = () => {
    return <Page title="About" className="About" aside={Aside} main={Main} />;
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
    <React.Fragment>
        <div
            className={`d-flex h-100 justify-content-${
                isMobile ? "between" : "center"
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
        <MobileFooter />
    </React.Fragment>
);

export default About;
