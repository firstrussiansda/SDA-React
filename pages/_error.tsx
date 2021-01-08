import { WithTranslation } from 'react-i18next';
import { TFunction } from 'next-i18next';
import { NextApiResponse } from 'next';
import Link from 'next/link';
import React from 'react';

import { withTranslation } from '../i18n';

import '../styles/pages/_error.scss';

interface ErrorProps extends WithTranslation {
    statusCode: number;
}

const getErrorMessage = (t: TFunction, statusCode: number) =>
    t(statusCode === 404 ? 'error404Message' : 'errorMessage');

class Error extends React.Component<ErrorProps> {
    static getInitialProps({
        res,
        err,
    }: {
        res: NextApiResponse;
        err: NextApiResponse;
    }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode, namespacesRequired: ['common'] };
    }

    render() {
        return (
            <div className="container component-error-page">
                <section className="card card-lg text-center">
                    <h1 className="error-code">{this.props.statusCode}</h1>
                    <span>
                        {getErrorMessage(this.props.t, this.props.statusCode)}
                    </span>
                    <div className="my-3">
                        <Link href="/">
                            <a>{this.props.t('returnToHome')}</a>
                        </Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default withTranslation('common')(Error);
