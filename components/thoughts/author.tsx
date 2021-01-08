import React, { FunctionComponent } from 'react';
import { Person } from '../../lib/types';

interface AuthorProps extends Person {
    date?: string;
}

export const Author: FunctionComponent<AuthorProps> = ({
    name,
    profile_image_url,
    date,
}) => (
    <div className="d-flex">
        <img
            src={profile_image_url}
            className="rounded-circle h20"
            alt={`${name} image`}
        />
        <div className="d-flex flex-column align-items-center justify-content-center">
            <p>{name}</p>
            {date && <p>{date}</p>}
        </div>
    </div>
);
