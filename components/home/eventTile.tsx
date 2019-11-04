import React from 'react';
import { WithTranslation } from 'react-i18next';

import { Event } from '../../lib/interfaces';
import { formatDate } from '../../lib/helpers';

interface EventTileProps extends Event, WithTranslation {}

const EventTile: React.FunctionComponent<EventTileProps> = props => {
    const image_url = props.image_url.split('crop&')[0];

    return (
        <div className='card'>
            <img
                className='card-img-top'
                src={`${image_url}w=400&q=80`}
                alt={props.image_description}
                srcSet={`
                    ${image_url}w=400&q=80 767w,
                    ${image_url}w=250&q=80 1023w,
                    ${image_url}w=330&q=80 1365w,
                    ${image_url}w=450&q=80 5000w
                `}
            />
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text'>{props.description}</p>
            </div>
            <div className='card-footer'>
                <h5 className='card-date'>
                    {formatDate(props.date, ['month', 'day'], props.i18n.language)}
                </h5>
                <h6 className='card-date'>{props.location_name}</h6>
            </div>
        </div>
    );
};

export default EventTile;
