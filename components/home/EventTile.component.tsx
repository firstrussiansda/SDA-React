import React from 'react';
import { WithTranslation } from 'react-i18next';

import { Event } from '../../lib/types';
import { formatDate, getImgUrl } from '../../lib/helpers';
import { Attachments } from '../shared/Attachments.component';

interface EventTileProps extends Event, WithTranslation {}

const EventTile: React.FunctionComponent<EventTileProps> = props => {
    return (
        <div className="col">
            <div className="card event-card">
                <picture>
                    <source
                        srcSet={getImgUrl(props.image_url, 400, 350)}
                        media="(max-width: 420px)"
                    />
                    <source
                        srcSet={getImgUrl(props.image_url, 543, 350)}
                        media="(max-width: 575px)"
                    />
                    <source
                        srcSet={getImgUrl(props.image_url, 150, 250)}
                        media="(max-width: 768px)"
                    />
                    <source
                        srcSet={getImgUrl(props.image_url, 220, 250)}
                        media="(max-width: 990px)"
                    />
                    <source
                        srcSet={getImgUrl(props.image_url, 290, 250)}
                        media="(max-width: 1200px)"
                    />
                    <source
                        srcSet={getImgUrl(props.image_url, 350, 250)}
                        media="(min-width: 1201px)"
                    />
                    <img
                        src={getImgUrl(props.image_url, 400, 350)}
                        alt={props.image_description}
                        className="card-img-top"
                    />
                </picture>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <Attachments attachments={props.attachments} />
                </div>
                <div className="card-footer">
                    <h5 className="card-date">
                        {formatDate(
                            props.date,
                            ['month', 'day'],
                            props.i18n.language,
                        )}
                    </h5>
                    <h6 className="card-date">{props.location_name}</h6>
                </div>
            </div>
        </div>
    );
};

export default EventTile;
