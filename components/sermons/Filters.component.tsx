import { DebounceInput } from 'react-debounce-input';
import Accordion from 'react-bootstrap/Accordion';
import { WithTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import React, { useMemo } from 'react';

import {
    Person,
    JustSermonSeries,
    YearMonths,
    ReqParams,
} from '../../lib/types';
import { SpeakerFilter } from './SpeakerFilter.component';
import { SeriesFilter } from './SeriesFilter.component';
import { DateSelector } from './DateFilter.component';
import { FunnelFillIcon } from '../icons';
import './Filters.style.scss';

export interface FiltersParams extends ReqParams {
    page: number;
    year: string;
    month: string;
    speaker: string;
    series: string;
    query: string;
}
interface FiltersProps extends WithTranslation {
    handleChange(
        e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    ): void;
    resetFilters(): void;

    series: JustSermonSeries[];
    yearMonths: YearMonths;
    params: FiltersParams;
    speakers: Person[];
}

export const Filters: React.FunctionComponent<FiltersProps> = ({
    resetFilters,
    handleChange,
    yearMonths,
    speakers,
    params,
    series,
    tReady,
    i18n,
    t,
}) => {
    const hasFiltersSet = useMemo(
        () =>
            params.series ||
            params.speaker ||
            params.month ||
            params.year ||
            params.query,
        [params],
    );

    return (
        <Accordion className="component-sermons-filters">
            <div className="toggle-wrapper">
                {hasFiltersSet && (
                    <button
                        type="button"
                        className="btn reset-filters sermons-sub-filter"
                        onClick={resetFilters}
                    >
                        {t('resetFilter')}
                    </button>
                )}
                <Accordion.Toggle
                    as={Button}
                    variant="filters-visible-toggle"
                    eventKey="filters"
                >
                    {t('filterBy')}
                    &nbsp;
                    <FunnelFillIcon />
                </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="filters">
                <div className="input-group mb-3 filters-body">
                    <SeriesFilter
                        isDisabled={false}
                        handleChange={handleChange}
                        selected={params.series}
                        series={series}
                        tReady={tReady}
                        i18n={i18n}
                        t={t}
                    />

                    <SpeakerFilter
                        isDisabled={false}
                        handleChange={handleChange}
                        selected={params.speaker}
                        speakers={speakers}
                        tReady={tReady}
                        i18n={i18n}
                        t={t}
                    />

                    <DateSelector
                        handleChange={handleChange}
                        yearMonths={yearMonths}
                        tReady={tReady}
                        month={params.month}
                        i18n={i18n}
                        year={params.year}
                        t={t}
                    />

                    <div className="sermons-sub-filter query-filter">
                        <DebounceInput
                            placeholder={t('searchByTitle')}
                            className="form-control"
                            onChange={handleChange}
                            value={params.query}
                            debounceTimeout={500}
                            name="query"
                        />
                    </div>
                </div>
            </Accordion.Collapse>
        </Accordion>
    );
};
