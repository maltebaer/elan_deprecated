import "./WhatWeDo.scss";

import React from "react";

import Page from "../Page";

const WhatWeDo: React.FC = () => {
    return (
        <Page
            title="What we do"
            className="what-we-do"
            aside={Aside}
            main={Main}
        />
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
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
            corrupti vel veritatis eum quaerat qui ratione quidem, tenetur
            laudantium autem? Maiores?
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
    <div className="h-100 d-flex flex-column justify-content-center align-items-end">
        <img src="/assets/elan" alt="ELAN" />
    </div>
);

export default WhatWeDo;
