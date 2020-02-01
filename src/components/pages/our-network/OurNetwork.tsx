import "./OurNetwork.scss";

import React from "react";

import ContactForm from "../../contact-form/ContactForm";
import Instagram from "../../instagram/Instagram";
import Page from "../../page/Page";

const OurNetwork: React.FC = () => {
    return (
        <Page title="Our network" aside={Aside}>
            {Main}
        </Page>
    );
};

const Aside = <ContactForm />;

const Main = (
    <div className="OurNetwork h-100">
        <Instagram />
    </div>
);

export default OurNetwork;
