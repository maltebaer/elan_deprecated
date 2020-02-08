import "./ShowcaseList.scss";

import React from "react";
import {Clients} from "../pages/work/Work";

interface IShowcaseListProps {
    openModalId: Clients | null;

    onModalToggle: (id: Clients) => void;
    setIsOverList: (isOver: boolean) => void;
}

const ShowcaseList: React.FC<IShowcaseListProps> = (props) => {
    const clients: Clients[] = [
        "boiler-room",
        "melt",
        "moxy",
        "scopes",
        "soundcloud",
        "the-standard",
        "twitter",
        "whole",
        "integr8",
    ];
    const items = clients.map((x, idx) => (
        <li
            key={idx}
            className={props.openModalId === x ? "active" : undefined}
        >
            <button
                className="no-button"
                // tslint:disable-next-line: jsx-no-lambda
                onClick={() => props.onModalToggle(x)}
            >
                {x.replace(/-/g, " ")}
            </button>
        </li>
    ));
    return (
        <ul
            className="ShowcaseList scrollbar"
            // tslint:disable-next-line: jsx-no-lambda
            onMouseEnter={() => props.setIsOverList(true)}
            // tslint:disable-next-line: jsx-no-lambda
            onMouseLeave={() => props.setIsOverList(false)}
        >
            <div className="gradient">{items}</div>
        </ul>
    );
};

export default ShowcaseList;
