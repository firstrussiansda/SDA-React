import React from 'react';
import { i18n } from '../i18n';
import { WithTranslation } from 'react-i18next';
import { withTranslation } from '../i18n';

import Events, { EventData } from '../components/home/events';
import PrayerRequest from '../components/home/prayerRequest';
import VisitUs from '../components/home/visitUs';

import { baseUrl } from '../config/index';
import { Quote } from '../config/types';

interface HomepageProps extends WithTranslation {
    events: EventData[];
}

class Homepage extends React.Component<HomepageProps> {
    static async getInitialProps({ req }: any) {
        let events = [];

        // server side
        try {
            if (req) {
                const fetch = require('node-fetch');
                const uri = `${baseUrl}/api/events/${req.language}`;
                const response = await fetch(uri);
                const json = await response.json();
                events = json.events || [];
            } else {
                // client side
                const uri = `/api/events/${i18n.language}`;
                const response = await fetch(uri);
                const json = await response.json();
                events = json.events || [];
            }
            return { events, namespacesRequired: ['common'] };
        } catch (e) {
            if (process.env.NODE_ENV !== 'production') {
                // tslint:disable-next-line:no-console
                console.log(e);
            } else {
                // tslint:disable-next-line:no-console
                console.log('Error occurred while fetching events =(');
            }
        }
    }

    render() {
        const { t, i18n, tReady } = this.props;

        // TODO: this leads to server and client side HTML not matching sometimes. Hope to fix before PROD release
        if (!tReady) {
            return null;
        }

        return (
            <div>
                {/* Main picture */}
                <div id='main-page-img' className='content-body'>
                    <div className='card-body text-center '>
                        <h1 className='px-3 text-shadow main-title'>
                            &#34;
                            {t<Quote>('main-quote', { returnObjects: true }).text}
                            &#34;
                        </h1>
                        <footer className='blockquote-footer'>
                            {t<Quote>('main-quote', { returnObjects: true }).origin}
                        </footer>
                    </div>
                </div>
                <hr />

                <div className='row justify-content-center'>
                    <div className='col-xxs-12 col-lg-10 m-x-auto'>
                        <Events events={this.props.events} i18n={i18n} t={t} tReady={tReady} />
                        <PrayerRequest i18n={i18n} t={t} tReady={tReady} />

                        {/* CONTACT US */}
                        <section className='mt-5 pt-5'>
                            <div className='jumbotron jumbotron-fluid bg-light'>
                                <div className='container text-center'>
                                    <blockquote className='blockquote'>
                                        <h2 className='mb-0'>
                                            &#34;
                                            {t<Quote>('contact-us-quote', { returnObjects: true }).text}
                                            &#34;
                                        </h2>
                                        <footer className='blockquote-footer'>
                                            {t<Quote>('contact-us-quote', { returnObjects: true }).origin}
                                        </footer>
                                    </blockquote>
                                    <p className='lead'>
                                        <a
                                            id='contact-btn'
                                            className='btn btn-outline-warning hvr-icon-forward'
                                            href='/contact'
                                            role='button'
                                        >
                                            {t('contact-us')}
                                            <i className='fas fa-arrow-circle-right hvr-icon' />
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </section>

                        <VisitUs i18n={i18n} t={t} tReady={tReady} />

                    </div>
                </div>
            </div>
        );
    }

}

export default withTranslation('home')(Homepage);
