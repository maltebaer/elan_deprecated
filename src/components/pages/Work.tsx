import React, {useState} from "react";

import Page from "../Page";
import Showcase from "../Showcase";
import ShowcaseList from "../ShowcaseList";

const Work: React.FC = () => {
    return (
        <Page title="Work" aside={Aside}>
            <Main />
        </Page>
    );
};

const Aside = (
    <React.Fragment>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            itaque dolores error sapiente eveniet doloribus culpa at nisi
            corrupti vel veritatis eum quaerat qui ratione quidem, tenetur
            laudantium autem? Maiores?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            itaque dolores error sapiente eveniet doloribus culpa at nisi
            corrupti vel veritatis.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
            corrupti vel veritatis eum quaerat qui ratione quidem, tenetur
            laudantium autem? Maiores?
        </p>
    </React.Fragment>
);

const Main: React.FC = () => {
    const [openModalId, setOpenModalId] = useState<number | null>(null);

    const toggleModal = (id: number) => {
        if (openModalId !== id) {
            setOpenModalId(id);
        } else {
            setOpenModalId(null);
        }
    };

    return (
        <div className="h-100 info">
            <Showcase clientId={1} modalIsOpen={openModalId === 1} />
            <Showcase clientId={2} modalIsOpen={openModalId === 2} />
            <Showcase clientId={3} modalIsOpen={openModalId === 3} />
            <Showcase clientId={4} modalIsOpen={openModalId === 4} />
            <Showcase clientId={5} modalIsOpen={openModalId === 5} />
            <ShowcaseList openModalId={openModalId} toggleModal={toggleModal} />
        </div>
    );
};

export default Work;
