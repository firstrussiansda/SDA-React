import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import React, { useMemo } from 'react';

import { HEADER_IMAGE, LANGUAGE_TO_LOCALE } from '../../lib/config';
import { getMetaImage } from '../../lib/helpers';
import { GA_TRACKING_ID } from '../../lib/gtag';

const getLocaleAlternatives = (curLanguage: string) =>
    Object.entries(LANGUAGE_TO_LOCALE)
        .filter(([lang]) => curLanguage !== lang)
        .map(([, locale]) => locale);

const HeadTag = () => {
    const { t, i18n } = useTranslation();
    const localeAlternatives = useMemo(
        () => getLocaleAlternatives(i18n.language),
        [i18n.language],
    );

    return (
        <Head>
            <title>{t('siteTitle')}</title>
            <meta name="description" content={t('siteDescription')} />
            <meta name="thumbnail" content={getMetaImage(HEADER_IMAGE)} />
            <meta
                property="og:locale"
                content={LANGUAGE_TO_LOCALE[i18n.language]}
            />
            {localeAlternatives.map(locale => (
                <meta
                    property="og:locale:alternate"
                    content={locale}
                    key={locale}
                />
            ))}
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <link
                href="https://fonts.googleapis.com/css?family=Montserrat:display=swap"
                rel="stylesheet"
            />
            {/* Bootstrap imports */}
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossOrigin="anonymous"
            />
            <link
                rel="shortcut icon"
                href="/static/img/favicon.ico"
                type="image/x-icon"
            />
            <link
                rel="icon"
                href="/static/img/favicon.ico"
                type="image/x-icon"
            />
            <script
                async={true}
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
            `,
                }}
            />
        </Head>
    );
};

HeadTag.getInitialProps = () => ({
    namespacesRequired: ['common'],
});

export default HeadTag;
