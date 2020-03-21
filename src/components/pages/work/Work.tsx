import "./Work.scss";

import React, {useState} from "react";

import Page from "../../page/Page";
import Showcase from "../../showcase/Showcase";
import ShowcaseList from "../../showcase/ShowcaseList";

export type Clients =
    | "boiler-room"
    | "melt"
    | "moxy"
    | "scopes"
    | "soundcloud"
    | "the-standard"
    | "twitter"
    | "whole"
    | "integr8";

interface IWorkProps {
    setIsOverList: (isOver: boolean) => void;
}

const Work: React.FC<IWorkProps> = (props) => {
    return (
        <Page title="Work" aside={Aside}>
            <Main setIsOverList={props.setIsOverList} />
        </Page>
    );
};

const Aside = (
    <React.Fragment>
        B2B and B2C Event Conceptualization and Execution, including:
        <ul className="mt-2" id="work-list">
            <li>Brand Strategy, Creative Research, and Creative Ideation</li>
            <li>Budgeting and Project Management</li>
            <li>Guest and Venue Curation</li>
            <li>Vendor and Talent Procurement</li>
            <li>Sponsorships and Partnerships</li>
            <li>On Site Facilities and Experience Management</li>
            <li>Pre-Production and Post-Event Breakdown</li>
            <li>Pre-Event and Post-Event Social Media Coverage</li>
        </ul>
        <br />
        Explore some of our projects by clicking on the client's name.
    </React.Fragment>
);

interface IMainProps {
    setIsOverList: (isOver: boolean) => void;
}

const Main: React.FC<IMainProps> = (props) => {
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
                setIsOverList={props.setIsOverList}
            />
            {openModalId && (
                <Showcase id={openModalId} onModalClose={onModalClose} />
            )}
        </div>
    );
};

export default Work;
