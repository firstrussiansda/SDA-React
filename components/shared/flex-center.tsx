import React from 'react';

export const FlexCenter: React.FunctionComponent<{}> = props => (
    <div className='d-flex justify-content-center'>
        {props.children}
    </div>
);
