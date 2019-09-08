import React from 'react';

interface PhotoCarouselItemProps {
    img: string;
    alt: string;
    description: string;
    isActive: boolean;
}

const PhotoCarouselItem: React.FunctionComponent<PhotoCarouselItemProps> = (
        { img, alt, description, isActive }
    ) => {
    const wrapperClassName = `carousel-item row ${isActive ? 'active' : ''}`;

    return (
        <div className={wrapperClassName}>
            {/* TODO: used to have - style='padding: 0' */}
            <img className='d-block col-sm-6 col-xxs-12'
                src={`${img}w=410&q=80`}
                alt={alt}
                srcSet={`
                    ${img}w=410&q=80 767w,
                    ${img}w=385&q=80 1023w,
                    ${img}w=425&q=80 1365w,
                    ${img}w=600&q=80 5000w
                `}
            />
            <span className='img-description col-sm-6 carousel-caption d-none d-md-block'>
                {description}
            </span>
        </div>
    );
};

export default PhotoCarouselItem;