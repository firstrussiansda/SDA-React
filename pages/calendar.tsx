import { WithTranslation } from 'react-i18next';
import { NextPageContext } from 'next';
import React from 'react';

import { LoadMoreButton } from '../components/shared/LoadMoreButton.component';
import { ArchiveToggle } from '../components/calendar/archiveToggle';
import { Spinner } from '../components/shared/Spinner.component';
import { FlexCenter } from '../components/shared/flex-center';
import EventTile from '../components/calendar/eventTile';

import { fetchData } from '../lib/helpers';
import { withTranslation } from '../i18n';
import { Event } from '../lib/types';

const PAGE_SIZE = 5;

interface CalendarProps extends WithTranslation {
    events: Event[];
    count: number;
    next: string | null;
}

interface CalendarState {
    isLoadingMore: boolean;
    isLoading: boolean;
    isArchive: boolean;
    events: Event[];
    count: number;
    next: string | null;
}

class Calendar extends React.Component<CalendarProps, CalendarState> {
    constructor(props: CalendarProps) {
        super(props);

        this.state = {
            isLoadingMore: false,
            isArchive: false,
            isLoading: true,
            events: [],
            count: 0,
            next: null,
        };
    }

    static async getInitialProps({ req }: NextPageContext) {
        const data = await fetchData('events', req, {
            page_size: PAGE_SIZE,
            date__gte: new Date().toISOString().split('T')[0],
        });

        if (data && 'results' in data) {
            return {
                events: data?.results || [],
                count: data?.count || 0,
                next: data?.next || null,
                namespacesRequired: ['common'],
            };
        }

        return { events: [], count: 0, namespacesRequired: ['common'], next: null };
    }

    componentDidMount() {
        const { events, count, next } = this.props;
        if (events.length) {
            this.setState({ events, count, next, isLoading: false });
        } else {
            this.toggleIsArchive();
        }
    }

    loadMore = () => {
        if (this.state.next && !this.state.isLoadingMore) {
            this.setState({ isLoadingMore: true }, async () => {
                if (this.state.next) {
                    const res = await fetch(this.state.next);
                    const data = await res.json();

                    if (data && data.results) {
                        const events = this.state.events.concat(data.results);
                        this.setState({ events, next: data.next, isLoadingMore: false });
                    } else {
                        // tslint:disable-next-line:no-console
                        console.error('Invalid response');
                        this.setState({ isLoadingMore: false });
                    }
                }
            });
        }
    }

    loadEvents = async () => {
        const curDate = new Date().toISOString().split('T')[0];

        const data = await fetchData('events', null, {
            page_size: PAGE_SIZE,
            ...(
                this.state.isArchive
                ? { date__lt: curDate, order_by: '-date'  }
                : { date__gte: curDate }
            )
        });

        if (data && 'results' in data) {
            return this.setState({
                events: data?.results || [],
                count: data?.count || 0,
                next: data?.next || null,
                isLoading: false,
            });
        }

        return this.setState({ events: [], count: 0, next: null, isLoading: false });
    }

    toggleIsArchive = () => {
        this.setState({
            isArchive: !this.state.isArchive,
            isLoading: true,
        }, this.loadEvents);
    }

    render() {
        return (
            <div className='row justify-content-center'>
                <main className='container'>
                    <h1 className='text-center capitalize my-3'>
                        {this.props.t('title')}
                    </h1>
                    <ArchiveToggle
                        isArchive={this.state.isArchive}
                        handleChange={this.toggleIsArchive}
                        t={this.props.t}
                        tReady={this.props.tReady}
                        i18n={this.props.i18n}
                    />
                    {
                        this.state.isLoading
                        ? <FlexCenter><Spinner /></FlexCenter>
                        : (
                            <React.Fragment>
                                <div className='top-space'>
                                    {
                                        this.state.events.length
                                        ? this.state.events.map(e => (
                                            <EventTile
                                                {...e}
                                                key={e.title}
                                                t={this.props.t}
                                                i18n={this.props.i18n}
                                                tReady={this.props.tReady}
                                            />
                                        ))
                                        : (
                                            <FlexCenter>
                                                <p>{this.props.t(this.state.isArchive ? 'noPastEvent' : 'noUpcomingEvent')}</p>
                                            </FlexCenter>
                                        )
                                    }
                                </div>
                                <LoadMoreButton
                                    loadMore={this.loadMore}
                                    isLoading={this.state.isLoadingMore}
                                    isMoreAvailable={!!this.state.next}
                                />
                            </React.Fragment>
                        )
                    }
                </main>
            </div>
        );
    }
}

export default withTranslation('calendar')(Calendar);
