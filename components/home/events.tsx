import { WithTranslation } from 'react-i18next';
import Link from 'next/link';
import React from 'react';

import { Event } from '../../lib/types';
import EventTile from './eventTile';

interface EventsProps extends WithTranslation {
    events: Event[];
}

const Events: React.FunctionComponent<EventsProps> = props => (
    <section>
        <h2 id='events' className='text-center title'>{props.t('events')}</h2>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center'>
            {
                props.events.map(e => (
                    <EventTile
                        {...e}
                        key={e.id}
                        t={props.t}
                        i18n={props.i18n}
                        tReady={props.tReady}
                    />
                ))
            }
        </div>
        <div className='d-flex mt-4'>
            <Link href='/calendar'>
                <a
                    id='all-events'
                    className='btn btn-outline-warning custom-warning hvr-icon-forward mt-5 mx-auto'
                >
                    {props.t('allEvents')}&nbsp;
                    <i className='fas fa-arrow-circle-right hvr-icon' />
                </a>
            </Link>
        </div>
    </section>
);

export default Events;
