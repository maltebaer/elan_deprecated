import "./Home.css";

import React from "react";

const Home: React.FC = () => {
    return (
        <div className="Home h-100 d-flex justify-content-center align-items-center">
            <img className="negative-margin" src="/assets/holo" alt="holo" />
            <img src="/assets/cover" alt="holo" />
        </div>
    );
};

export default Home;
