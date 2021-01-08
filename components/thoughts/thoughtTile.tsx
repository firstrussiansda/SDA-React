import { WithTranslation } from 'react-i18next';
import Link from 'next/link';
import React from 'react';

import { formatDate, getImgUrl } from '../../lib/helpers';
import { Attachments } from '../shared/Attachments.component';
import { Thought } from '../../lib/types';
import { Authors } from './authors';

const getImage = (url: string, description: string) => (
    <picture>
        <source srcSet={getImgUrl(url, 400)} media="(max-width: 420px)" />
        <source srcSet={getImgUrl(url, 510)} media="(max-width: 767px)" />
        <source srcSet={getImgUrl(url, 173)} media="(max-width: 990px)" />
        <source srcSet={getImgUrl(url, 230)} media="(max-width: 1200px)" />
        <source srcSet={getImgUrl(url, 277)} media="(min-width: 1201px)" />
        <img
            src={getImgUrl(url, 400)}
            alt={description}
            className="card-img-top"
        />
    </picture>
);

interface ThoughtTileProps extends WithTranslation {
    thought: Thought;
}

export const ThoughtTile: React.FunctionComponent<ThoughtTileProps> = ({
    thought,
    i18n,
}) => {
    return (
        <React.Fragment>
            <div className="card mb-3 thought-tile d-none d-sm-flex">
                {/* Desktop layout */}
                <div className="row">
                    <div className="col-md-3 image">
                        {getImage(thought.image_url, thought.image_description)}
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h5 className="card-title">{thought.title}</h5>

                            <Authors
                                authors={thought.authors}
                                date={formatDate(
                                    thought.date,
                                    ['month', 'day', ',', 'year'],
                                    i18n.language,
                                )}
                            />

                            <p className="card-text">
                                {thought.description}
                                &nbsp;
                                <Link href={`/thoughts/${thought.slug}`}>
                                    <a>Read more</a>
                                </Link>
                            </p>

                            <Attachments attachments={thought.attachments} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile layout */}
            <div className="card d-block d-sm-none">
                <div className="card d-block d-sm-none">
                    {getImage(thought.image_url, thought.image_description)}
                    <div className="card-body">
                        <h5 className="card-title">{thought.title}</h5>
                        <Authors
                            authors={thought.authors}
                            date={formatDate(
                                thought.date,
                                ['month', 'day', ',', 'year'],
                                i18n.language,
                            )}
                        />
                        <p className="card-text">
                            {thought.description}
                            &nbsp;
                            <Link href={`/thoughts/${thought.slug}`}>
                                <a>Read more</a>
                            </Link>
                        </p>

                        <Attachments attachments={thought.attachments} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
