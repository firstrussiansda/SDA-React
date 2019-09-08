import React from 'react';

interface EventProps {
    img: string;
    alt: string;
    title: string;
    description: string;
    date: string;
}

const Event: React.FunctionComponent<EventProps> = ({ img, alt, title, date, description }) => (
    <div className="card flip-card">
        <div className="flip-card-inner">
            <div className="card-body flip-card-front">
                <img className="card card-img-top"
                    src={`${img}w=320&q=80`}
                    alt={alt}
                    srcSet={`
                        ${img}w=320&q=80 1023w,
                        ${img}w=260&q=80 1365w,
                        ${img}w=320&q=80 5000w
                    `}
                />
            </div>
            <div className="card card-body flip-card-back">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-date">{date}</h6>
                <p className="card-text">{description}</p>
            </div>
        </div>
    </div>
);

export default Event;
