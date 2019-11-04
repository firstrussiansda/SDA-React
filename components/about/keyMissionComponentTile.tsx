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
        <div className='card border-light mb-5'>
            <img
                className='card-img-top'
                src={`${img}w=428&q=80`}
                alt={alt}
                srcSet={`
                    ${img}w=428&q=80 767w,
                    ${img}w=260&q=80 1023w,
                    ${img}w=350&q=80 1365w,
                    ${img}w=428&q=80 5000w
                `}
            />
            <div className='card-body'>
                <h5 className='card-title capitalize'>{title}</h5>
                <p className='card-text'>{text}</p>
            </div>
        </div>
    );

export default keyMissionComponentTile;
