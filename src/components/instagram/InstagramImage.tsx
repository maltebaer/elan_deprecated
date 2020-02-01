import React from "react";

interface IInstagramImageProps {
    id: number;
}

interface IProperty {
    width: string;
    left: string;
    top: string;
}

const properties: IProperty[] = [
    {
        left: "70%",
        top: "0%",
        width: "30%",
    },
    {
        left: "0%",
        top: "0%",
        width: "30%",
    },
    {
        left: "55%",
        top: "70%",
        width: "25%",
    },
    {
        left: "20%",
        top: "20%",
        width: "40%",
    },
];

const InstagramImage: React.FC<IInstagramImageProps> = (props) => {
    return (
        <img
            style={{
                left: properties[props.id - 1].left,
                position: "absolute",
                top: properties[props.id - 1].top,
                zIndex: props.id,
            }}
            width={properties[props.id - 1].width}
            src={`/assets/ig/${props.id}.jpg`}
            alt={`IG-${props.id}`}
        />
    );
};

export default InstagramImage;
