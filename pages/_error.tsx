import React from 'react';
import { WithTranslation } from "react-i18next";
import { withTranslation } from '../i18n';

interface ErrorProps extends WithTranslation {
    statusCode: number
}

interface ErrorLocale {
    blah: string;
}

class Error extends React.Component<ErrorProps> {
    static getInitialProps({ res, err }: {res: any, err: any}) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode, namespacesRequired: ['common'] };
    }

    render() {
        return (
            <p>
                {
                    this.props.statusCode
                        ? `An error ${this.props.statusCode} occurred on server`
                        : 'An error occurred on client'
                }
                {this.props.t<ErrorLocale>('error', { returnObjects: true }).blah }
            </p>
        );
    }
}

export default withTranslation('common')(Error);
