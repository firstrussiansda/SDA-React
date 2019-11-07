import React from 'react';
import { WithTranslation } from 'react-i18next';

import { Person, JustSermonSeries } from '../../lib/interfaces';
import { DateSelector } from './dateFilter';
import { SpeakerSelector } from './speakerSelector';
import { SeriesSelector } from './seriesSelector';

interface FilterProps extends WithTranslation {
    handleChange(e: React.FormEvent<HTMLSelectElement>): void;
    year: string;
    month: string;
    selectedSpeaker: string;
    selectedSeries: string;
    series: JustSermonSeries[];
    speakers: Person[];
}

const Filter: React.FunctionComponent<FilterProps> = (props) => {
    return (
            <div className='input-group mb-3'>
                <SeriesSelector
                    selected={props.selectedSeries}
                    series={props.series}
                    handleChange={props.handleChange}
                    t={props.t}
                    i18n={props.i18n}
                    tReady={props.tReady}
                />
                <SpeakerSelector
                    selected={props.selectedSpeaker}
                    speakers={props.speakers}
                    handleChange={props.handleChange}
                    t={props.t}
                    i18n={props.i18n}
                    tReady={props.tReady}
                />
                <DateSelector
                    handleChange={props.handleChange}
                    year={props.year}
                    month={props.month}
                    t={props.t}
                    i18n={props.i18n}
                    tReady={props.tReady}
                />
            </div>
    );
};

export default Filter;
