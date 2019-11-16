import React from 'react';
import { WithTranslation } from 'react-i18next';

import { Person, JustSermonSeries, YearMonths } from '../../lib/types';
import { DateSelector } from './dateFilter';
import { SpeakerSelector } from './speakerSelector';
import { SeriesSelector } from './seriesSelector';

interface FilterProps extends WithTranslation {
    handleChange(e: React.FormEvent<HTMLSelectElement>): void;
    resetFilters(): void;

    series: JustSermonSeries[];
    selectedSpeaker: string;
    yearMonths: YearMonths;
    selectedSeries: string;
    speakers: Person[];
    month: string;
    year: string;
}

const Filter: React.FunctionComponent<FilterProps> = (props) => {
    return (
        <div className='input-group mb-3'>
            <DateSelector
                handleChange={props.handleChange}
                yearMonths={props.yearMonths}
                tReady={props.tReady}
                month={props.month}
                i18n={props.i18n}
                year={props.year}
                t={props.t}
            />
            <SeriesSelector
                isDisabled={props.selectedSpeaker !== ''}
                handleChange={props.handleChange}
                selected={props.selectedSeries}
                series={props.series}
                tReady={props.tReady}
                i18n={props.i18n}
                t={props.t}
            />
            <SpeakerSelector
                isDisabled={props.selectedSeries  !== ''}
                handleChange={props.handleChange}
                selected={props.selectedSpeaker}
                speakers={props.speakers}
                tReady={props.tReady}
                i18n={props.i18n}
                t={props.t}
            />
            {
                (
                    props.selectedSeries ||
                    props.selectedSpeaker ||
                    props.month ||
                    props.year
                ) &&
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

export default Filter;
