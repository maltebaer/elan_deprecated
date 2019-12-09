import React from "react";

import Portrait from "../Portrait";

const About: React.FC = () => {
    return (
        <div className="d-flex h-100 justify-content-center align-items-center">
            <div className="p-5">
                <Portrait
                    name="Raquel Fedato"
                    email="raquel@elanberlin.com"
                    source="/assets/raquel.png"
                    alignment="left"
                />
            </div>
            <div className="p-5">
                <Portrait
                    name="Ricardo Oswald"
                    email="ricardo@elanberlin.com"
                    source="/assets/ricardo.png"
                    alignment="right"
                />
            </div>
        </div>
    );
};

export default About;
