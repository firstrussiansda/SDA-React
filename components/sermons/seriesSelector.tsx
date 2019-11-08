import React from 'react';
import { WithTranslation } from 'react-i18next';

import { JustSermonSeries } from '../../lib/interfaces';

interface SeriesSelectorProps extends WithTranslation {
    selected: string;
    series: JustSermonSeries[];
    handleChange(e: React.FormEvent<HTMLSelectElement>): void;
}

export const SeriesSelector: React.SFC<SeriesSelectorProps> = props => {
    return (
        <div className='my-2 mr-3'>
            <select
                name='series'
                onChange={props.handleChange}
                value={props.selected}
                aria-label={props.t('selectSeries')}
                className='custom-select'
            >
                <option
                    label={props.t('selectSeries')}
                    value=''
                >
                    {props.t('selectSeries')}
                </option>
                {
                    props.series.map(item => (
                        <option
                            key={item.id}
                            label={item.title}
                            value={item.id}
                        >
                            {item.title}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};
