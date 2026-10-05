import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assests/css/style.css";
import "../assests/css/responsive.css";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu whenever route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [menuOpen]);

    const navLinks = [
        { path: "/", label: "HOME" },
        { path: "/about", label: "ABOUT" },
        { path: "/services", label: "SERVICES" },
        { path: "/work", label: "WORK" },
        { path: "/resume", label: "RESUME" },
        { path: "/contact", label: "CONTACT" },
    ];

    return (
        <>
            <header className="navbar-main">
                <div className="container">
                    <div className="navbar-main-insit">
                        <div className="navbar-main-insit-logo">
                            <Link to="/" onClick={() => setMenuOpen(false)}>
                                <p>PORT<span>FOLIO</span></p>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="navbar-main-insit-menu">
                            <ul>
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className={`navbar-main-insit-menu-item ${location.pathname === link.path ? "active" : ""}`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Mobile Hamburger Button */}
                        <button
                            type="button"
                            className={`mobile-menu-toggle ${menuOpen ? "open" : ""}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                        >
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer & Overlay */}
                <div
                    className={`mobile-menu-backdrop ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(false)}
                ></div>

                <div className={`mobile-menu-drawer ${menuOpen ? "open" : ""}`}>
                    <div className="mobile-menu-drawer-header">
                        <p className="mobile-drawer-logo">PORT<span>FOLIO</span></p>
                        <button
                            type="button"
                            className="mobile-drawer-close"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            ✕
                        </button>
                    </div>

                    <ul className="mobile-menu-list">
                        {navLinks.map((link, idx) => (
                            <li key={link.path} style={{ animationDelay: `${idx * 0.05}s` }}>
                                <Link
                                    to={link.path}
                                    className={`mobile-menu-item ${location.pathname === link.path ? "active" : ""}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <span>{link.label}</span>
                                    <span className="arrow-indicator">→</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mobile-menu-cta">
                        <Link
                            to="/contact"
                            className="mobile-cta-btn"
                            onClick={() => setMenuOpen(false)}
                        >
                            Start a Project
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Nav;