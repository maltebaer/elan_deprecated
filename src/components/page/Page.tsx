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
            <div className="aside-container col-12 col-lg-3">
                <div className="aside-limiter">
                    <h1 className="mb-5">{props.title}</h1>
                    <div>{props.aside}</div>
                </div>
            </div>
            {/* MAIN */}
            <div className={`col${!props.isWhatWeDo ? " main-container" : ""}`}>
                <div className="main-limiter">
                    <div className="h-100">{props.children}</div>
                </div>
            </div>
        </div>
    );
};

export default Page;
