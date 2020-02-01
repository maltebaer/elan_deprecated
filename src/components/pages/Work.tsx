import "./Work.scss";

import React, {useState} from "react";

import Page from "../Page";
import Showcase from "../Showcase";
import ShowcaseList from "../ShowcaseList";

export type Clients =
    | "boiler-room"
    | "integr8"
    | "melt"
    | "moxy"
    | "scopes"
    | "soundcloud"
    | "the-standard"
    | "twitter"
    | "whole";

const Work: React.FC = () => {
    return (
        <Page title="Work" aside={Aside}>
            <Main />
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
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
            corrupti vel veritatis eum quaerat qui ratione quidem, tenetur
            laudantium autem? Maiores?
        </p>
    </React.Fragment>
);

const Main: React.FC = () => {
    const [openModalId, setOpenModalId] = useState<Clients | null>(null);

    const onModalToggle = (id: Clients) => {
        if (openModalId !== id) {
            setOpenModalId(id);
        } else {
            setOpenModalId(null);
        }
    };
    const onModalClose = () => {
        setOpenModalId(null);
    };

    return (
        <div className="Work">
            <ShowcaseList
                openModalId={openModalId}
                onModalToggle={onModalToggle}
            />
            {openModalId && (
                <Showcase id={openModalId} onModalClose={onModalClose} />
            )}
        </div>
    );
};

export default Work;
