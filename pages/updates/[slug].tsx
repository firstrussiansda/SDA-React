import { useTranslation } from 'react-i18next';
import { NextPageContext } from 'next';
import React from 'react';

import { Attachments } from '../../components/shared/Attachments.component';
import Error from '../_error';

import { fetchData, formatDate } from '../../lib/helpers';
import { Update as IUpdate } from '../../lib/types';
import { I18nPage } from '../../i18n';

interface UpdatesProps {
    update: IUpdate | null;
}

const Update: I18nPage<UpdatesProps> = ({ update }) => {
    if (!update) {
        return <Error statusCode={404} />;
    }

    const { i18n } = useTranslation();

    return (
        <main className='container component-update-detail'>
            <h2 className='title capitalize text-xxxl'>{update.title}</h2>
            <p>{formatDate(update.start_date, ['month', 'day', ',', 'year'], i18n.language)}</p>
            <Attachments attachments={update.attachments} />
            <div dangerouslySetInnerHTML={{ __html: update.announcement_html || update.description }} />
        </main>
    );
};

Update.getInitialProps = async ({ query, req, res }: NextPageContext) => {
    const update = await fetchData(`announcements/${query.slug}`, req);

    if (!update && res) {
        res.statusCode = 404;
    }

    return { update, namespacesRequired: ['common'] };
};

export default Update;
