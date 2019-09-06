import React from 'react';
import PropTypes from 'prop-types';

const KeyMissionComponent = ({ img, alt, title, description }) => (
    <div className='card border-light mb-5'>
        <img className='card-img-top'
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
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
        </div>
    </div>
);

KeyMissionComponent.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default KeyMissionComponent;