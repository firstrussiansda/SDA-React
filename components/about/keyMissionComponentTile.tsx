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
            <img
                className='card-img-top'
                src={`${img}w=400&q=80`}
                alt={alt}
                srcSet={`
                    ${img}w=400&q=80 420w,
                    ${img}w=510&q=80 573w,
                    ${img}w=250&q=80 768w,
                    ${img}w=210&q=80 990w,
                    ${img}w=290&q=80 1200w,
                    ${img}w=350&q=80 5000w
                `}
            />
            <div className='card-body'>
                <h5 className='card-title capitalize'>{title}</h5>
                <p className='card-text'>{text}</p>
            </div>
        </div>
    );

export default keyMissionComponentTile;
