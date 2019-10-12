import React from 'react';

import KeyMissionComponents from '../components/about/keyMissionComponents';
import Leadership from '../components/about/leadership';

// TODO: Resize pastor image
const About = () => {
    return (
        <div className='row justify-content-md-center'>
            <div className='col-xxs-12 col-lg-10 m-c-auto'>
                {/* Mission statement */}
                <section className='card about card-lg' id='about-mission'>
                    <h2 className='title  text-xxxl m-b-sm m-t-sm text-center'>Mission</h2>
                    <div className='blockquote text-center'>
                        <p id='mission-statement' className='m-b-xs'>
                            Reach Ukrainian and Russian speaking people in
                            Greater New York area with the distinctive,
                            Christ-centered message of Hope and Wholeness.
                        </p>
                    </div>
                </section>

                {/* TODO: get content for this element */}
                {/* <KeyMissionComponents /> */}

                <section className='card about about-us card-lg'>
                    <h2 className='title text-xxl m-b text-center'>About</h2>
                    <div className='text-center text-justify m-x-auto'>
                        <p className='m-b-xs'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer posuere erat a ante.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Integer posuere erat a ante.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer posuere erat a ante.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Integer posuere erat a ante.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer posuere erat a ante.
                        </p>
                    </div>
                </section>

                <section className='card about card-lg p-b-0 text-xxs-center'>
                    <h2 className='title m-b-xxl text-center'>Our Pastor</h2>
                    <div className='row'>
                        <div className='col-12 m-b-xxl'>
                            <img className='img-circle img-fluid m-x-auto m-b' src='static/img/pastor.jpg' />
                            <h3 className='name text-md text-center'>Andriy Dyman</h3>
                            <p className='text-center m-b-sm m-x-auto short-bio'>
                                Eli drives Apptopia’s strategic vision and manages investor relations.
                                Before Apptopia Eli was involved in several startups, including:
                                GPush, Oasys Water, GreatPoint Energy, and DVTel.
                            </p>
                        </div>
                    </div>
                </section>

                <Leadership />

            </div>
        </div>
    );
};

About.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default About;
