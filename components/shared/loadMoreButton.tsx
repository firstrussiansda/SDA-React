import React from 'react';
import { Spinner } from './spinner';

interface LoadMoreButtonProps {
    isMoreAvailable: boolean;
    isLoading: boolean;
    loadMore: () => void;
}

export const LoadMoreButton: React.FunctionComponent<LoadMoreButtonProps> = props => {
    if (!props.isMoreAvailable) {
        return null;
    }

    return (
        <div className='d-flex justify-content-center'>
            {
                props.isLoading
                ? <Spinner  />
                : (
                    <button
                        type='button'
                        className='btn btn-outline-warning custom-warning hvr-icon-down'
                        onClick={props.loadMore}
                    >
                        Load more
                        &nbsp;
                        <i className='fas fa-arrow-circle-down hvr-icon' />
                    </button>
                )
            }
        </div>
    );
};
