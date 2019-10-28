import React from 'react';
import { WithTranslation } from 'react-i18next';
import { withTranslation } from '../i18n';

import Events from '../components/home/events';
import PrayerRequest from '../components/home/prayerRequest';
import VisitUs from '../components/home/visitUs';

import { fetchData } from '../lib/helpers';
import { Quote, Event } from '../lib/interfaces';

interface HomepageProps extends WithTranslation {
    events: Event[];
}

class Homepage extends React.Component<HomepageProps> {
    static async getInitialProps({ req }: any) {
        const data = await fetchData('events/featured', req, { page_size: 3 });

        if (data && 'results' in data) {
            return { events: data.results, namespacesRequired: ['home'] };
        }

        return { events: [], namespacesRequired: ['home'] };
    }

    render() {
        const { t, i18n, tReady } = this.props;

        // TODO: this leads to server and client side HTML not matching sometimes.
        // Hope to fix before PROD release
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
                            {t<Quote>('mainQuote', { returnObjects: true }).text}
                            &#34;
                        </h1>
                        <footer className='blockquote-footer'>
                            {t<Quote>('mainQuote', { returnObjects: true }).origin}
                        </footer>
                    </div>
                </div>
                <hr />

                <main className='container'>
                    <Events events={this.props.events} i18n={i18n} t={t} tReady={tReady} />
                    <PrayerRequest i18n={i18n} t={t} tReady={tReady} />

                    <VisitUs i18n={i18n} t={t} tReady={tReady} />

                </main>
            </div>
        );
    }

}

export default withTranslation('home')(Homepage);
