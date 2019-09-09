import React from "react";
// import { withTranslation } from "../i18n";
import { WithTranslation } from "react-i18next";


import Events from "../components/home/events";
import PrayerRequest from "../components/home/prayerRequest";
import PhotoCarousel from "../components/home/photoCarousel";
import VisitUs from "../components/home/visitUs";

class Homepage extends React.Component <WithTranslation> {
    getInitialProps = () => ({
        namespacesRequired: ['common'],
    });

    render() {
        return (
            <div>
                {/* Main picture */}
                <div id="main-page-img" className="content-body">
                    <div className="card-body text-center ">
                        <h1 className="px-3 text-shadow main-title">&#34;God is with you wherever you go&#34;</h1>
                        <footer className="blockquote-footer">Joshua 1:9, WEB</footer>
                    </div>
                </div>
                <hr />

                <div className="row justify-content-center">
                    <div className="col-xxs-12 col-lg-10 m-x-auto">
                        <Events />
                        <PrayerRequest />
                        <PhotoCarousel />

                        {/* CONTACT US */}
                        <section className="mt-5 pt-5">
                            <div className="jumbotron jumbotron-fluid bg-light">
                                <div className="container text-center">
                                    <blockquote className="blockquote">
                                        <h2 className="mb-0 dispa">
                                            &#34;How good and pleasant it is when God’s people live together in unity!&#34;
                                        </h2>
                                        <footer className="blockquote-footer">Psalm 133:1</footer>
                                    </blockquote>
                                    <p className="lead">
                                        <a
                                            id="contact-btn"
                                            className="btn btn-outline-warning hvr-icon-forward"
                                            href="contact-us/contact-us.html"
                                            role="button"
                                        >
                                                Contact Us
                                            <i className="fas fa-arrow-circle-right hvr-icon"/>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </section>

                        <VisitUs />

                    </div>
                </div>
            </div>
        );
    }


};

export default Homepage;
