import React from 'react';

export interface Activity {
    subTitle: string;
    time: string;
    description: string;
}

const GroupActivity: React.FunctionComponent<Activity> = ({ subTitle, time, description }) => (
    <section>
        <p className='card-text mb-2'>
            <strong>{subTitle}</strong>
            <span className='time float-right'>{time}</span>
        </p>
        <p className='card-text'>{description}</p>
    </section>
);

export default GroupActivity;
