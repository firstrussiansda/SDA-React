const NextI18next = require('next-i18next').default;

module.exports = new NextI18next({
    defaultLanguage: 'ru',
    preload: ['ru'],
    otherLanguages: ['uk', 'en'],
    browserLanguageDetection: true,
    fallbackLng: 'ru',
});
