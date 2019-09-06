import React from 'react';

const PrayerRequest = () => (
    <section id="praying-request">
        <h2 className="title text-center">Do you have a prayer need?</h2>
        <div className="row">
            <div className="col-sm-12 col-md-6 m-auto">
                <div className="text-center">
                    <blockquote className="blockquote">
                        <h5 className="m-4 mb-0 dispa">"Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working."</h5>
                        <footer className="blockquote-footer">James 5:16</footer>
                    </blockquote>
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <form>
                    <div className="row">
                        <div className="col-sm-6 col-md-6 mt-2 form-group">
                            <label htmlFor="name-field">Name</label>
                            <input id='name-field' type="text" className="form-control" placeholder="Ivan Ivanov" aria-describedby="emailHelp" required />
                        </div>
                        <div className="col-sm-6 col-md-6 mt-2 form-group">
                            <label htmlFor="email-field">Email</label>
                            <input id='email-field' type="email" className="form-control" placeholder="email@gmail.com" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-sm-12 col-md-12 form-group">
                            <label htmlFor="prayer_request">Prayer Need</label>
                            <textarea className="form-control" id="prayer_request" placeholder="Enter your prayer need" rows="3" required></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-outline-warning">Send Prayer Need</button>
                </form>
            </div>
        </div>
    </section>
);

export default PrayerRequest;