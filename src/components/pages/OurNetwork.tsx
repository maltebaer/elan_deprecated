import React from "react";

import ContactForm from "../ContactForm";
import Instagram from "../Instagram";
import Page from "../Page";

const OurNetwork: React.FC = () => {
    return <Page title="Our network" aside={Aside} main={Main} />;
};

const Aside = <ContactForm />;

const Main = (
    <div className="h-100 d-flex flex-colunm justify-content-center align-items-center">
        <Instagram />
    </div>
);

export default OurNetwork;
