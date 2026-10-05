import React from "react";
import { Link } from "react-router-dom";
import Fin from "../assests/fin.png";
import nft from "../assests/nft.jpg";

function Featured() {
    return (
        <section className="featured-main">
            <div className="container">
                <div className="featured-main-insit">
                    <div className="featured-main-insit-heading">
                        <div className="featured-main-insit-heading-pera">
                            <h1>Featured Work</h1>
                            <p>Selected digital products from my lab</p>
                        </div>

                        <div className="featured-main-insit-heading-a">
                            <Link to="/work">View All Projects →</Link>
                        </div>
                    </div>

                    <div className="featured-main-insit-box">
                        <div className="featured-main-insit-box-card">
                            <div className="featured-main-insit-box-card-img">
                                <img src={Fin} alt="Fintech Dashboard Preview" loading="lazy" />
                                <div className="featured-main-insit-box-card-img-text">
                                    <p>Mobile App</p>
                                    <h3>Fintech Dashboard</h3>
                                </div>
                            </div>
                        </div>

                        <div className="featured-main-insit-box-card">
                            <div className="featured-main-insit-box-card-img">
                                <img src={nft} alt="NFT Marketplace Preview" loading="lazy" />
                                <div className="featured-main-insit-box-card-img-text">
                                    <p>Web Experience</p>
                                    <h3>NFT Marketplace</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;