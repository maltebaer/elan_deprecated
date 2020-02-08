import "./Showcase.scss";

import React from "react";
import {isIOS13, isMobile} from "react-device-detect";

import {Clients} from "../pages/work/Work";

const images = {
    "boiler-room": [
        "/assets/work/boiler-room/1.jpg",
        "/assets/work/boiler-room/2.jpg",
        "/assets/work/boiler-room/4.jpg",
        "/assets/work/boiler-room/5.jpg",
        "/assets/work/boiler-room/6.jpg",
        "/assets/work/boiler-room/7.jpg",
        "/assets/work/boiler-room/c.png",
    ],
    integr8: [
        "/assets/work/integr8/1.jpg",
        "/assets/work/integr8/2.jpg",
        "/assets/work/integr8/3.jpg",
        "/assets/work/integr8/4.jpg",
        "/assets/work/integr8/5.jpg",
        "/assets/work/integr8/c.png",
    ],
    melt: [
        "/assets/work/melt/1.jpg",
        "/assets/work/melt/2.jpg",
        "/assets/work/melt/3.jpg",
        "/assets/work/melt/4.jpg",
        "/assets/work/melt/5.jpg",
        "/assets/work/melt/c.png",
    ],
    moxy: [
        "/assets/work/moxy/1.jpg",
        "/assets/work/moxy/2.jpg",
        "/assets/work/moxy/3.jpg",
        "/assets/work/moxy/4.jpg",
        "/assets/work/moxy/5.jpg",
        "/assets/work/moxy/c.png",
    ],
    scopes: [
        "/assets/work/scopes/1.jpg",
        "/assets/work/scopes/2.jpg",
        "/assets/work/scopes/3.jpg",
        "/assets/work/scopes/4.jpg",
        "/assets/work/scopes/c.png",
    ],
    soundcloud: [
        "/assets/work/soundcloud/1.jpg",
        "/assets/work/soundcloud/2.jpg",
        "/assets/work/soundcloud/3.jpg",
        "/assets/work/soundcloud/4.jpg",
        "/assets/work/soundcloud/5.jpg",
        "/assets/work/soundcloud/6.jpg",
        "/assets/work/soundcloud/c.png",
    ],
    "the-standard": [
        "/assets/work/the-standard/1.jpg",
        "/assets/work/the-standard/2.jpg",
        "/assets/work/the-standard/3.jpg",
        "/assets/work/the-standard/4.jpg",
        "/assets/work/the-standard/5.jpg",
        "/assets/work/the-standard/6.jpg",
        "/assets/work/the-standard/7.jpg",
        "/assets/work/the-standard/c.png",
    ],
    twitter: ["/assets/work/twitter/1.jpg", "/assets/work/twitter/c.png"],
    whole: [
        "/assets/work/whole/1.jpg",
        "/assets/work/whole/2.jpg",
        "/assets/work/whole/3.jpg",
        "/assets/work/whole/4.jpg",
        "/assets/work/whole/5.jpg",
        "/assets/work/whole/6.jpg",
        "/assets/work/whole/c.png",
    ],
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
