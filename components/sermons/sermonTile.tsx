import React from 'react';
import { WithTranslation } from 'react-i18next';

import { formatDate } from '../../lib/helpers';

import { Sermon } from '../../lib/interfaces';
import AudioDropdown from './audioEmbed';

interface SermonTileProps extends WithTranslation {
    sermon: Sermon;
}

interface SermonTileState {
    displayAudioPlayer: boolean;
    thumbnail: string;
}

class SermonTile extends React.Component<SermonTileProps, SermonTileState> {
    constructor(props: SermonTileProps) {
        super(props);
        this.state = {
            thumbnail: '',
            displayAudioPlayer: false,
        };
    }

    componentDidMount() {
        try {
            this.setState({ thumbnail: this.getThumbnail() });
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.error(e);
            return null;
        }
    }

    getThumbnail = () => {
        const { sermon } = this.props;
        if (sermon.youtube_assets.length) {
            return sermon.youtube_assets[0].thumbnail_url;
        } else if (sermon.soundcloud_assets.length) {
            return sermon.soundcloud_assets[0].thumbnail_url;
        }
        throw new Error('No media asset attached to a sermon!');
    }

    getSpeakers = () => (
        this.props.sermon.speakers.reduce((acc, cur) => `${acc}${cur.name}, `, '').slice(0, -2)
    )

    toggleAudioPlayer = () => {
        this.setState({ displayAudioPlayer: !this.state.displayAudioPlayer });
    }

    render() {
        const { sermon } = this.props;
        return (
            <div className='card mb-3'>
                <div className='row no-gutters'>
                    <div className='col-md-4 col-lg-2'>
                        <img
                            className='card-img'
                            src={this.state.thumbnail}
                            alt='Sermon thumbnail'
                        />
                    </div>
                    <div className='col-md-5 col-lg-7'>
                        <div className='card-body'>
                            <h5 className='card-title'>{sermon.title}</h5>
                        {
                                sermon.speakers.length !== 0 &&
                                (
                                    <h6 className='card-text'>
                                        {this.getSpeakers()}
                                    </h6>
                                )
                            }
                            <h6 className='card-date'>{formatDate(sermon.date)}</h6>
                        </div>
                    </div>
                    <div className='col-md-3 media-buttons'>
                        <div className='row align-items-center'>
                            {
                                sermon.youtube_assets.length !== 0 &&
                                (
                                    <div className='col col-xs-6 col-md-12 mb-3 mb-md-0'>
                                        <a
                                            className='btn btn-md youtube capitalize'
                                            href={sermon.youtube_assets[0].object_url}
                                            target='_blank'
                                        >
                                            <img src='/static/svg/youtube.svg' width='40px' height='30px' />
                                            {this.props.t('watch')}
                                        </a>
                                    </div>
                                )
                            }
                            {
                                sermon.soundcloud_assets.length !== 0 &&
                                (
                                    <div className='col col-xs-6 col-md-12 mb-3 mb-md-0'>
                                        <button
                                            type='button'
                                            onClick={this.toggleAudioPlayer}
                                            className='btn btn-md sound-cloud capitalize'
                                        >
                                            <img src='/static/svg/soundcloud.svg' width='40px' height='30px' />
                                            {this.props.t('listen')}
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    {
                        this.state.displayAudioPlayer && sermon.soundcloud_assets[0] &&
                        <AudioDropdown trackId={sermon.soundcloud_assets[0].track_id} />
                    }
                </div>
            </div>
        );
    }
}

export default SermonTile;
