import React from "react";
import "../assests/css/style.css";
import Driven from "../component/driven";
import My from "../component/my";

function About() {
    return (
        <>
            <div className="page-hero-main">
                <div className="container">
                    <div className="page-hero-insit">
                        <span className="page-hero-tag">WHO I AM</span>
                        <h1>About <span>Me</span></h1>
                        <p>Passionate UI/UX designer and frontend architect shaping modern web experiences with clean code and creative precision.</p>
                    </div>
                </div>
            </div>

            <Driven />
            <My />
        </>
    );
}

export default About;