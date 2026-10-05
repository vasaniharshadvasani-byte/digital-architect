import React, { useState } from "react";
import "../assests/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function Lets() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 4000);
    };

    return (
        <section className="lets-main">
            <div className="container">
                <div className="lets-main-insit">
                    <div className="lets-main-insit-text">
                        <div className="lets-main-insit-text-heading">
                            <p>Let's start a</p>
                            <h1>Project.</h1>
                        </div>

                        <div className="lets-main-insit-text-pera">
                            <p>I'm currently available for freelance work and new opportunities. Drop a line if you want to collaborate!</p>
                        </div>

                        <div className="lets-main-insit-text-mail-main">
                            <div className="lets-main-insit-text-mail-main-insit">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="lets-main-insit-text-mail-main-text">
                                <p>Mail me</p>
                                <a href="mailto:hello@yourportfolio.com">hello@yourportfolio.com</a>
                            </div>
                        </div>

                        <div className="lets-main-insit-text-location-main">
                            <div className="lets-main-insit-text-location-main-insit">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <div className="lets-main-insit-text-location-main-text">
                                <span>Location</span>
                                <p>Mumbai, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="lets-main-insit-from">
                        <div className="lets-main-insit-from-insit">
                            {submitted ? (
                                <div className="form-success-message">
                                    <FontAwesomeIcon icon={faCheckCircle} className="form-success-icon" />
                                    <h3>Message Received!</h3>
                                    <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="lets-main-insit-from-insit-name-add-main">
                                        <div className="lets-main-insit-from-insit-name-add-main-namei">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Full Name"
                                                required
                                            />
                                        </div>

                                        <div className="lets-main-insit-from-insit-name-add-main-emaili">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email Address"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-input-full">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Subject"
                                            required
                                        />
                                    </div>

                                    <div className="form-input-full">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your Message"
                                            rows="4"
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="lets-main-insit-from-insit-btn">
                                        Send Inquiry
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Lets;