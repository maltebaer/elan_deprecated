import "./Accordion.scss";

import React from "react";

interface IAccordionProps {
    id: number;
    title: string;
    content: string[];
}

const Accordion: React.FC<IAccordionProps> = (props) => {
    return (
        <div className="Accordion">
            <a
                data-toggle="collapse"
                href={`#collapseItem-${props.id}`}
                role="button"
                aria-expanded="false"
                aria-controls={`collapseItem-${props.id}`}
            >
                {props.title}
            </a>
            <div className="collapse" id={`collapseItem-${props.id}`}>
                <ul>
                    {props.content.map((x, i) => (
                        <li key={i}>{x} | </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Accordion;
