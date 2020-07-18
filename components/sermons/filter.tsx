import React from 'react';
import { WithTranslation } from 'react-i18next';

import { Person, JustSermonSeries, YearMonths, ReqParams } from '../../lib/types';
import { DateSelector } from './dateFilter';
import { SpeakerSelector } from './speakerSelector';
import { SeriesSelector } from './seriesSelector';

export interface FilterParams extends ReqParams {
    page: number;
    year: string;
    month: string;
    speaker: string;
    series: string;
}

interface FilterProps extends WithTranslation {
    handleChange(e: React.FormEvent<HTMLSelectElement>): void;
    resetFilters(): void;

    series: JustSermonSeries[];
    yearMonths: YearMonths;
    params: FilterParams;
    speakers: Person[];
}

export const Filter: React.FunctionComponent<FilterProps> = (props) => {
    return (
        <div className='input-group mb-3'>
            <DateSelector
                handleChange={props.handleChange}
                yearMonths={props.yearMonths}
                tReady={props.tReady}
                month={props.params.month}
                i18n={props.i18n}
                year={props.params.year}
                t={props.t}
            />

            <SeriesSelector
                isDisabled={false}
                handleChange={props.handleChange}
                selected={props.params.series}
                series={props.series}
                tReady={props.tReady}
                i18n={props.i18n}
                t={props.t}
            />

            <SpeakerSelector
                isDisabled={false}
                handleChange={props.handleChange}
                selected={props.params.speaker}
                speakers={props.speakers}
                tReady={props.tReady}
                i18n={props.i18n}
                t={props.t}
            />
            {
                (props.series || props.params.speaker || props.params.month || props.params.year) &&
                (
                    <button
                        type='button'
                        className='btn btn-outline-secondary my-2'
                        onClick={props.resetFilters}
                    >
                        {props.t('resetFilter')}
                    </button>
                )
            }
        </div>
    );
};
