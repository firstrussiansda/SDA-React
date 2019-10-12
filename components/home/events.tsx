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
                        { ...e }
                        key={e.id}
                    />
                ))
            }
        </div>
    </section>
);

export default Events;
