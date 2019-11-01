import React from 'react';
import { WithTranslation } from 'react-i18next';

import { Person } from '../../lib/interfaces';
import { DateSelector } from './dateFilter';
import { SpeakerSelector } from './speakerSelector';

interface FilterProps extends WithTranslation {
    handleChange(e: React.FormEvent<HTMLSelectElement>): void;
    year: string;
    month: string;
    selectedSpeaker: string;
    speakers: Person[];
}

const Filter: React.FunctionComponent<FilterProps> = (props) => {
    return (
            <div className='input-group mb-3'>
                <DateSelector
                    handleChange={props.handleChange}
                    year={props.year}
                    month={props.month}
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
            </div>
    );
};

export default Filter;
