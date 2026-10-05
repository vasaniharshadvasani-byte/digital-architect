import React from "react";
import "../assests/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faCode, faBolt } from "@fortawesome/free-solid-svg-icons";

function Premium() {
    return (
        <section className="Premium-main">
            <div className="container">
                <div className="Premium-main-insit">
                    <div className="Premium-main-insit-heading">
                        <h1>Premium Solutions</h1>
                    </div>

                    <div className="Premium-main-insit-box">
                        <div className="Premium-main-insit-box-card">
                            <div className="Premium-main-insit-box-card-icon">
                                <FontAwesomeIcon icon={faLayerGroup} className="Premium-main-insit-box-card-icon-ui" />
                            </div>
                            <div className="Premium-main-insit-box-card-heading">
                                <h2>UI/UX Design</h2>
                            </div>
                            <div className="Premium-main-insit-box-card-pera">
                                <p>User-centric design focus on intuitive navigation and stunning aesthetics using Figma & Adobe XD.</p>
                            </div>
                        </div>

                        <div className="Premium-main-insit-box-card">
                            <div className="Premium-main-insit-box-card-icon">
                                <FontAwesomeIcon icon={faCode} className="Premium-main-insit-box-card-icon-wi" />
                            </div>
                            <div className="Premium-main-insit-box-card-heading">
                                <h2>Web Development</h2>
                            </div>
                            <div className="Premium-main-insit-box-card-pera">
                                <p>Clean, scalable, and optimized code using React, Tailwind, and modern JavaScript frameworks.</p>
                            </div>
                        </div>

                        <div className="Premium-main-insit-box-card">
                            <div className="Premium-main-insit-box-card-icon">
                                <FontAwesomeIcon icon={faBolt} className="Premium-main-insit-box-card-icon-xi" />
                            </div>
                            <div className="Premium-main-insit-box-card-heading">
                                <h2>Speed & Optimization</h2>
                            </div>
                            <div className="Premium-main-insit-box-card-pera">
                                <p>Lightning-fast page load times, SEO optimization, and smooth 60fps micro-animations on any device.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Premium;