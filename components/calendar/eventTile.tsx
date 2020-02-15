import React from 'react';
import { WithTranslation } from 'react-i18next';

import { Event } from '../../lib/types';
import { formatDate, getImgUrl } from '../../lib/helpers';
import { Attachments } from '../shared/attachments';

interface EventTileProps extends Event, WithTranslation { }

const getImage = (url: string, description: string) => (
    <picture>
        <source srcSet={getImgUrl(url, 400, 300)} media='(max-width: 420px)' />
        <source srcSet={getImgUrl(url, 510, 300)} media='(max-width: 767px)' />
        <source srcSet={getImgUrl(url, 173, 173)} media='(max-width: 990px)' />
        <source srcSet={getImgUrl(url, 230, 173)} media='(max-width: 1200px)' />
        <source srcSet={getImgUrl(url, 277, 173)} media='(min-width: 1201px)' />
        <img src={getImgUrl(url, 400, 350)} alt={description} className='card-img-top' />
    </picture>
);

const EventTile: React.FunctionComponent<EventTileProps> = props => {
    const formatedDate = formatDate(props.date, ['month', 'day', ',', 'year'], props.i18n.language);
    return (
        <React.Fragment>
            <div className='card mb-3 calendar-tile d-none d-sm-flex'>
                <div className='row no-gutters'>
                    <div className='col-md-2 d-flex flex-column align-items-center justify-content-center text-center pl-4'>
                        <h5>{formatedDate}</h5>
                        <h6 className='card-text'>{props.location_name}</h6>
                    </div>
                    <div className='col-md-7 d-flex align-items-center'>
                        <div className='card-body'>
                            <h5 className='card-title'>{props.title}</h5>
                            <p className='card-text'>{props.description}</p>
                            <Attachments attachments={props.attachments} />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        {getImage(props.image_url, props.image_description)}
                    </div>
                </div>
            </div>
            <div className='card d-block d-sm-none'>
                {getImage(props.image_url, props.image_description)}
                <div className='card-body'>
                    <h5 className='card-title'>{props.title}</h5>
                    <p className='card-text'>{props.description}</p>
                    <Attachments attachments={props.attachments} />
                </div>
                <div className='card-footer'>
                    <h5 className='card-date'>
                        {formatedDate}
                    </h5>
                    <h6 className='card-date'>{props.location_name}</h6>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EventTile;
