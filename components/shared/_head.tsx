import Head from 'next/head';
import React from 'react';

const HeadTag = () => (
    <Head>
        <title>NY First Russian SDA church</title>
        <meta
            name='viewport'
            content='width=device-width, initial-scale=1'
        />
        <meta charSet='utf-8' />
        {/* <!--TODO: complete description--> */}
        <meta
            name='description'
            content='First Russian SDA church is a religious organization . . . '
        />
        <link
            rel='stylesheet'
            href='https://use.fontawesome.com/releases/v5.3.1/css/all.css'
            integrity='sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU'
            crossOrigin='anonymous'
        />
        <link
            href='https://fonts.googleapis.com/css?family=Montserrat'
            rel='stylesheet'
        />
        {/* Bootstrap imports */}
        <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
            integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
            crossOrigin='anonymous'
        />
    </Head>
);

export default HeadTag;
