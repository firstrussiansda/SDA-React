const NextI18next = require('next-i18next').default;

module.exports = new NextI18next({
    defaultLanguage: 'ru',
    preload: ['ru'],
    otherLanguages: ['uk', 'en'],
    detection: {
        lookupCookie: 'next-i18next',
        order: ['cookie', 'querystring', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie'],
    },
    fallbackLng: 'ru',
});
