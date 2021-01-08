import React, { useState, useEffect } from 'react';
import { WithTranslation } from 'react-i18next';

import { Attachments } from '../shared/Attachments.component';
import AudioDropdown from './AudioEmbed.component';

import { formatDate } from '../../lib/helpers';
import { Sermon } from '../../lib/types';
import './SermonTile.style.scss';

interface SermonTileProps extends WithTranslation {
    sermon: Sermon;
}

const getThumbnail = (sermon: Sermon) => {
    if (sermon.youtube_assets.length) {
        return sermon.youtube_assets[0].thumbnail_url;
    } else if (sermon.soundcloud_assets.length) {
        return sermon.soundcloud_assets[0].thumbnail_url;
    }

    console.error('No media asset attached to a sermon!', sermon.title);

    return '';
};

const getSpeakers = (sermon: Sermon) =>
    sermon.speakers
        .reduce((acc, cur) => `${acc}${cur.name}, `, '')
        .slice(0, -2);

export const SermonTile: React.FunctionComponent<SermonTileProps> = ({
    sermon,
    t,
    i18n,
}) => {
    const [displayAudioPlayer, setDisplayAudioPlayer] = useState(false);
    const [thumbnail, setThumbnail] = useState('');

    useEffect(() => {
        setThumbnail(getThumbnail(sermon));
    }, [sermon]);

    const toggleAudioPlayerDisplay = () =>
        setDisplayAudioPlayer(!displayAudioPlayer);

    if (!thumbnail) {
        return null;
    }

    return (
        <div className="card mb-3 component-sermon-tile">
            <div className="row no-gutters">
                {/* THUMBNAIL (Date + Speakers) */}
                <div
                    className="col-md-4 col-lg-3 d-flex flex-column align-items-center justify-content-center image-overlay"
                    style={{
                        backgroundImage: `url("${thumbnail}")`,
                        backgroundColor: '#cccccc',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="image-overlay-text py-5 text-center">
                        <h5>
                            {formatDate(
                                sermon.date,
                                ['month', 'day', ',', 'year'],
                                i18n.language,
                            )}
                        </h5>
                        {sermon.speakers.length !== 0 && (
                            <h6 className="speaker">{getSpeakers(sermon)}</h6>
                        )}
                    </div>
                </div>

                {/* BODY (Title + Description + Attachments) */}
                <div className="col-md-5 col-lg-6 d-flex align-items-center">
                    <div className="card-body">
                        <h5 className="card-title">{sermon.title}</h5>
                        <h6 className="card-text">
                            {sermon.series ? (
                                <span className="series badge badge-secondary">
                                    {sermon.series.title}
                                </span>
                            ) : null}
                            {sermon.description}
                        </h6>
                        <Attachments attachments={sermon.attachments} />
                    </div>
                </div>

                {/* MEDIA LINKS */}
                <div className="col-md-3 media-buttons pr-3 py-4">
                    <div className="row align-items-center">
                        {/* YOUTUBE */}
                        {sermon.youtube_assets.length !== 0 && (
                            <div className="col col-xs-6 col-md-12">
                                <a
                                    className="btn btn-md youtube capitalize"
                                    href={sermon.youtube_assets[0].object_url}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <img
                                        src="/static/svg/youtube.svg"
                                        width="40px"
                                        height="30px"
                                        alt="youtube logo"
                                    />
                                    {t('watch')}
                                </a>
                            </div>
                        )}

                        {/* SOUNDCLOUD */}
                        {sermon.soundcloud_assets.length !== 0 && (
                            <div className="col col-xs-6 col-md-12">
                                <button
                                    type="button"
                                    onClick={toggleAudioPlayerDisplay}
                                    className="btn btn-md sound-cloud capitalize"
                                >
                                    <img
                                        src="/static/svg/soundcloud.svg"
                                        width="40px"
                                        height="30px"
                                        alt="soundcloud logo"
                                    />
                                    {t('listen')}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* SOUNDCLOUD PLAYER */}
                {displayAudioPlayer && sermon.soundcloud_assets[0] && (
                    <AudioDropdown
                        trackId={sermon.soundcloud_assets[0].track_id}
                    />
                )}
            </div>
        </div>
    );
};
