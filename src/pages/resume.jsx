import React from "react";
import "../assests/css/style.css";
import My from "../component/my";
import Driven from "../component/driven";

function Resume() {
    return (
        <>
            <div className="page-hero-main">
                <div className="container">
                    <div className="page-hero-insit">
                        <span className="page-hero-tag">CAREER PATH</span>
                        <h1>My <span>Resume</span></h1>
                        <p>A proven track record of design leadership, scalable UI architecture, and multidisciplinary product execution.</p>
                    </div>
                </div>
            </div>

            <My />
            <Driven />
        </>
    );
}

export default Resume;