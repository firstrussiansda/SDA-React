import React, { FunctionComponent } from 'react';

import { Person } from '../../lib/types';
import { Author } from './author';

interface AuthorProps {
    authors: Person[];
    date: string;
}

export const Authors: FunctionComponent<AuthorProps> = ({ authors, date }) => (
    <section className="authors">
        {authors.map((author, idx) => (
            <Author key={author.id} {...author} {...(idx === 0 && { date })} />
        ))}
    </section>
);
