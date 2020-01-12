import React from "react";
import {doExpression} from "@babel/types";

interface IIGImageProps {
    id: number;
}

interface IProperty {
    width: string;
    left: string;
    top: string;
}

const randomFive = (decimal: number) => {
    return decimal + Math.random() + "%";
};

const properties: IProperty[] = [
    {
        left: randomFive(75),
        top: randomFive(0),
        width: randomFive(25),
    },
    {
        left: randomFive(0),
        top: randomFive(0),
        width: randomFive(25),
    },
    {
        left: randomFive(55),
        top: randomFive(80),
        width: randomFive(20),
    },
    {
        left: randomFive(20),
        top: randomFive(15),
        width: randomFive(40),
    },
];

const IGImage: React.FC<IIGImageProps> = (props) => {
    return (
        <img
            style={{
                left: properties[props.id - 1].left,
                position: "absolute",
                top: properties[props.id - 1].top,
                zIndex: props.id,
            }}
            width={properties[props.id - 1].width}
            src={`/assets/ig-${props.id}.jpg`}
            alt={`IG-${props.id}`}
        />
    );
};

export default IGImage;
