const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    publicRuntimeConfig: {
        localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
            ? process.env.LOCALE_SUBPATHS
            : 'none',
    },
    env: {
        MY_SITE_URL: process.env.API_SITE_URL,
    },
});
