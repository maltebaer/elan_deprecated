import "./WhatWeDo.scss";

import React from "react";

const WhatWeDo: React.FC = () => {
    return (
        <div className="what-we-do padding-x h-100 row">
            <div className="col-3 info">
                <div>
                    <div className="mb-5 text-uppercase line-through">
                        What we do
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit itaque dolores error sapiente eveniet doloribus
                        culpa at nisi corrupti vel veritatis eum quaerat qui
                        ratione quidem, tenetur laudantium autem? Maiores?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit itaque dolores error sapiente eveniet doloribus
                        culpa at nisi corrupti vel veritatis.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At nisi corrupti vel veritatis eum quaerat qui ratione
                        quidem, tenetur laudantium autem? Maiores?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit itaque dolores error sapiente eveniet doloribus
                        culpa at nisi corrupti vel veritatis eum quaerat qui
                        ratione quidem, tenetur laudantium autem? Maiores?
                    </p>
                </div>
            </div>
            <div className="col d-flex flex-column justify-content-center align-items-end">
                <img src="/assets/elan" alt="ELAN" />
            </div>
        </div>
    );
};

export default WhatWeDo;
