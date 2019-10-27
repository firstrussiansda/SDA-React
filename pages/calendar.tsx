import React from 'react';
import { WithTranslation } from 'react-i18next';

import { fetchData } from '../lib/helpers';
import { withTranslation } from '../i18n';
import { HeaderLocale } from '../components/shared/header';
import { Event } from '../lib/interfaces';
import EventTile from '../components/calendar/eventTile';

const PAGE_SIZE = 5;

interface SermonsProps extends WithTranslation {
    events: Event[];
    count: number;
}

interface SermonsState {
    events: Event[];
    page: number;
    count: number;
    isLoading: boolean;
}

class Calendar extends React.Component<SermonsProps, SermonsState> {
    constructor(props: SermonsProps) {
        super(props);

        this.state = {
            events: [],
            page: 1,
            count: 0,
            isLoading: true,
        };
    }

    static async getInitialProps({ req }: any) {
        const data = await fetchData('events', req, { page_size: PAGE_SIZE });

        if (data && 'results' in data) {
            return {
                events: data.results,
                count: data.count,
                namespacesRequired: ['common'],
            };
        }

        return { events: [], count: 0, namespacesRequired: ['common'] };
    }

    componentDidMount() {
        const { events, count } = this.props;
        this.setState({ events, count, isLoading: false });
    }

    loadMore = () => {
        if (this.isMoreAvailable() && !this.state.isLoading) {
            this.setState({ isLoading: true }, async () => {
                const data = await fetchData(
                    'events',
                    null,
                    { page_size: PAGE_SIZE, page: this.state.page + 1 },
                );

                const events = this.state.events.concat(data.results);
                this.setState({ events, page: this.state.page + 1, isLoading: false });
            });
        }
    }

    isMoreAvailable = () => Math.ceil(this.state.count / PAGE_SIZE) > this.state.page;

    render() {
        return (
            <div className='row justify-content-center'>
                <main className=''>
                    <h1 className='text-center capitalize my-3'>
                        {this.props.t<HeaderLocale>('header', { returnObjects: true }).calendar}
                    </h1>
                    {
                        this.state.events.map(e => (
                            <EventTile
                                {...e}
                                key={e.title}
                            />
                        ))
                    }
                    <div className='d-flex justify-content-center'>
                    {
                        this.state.isLoading ?
                        (
                            <React.Fragment>
                                <div className='spinner-grow text-primary' role='status'>
                                    <span className='sr-only'>Loading...</span>
                                </div>
                                <div className='spinner-grow text-primary' role='status'>
                                    <span className='sr-only'>Loading...</span>
                                </div>
                                <div className='spinner-grow text-primary' role='status'>
                                    <span className='sr-only'>Loading...</span>
                                </div>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {
                                    this.isMoreAvailable() &&
                                    (
                                        <button
                                            type='button'
                                            className='btn btn-outline-primary'
                                            onClick={this.loadMore}
                                        >
                                            Load more
                                        </button>

                                    )
                                }
                            </React.Fragment>
                        )
                    }
                    </div>
                </main>

            </div>
        );
    }
}

export default withTranslation('common')(Calendar);
