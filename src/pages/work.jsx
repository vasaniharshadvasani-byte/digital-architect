import React from "react";
import "../assests/css/style.css";
import Featured from "../component/Featured";
import Lets from "../component/lets";

function Work() {
    return (
        <>
            <div className="page-hero-main">
                <div className="container">
                    <div className="page-hero-insit">
                        <span className="page-hero-tag">PORTFOLIO</span>
                        <h1>Featured <span>Work</span></h1>
                        <p>Explore selected client projects, enterprise applications, and modern digital architectures built for high performance.</p>
                    </div>
                </div>
            </div>

            <Featured />
            <Lets />
        </>
    );
}

export default Work;