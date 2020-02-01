import "./Showcase.scss";

import React from "react";
import {isIOS13, isMobile} from "react-device-detect";

import {Clients} from "../pages/work/Work";

const images = {
    "boiler-room": ["/assets/work/boiler-room/1.jpg"],
    integr8: ["/assets/work/integr8/1.jpg"],
    melt: [
        "/assets/work/melt/1.jpg",
        "/assets/work/melt/2.jpg",
        "/assets/work/melt/3.jpg",
        "/assets/work/melt/4.jpg",
        "/assets/work/melt/5.jpg",
        "/assets/work/melt/c.png",
    ],
    moxy: ["/assets/work/moxy/1.jpg"],
    scopes: ["/assets/work/scopes/1.jpg"],
    soundcloud: [
        "/assets/work/soundcloud/1.jpg",
        "/assets/work/soundcloud/2.jpg",
        "/assets/work/soundcloud/3.jpg",
        "/assets/work/soundcloud/4.jpg",
    ],
    "the-standard": ["/assets/work/the-standard/1.jpg"],
    twitter: ["/assets/work/twitter/1.jpg"],
    whole: ["/assets/work/twitter/1.jpg"],
};

interface IShowcaseProps {
    id: Clients;

    onModalClose: () => void;
}

const Showcase: React.FC<IShowcaseProps> = (props) => {
    const carouselItems = images[props.id].map((x, idx) => {
        let className = "carousel-item";
        if (idx === 0) {
            className += " active";
        }

        return (
            <div key={idx} className={className}>
                <img
                    src={x}
                    className="d-block w-100"
                    alt={props.id + "-" + idx}
                />
                <div className="carousel-close d-none d-block">
                    <button
                        id="close-button"
                        type="button"
                        className="close"
                        aria-label="Close"
                        onClick={props.onModalClose}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        );
    });

    const indicatorItems = images[props.id].map((_, idx) => (
        <li
            key={idx}
            data-target={`#${props.id}Carousel`}
            data-slide-to={idx}
            className={idx === 0 ? "active" : undefined}
        />
    ));

    return (
        <div
            id={`${props.id}Carousel`}
            className={`Showcase carousel slide${
                isMobile || isIOS13 ? "" : " absolute"
            }`}
            data-ride="carousel"
        >
            <ol className="carousel-indicators">{indicatorItems}</ol>
            <div className="carousel-inner">{carouselItems}</div>
            <a
                className="carousel-control-prev"
                href={`#${props.id}Carousel`}
                role="button"
                data-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href={`#${props.id}Carousel`}
                role="button"
                data-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                />
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Showcase;
