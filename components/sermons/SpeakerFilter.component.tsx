import React from 'react';
import { WithTranslation } from 'react-i18next';

import { Person } from '../../lib/types';

interface SpeakerFilterProps extends WithTranslation {
    handleChange(e: React.ChangeEvent<HTMLSelectElement>): void;
    isDisabled: boolean;
    selected: string;
    speakers: Person[];
}

export const SpeakerFilter: React.SFC<SpeakerFilterProps> = props => {
    return (
        <div className="component-speaker-filter sermons-sub-filter">
            <select
                aria-label={props.t('selectSpeaker')}
                onChange={props.handleChange}
                disabled={props.isDisabled}
                className="custom-select"
                value={props.selected}
                name="speakers"
            >
                <option label={props.t('selectSpeaker')} value="">
                    {props.t('selectSpeaker')}
                </option>
                {props.speakers.map(speaker => (
                    <option
                        key={speaker.id}
                        label={speaker.name}
                        value={speaker.slug}
                    >
                        {speaker.name}
                    </option>
                ))}
            </select>
        </div>
    );
};
