import NextI18next from 'next-i18next';

const NextI18NextInstance = new NextI18next({
    defaultLanguage: 'ru',
    preload: ['ru'],
    otherLanguages: ['ru', 'uk', 'en'],
    browserLanguageDetection: true,
    fallbackLng: 'ru',
});

export default NextI18NextInstance;
export const {
    appWithTranslation,
    withTranslation,
} = NextI18NextInstance;
