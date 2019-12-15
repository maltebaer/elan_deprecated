import React from "react";

import Page from "../Page";

const OurNetwork: React.FC = () => {
    return <Page title="Our network" aside={Aside} main={Main} />;
};

const Aside = (
    <form>
        <div className="form-group">
            <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Name"
            />
        </div>
        <div className="form-group">
            <input
                id="email"
                type="email"
                className="form-control"
                placeholder="E-mail"
            />
        </div>
        <div className="form-group">
            <input
                id="expertise"
                type="text"
                className="form-control"
                placeholder="Expertise"
            />
        </div>
        <div className="form-group">
            <input
                id="location"
                type="text"
                className="form-control"
                placeholder="Location"
            />
        </div>
        <div className="form-group">
            <textarea
                id="message"
                className="form-control"
                placeholder="Message"
                rows={5}
            />
        </div>
        <div className="form-group d-flex justify-content-end">
            <button type="submit" className="btn text-uppercase line-through">
                Send
            </button>
        </div>
    </form>
);

const Main = (
    <div className="h-100 d-flex flex-colunm justify-content-center align-items-center">
        TODO: Instagram
    </div>
);

export default OurNetwork;
