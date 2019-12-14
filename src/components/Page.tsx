import React from "react";

interface IPageProps {
    title: string;
    className: string;
    aside: JSX.Element;
    main: JSX.Element;
}

const Page: React.FC<IPageProps> = (props) => {
    return (
        <div className={`padding-x h-100 row ${props.className}`}>
            <div className="col-3 info">
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
