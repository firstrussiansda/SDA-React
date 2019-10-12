import React from 'react';
import Link from 'next/link';
import { withTranslation } from '../../i18n';
import { WithTranslation } from 'react-i18next';

export interface HeaderLocale {
    title: string;
    about: string;
    groups: string;
    calendar: string;
    media: string;
    gallery: string;
    sermons: string;
    language: string;
}

class Header extends React.Component <WithTranslation> {
    static async getInitialProps() {
        return {
            namespacesRequired: ['common'],
        };
    }

    render() {
        const { t, i18n } = this.props;
        const headerLocales = t<HeaderLocale>('header', { returnObjects: true });

        return (
            <nav className='navbar navbar-expand-md navbar-light'>
                <div className='container'>
                    <Link href='/'>
                        <a id='brand' className='navbar-brand' >
                            <img
                                src='/static/img/rsz_logo.png'
                                width='30'
                                height='30'
                                className='d-inline-block'
                                alt='SDA logo'
                            />
                            {t('title')}
                        </a>
                    </Link>

                    <button
                        className='navbar-toggler justify-self-start border-0'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon' />
                    </button>

                    <div
                        className='collapse navbar-collapse navbar navbar-expand-sm navbar-light justify-content-end'
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link href='/about'>
                                    <a className='nav-link hvr-overline-from-center'>
                                        { headerLocales.about }
                                        <span className='sr-only'>(current)</span>
                                    </a>
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link href='/groups'>
                                    <a className='nav-link hvr-overline-from-center'>
                                        { headerLocales.groups }
                                        <span className='sr-only'>(current)</span>
                                    </a>
                                </Link>

                            </li>

                            <li className='nav-item'>
                                <Link href='/calendar'>
                                    <a className='nav-link hvr-overline-from-center'>
                                        { headerLocales.calendar }
                                    </a>
                                </Link>

                            </li>

                            <li className='nav-item dropdown'>
                                <a
                                    className='nav-link dropdown-toggle hvr-overline-from-center'
                                    id='navbarDropdown'
                                    role='button'
                                    data-toggle='dropdown'
                                    aria-haspopup='true'
                                    aria-expanded='false'
                                >
                                    { headerLocales.media }
                                </a>
                                <div
                                    className='dropdown-menu'
                                    aria-labelledby='navbarDropdown'
                                >
                                    <Link href='/gallery'>
                                        <a className='dropdown-item'>
                                            { headerLocales.gallery }
                                        </a>
                                    </Link>

                                    <Link href='/sermons'>
                                        <a className='dropdown-item'>
                                            { headerLocales.sermons }
                                        </a>
                                    </Link>
                                </div>
                            </li> {/* Media dropdown */}

                            <li className='nav-item dropdown'>
                                <a
                                    className='nav-link dropdown-toggle hvr-overline-from-center'
                                    href='#'
                                    id='localeDropdown'
                                    role='button'
                                    data-toggle='dropdown'
                                    aria-haspopup='true'
                                    aria-expanded='false'
                                >
                                    <i className='fas fa-language' />
                                    &nbsp;{ headerLocales.language }
                                </a>
                                <div
                                    className='dropdown-menu'
                                    aria-labelledby='localeDropdown'
                                >
                                    <button
                                        className='dropdown-item'
                                        onClick={() => i18n.changeLanguage('en')}
                                    >
                                        English
                                    </button>
                                    <button
                                        className='dropdown-item'
                                        onClick={() => i18n.changeLanguage('ru')}
                                    >
                                        Русский
                                    </button>
                                    <button
                                        className='dropdown-item'
                                        onClick={() => i18n.changeLanguage('uk')}
                                    >
                                        Українська
                                    </button>
                                </div>
                            </li> {/* Locale dropdown */}

                            <li className='nav-item'>
                                <Link href='/contact'>
                                    <a
                                        role='button'
                                        id='btn-contact-header'
                                        className='btn btn-outline-dark hvr-wobble-vertical'
                                    >
                                        <i className='far fa-envelope' />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div> {/*   Collapsing content  */}
                </div> {/* Navbar container */}
            </nav>
        );
    }
}

export default withTranslation('common')(Header);
