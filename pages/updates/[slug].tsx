import { useTranslation } from 'react-i18next';
import { NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';

import { Attachments } from '../../components/shared/Attachments.component';
import Error from '../_error';

import { fetchData, formatDate, unescapeHtml } from '../../lib/helpers';
import { GetUpdateResponse, Update as IUpdate } from '../../lib/types';
import { I18nPage } from '../../i18n';

interface UpdatesProps {
    update: IUpdate | null;
}

const Update: I18nPage<UpdatesProps> = ({ update }) => {
    if (!update) {
        return <Error statusCode={404} />;
    }

    const { i18n, t } = useTranslation();

    return (
        <main className="container component-update-detail">
            <Head>
                <title>
                    {update.title} - {t('siteTitle')}
                </title>
                <meta
                    name="description"
                    content={unescapeHtml(update.description)}
                />
            </Head>

            <h1 className="title capitalize text-xxxl">{update.title}</h1>
            <p>
                {formatDate(
                    update.start_date,
                    ['month', 'day', ',', 'year'],
                    i18n.language,
                )}
            </p>
            <Attachments attachments={update.attachments} />
            <div
                dangerouslySetInnerHTML={{
                    __html: update.announcement_html || update.description,
                }}
            />
        </main>
    );
};

Update.getInitialProps = async ({ query, req, res }: NextPageContext) => {
    const update = await fetchData<GetUpdateResponse>(
        `announcements/${query.slug}`,
        req,
    );

    if (!update && res) {
        res.statusCode = 404;
    }

    return { update, namespacesRequired: ['common'] };
};

export default Update;
