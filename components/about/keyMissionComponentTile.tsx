import React from 'react';
import { getImgUrl } from '../../lib/helpers';

interface KeyMissionComponentTileProps {
    img: string;
    alt: string;
    title: string;
    text: string;
}

const keyMissionComponentTile: React.FunctionComponent<KeyMissionComponentTileProps> = ({
    img, alt, title, text,
}) => (
        <div className='card mb-5'>
            <picture>
                <source srcSet={getImgUrl(img, 385)} media='(max-width: 420px)' />
                <source srcSet={getImgUrl(img, 510)} media='(max-width: 575px)' />
                <source srcSet={getImgUrl(img, 150)} media='(max-width: 768px)' />
                <source srcSet={getImgUrl(img, 220)} media='(max-width: 990px)' />
                <source srcSet={getImgUrl(img, 290)} media='(max-width: 1200px)' />
                <source srcSet={getImgUrl(img, 350)} media='(min-width: 1201px)' />
                <img src={getImgUrl(img, 400)} alt={alt} className='card-img-top' />
            </picture>
            <div className='card-body'>
                <h5 className='card-title capitalize'>{title}</h5>
                <p className='card-text'>{text}</p>
            </div>
        </div>
    );

export default keyMissionComponentTile;
