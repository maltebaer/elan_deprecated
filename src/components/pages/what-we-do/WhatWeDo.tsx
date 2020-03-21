import "./WhatWeDo.scss";

import React from "react";

import Page from "../../page/Page";

const WhatWeDo: React.FC = () => {
    return (
        <Page title="What we do" aside={Aside} isWhatWeDo>
            {Main}
        </Page>
    );
};

const Aside = (
    <React.Fragment>
        <p>
            We are a Berlin-based, international constellation of creatives
            developing customized events and experiences for clients and brands.
        </p>
        <p>
            We want to connect purpose-driven companies to communities, artists,
            and professionals that are helping to reshape the local and global
            scene towards a future of awareness and inclusion.
        </p>
    </React.Fragment>
);

const Main = (
    <div className="WhatWeDo h-100 d-flex flex-column justify-content-center align-items-center">
        <img src="/assets/elan.png" alt="ELAN" />
    </div>
);

export default WhatWeDo;
