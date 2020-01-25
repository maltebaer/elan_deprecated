import "./Page.scss";

import React from "react";

interface IPageProps {
    title: string;
    aside: JSX.Element;

    isWhatWeDo?: boolean;
    isAbout?: boolean;
}

const Page: React.FC<IPageProps> = (props) => {
    return (
        <div className={`Page row${props.isAbout ? " bg-about" : ""}`}>
            {/* ASIDE */}
            <div className="aside-container col-12 col-lg-3 bg-secondary">
                <div className="aside-limiter bg-info border">
                    <div className="mb-5 text-uppercase line-through">
                        {props.title}
                    </div>
                    <div>{props.aside}</div>
                </div>
            </div>
            {/* MAIN */}
            <div
                className={`col${
                    !props.isWhatWeDo ? " main-container" : ""
                } bg-secondary`}
            >
                <div className="main-limiter bg-info border">
                    <div className="h-100">{props.children}</div>
                </div>
            </div>
        </div>
    );
};

export default Page;
