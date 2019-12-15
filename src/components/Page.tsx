import React from "react";
import {isMobile} from "react-device-detect";

interface IPageProps {
    title: string;
    className?: string;
    aside: JSX.Element;
    main: JSX.Element;
}

const Page: React.FC<IPageProps> = (props) => {
    let className = "row";
    if (!isMobile) {
        className += " padding-x h-100";
    }
    if (props.className) {
        className += " " + props.className;
    }

    return (
        <div className={className}>
            <div className="col-12 col-md-3 info">
                <div>
                    <div className="mb-5 text-uppercase line-through">
                        {props.title}
                    </div>
                    {props.aside}
                </div>
            </div>
            <div className="col">{props.main}</div>
        </div>
    );
};

export default Page;
