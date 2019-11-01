import React from 'react';
import { WithTranslation } from 'react-i18next';

import { getLocalizedMonths } from '../../lib/const';

interface DateSelectorProps extends WithTranslation {
    year: string;
    month: string;
    handleChange(e: React.FormEvent<HTMLSelectElement>): void;
}

export const DateSelector: React.SFC<DateSelectorProps> = props => {
    const { year, handleChange } = props;
    const date = new Date();

    const getYears = () => {
        const currYear = date.getFullYear();
        const years: string[] = [];

        for (let i = currYear; i >= 2010; i--) {
            years.push(String(i));
        }

        return years;
    };

    const getMonths = () => {
        const localizedMonths = getLocalizedMonths(props.i18n.language);

        if (year === String(date.getFullYear())) {
            const currMonth = date.getMonth();
            return localizedMonths.slice(0, currMonth + 1);
        }

        return localizedMonths;
    };

    return (
        <div>
            <select
                name='year'
                onChange={handleChange}
                value={year}
                className='custom-select mr-3'
            >
                <option
                    label={props.t('selectYear')}
                    value=''
                >
                {props.t('selectYear')}
                </option>
                {
                    getYears().map(year => (
                        <option
                            key={year}
                            label={year}
                            value={year}
                        >
                            {String(year)}
                        </option>
                    ))
                }
            </select>
            {
                year &&
                (
                    <select
                        name='month'
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
                        {
                            getMonths().map((month, i) => (
                                <option
                                    key={month}
                                    label={month}
                                    value={i + 1}
                                >
                                    {month}
                                </option>
                            ))
                        }
                    </select>
                )
            }
        </div>
    );
};
