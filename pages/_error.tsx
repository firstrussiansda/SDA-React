import React from 'react';
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
            <div className='container d-flex justify-content-center align-items-center'>
                <p className='text-center'>
                    <h2>{this.props.t('errorMessage')}</h2>
                    {
                        this.props.statusCode &&
                        <p>
                            {this.props.t('errorCode')}: {this.props.statusCode};
                    </p>
                    }
                </p>

            </div>
        );
    }
}

export default withTranslation('common')(Error);
