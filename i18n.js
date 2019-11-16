const NextI18next = require('next-i18next').default;

module.exports = new NextI18next({
    defaultLanguage: 'ru',
    otherLanguages: ['uk', 'en'],
});
