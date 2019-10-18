import { i18n } from '../i18n';
import { pythonAPI, nodeAPI, defaultImages } from './const';

const buildQuery = (params: { [k: string]: string | number | boolean }) => (
    Object.entries(params)
        .reduce((acc, [key, val]) => acc + `&${key}=${val}`, '')
        .slice(1)
);

export const fetchInitialProps = async (
    type: string,
    req: any, params: { [k: string]: string | number | boolean } = {},
) => {
    try {
        const url = `${type === 'images' ? nodeAPI : pythonAPI}${type}`;

        // server side
        if (req) {
            const fetch = require('node-fetch');

            params.lang = req.language;

            const response = await fetch(url + `/?${buildQuery(params)}`);
            return await response.json();
        } else {
            // client side
            params.lang = i18n.language;

            const response = await fetch(url + `/?${buildQuery(params)}`);
            return await response.json();
        }
    } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
            // tslint:disable-next-line:no-console
            console.error(e);
        } else {
            // tslint:disable-next-line:no-console
            console.error('Error occurred while fetching events =(');
        }
        return null;
    }
};

export const formatDate = (rawDate: string) => {
    try {
        return (new Date(rawDate)).toLocaleDateString(i18n.language, {
            weekday: 'long', month: 'long', day: 'numeric',
        });
    } catch(_e) {
        return rawDate;
    }
};

export const getDefaultImage = (type: 'event') => {
    const images = defaultImages[type];
    return images[Math.floor(Math.random() * images.length)];
};
