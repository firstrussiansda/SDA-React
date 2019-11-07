import React from 'react';
import { WithTranslation } from 'react-i18next';
import { withTranslation } from '../i18n';

import { fetchData } from '../lib/helpers';
import { Sermon, JustSermonSeries, Person, ReqParams } from '../lib/interfaces';

import SermonTile from '../components/sermons/sermonTile';
import Filter from '../components/sermons/filter';
import Pagination from '../components/sermons/pagination';

const PAGE_SIZE = 10;

interface SermonsProps extends WithTranslation {
    sermons: {
        results: Sermon[];
        count: number;
    };
    series: JustSermonSeries[];
    speakers: Person[];
}

interface SermonsState {
    sermons: Sermon[];
    page: number;
    count: number;
    year: string;
    month: string;
    selectedSpeaker: string;
    selectedSeries: string;
}

class Sermons extends React.Component<SermonsProps, SermonsState> {
    constructor(props: SermonsProps) {
        super(props);

        this.state = {
            sermons: [],
            page: 1,
            count: 0,
            year: '',
            month: '',
            selectedSpeaker: '',
            selectedSeries: '',
        };

    }
    static async getInitialProps({ req }: any) {
        // TODO: Promise.all?
        const sermons = await fetchData('sermons', req, { page_size: PAGE_SIZE });
        const speakers = await fetchData('people', req);
        const series = await fetchData('series', req);
        return {
            sermons,
            series: series.results,
            speakers: speakers.results,
            namespacesRequired: ['sermons'],
        };
    }

    componentDidMount() {
        const { results, count } = this.props.sermons;
        this.setState({ sermons: results, count });
    }

    handleFilter = (e: React.FormEvent<HTMLSelectElement>) => {
        const property = e.currentTarget.name;
        const value = e.currentTarget.value;

        switch(property) {
            case 'year':
                this.setState({ year: value }, this.applyFilter);
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
        const params = { page_size: PAGE_SIZE, page: this.state.page } as ReqParams;

        let fromMonth: number;
        let toMonth: number;
        let lastDayOfTheMonth: number;

        if (this.state.year) {
            fromMonth = this.state.month ? Number(this.state.month) : 1;
            toMonth = this.state.month ? Number(this.state.month) : 12;

            lastDayOfTheMonth = new Date(
                Number(this.state.year),
                toMonth + 1,
                0,
            ).getUTCDate();

            params.date__range = `${this.state.year}-${fromMonth}-1` +
                `,${this.state.year}-${toMonth}-${lastDayOfTheMonth}`;
        }

        if (this.state.selectedSpeaker) {
            params.speakers__id = this.state.selectedSpeaker;
        }

        if (this.state.selectedSeries) {
            params.series__id = this.state.selectedSeries;
        }

        const data = await fetchData('sermons', null, params);
        this.setState({ sermons: data.results, count: data.count });
    }

    getPageCount = () =>  Math.ceil(this.state.count / PAGE_SIZE);

    render() {
        return (
            <div className='container sermons-page'>
                <h1 className='text-center capitalize my-3'>{this.props.t('title')}</h1>
                <Filter
                    handleChange={this.handleFilter}
                    year={this.state.year}
                    month={this.state.month}
                    selectedSpeaker={this.state.selectedSpeaker}
                    selectedSeries={this.state.selectedSeries}
                    series={this.props.series}
                    speakers={this.props.speakers}
                    t={this.props.t}
                    i18n={this.props.i18n}
                    tReady={this.props.tReady}
                />
                {
                    this.state.count === 0 &&
                    <p className='text-center'>{this.props.t('noData')}</p>
                }
                {
                    this.state.sermons.map(sermon => (
                        <SermonTile
                            sermon={sermon}
                            key={sermon.id}
                            t={this.props.t}
                            i18n={this.props.i18n}
                            tReady={this.props.tReady}
                        />
                    ))
                }
                {
                    this.state.count > PAGE_SIZE &&
                    (
                        <Pagination
                            updatePage={this.updatePage}
                            curPage={this.state.page}
                            count={this.state.count}
                            pageCount={this.getPageCount()}
                        />
                    )
                }
            </div>
        );
    }
}

export default withTranslation('sermons')(Sermons);
