import React from 'react';
import dynamic from 'next/dynamic';
import { withTranslation } from '../../i18n';
import { WithTranslation } from 'react-i18next';
import { EnvelopeFillIcon, InstagramIcon, FacebookIcon } from '../icons';
import './Footer.style.scss';

const AlertLoader = dynamic(() => import('./AlertLoader.component'), { ssr: false });

interface FooterLocale {
    main: string;
    copyright: string;
}

class Footer extends React.Component<WithTranslation> {
    static async getInitialProps() {
        return { namespacesRequired: ['common'] };
    }

    render() {
        return (
            <footer className='component-page-footer'>
                <AlertLoader />
                <p className='media-icons'>
                    <a
                        href='https://www.facebook.com/firstrussianny/'
                        aria-label='facebook'
                    >
                        <FacebookIcon />
                    </a>
                    <a
                        href='https://www.instagram.com/youthgroupfriends/'
                        aria-label='instagram'
                    >
                        <InstagramIcon />
                    </a>
                    <a
                        href='mailto:firstrussiansdachurch@gmail.com'
                        aria-label='email'
                    >
                        <EnvelopeFillIcon />
                    </a>
                </p>
                <p>{this.props.t<FooterLocale>('footer', { returnObjects: true }).main}</p>
                {/* <a><a href='/site-policy'>Policy</a></a> */}
                <p>&copy; {this.props.t<FooterLocale>('footer', { returnObjects: true }).copyright}</p>
            </footer>
        );
    }
}

export default withTranslation('common')(Footer);
