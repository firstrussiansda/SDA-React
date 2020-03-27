import React from 'react';

export const UkraineFlagIcon = ({ width = `24`, height = `15` }) => (
    <svg
        tabIndex={-1}
        focusable='false'
        className='svg-icon icon-user'
        width={width}
        height={height}
        viewBox='0 0 24 15'
        xmlns='http://www.w3.org/2000/svg'
    >
        <rect width={width} height='7.5' fill='#005BBB' />
        <rect width={width} height='7.5' y='7.5' fill='#FFD500' />
    </svg>
);
