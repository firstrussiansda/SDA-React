import React from 'react';
import Link from 'next/link';
import { WithTranslation } from 'react-i18next';
import { withTranslation } from '../i18n';
import { NextApiResponse } from 'next';

interface ErrorProps extends WithTranslation {
    statusCode: number;
}

class Error extends React.Component<ErrorProps> {
    static getInitialProps({ res, err }: { res: NextApiResponse, err: NextApiResponse }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode, namespacesRequired: ['common'] };
    }

    render() {
        return (
            <div className='container'>
                <section className='card card-lg text-center'>
                    <h1 className='errorCode'>{this.props.statusCode}</h1>
                    <span>{this.props.t('errorMessage')}</span>
                    <div className='my-3'>
                        <Link href='/'><a>Return to home</a></Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default withTranslation('common')(Error);
