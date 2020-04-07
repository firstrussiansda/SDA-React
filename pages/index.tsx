import Container from 'react-bootstrap/Container';
import { WithTranslation } from 'react-i18next';
import React from 'react';

import { GatherOnline } from '../components/home/GatherOnline.component';
import PrayerRequest from '../components/home/prayerRequest';
import { Giving } from '../components/home/Giving.component';
import VisitUs from '../components/home/visitUs';
import Events from '../components/home/events';

import { Quote, Event } from '../lib/types';
import { fetchData } from '../lib/helpers';
import { withTranslation } from '../i18n';

interface HomepageProps extends WithTranslation {
    events: Event[];
}

class Homepage extends React.Component<HomepageProps> {
    static async getInitialProps({ req }: any) {
        const data = await fetchData('events', req, {
            page_size: 3,
            date__gte: new Date().toISOString().split('T')[0],
            order_by: ['-is_featured', 'date']
        });

        if (data && 'results' in data) {
            return { events: data.results, namespacesRequired: ['home'] };
        }

        return { events: [], namespacesRequired: ['home'] };
    }

    render() {
        const { t, i18n, tReady } = this.props;

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



                <Container>
                    <GatherOnline i18n={i18n} t={t} tReady={tReady} />
                    <Events events={this.props.events} i18n={i18n} t={t} tReady={tReady} />
                </Container>

                <Giving i18n={i18n} t={t} tReady={tReady} />

                <Container>
                    <PrayerRequest i18n={i18n} t={t} tReady={tReady} />
                    <VisitUs i18n={i18n} t={t} tReady={tReady} />
                </Container>
            </div>
        );
    }
}

export default withTranslation('home')(Homepage);
