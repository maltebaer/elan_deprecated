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

const Aside = (
    <React.Fragment>
        <p>
            Do you need help with any upcoming project or would you like to be
            part of our community of creatives? Reach out to us &#8212; we are
            always open to meaningful collaborations.
        </p>
        <ContactForm />
    </React.Fragment>
);

const Main = (
    <div className="OurNetwork h-100">
        <Instagram />
    </div>
);

export default OurNetwork;
