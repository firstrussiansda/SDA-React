const withSass = require('@zeit/next-sass');

console.log('API_SITE_URL on build', process.env.API_SITE_URL);

module.exports = withSass({
    publicRuntimeConfig: {
        localeSubpaths:
            typeof process.env.LOCALE_SUBPATHS === 'string'
                ? process.env.LOCALE_SUBPATHS
                : 'none',
        strictMode: false,
    },
    env: {
        MY_SITE_URL: process.env.API_SITE_URL,
    },
});
