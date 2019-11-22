const withCSS = require('@zeit/next-css');

console.log("API_SITE_URL on build", process.env.API_SITE_URL);

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
