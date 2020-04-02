import React from 'react';
import { Spinner } from './spinner';
import { FlexCenter } from './flex-center';
import { ArrowCircleDownIcon } from '../icons';

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
        <FlexCenter>
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
                        <ArrowCircleDownIcon className='hvr-icon' />
                    </button>
                )
            }
        </FlexCenter>
    );
};
