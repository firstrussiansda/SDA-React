import React from 'react';

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
                <source srcSet={`${img}w=385&q=80`} media='(max-width: 420px)' />
                <source srcSet={`${img}w=510&q=80`} media='(max-width: 575px)' />
                <source srcSet={`${img}w=150&q=80`} media='(max-width: 768px)' />
                <source srcSet={`${img}w=220&q=80`} media='(max-width: 990px)' />
                <source srcSet={`${img}w=290&q=80`} media='(max-width: 1200px)' />
                <source srcSet={`${img}w=350&q=80`} media='(min-width: 1201px)' />
                <img src={`${img}w=400&q=80`} alt={alt} className='card-img-top' />
            </picture>
            <div className='card-body'>
                <h5 className='card-title capitalize'>{title}</h5>
                <p className='card-text'>{text}</p>
            </div>
        </div>
    );

export default keyMissionComponentTile;
