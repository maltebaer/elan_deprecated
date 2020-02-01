import "./ShowcaseList.scss";

import React from "react";
import {Clients} from "./pages/Work";

interface IShowcaseListProps {
    openModalId: Clients | null;

    onModalToggle: (id: Clients) => void;
}

const ShowcaseList: React.FC<IShowcaseListProps> = (props) => {
    const clients: Clients[] = [
        "boiler-room",
        "integr8",
        "melt",
        "moxy",
        "scopes",
        "soundcloud",
        "the-standard",
        "twitter",
        "whole",
    ];
    const items = clients.map((x, idx) => (
        <li
            key={idx}
            className={props.openModalId === x ? "active" : undefined}
        >
            <a
                // tslint:disable-next-line: jsx-no-lambda
                onClick={() => props.onModalToggle(x)}
            >
                {x.replace(/-/g, " ")}
            </a>
        </li>
    ));
    return (
        <ul className="ShowcaseList scrollbar">
            <div className="gradient">{items}</div>
        </ul>
    );
};

export default ShowcaseList;
