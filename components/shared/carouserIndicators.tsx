import React from 'react';

interface CarouserIndicatorsProps {
    size: number;
    dataTarget: string;
}

const CarouserIndicators: React.FunctionComponent <CarouserIndicatorsProps> = (
    { size, dataTarget },
) => {
    const indicators: JSX.Element[] = [];

    for (let i = 0; i < size; i++) {
        indicators.push((
            <li
                data-target={dataTarget}
                data-slide-to={i}
                className={i === 0 ? 'active' : ''}
                key={i}
            />
        ));
    }

    return (
        <ol className='carousel-indicators'>
            { indicators }
        </ol>
    );
};

export default CarouserIndicators;
