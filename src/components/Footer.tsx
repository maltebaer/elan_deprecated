import React from "react";
import HorizontalBar from "./HorizontalBar";

const Footer: React.FC = () => {
    return (
        <div className="nav-height">
            <ul className="h-100 nav d-flex justify-content-between">
                <span className="fixed-width d-flex align-items-center">
                    <li className="footer-item">
                        <a
                            className="nav-link"
                            href="mailto:info@elanberlin.com"
                        >
                            info@elanberlin.com
                        </a>
                    </li>
                </span>
                <span className="d-flex align-items-center">
                    <li className="footer-item">
                        <a href="#" className="nav-link">
                            Facebook
                        </a>
                    </li>
                    <HorizontalBar large />
                    <li className="footer-item">
                        <a href="#" className="nav-link">
                            Instagram
                        </a>
                    </li>
                    <HorizontalBar large />
                    <li className="footer-item">
                        <a href="#" className="nav-link">
                            YouTube
                        </a>
                    </li>
                    <HorizontalBar large />
                    <li className="footer-item">
                        <a href="#" className="nav-link">
                            Twitter
                        </a>
                    </li>
                </span>
                <span className="fixed-width d-flex justify-content-end align-items-center">
                    <li className="footer-item">
                        <span className="nav-link d-flex align-items-center">
                            +49 176 8738 6244, Bülowstraße 19
                            <div className="p-1">
                                <HorizontalBar />
                            </div>
                            10961 Berlin
                        </span>
                    </li>
                </span>
            </ul>
        </div>
    );
};

export default Footer;
