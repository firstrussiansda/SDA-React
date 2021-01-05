import Head from 'next/head';
import React from 'react';

import { GA_TRACKING_ID } from '../../lib/gtag';

const HeadTag = () => (
    <Head>
        <title>NY First Russian SDA church</title>
        <meta
            name='viewport'
            content='width=device-width, initial-scale=1'
        />
        <meta charSet='utf-8' />
        <meta
            name='description'
            content='We are the Russian speaking Seventh-day Adventist church serving the New York metropolitan area for more than 20 years. We are a diverse community of people with a passion to be the light and the salt of the earth.'
        />
        <link
            href='https://fonts.googleapis.com/css?family=Montserrat:display=swap'
            rel='stylesheet'
        />
        {/* Bootstrap imports */}
        <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
            integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'
            crossOrigin='anonymous'
        />
        <link rel='shortcut icon' href='/static/img/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/static/img/favicon.ico' type='image/x-icon' />
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

export default HeadTag;
