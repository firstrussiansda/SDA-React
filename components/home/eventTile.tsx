import React from 'react';
import { WithTranslation } from 'react-i18next';

import { Event } from '../../lib/types';
import { formatDate } from '../../lib/helpers';
import { Attachments } from '../shared/attachments';

interface EventTileProps extends Event, WithTranslation {}

const EventTile: React.FunctionComponent<EventTileProps> = props => {
    const image_url = props.image_url.split('crop&')[0] + 'crop&';

    return (
        <div className='col'>
            <div className='card event-card'>
                <picture>
                    <source srcSet={`${image_url}w=400&q=80`} media='(max-width: 420px)' />
                    <source srcSet={`${image_url}w=543&q=80`} media='(max-width: 575px)' />
                    <source srcSet={`${image_url}w=150&q=80`} media='(max-width: 768px)' />
                    <source srcSet={`${image_url}w=220&q=80`} media='(max-width: 990px)' />
                    <source srcSet={`${image_url}w=290&q=80`} media='(max-width: 1200px)' />
                    <source srcSet={`${image_url}w=350&q=80`} media='(min-width: 1201px)' />
                    <img
                        src={`${image_url}w=400&q=80`}
                        alt={props.image_description}
                        className='card-img-top'
                    />
                </picture>
                <div className='card-body'>
                    <h5 className='card-title'>{props.title}</h5>
                    <p className='card-text'>{props.description}</p>
                    <Attachments attachments={props.attachments} />
                </div>
                <div className='card-footer'>
                    <h5 className='card-date'>
                        {formatDate(props.date, ['month', 'day'], props.i18n.language)}
                    </h5>
                    <h6 className='card-date'>{props.location_name}</h6>
                </div>
            </div>
        </div>
    );
};

export default EventTile;
