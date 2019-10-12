import React from 'react';

import { initialPropsFetch } from '../lib/helpers';
import { Event } from '../lib/interfaces';
import EventTile from '../components/calendar/eventTile';

class Calendar extends React.Component<{ events: Event[] }> {
    static async getInitialProps({ req }: any) {
        const data = await initialPropsFetch('events', req) || {};

        if (data && 'results' in data) {
            return { events: data.results, namespacesRequired: ['common'] };
        }

        return { events: [], namespacesRequired: ['common'] };
    }

    render() {
        return (
            <div className='row justify-content-center'>
                <main className=''>
                    {
                        this.props.events.map(e => (
                            <EventTile
                                {...e}
                                key={e.title}
                            />
                        ))
                    }
                </main>

            </div>
        );
    }
}

export default Calendar;
