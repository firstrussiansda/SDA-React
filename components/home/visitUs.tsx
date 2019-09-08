import React from 'react';

const VisitUs = () => (
    <section id="visit-block" className="card card-lg pb-5">
        <h2 id="directions-title" className="title text-center">Come Visit Us</h2>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-xxs-12 col-sm-12 m-b-lg">
                <div className="visit text-xs m-b-lg text-sm-left">
                    <strong>First Russian SDA church</strong>
                    <br />
                    is located in Gravesend area of Brooklyn, NY.
                </div>
                <address className="visit m-b-lg">
                    <a id="brooklyn-lovation">
                        <strong>Location:</strong>
                    </a>
                    <br />
                    1913 W 7th St Brooklyn, NY 11223
                </address>
                <div className="visit">
                    <strong>Worship times:</strong>
                    <br />
                    <ul>Praying Group: <span className=" time float-right">Saturdays at 9:15 AM </span></ul>
                    <ul>Sabbath School: <span className="time float-right">Saturdays at 10:00 AM </span></ul>
                    <ul>Sermons: <span className="time float-right">Saturdays at 11:00 AM </span></ul>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xxs-12 col-sm-12">
                <iframe width="100%" max-height="80vh" height="350" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=1913%20W%207th%20St%2C%20New%20York%2C%20New%20York%2011223&key=AIzaSyCEp8zGhVStHmupL_fwpqiRZiSqxCSCD3U" allowFullScreen></iframe>
            </div>
        </div>
    </section>
);

export default VisitUs;
