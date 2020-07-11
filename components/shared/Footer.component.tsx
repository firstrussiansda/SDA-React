import { WithTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import React from 'react';

import { EnvelopeFillIcon, InstagramIcon, FacebookIcon } from '../icons';
import { withTranslation } from '../../i18n';

import './Footer.style.scss';

const AlertLoader = dynamic(() => import('./AlertLoader.component'), { ssr: false });

interface FooterLocale {
    main: string;
    copyright: string;
}

const currentYear = (new Date()).getFullYear();

class Footer extends React.Component<WithTranslation> {
    static async getInitialProps() {
        return { namespacesRequired: ['common'] };
    }

    render() {
        return (
            <React.Fragment>
                <AlertLoader />
                <footer className='component-page-footer'>
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
                            <EnvelopeFillIcon width={20} height={20} />
                        </a>
                    </p>
                    <p>{this.props.t<FooterLocale>('footer', { returnObjects: true }).main}</p>
                    {/* <a><a href='/site-policy'>Policy</a></a> */}
                    <p>
                        &copy;
                        {this.props.t<FooterLocale>('footer', { returnObjects: true }).copyright}
                        &nbsp;
                        {currentYear}
                    </p>
                </footer>
            </React.Fragment>
        );
    }
}

export default withTranslation('common')(Footer);
