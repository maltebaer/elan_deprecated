import React from "react";
import {isMobile} from "react-device-detect";

const Imprint: React.FC = () => {
    let className = "footer-item nav-link";
    if (isMobile) {
        className += " small";
    }

    return (
        <span className={className}>
            <a href="#imprint" data-toggle="modal">
                Imprint
            </a>
            <div
                className="modal fade"
                id="imprint"
                data-tabindex="-1"
                role="dialog"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered modal-lg"
                    role="document"
                >
                    <div className="modal-content">
                        <div style={{padding: "1rem"}}>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5>Imprint</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Velit itaque dolores error
                                sapiente eveniet doloribus culpa at nisi
                                corrupti vel veritatis eum quaerat qui ratione
                                quidem, tenetur laudantium autem? Maiores?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Velit itaque dolores error
                                sapiente eveniet doloribus culpa at nisi
                                corrupti vel veritatis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. At nisi corrupti vel veritatis
                                eum quaerat qui ratione quidem, tenetur
                                laudantium autem? Maiores?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    );
};

export default Imprint;
