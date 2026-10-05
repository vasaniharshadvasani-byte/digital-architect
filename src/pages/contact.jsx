import React from "react";
import "../assests/css/style.css";
import Lets from "../component/lets";

function Contact() {
    return (
        <>
            <div className="page-hero-main">
                <div className="container">
                    <div className="page-hero-insit">
                        <span className="page-hero-tag">GET IN TOUCH</span>
                        <h1>Contact <span>Me</span></h1>
                        <p>Have an exciting new product in mind or want to consult on your frontend architecture? Reach out anytime!</p>
                    </div>
                </div>
            </div>

            <Lets />
        </>
    );
}

export default Contact;