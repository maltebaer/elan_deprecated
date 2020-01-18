import React from "react";
import Carousel from "react-images";

const images = [
    [
        {src: "/assets/work/c1-1.jpg"},
        {src: "/assets/work/c1-2.jpg"},
        {src: "/assets/work/c1-3.jpg"},
    ],
    [
        {src: "/assets/work/c2-1.jpg"},
        {src: "/assets/work/c2-2.jpg"},
        {src: "/assets/work/c2-3.jpg"},
    ],
    [
        {src: "/assets/work/c3-1.jpg"},
        {src: "/assets/work/c3-2.jpg"},
        {src: "/assets/work/c3-3.jpg"},
    ],
    [
        {src: "/assets/work/c4-1.jpg"},
        {src: "/assets/work/c4-2.jpg"},
        {src: "/assets/work/c4-3.jpg"},
    ],
    [
        {src: "/assets/work/c5-1.jpg"},
        {src: "/assets/work/c5-2.jpg"},
        {src: "/assets/work/c5-3.jpg"},
    ],
];

const customStyles = {
    view: () => ({
        // none of react-images styles are passed to <View />
        // ...base,
        "& > img": {
            height: "500px",
        },
        display: "flex",
        justifyContent: "center",
    }),
};

interface IShowcaseProps {
    clientId: number;
    modalIsOpen: boolean;
}

const Showcase: React.FC<IShowcaseProps> = (props) => {
    return (
        <div style={{position: "relative"}}>
            <div
                style={{
                    backgroundColor: "red",
                    // height: "500px",
                    left: "10vh",
                    position: "absolute",
                    // width: "100%",
                }}
            >
                {props.modalIsOpen && (
                    <Carousel
                        styles={customStyles}
                        views={images[props.clientId - 1]}
                        frameProps={{autoSize: "width"}}
                        components={{Footer: null, Header: null}}
                    />
                )}
            </div>
        </div>
    );
};

export default Showcase;
