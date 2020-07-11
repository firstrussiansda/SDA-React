import React, { useEffect, useState, useCallback } from 'react';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

import { LoadMoreButton } from '../components/shared/LoadMoreButton.component';
import { Attachments } from '../components/shared/Attachments.component';
import { HeaderLocale } from '../components/shared/Header.component';
import { Spinner } from '../components/shared/Spinner.component';
import { FlexCenter } from '../components/shared/flex-center';
import { fetchData, formatDate } from '../lib/helpers';
import { BookmarkFillIcon } from '../components/icons';
import { I18nPage, useTranslation } from '../i18n';
import { DEFAULT_PAGE_SIZE } from '../lib/config';
import { Update as IUpdate } from '../lib/types';

import '../styles/pages/updates.scss';

interface UpdatesProps {
    updates: IUpdate[] | null;
    count: number;
    next: string | null;
}

const Updates: I18nPage<UpdatesProps> = props => {
    const { t, i18n } = useTranslation();

    const [updates, setUpdates] = useState<IUpdate[] | null>(null);
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
        <div className='container component-updates-page'>
            <h1 className='text-center capitalize my-3'>
                {t<HeaderLocale>('header', { returnObjects: true }).updates}
            </h1>

            {
                isLoading
                    ? <FlexCenter><Spinner /></FlexCenter>
                    : (
                        <section>
                            <div className='cards-container'>
                                {updates?.map(update => (
                                    <Card key={update.id}>
                                        {update.is_featured
                                            ? <BookmarkFillIcon height={40} width={40} />
                                            : <div className='bookmark-placeholder' />
                                        }
                                        <Card.Body className='col-md-9'>
                                            <Card.Title>
                                                {update.title}
                                            </Card.Title>
                                            <div dangerouslySetInnerHTML={{ __html: update.description }} />
                                            <Attachments attachments={update.attachments} />
                                            {update.announcement_html && (
                                                <div className='read-more-link'>
                                                    <Link
                                                        href={`/updates/[slug]?slug=${update.slug}`}
                                                        as={`/updates/${update.slug}`}
                                                    >
                                                        <a>Read more</a>
                                                    </Link>
                                                </div>
                                            )}
                                        </Card.Body>
                                        <Card.Footer className='text-muted'>
                                            {formatDate(
                                                update.start_date,
                                                ['month', 'day', ',', 'year'],
                                                i18n.language,
                                            )}
                                        </Card.Footer>
                                    </Card>
                                ))}
                            </div>
                            <LoadMoreButton
                                loadMore={loadMore}
                                isLoading={isLoadingMore}
                                isMoreAvailable={!!next}
                            />
                        </section>
                    )
            }
        </div>
    );
};

Updates.getInitialProps = async ({ req }: any) => {
    const data = await fetchData('announcements', req, {
        page_size: DEFAULT_PAGE_SIZE,
        order_by: ['-is_featured', '-start_date'],
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
