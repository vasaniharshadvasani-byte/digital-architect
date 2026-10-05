import React from "react";
import { Link } from "react-router-dom";
import "../assests/css/style.css";

function Footer() {
    return (
        <footer className="footer-main">
            <div className="container">
                <div className="footer-main-insit">
                    <div className="footer-main-insit-logo">
                        <div className="footer-main-insit-logo-insit">
                            <Link to="/">
                                <h1>PORTFOLIO<span>.</span></h1>
                            </Link>
                        </div>

                        <div className="footer-main-insit-logo-menu">
                            <ul>
                                <li>
                                    <Link to="/">HOME</Link>
                                </li>
                                <li>
                                    <Link to="/about">ABOUT</Link>
                                </li>
                                <li>
                                    <Link to="/services">SERVICES</Link>
                                </li>
                                <li>
                                    <Link to="/work">WORK</Link>
                                </li>
                                <li>
                                    <Link to="/resume">RESUME</Link>
                                </li>
                                <li>
                                    <Link to="/contact">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-main-insit-text">
                        <p>© {new Date().getFullYear()} Digital Architect. Built with Passion for Design Excellence.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;