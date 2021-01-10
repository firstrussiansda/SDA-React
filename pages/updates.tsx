import React, { useEffect, useState, useCallback } from 'react';
import { NextPageContext } from 'next';
import Head from 'next/head';

import { LoadMoreButton } from '../components/shared/LoadMoreButton.component';
import { UpdateCard } from '../components/updates/UpdateCard.component';
import { Spinner } from '../components/shared/Spinner.component';
import { FlexCenter } from '../components/shared/flex-center';

import { Update as IUpdate, ListUpdatesResponse } from '../lib/types';
import { I18nPage, useTranslation } from '../i18n';
import { DEFAULT_PAGE_SIZE } from '../lib/config';
import { fetchData } from '../lib/helpers';

import '../styles/pages/updates.scss';

interface UpdatesProps {
    updates: IUpdate[];
    next: string | null;
}

const Updates: I18nPage<UpdatesProps> = props => {
    const { t } = useTranslation();

    const [updates, setUpdates] = useState<IUpdate[]>([]);
    const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [next, setNext] = useState<string | null>(null);

    const loadUpdates = useCallback(async () => {
        if (!next) {
            return;
        }
        try {
            const res = await fetch(next);
            const data = await res.json();

            if (data?.results) {
                setUpdates((updates || []).concat(data.results));
                setNext(data.next);
            }
            setIsLoadingMore(false);
        } catch (e) {
            console.error(e);
            setIsLoadingMore(false);
        }
    }, [next, updates?.length]);

    const loadMore = useCallback(() => {
        setIsLoadingMore(true);
    }, []);

    useEffect(() => {
        setUpdates(props.updates);
        setNext(props.next);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (isLoadingMore) {
            loadUpdates();
        }
    }, [isLoadingMore]);

    return (
        <div className="container component-updates-page">
            <Head>
                <title>
                    {t('header.updates')} - {t('siteTitle')}
                </title>
            </Head>

            <h1 className="text-center capitalize my-3">
                {t('header.updates')}
            </h1>

            {isLoading ? (
                <FlexCenter>
                    <Spinner />
                </FlexCenter>
            ) : (
                <section>
                    <div className="cards-container">
                        {updates.map(update => (
                            <UpdateCard key={update.id} update={update} />
                        ))}
                    </div>
                    <LoadMoreButton
                        loadMore={loadMore}
                        isLoading={isLoadingMore}
                        isMoreAvailable={!!next}
                    />
                </section>
            )}
        </div>
    );
};

Updates.getInitialProps = async ({ req }: NextPageContext) => {
    const data = await fetchData<ListUpdatesResponse>('announcements', req, {
        page_size: DEFAULT_PAGE_SIZE,
        order_by: ['-is_featured', '-start_date'],
    });

    if (data?.results) {
        return {
            updates: data?.results || [],
            next: data?.next || null,
            namespacesRequired: ['common'],
        };
    }

    return { updates: [], namespacesRequired: ['common'], next: null };
};

export default Updates;
