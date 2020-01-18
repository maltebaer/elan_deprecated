import "./ShowcaseList.scss";

import React from "react";

interface IShowcaseListProps {
    openModalId: number | null;

    toggleModal: (id: number) => void;
}

const ShowcaseList: React.FC<IShowcaseListProps> = (props) => {
    return (
        <ul className="ShowcaseList">
            <li>
                <a
                    className={props.openModalId === 1 ? "active" : undefined}
                    // tslint:disable-next-line: jsx-no-lambda
                    onClick={() => props.toggleModal(1)}
                >
                    Client 1
                </a>
            </li>
            <li>
                <a
                    className={props.openModalId === 2 ? "active" : undefined}
                    // tslint:disable-next-line: jsx-no-lambda
                    onClick={() => props.toggleModal(2)}
                >
                    Client 2
                </a>
            </li>
            <li>
                <a
                    className={props.openModalId === 3 ? "active" : undefined}
                    // tslint:disable-next-line: jsx-no-lambda
                    onClick={() => props.toggleModal(3)}
                >
                    Client 3
                </a>
            </li>
            <li>
                <a
                    className={props.openModalId === 4 ? "active" : undefined}
                    // tslint:disable-next-line: jsx-no-lambda
                    onClick={() => props.toggleModal(4)}
                >
                    Client 4
                </a>
            </li>
            <li>
                <a
                    className={props.openModalId === 5 ? "active" : undefined}
                    // tslint:disable-next-line: jsx-no-lambda
                    onClick={() => props.toggleModal(5)}
                >
                    Client 5
                </a>
            </li>
        </ul>
    );
};

export default ShowcaseList;
