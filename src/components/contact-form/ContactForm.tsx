import "./ContactForm.scss";

import emailjs from "emailjs-com";
import React, {useEffect, useState} from "react";
import {isIOS13, isMobile} from "react-device-detect";

const ContactForm: React.FC = () => {
    const [name, setName] = useState("");
    const [senderEmail, setSenderEmail] = useState("");
    const [location, setLocation] = useState("");
    const [message, setMessage] = useState("");

    const [errName, setErrName] = useState("");
    const [errSenderEmail, setErrSenderEmail] = useState("");
    const [errLocation, setErrLocation] = useState("");
    const [errMessage, setErrMessage] = useState("");

    const [emailSend, setEmailSend] = useState(false);

    useEffect(() => {
        emailjs.init(process.env.REACT_APP_EMAILJS_USERID!);
    });

    const validEmail = () => {
        const re = /\S+@\S+\.\S+/;
        return re.test(String(senderEmail).toLowerCase());
    };

    const validate = () => {
        if (!name) {
            setErrName("Please enter a Name.");
            return false;
        }
        if (!validEmail) {
            setErrSenderEmail("Please enter a valid E-mail.");
            return false;
        }
        if (!location) {
            setErrLocation("Please enter a Location.");
            return false;
        }
        if (!message) {
            setErrMessage("Please provide a Message.");
            return false;
        }

        return true;
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const isValide = validate();

        if (isValide) {
            const {
                REACT_APP_EMAILJS_RECEIVER: receiverEmail,
                REACT_APP_EMAILJS_TEMPLATEID: templateId,
            } = process.env;

            sendMessage(templateId!, receiverEmail!);
        }
    };

    const sendMessage = (templateId: string, receiverEmail: string) => {
        emailjs
            .send("default_service", templateId, {
                location,
                message,
                name,
                receiverEmail,
                senderEmail,
            })
            .then(() => {
                setEmailSend(true);
                setTimeout(() => setEmailSend(false), 3000);

                setName("");
                setSenderEmail("");
                setLocation("");
                setMessage("");

                setErrName("");
                setErrSenderEmail("");
                setErrLocation("");
                setErrMessage("");
            })
            .catch((err: any) =>
                console.error("Failed to send message. Error: ", err),
            );
    };

    return (
        <form className="ContactForm" onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    // tslint:disable-next-line: jsx-no-lambda
                    onChange={(e) => setName(e.target.value)}
                />
                <small className="form-text text-muted">{errName}</small>
            </div>
            <div className="form-group">
                <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
                    value={senderEmail}
                    // tslint:disable-next-line: jsx-no-lambda
                    onChange={(e) => setSenderEmail(e.target.value)}
                />
                <small className="form-text text-muted">{errSenderEmail}</small>
            </div>
            <div className="form-group">
                <input
                    id="location"
                    type="text"
                    className="form-control"
                    placeholder="Location"
                    value={location}
                    // tslint:disable-next-line: jsx-no-lambda
                    onChange={(e) => setLocation(e.target.value)}
                />
                <small className="form-text text-muted">{errLocation}</small>
            </div>
            <div className="form-group">
                <textarea
                    id="message"
                    className="form-control"
                    placeholder="Message"
                    value={message}
                    // tslint:disable-next-line: jsx-no-lambda
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                />
                <small className="form-text text-muted">{errMessage}</small>
            </div>
            <div className="form-group d-flex justify-content-end">
                <button
                    type="submit"
                    className="btn text-uppercase line-through"
                >
                    Send
                </button>
            </div>
            {emailSend && (
                <div className="d-flex justify-content-center">
                    {isMobile || isIOS13 ? (
                        <div className="success">
                            Message successfully sent!
                        </div>
                    ) : (
                        <div>Message successfully sent!</div>
                    )}
                </div>
            )}
        </form>
    );
};

export default ContactForm;
