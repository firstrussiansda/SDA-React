import React from 'react';

export const Spinner: React.FunctionComponent = () => (
    <React.Fragment>
        <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </React.Fragment>
);
