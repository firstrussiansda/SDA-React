import React from 'react';
import { WithTranslation } from 'react-i18next';

import { Event } from '../../lib/interfaces';
import EventTile from './event';

interface EventsProps extends WithTranslation {
    events: Event[];
}

const Events: React.FunctionComponent<EventsProps> = ({ events, t }) => (
    <section>
        <h2 id='events' className='text-center title'>{t('events')}</h2>
        <div id='event-cards' className='card-deck'>
            {
                events.map(e => (
                    <EventTile
                        {...e}
                        key={e.id}
                    />
                ))
            }
        </div>
        <div className='d-flex mt-4'>
            <a
                id='all-events'
                className='btn btn-outline-warning hvr-icon-forward mt-5 mx-auto'
                href='/calendar'
            >
                {t('allEvents')}&nbsp;
                <i className='fas fa-arrow-circle-right hvr-icon' />
            </a>
        </div>
    </section>
);

export default Events;
