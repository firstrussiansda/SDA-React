import React from 'react';
import App from 'next/app';
import Router from 'next/router';

import { appWithTranslation } from '../i18n';
import { pageview } from '../lib/gtag';

import HeadTag from '../components/shared/_head';
import Header from '../components/shared/Header.component';
import Footer from '../components/shared/Footer.component';

import '../styles/style.scss';

Router.events.on('routeChangeComplete', url => pageview(url));

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <div>
                <HeadTag />
                <Header />

                <Component {...pageProps} />

                <Footer />
            </div>
        );
    }
}

export default appWithTranslation(MyApp);
