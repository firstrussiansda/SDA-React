import React from 'react';

interface PaginationProps {
    updatePage: (page: number) => void;
    curPage: number;
    pageCount: number;
}

export default class Pagination extends React.Component<PaginationProps> {
    private handleClick = (e: React.SyntheticEvent, page: number) => {
        e.preventDefault();

        if (0 < page && page <= this.props.pageCount) {
            this.props.updatePage(page);
        } else {
            throw new Error('Invalid page number');
        }
    }

    private getPages = () => {
        const { curPage, pageCount } = this.props;
        let first = 1;
        let last = pageCount < 11 ? pageCount : 10;

        if (pageCount > 10 && curPage > 5) {
            if (curPage + 5 <= pageCount) {
                first = curPage - 4;
                last = curPage + 5;
            } else {
                first = pageCount - 9;
                last = pageCount;
            }
        }

        const pageElements: JSX.Element[] = [];

        for (let idx = first; idx <= last; idx++) {
            pageElements.push((
                <li className={`page-item ${idx === curPage ? 'active' : ''}`} key={idx}>
                    <a
                        className='page-link'
                        href='#'
                        onClick={e => this.handleClick(e, idx)}
                    >
                        {idx}
                        {
                            idx === this.props.curPage &&
                            <span className='sr-only'>(current)</span>
                        }
                    </a>
                </li>
            ));
        }
        return pageElements;
    }

    render() {
        if (this.props.pageCount < 2) {
            return null;
        }

        return (
            <nav aria-label='page selector'>
                <ul className='pagination justify-content-center'>
                    <li className={`page-item ${this.props.curPage === 1 ? 'disabled' : ''}`}>
                        <a
                            className='page-link'
                            href='#'
                            onClick={e => this.handleClick(e, this.props.curPage - 1)}
                        >
                            Previous
                        </a>
                    </li>
                    {this.getPages()}
                    <li className={`page-item ${this.props.curPage === this.props.pageCount ? 'disabled' : ''}`}>
                        <a
                            className='page-link'
                            href='#'
                            onClick={e => this.handleClick(e, this.props.curPage + 1)}
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}
