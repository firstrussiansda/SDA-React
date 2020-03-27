import React, { useEffect, useState, useCallback } from 'react';
import { Announcement } from '../lib/types';
import { I18nPage, useTranslation } from '../i18n';
import { fetchData, formatDate } from '../lib/helpers';
import { HeaderLocale } from '../components/shared/header';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { FlexCenter } from '../components/shared/flex-center';
import { Spinner } from '../components/shared/spinner';
import { LoadMoreButton } from '../components/shared/loadMoreButton';

const PAGE_SIZE = 2;

interface UpdatesProps {
    updates: Announcement[] | null;
    count: number;
    next: string | null;
}

const Updates: I18nPage<UpdatesProps> = props => {
    const { t, i18n } = useTranslation();

    const [updates, setUpdates] = useState<Announcement[] | null>(null);
    const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [count, setCount] = useState<number>(0);
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
                setCount(data.count);
            }   setIsLoadingMore(false);
        } catch (e) {
            // tslint:disable-next-line:no-console
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
        setCount(props.count);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (isLoadingMore) {
            loadUpdates();
        }
    }, [isLoadingMore]);

    return (
        <div className='container updates-page'>
            <h1 className='text-center capitalize my-3'>
                {t<HeaderLocale>('header', { returnObjects: true }).updates}
            </h1>

            {
                isLoading
                    ? <FlexCenter><Spinner /></FlexCenter>
                    : (
                        <React.Fragment>
                            {updates?.map(update => (
                                <Card key={update.id} className='d-flex align-items-center flex-row'>
                                    <h5 className='col-md-2 d-flex justify-content-center'>
                                        {formatDate(update.start_date, ['month', 'day', ',', 'year'], i18n.language)}
                                    </h5>
                                    <Card.Body className='col-md-9'>
                                        <Card.Title >
                                            {update.title}
                                        </Card.Title>
                                        <div dangerouslySetInnerHTML={{ __html: update.description }} />
                                        <Link
                                            href={`/updates/[slug]?slug=${update.slug}`}
                                            as={`/updates/${update.slug}`}
                                        >
                                            <a>Read more</a>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            ))}
                            <LoadMoreButton
                                loadMore={loadMore}
                                isLoading={isLoadingMore}
                                isMoreAvailable={!!next}
                            />
                        </React.Fragment>
                    )
            }
        </div>
    );
};

Updates.getInitialProps = async ({ req }: any) => {
    const data = await fetchData('announcements', req, {
        page_size: PAGE_SIZE,
    });

    if (data && 'results' in data) {
        return {
            updates: data?.results || [],
            count: data?.count || 0,
            next: data?.next || null,
            namespacesRequired: ['common'],
        };
    }

    return { updates: [], count: 0, namespacesRequired: ['common'], next: null };
};

export default Updates;
