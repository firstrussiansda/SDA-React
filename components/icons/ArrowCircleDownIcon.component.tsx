import React from 'react';

export const ArrowCircleDownIcon = ({ width = 16, height = 16, className = '' }) => (
    <svg
        tabIndex={-1}
        focusable='false'
        className={`svg-icon icon-arrow-circle-down ${className}`}
        width={width}
        height={height}
        fill='currentColor'
        viewBox='0 0 64 64'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M32 0a32 32 0 1 0 32 32A32 32 0 0 0 32 0zm12.64 37.322L33.419 50.56l-.002.002L32 52.232 19.346 37.296a2 2 0 1 1 3.052-2.586l7.605 8.977v-29.69a2 2 0 1 1 4 0v29.69l7.588-8.95a2 2 0 0 1 3.05 2.586z'
        />
    </svg>
);
