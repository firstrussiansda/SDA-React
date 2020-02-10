import React from 'react';
import { WithTranslation } from 'react-i18next';

import { fetchData, getPageCount } from '../lib/helpers';
import { withTranslation } from '../i18n';
import { Thought, ReqParams } from '../lib/types';
import Pagination from '../components/sermons/pagination';
import { ThoughtTile } from '../components/thoughts/thoughtTile';
import { HeaderLocale } from '../components/shared/header';

interface ThoughtsProps extends WithTranslation {
    thoughts: Thought[];
    totalPages: number;
    count: number;
}

interface ThoughtsState {
    thoughts: Thought[];
    page: number;
    totalPages: number;
    count: number;
    isLoading: boolean;
}

const PAGE_SIZE = 10;

class Thoughts extends React.Component<ThoughtsProps, ThoughtsState> {
    constructor(props: ThoughtsProps) {
        super(props);

        this.state = {
            thoughts: [],
            page: 1,
            totalPages: 1,
            count: 0,
            isLoading: true,
        };
    }

    static async getInitialProps({ req }: any) {
        const data = await fetchData('thoughts', req, {
            page_size: PAGE_SIZE,
        });

        if (data && 'results' in data) {
            return {
                thoughts: data.results,
                count: data.count,
                namespacesRequired: ['common'],
                totalPages: getPageCount(data.count, PAGE_SIZE),
            };
        }

        return { thoughts: [], count: 0, namespacesRequired: ['common'], totalPages: 0 };
    }

    componentDidMount() {
        const { thoughts, count, totalPages } = this.props;
        this.setState({ thoughts, count, totalPages, isLoading: false });
    }

    paginate = async () => {
        const params = { page_size: PAGE_SIZE, page: this.state.page } as ReqParams;
        const data = await fetchData('thoughts', null, params);

        if (data) {
            this.setState({
                totalPages: getPageCount(data.count),
                thoughts: data.results,
                count: data.count,
            });
        } else {
            // tslint:disable-next-line:no-console
            console.error('Invalid response');
        }
    }

    updatePage = (page: number) => {
        this.setState({ page }, this.paginate);
    }

    render() {
        return (
            <div className='container thoughts-page'>
                <h1 className='text-center capitalize my-3'>
                    {this.props.t<HeaderLocale>('header', { returnObjects: true }).thoughts}
                </h1>
                {
                    this.state.thoughts.map(thought => (
                        <ThoughtTile
                            key={thought.id}
                            thought={thought}
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
                            pageCount={this.state.totalPages}
                        />
                    )
                }
            </div>
        );
    }
}

export default withTranslation('common')(Thoughts);
