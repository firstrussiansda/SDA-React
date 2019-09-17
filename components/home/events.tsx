import React from 'react';
import { WithTranslation } from 'react-i18next';

import Event from './event';

export interface EventData {
    title: string;
    description: string;
    date: string;
    location: string;
    img_url: string;
    img_alt: string;
    isFeatured: boolean;
    language: string;
}

interface EventsProps extends WithTranslation {
    events: EventData[];
}

const Events: React.FunctionComponent<EventsProps> = ({ events, t }) => (
    <section>
        <h2 id='events' className='text-center title'>{t('events')}</h2>
        <div id='event-cards' className='card-deck'>
            {
                events.map(e => (
                    <Event
                        img={e.img_url}
                        alt={e.img_alt}
                        title={e.title}
                        description={e.description}
                        date={(new Date(e.date)).toDateString()}
                        location={e.location}
                        language={e.language}
                        key={e.title}
                    />
                ))
            }
        </div>
    </section>
);

export default Events;
