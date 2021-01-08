import React from 'react';
import { WithTranslation } from 'next-i18next';
import Link from 'next/link';

import { UpdateCard } from '../updates/UpdateCard.component';
import { Update } from '../../lib/types';

import './Updates.style.scss';
import { ArrowCircleRightIcon } from '../icons';

interface UpdatesProps extends WithTranslation {
    updates: Update[];
}

const Updates: React.FunctionComponent<UpdatesProps> = ({ t, updates }) => (
    <section className="component-updates">
        <h2 className="text-center title">{t('updates')}</h2>
        <div className="cards-container">
            {updates.map(update => (
                <UpdateCard key={update.id} update={update} />
            ))}
        </div>

        <div className="d-flex mt-4">
            <Link href="/updates">
                <a className="btn btn-outline-warning custom-warning hvr-icon-forward mt-5 mx-auto">
                    {t('allUpdates')}&nbsp;
                    <ArrowCircleRightIcon className="hvr-icon" />
                </a>
            </Link>
        </div>
    </section>
);

export default Updates;
