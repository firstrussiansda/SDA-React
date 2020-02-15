import React from 'react';
import { WithTranslation } from 'react-i18next';
import { FlexCenter } from '../shared/flex-center';

interface ArchiveToggleProps extends WithTranslation {
    handleChange: () => void;
    isArchive: boolean;
}

export const ArchiveToggle: React.FunctionComponent<ArchiveToggleProps> = ({ handleChange, isArchive, t }) => (
    <FlexCenter>
        <div className='btn-group btn-group-toggle'>
            <label
                className={`btn btn-outline-warning ${!isArchive ? 'active' : ''}`}
            >
                <input
                    type='radio'
                    name='options'
                    id='option1'
                    checked={!isArchive}
                    onChange={handleChange}
                />
                {t('upcomingEvents')}
            </label>

            <label
                className={`btn btn-outline-warning ${isArchive ? 'active' : ''}`}
            >
                <input
                    type='radio'
                    name='options'
                    id='option2'
                    checked={isArchive}
                    onChange={handleChange}
                />
                {t('pastEvents')}
            </label>
        </div>
    </FlexCenter>
);
