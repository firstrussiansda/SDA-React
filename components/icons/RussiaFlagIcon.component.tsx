import React from 'react';

export const RussiaFlagIcon = ({ width = 24, height = 15 }) => (
    <svg
        tabIndex={-1}
        focusable='false'
        className='svg-icon icon-russian-flag'
        width={width}
        height={height}
        viewBox='0 0 24 15'
        xmlns='http://www.w3.org/2000/svg'
    >
        <rect fill='#fff' width={width} height='5' />
        <rect fill='#d52b1e' y='10' width={width} height='5' />
        <rect fill='#0039a6' y='5' width={width} height='5' />
    </svg>
);
