import React from "react";
import "../assests/css/style.css";
import Premium from "../component/Premium";
import Lets from "../component/lets";

function Services() {
    return (
        <>
            <div className="page-hero-main">
                <div className="container">
                    <div className="page-hero-insit">
                        <span className="page-hero-tag">WHAT I OFFER</span>
                        <h1>My <span>Services</span></h1>
                        <p>End-to-end digital solutions tailored to elevate your brand, accelerate conversions, and delight your users.</p>
                    </div>
                </div>
            </div>

            <Premium />
            <Lets />
        </>
    );
}

export default Services;