import "./Page.scss";

import React from "react";

interface IPageProps {
    title: string;
    aside: JSX.Element;
}

const Page: React.FC<IPageProps> = (props) => {
    return (
        <div className="Page row">
            {/* ASIDE */}
            <div className="page-container col-12 col-lg-3 bg-info border">
                <div className="aside-limiter bg-secondary border">
                    <div className="mb-5 text-uppercase line-through">
                        {props.title}
                    </div>
                    <div className="bg-info border">{props.aside}</div>
                </div>
            </div>
            {/* MAIN */}
            <div className="page-container col bg-info border">
                <div className="main-limiter bg-secondary border">
                    <div className="bg-info border">{props.children}</div>
                </div>
            </div>
        </div>
    );
};

export default Page;
