import React from 'react';

export interface Activity {
    subTitle: string;
    time: string;
    description: string;
};

const GroupActivity: React.FunctionComponent<Activity> = ({ subTitle, time, description }) => (
    <section>
        <p className="card-text mb-2">
            <strong>{subTitle}</strong>
            <span className="time float-right">{time}</span>
        </p>
        <p className="card-text">{description}</p>
        <p className="card-text">
            Held weekly on the first floor of First Russian SDA church and
            designed to teach children about Jesus.
        </p>
        <p className="card-text">
            Kids study in two groups: Kindergarten group (age of 2 to 5) and
            Junior group (age of 6 to 10)</p>
    </section>
);

export default GroupActivity;