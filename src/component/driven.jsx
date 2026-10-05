import dimg from "../assests/driven.png";

function Driven() {

    return (
        <>

            <div className="driven-main">

                <div className="container">

                    <div className="driven-main-insit">

                        <div className="driven-main-insit-img">

                            <div className="driven-main-insit-img-insit">
                                <img src={dimg} alt="Driven" />
                            </div>

                            <div className="driven-main-insit-img-text">
                                <span>05+</span><p>Years of Experience</p>
                            </div>

                        </div>

                        <div className="driven-main-insit-text">

                            <div className="driven-main-insit-text-heading">
                                <h1>Driven by Details, Defined by Design.</h1>
                            </div>

                            <div className="driven-main-insit-text-pera">
                                <p> I am a multidisciplinary designer and developer. I believe that good design is not just how it looks, but how it works and feels. Every pixel I place serves a purpose.</p>
                            </div>

                            <div className="driven-main-insit-text-clients">

                                <div className="driven-main-insit-text-clients-card">
                                    <span>120+</span><p>Happy Clients</p>
                                </div>

                                <div className="driven-main-insit-text-clients-card">
                                    <span>250+</span><p>Projects Done</p>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )

};

export default Driven;