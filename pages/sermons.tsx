import React from 'react';
import { WithTranslation } from 'react-i18next';
import { withTranslation } from '../i18n';

import { fetchInitialProps } from '../lib/helpers';
import { Sermon } from '../lib/interfaces';

import SermonTile from '../components/sermons/sermonTile';

interface SermonsProps extends WithTranslation {
    data: {
        results: Sermon[];
        previous: null | string;
        next: null | string;
    };
}

interface SermonsState {
    sermons: Sermon[];
    page: number;
    next: null | string;
    previous: null | string;
}

class Sermons extends React.Component<SermonsProps, SermonsState> {
    constructor(props: SermonsProps) {
        super(props);

        this.state = {
            sermons: [],
            page: 1,
            next: null,
            previous: null,
        };

    }
    static async getInitialProps({ req }: any) {
        const data = await fetchInitialProps('sermons', req);
        return { data, namespacesRequired: ['sermons'] };
    }

    componentDidMount() {
        const { results, previous, next } = this.props.data;
        this.setState({ sermons: results, previous, next });
    }

    render() {
        return (
            <div className='container sermons-page'>
                <h1 className='text-center capitalize'>{this.props.t('title')}</h1>
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
            </div>
        );
    }
}

export default withTranslation('sermons')(Sermons);
