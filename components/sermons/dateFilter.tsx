import React from 'react';
import { months } from '../../lib/const';

interface DateSelectorProps {
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
        if (year === String(date.getFullYear())) {
            const currMonth = date.getMonth();
            return months.slice(0, currMonth + 2);
        }

        return months;
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
                    label='Select Year'
                    value=''
                >
                    Select Year
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
                            label='Select Month'
                            value=''
                        >
                            Select Month
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
