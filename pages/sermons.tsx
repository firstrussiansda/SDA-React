import { WithTranslation } from 'react-i18next';
import { withTranslation } from '../i18n';
import React from 'react';

import { Sermon, JustSermonSeries, Person, ReqParams, YearMonths } from '../lib/types';
import { fetchData, getPageCount } from '../lib/helpers';

import Pagination from '../components/sermons/pagination';
import SermonTile from '../components/sermons/sermonTile';
import Filter from '../components/sermons/filter';
import { DEFAULT_PAGE_SIZE } from '../lib/config';

interface SermonsProps extends WithTranslation {
    sermons: Sermon[];
    sermonsCount: number;
    series: JustSermonSeries[];
    speakers: Person[];
    yearMonths: YearMonths;
}

interface SermonsState {
    sermons: Sermon[];
    page: number;
    totalPages: number;
    year: string;
    month: string;
    selectedSpeaker: string;
    selectedSeries: string;
}

const defaultSermonsParams: ReqParams =  { page_size: DEFAULT_PAGE_SIZE };

class Sermons extends React.Component<SermonsProps, SermonsState> {
    constructor(props: SermonsProps) {
        super(props);

        this.state = {
            sermons: [],
            page: 1,
            totalPages: 1,
            year: '',
            month: '',
            selectedSpeaker: '',
            selectedSeries: '',
        };

    }
    static async getInitialProps({ req }: any) {
        // TODO: Promise.all?
        const sermons = await fetchData('sermons', req, defaultSermonsParams);
        const speakers = await fetchData('people', req, { sermons__id__isnull: false });
        const yearMonths = await fetchData('sermons/year-months', req);
        const series = await fetchData('series', req);
        return {
            sermons: sermons?.results || [],
            sermonsCount: sermons?.count || 0,
            yearMonths: yearMonths || [],
            series: series?.results || [],
            speakers: speakers?.results || [],
            namespacesRequired: ['sermons'],
        };
    }

    componentDidMount() {
        this.setState({
            totalPages: getPageCount(this.props.sermonsCount),
            sermons: this.props.sermons,
        });
    }

    resetFilters = () => {
        if (
            this.state.year ||
            this.state.month ||
            this.state.selectedSeries ||
            this.state.selectedSpeaker
        ) {
            this.setState({
                year: '',
                month: '',
                selectedSpeaker: '',
                selectedSeries: '',
            }, this.applyFilter);
        }
    }

    handleFilter = (e: React.FormEvent<HTMLSelectElement>) => {
        const property = e.currentTarget.name;
        const value = e.currentTarget.value;

        switch(property) {
            case 'year':
                this.setState({ year: value, month: '' }, this.applyFilter);
                break;
            case 'month':
                this.setState({ month: value }, this.applyFilter);
                break;
            case 'speakers':
                this.setState({ selectedSpeaker: value }, this.applyFilter);
                break;
            case 'series':
                this.setState({ selectedSeries: value }, this.applyFilter);
                break;
        }
    }

    updatePage = (page: number) => {
        this.setState({ page }, this.applyFilter);
    }

    applyFilter = async () => {
        const params = { page: this.state.page } as ReqParams;
        let query = '';

        if (this.state.year) {
            params.date__year = this.state.year;
            query += `year=${this.state.year}`;

            if (this.state.month) {
                params.date__month = this.state.month;
                query += `month=${this.state.month}`;
            }
        }

        if (this.state.selectedSpeaker) {
            query += `speaker=${this.state.selectedSpeaker}`;
            params.speakers__id = this.state.selectedSpeaker;
        }

        if (this.state.selectedSeries) {
            query += `series=${this.state.selectedSeries}`;
            params.series__id = this.state.selectedSeries;
        }

        this.pushToHistory(query);

        const data = await fetchData('sermons', null, { ...params, ...defaultSermonsParams });

        if (data) {
            this.setState({ sermons: data.results, totalPages: getPageCount(data.count) });
        } else {
            // tslint:disable-next-line:no-console
            console.error('Invalid response');
        }
    }

    pushToHistory = (query: string) => {
        window.history.pushState(
            { ...this.state },
            'Sermons Filters',
            query ? `?${query}` : '',
        );
    }

    render() {
        return (
            <div className='container sermons-page'>
                <h1 className='text-center capitalize my-3'>{this.props.t('title')}</h1>
                <Filter
                    selectedSpeaker={this.state.selectedSpeaker}
                    selectedSeries={this.state.selectedSeries}
                    yearMonths={this.props.yearMonths}
                    resetFilters={this.resetFilters}
                    handleChange={this.handleFilter}
                    speakers={this.props.speakers}
                    series={this.props.series}
                    tReady={this.props.tReady}
                    month={this.state.month}
                    year={this.state.year}
                    i18n={this.props.i18n}
                    t={this.props.t}
                />
                {
                    this.state.sermons.length
                    ? this.state.sermons.map(sermon => (
                        <SermonTile
                            sermon={sermon}
                            key={sermon.id}
                            t={this.props.t}
                            i18n={this.props.i18n}
                            tReady={this.props.tReady}
                        />
                    ))
                    : <p className='text-center'>{this.props.t('noData')}</p>
                }
                {
                    this.state.totalPages > 1 &&
                    (
                        <Pagination
                            updatePage={this.updatePage}
                            curPage={this.state.page}
                            pageCount={this.state.totalPages}
                        />
                    )
                }
            </div>
        );
    }
}

export default withTranslation('sermons')(Sermons);
