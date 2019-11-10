import React from 'react';
import { WithTranslation } from 'react-i18next';

import { getLocalizedMonths } from '../../lib/const';
import { YearMonths } from '../../lib/types';

interface DateSelectorProps extends WithTranslation {
    handleChange(e: React.FormEvent<HTMLSelectElement>): void;
    yearMonths: YearMonths;
    month: string;
    year: string;
}

export const DateSelector: React.SFC<DateSelectorProps> = props => {
    const { year, handleChange } = props;

    const getYears = () => (
        Object.keys(props.yearMonths).map(year => (
            <option
                key={year}
                label={year}
                value={year}
            >
                {String(year)}
            </option>
        ))
    );

    const getMonths = () => {
        const localizedMonths = getLocalizedMonths(props.i18n.language);
        const year = props.yearMonths[props.year];
        const months: React.ReactElement[] = [];
        if (year) {
            for (let i = 1; i <= 12; i++) {
                if (year[i]) {
                    months.push((
                        <option
                            key={year[i]}
                            label={localizedMonths[i - 1]}
                            value={i}
                        >
                            {localizedMonths[i - 1]}
                        </option>
                    ));
                }
            }
        }

        return months;
    };

    return (
        <div className='my-2'>
            <select
                name='year'
                onChange={handleChange}
                value={year}
                aria-label={props.t('selectYear')}
                className='custom-select mr-3'
            >
                <option
                    label={props.t('selectYear')}
                    value=''
                >
                    {props.t('selectYear')}
                </option>
                {getYears()}
            </select>
            <select
                disabled={!props.year}
                name='month'
                aria-label={props.t('selectMonth')}
                onChange={handleChange}
                value={props.month}
                className='custom-select mr-3'
            >
                <option
                    label={props.t('selectMonth')}
                    value=''
                >
                    {props.t('selectMonth')}
                </option>
                {getMonths()}
            </select>
        </div>
    );
};
