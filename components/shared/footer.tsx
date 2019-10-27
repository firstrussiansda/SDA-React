import React from 'react';
import { withTranslation } from '../../i18n';
import { WithTranslation } from 'react-i18next';

interface FooterLocale {
    main: string;
    copyright: string;
}

class Footer extends React.Component<WithTranslation> {
    static async getInitialProps() {
        return {
            namespacesRequired: ['common'],
        };
    }

    render() {
        return (
            <footer className='page-footer'>
                <p>
                    <span>
                        <a
                            href='https://www.facebook.com/firstrussianny/'
                            aria-label='facebook'
                        >
                            <i className='fab fa-facebook' />
                        </a>
                        <a
                            href='https://www.instagram.com/youthgroupfriends/'
                            aria-label='instagram'
                        >
                            <i className='fab fa-instagram' />
                        </a>
                        <a
                            href='mailto:firstrussiansdachurch@gmail.com'
                            aria-label='email'
                        >
                            <i className='fas fa-envelope' />
                        </a>
                    </span>
                </p>
                <p>{this.props.t<FooterLocale>('footer', { returnObjects: true }).main}</p>
                <p><a href='/site-policy'>Policy</a></p>
                <p>&copy; {this.props.t<FooterLocale>('footer', { returnObjects: true }).copyright}</p>
            </footer>
        );
    }
}

export default withTranslation('common')(Footer);
