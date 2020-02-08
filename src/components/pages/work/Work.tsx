import "./Work.scss";

import React, {useState} from "react";

import Page from "../../page/Page";
import Showcase from "../../showcase/Showcase";
import ShowcaseList from "../../showcase/ShowcaseList";

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
        <h2>Event Conceptualization & Execution including B2B & B2C:</h2>
        <ul>
            <li>Brand Strategy</li>
            <li>Creative Research</li>
            <li>Creative Ideation</li>
            <li>Budgeting </li>
            <li>Project Management</li>
            <li>Pre-Production</li>
            <li>Guest and Venue Curation</li>
            <li>Leading Vendors</li>
            <li>Sponsorships & Partnerships</li>
            <li>On Site Management</li>
            <li>Social Media Coverage</li>
            <li>Experience Management</li>
            <li>Post-Event Breakdown</li>
            <li>Talent Procurement</li>
        </ul>
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
