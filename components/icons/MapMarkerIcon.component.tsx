import React from 'react';

export const MapMarkerIcon = ({ width = 18, height = 18 }) => (
    <svg
        tabIndex={-1}
        focusable='false'
        className='svg-icon icon-map-marker'
        width={width}
        height={height}
        viewBox='0 0 64 64'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path d='M32 2a20 20 0 0 0-20 20c0 18 20 40 20 40s20-22 20-40A20 20 0 0 0 32 2zm0 28a8 8 0 1 1 8-8 8 8 0 0 1-8 8z' />
    </svg>
);
