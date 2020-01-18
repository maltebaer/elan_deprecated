import "./WhatWeDo.scss";

import React from "react";

import Accordion from "../Accordion";
import Page from "../Page";

const WhatWeDo: React.FC = () => {
    return (
        <Page title="What we do" className="WhatWeDo" aside={Aside}>
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
            corrupti vel veritatis.
        </p>
        <h2>Capabilities:</h2>
        <div className="accordion">
            <Accordion
                id={1}
                title="Event Conceptualization & Execution"
                content={[
                    "Brand Strategie",
                    "Budgeting",
                    "Creative Ideation",
                    "Guest Curation",
                    "Leading Vendors",
                    "On Site Management",
                ]}
            />
            <Accordion
                id={2}
                title="Project Management"
                content={["Lorem", "Ipsum", "Dolor", "Set"]}
            />
            <Accordion
                id={3}
                title="Community Management"
                content={["Lorem", "Ipsum", "Dolor", "Set"]}
            />
            <Accordion
                id={4}
                title="Experience Management"
                content={["Lorem", "Ipsum", "Dolor", "Set"]}
            />
            <Accordion
                id={5}
                title="Scouting & Casting"
                content={["Lorem", "Ipsum", "Dolor", "Set"]}
            />
        </div>
    </React.Fragment>
);

const Main = (
    <div className="h-100 d-flex flex-column justify-content-center align-items-end">
        <img src="/assets/elan" alt="ELAN" />
    </div>
);

export default WhatWeDo;
