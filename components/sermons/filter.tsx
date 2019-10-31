import React from 'react';

import { Person } from '../../lib/interfaces';
import { DateSelector } from './dateFilter';
import { SpeakerSelector } from './speakerSelector';

interface FilterProps {
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
                />
                <SpeakerSelector
                    selected={props.selectedSpeaker}
                    speakers={props.speakers}
                    handleChange={props.handleChange}
                />
            </div>
    );
};

export default Filter;
