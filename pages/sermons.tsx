import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter, NextRouter } from 'next/router';
import { WithTranslation } from 'react-i18next';
import { ParsedUrlQuery } from 'querystring';
import { NextPageContext } from 'next';
import { IncomingMessage } from 'http';

import { Pagination } from '../components/shared/Pagination.component';
import { Filter, FilterParams } from '../components/sermons/filter';
import { Spinner } from '../components/shared/Spinner.component';
import { FlexCenter } from '../components/shared/flex-center';
import SermonTile from '../components/sermons/sermonTile';

import { fetchData, getPageCount } from '../lib/helpers';
import { withTranslation, I18nPage } from '../i18n';
import { DEFAULT_PAGE_SIZE } from '../lib/config';
import {
    ListSermonSeriesResponse,
    ListSermonsResponse,
    JustSermonSeries,
    YearMonths,
    ReqParams,
    Sermon,
    Person,
} from '../lib/types';

interface SermonsProps extends WithTranslation {
    sermons: Sermon[];
    sermonsCount: number;
    series: JustSermonSeries[];
    speakers: Person[];
    yearMonths: YearMonths;
    filterParams: FilterParams;
}

const defaultSermonsParams: ReqParams =  { page_size: DEFAULT_PAGE_SIZE };
const defaultFilterParams: FilterParams = { page: 1, year: '', month: '', speaker: '', series: '' };

const fetchFilteredSermons = async (filterParams: FilterParams, req?: IncomingMessage, router?: NextRouter) => {
    const params: ReqParams = { page: filterParams.page, ...defaultSermonsParams };

    const urlParams: string[] = [];

    if (filterParams.year) {
        params.date__year = filterParams.year;
        urlParams.push(`year=${filterParams.year}`);

        if (filterParams.month) {
            params.date__month = filterParams.month;
            urlParams.push(`month=${filterParams.month}`);
        }
    }

    if (filterParams.speaker) {
        params.speakers__slug = filterParams.speaker;
        urlParams.push(`speaker=${filterParams.speaker}`);
    }

    if (filterParams.series) {
        urlParams.push(`series=${filterParams.series}`);
        params.series__slug = filterParams.series;
    }

    if (params.page > 1) {
        urlParams.push(`page=${params.page}`);
    }

    if (router) {
        router.push(
            '/sermons' + (urlParams.length ? `?${urlParams.join('&')}` : ''),
            undefined,
            { shallow: true },
        );
    }

    return fetchData<ListSermonsResponse>('sermons', req, params);
};

const queryParamsToFilters = (query: ParsedUrlQuery): FilterParams => ({
    ...defaultFilterParams,
    ...(query.page ? { page: +query.page } : {}),
    ...(typeof query.year === 'string' ? { year: query.year } : {}),
    ...(typeof query.month === 'string' ? { month: query.month } : {}),
    ...(typeof query.speaker === 'string' ? { speaker: query.speaker } : {}),
    ...(typeof query.series === 'string' ? { series: query.series } : {}),
});

const Sermons: I18nPage<SermonsProps> = props => {
    const [filterParams, setFilterParams] = useState<FilterParams>(defaultFilterParams);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [sermons, setSermons] = useState<Sermon[]>([]);
    const ignoreFilterParams = useRef(true);
    const ignoreQueryUpdate = useRef(true);
    const isInitialMount = useRef(true);
    const router = useRouter();

    useEffect(() => {
        setTotalPages(getPageCount(props.sermonsCount));
        setFilterParams(props.filterParams);
        setSermons(props.sermons);
    }, []);

    const resetFilters = useCallback(() => {
        // ignoreFilterParams.current = true;
        setFilterParams(defaultFilterParams);
    }, []);

    useEffect(() => {
        // don't run on initial mount
        if (ignoreFilterParams.current) {
            ignoreFilterParams.current = false;
        } else if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            applyFilters(filterParams);
        }
    }, [filterParams]);

    const handleFilter = useCallback((e: React.FormEvent<HTMLSelectElement>) => {
        const property = e.currentTarget.name;
        const value = e.currentTarget.value;

        switch(property) {
            case 'year':
                setFilterParams({ ...filterParams, year: value, month: '', page: 1 });
                break;
            case 'month':
                setFilterParams({ ...filterParams, month: value, page: 1 });
                break;
            case 'speakers':
                setFilterParams({ ...filterParams, speaker: value, page: 1 });
                break;
            case 'series':
                setFilterParams({ ...filterParams, series: value, page: 1 });
                break;
        }
    }, [filterParams]);

    const applyFilters = useCallback(async (params: FilterParams) => {
        setIsLoading(true);
        ignoreQueryUpdate.current = true;
        const data = await fetchFilteredSermons({ ...defaultFilterParams, ...params }, undefined, router);

        if (data) {
            setSermons(data.results);
            setTotalPages(getPageCount(data.count));
        } else {
            // tslint:disable-next-line:no-console
            console.error('Invalid response');
        }

        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (ignoreQueryUpdate.current) {
            ignoreQueryUpdate.current = false;
        } else {
            setFilterParams(queryParamsToFilters(router.query));
        }
    }, [router.query]);

    return (
        <div className='container sermons-page'>
            <h1 className='text-center capitalize my-3'>{props.t('title')}</h1>

            <Filter
                yearMonths={props.yearMonths}
                resetFilters={resetFilters}
                handleChange={handleFilter}
                speakers={props.speakers}
                params={filterParams}
                series={props.series}
                tReady={props.tReady}
                i18n={props.i18n}
                t={props.t}
            />

            {
                isLoading
                    ? <FlexCenter><Spinner /></FlexCenter>
                    : sermons?.length
                        ? sermons.map(sermon => (
                            <SermonTile
                                sermon={sermon}
                                key={sermon.id}
                                t={props.t}
                                i18n={props.i18n}
                                tReady={props.tReady}
                            />
                        ))
                        : <p className='text-center'>{props.t('noData')}</p>
            }

            <Pagination
                updatePage={page => setFilterParams({ ...filterParams, page })}
                curPage={filterParams.page}
                pageCount={totalPages}
            />
        </div>
    );
};

Sermons.getInitialProps = async ({ req, query }: NextPageContext) => {
    const filterParams = { ...defaultFilterParams, ...queryParamsToFilters(query) };

    // TODO: Promise.all?
    const sermons = await fetchFilteredSermons(filterParams, req);
    const speakers = await fetchData('people', req, { sermons__id__isnull: false });
    const yearMonths = await fetchData('sermons/year-months', req);
    const series = await fetchData<ListSermonSeriesResponse>('series', req);

    return {
        sermons: sermons?.results || [],
        sermonsCount: sermons?.count || 0,
        yearMonths: yearMonths || [],
        series: series?.results || [],
        speakers: speakers?.results || [],
        namespacesRequired: ['sermons'],
        filterParams,
    };
};

export default withTranslation('sermons')(Sermons);
