import { Link } from "react-router-dom";
import "../assests/css/style.css";

import banner from "../assests/banner.png";

import Driven from "../component/driven";
import Premium from "../component/Premium";
import Featured from "../component/Featured";
import My from "../component/my";
import Lets from "../component/lets";

function Home() {

    return (
        <>


            <div className="banner-section-main">

                <div className="container">

                    <div className="banner-section-main-insit">

                        <div className="banner-section-main-insit-text">

                            <div className="banner-section-main-insit-text-span">
                                <span>CREATIVE MINDSET</span>
                            </div>

                            <div className="banner-section-main-insit-text-heading">
                                <h1>Digital <span>Architect.</span></h1>
                            </div>

                            <div className="banner-section-main-insit-text-pera">
                                <p>Crafting high-end digital experiences through innovative design and seamless code. Specialized in UI/UX and Frontend Development.</p>
                            </div>

                            <div className="banner-section-main-insit-text-actions">
                                <Link to="/work" className="banner-section-main-insit-text-btn">
                                    Explore Projects
                                </Link>
                                <Link to="/contact" className="banner-section-main-insit-text-btn-secondary">
                                    Contact Me
                                </Link>
                            </div>

                        </div>

                        <div className="banner-section-main-insit-img">

                            <div className="banner-section-main-insit-img-insit">
                                <img src={banner} alt="banner" />
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Driven />

            <Premium />

            <Featured />

            <My />

            <Lets />


        </>
    )

};

export default Home;