import React from 'react';
import { WithTranslation } from 'react-i18next';

import VideoTab from '../components/sermons/videoTab';
import { NextPageContext } from 'next';
import Link from 'next/link';
import AudioTab from '../components/sermons/audioTab';

interface SermonsProps extends WithTranslation, NextPageContext {
    tab: string;
}

class Sermons extends React.Component<SermonsProps> {
    static async getInitialProps({ query }: NextPageContext) {
        return {
            namespacesRequired: ['common'],
            tab: query.tab,
        };
    }

    render() {
        const isVideo = this.props.tab && this.props.tab === 'video';
        return (
            <div className='container'>
                {/* Tabs selector */}
                <ul className='nav nav-tabs nav-fill'>
                    <li className='nav-item'>
                        <Link href={{ pathname: '/sermons', query: { tab: 'audio' } }}>
                            <a className='nav-link btn btn-outline-warning active'>Audio</a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href={{ pathname: '/sermons', query: { tab: 'video' } }}>
                            <a className='nav-link btn btn-outline-warning'>Video</a>
                        </Link>
                    </li>
                </ul>

                <main>
                    {
                        this.props.tab && this.props.tab === 'video'
                        ? <VideoTab />
                        : <AudioTab />
                    }
                </main>
            </div>
        );
    }
}

// export default withTranslation('sermons')(Sermons);
export default Sermons;
