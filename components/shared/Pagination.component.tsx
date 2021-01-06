import React, { useCallback } from 'react';
import classnames from 'classnames';

import './Pagination.style.scss';

interface PaginationProps {
    updatePage: (page: number) => void;
    curPage: number;
    pageCount: number;
}

function getPageButtons(
    curPage: number,
    pageCount: number,
    handleClick: (e: React.SyntheticEvent, page: number) => void,
) {
    let first = 1;
    let last = pageCount <= 5 ? pageCount : 5;

    if (pageCount > 5 && curPage > 3) {
        if (curPage + 3 <= pageCount) {
            first = curPage - 2;
            last = curPage + 3;
        } else {
            first = pageCount - 4;
            last = pageCount;
        }
    }

    const pageElements: JSX.Element[] = [];

    for (let idx = first; idx <= last; idx++) {
        pageElements.push(
            <li
                className={`page-item${idx === curPage ? ' active' : ''}`}
                key={idx}
            >
                <button
                    onClick={e => handleClick(e, idx)}
                    className="page-link"
                >
                    {idx}
                    {idx === curPage ? (
                        <span className="sr-only">(current)</span>
                    ) : null}
                </button>
            </li>,
        );
    }

    return pageElements;
}

export const Pagination: React.FunctionComponent<PaginationProps> = ({
    pageCount,
    curPage,
    updatePage,
}) => {
    if (pageCount < 2) {
        return null;
    }

    const handleClick = useCallback(
        (e: React.SyntheticEvent, page: number) => {
            e.preventDefault();

            if (page < 0 || page <= pageCount) {
                updatePage(page);
            } else {
                throw new Error('Invalid page number');
            }
        },
        [pageCount],
    );

    const prevClass = classnames('page-item', {
        disabled: curPage === 1,
    });

    const nextClass = classnames('page-item', {
        disabled: curPage === pageCount,
    });

    return (
        <nav aria-label="page selector" className="component-pagination">
            <ul className="pagination justify-content-center">
                <li className={prevClass}>
                    <button
                        className="page-link"
                        onClick={e => handleClick(e, curPage - 1)}
                    >
                        Previous
                    </button>
                </li>
                {getPageButtons(curPage, pageCount, handleClick)}
                <li className={nextClass}>
                    <button
                        className="page-link"
                        onClick={e => handleClick(e, curPage + 1)}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};
