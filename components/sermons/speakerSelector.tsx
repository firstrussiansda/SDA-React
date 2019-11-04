import React from 'react';
import { WithTranslation } from 'react-i18next';

import { Person } from '../../lib/interfaces';

interface SpeakerSelectorProps extends WithTranslation {
    selected: string;
    speakers: Person[];
    handleChange(e: React.FormEvent<HTMLSelectElement>): void;
}

export const SpeakerSelector: React.SFC<SpeakerSelectorProps> = props => {
    return (
        <div className='my-2'>
            <select
                name='speakers'
                onChange={props.handleChange}
                value={props.selected}
                aria-label={props.t('selectSpeaker')}
                className='custom-select'
            >
                <option
                    label={props.t('selectSpeaker')}
                    value=''
                >
                    {props.t('selectSpeaker')}
                </option>
                {
                    props.speakers.map(speaker => (
                        <option
                            key={speaker.id}
                            label={speaker.name}
                            value={speaker.name.split(' ').join('+')}
                        >
                            {speaker.name}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};
