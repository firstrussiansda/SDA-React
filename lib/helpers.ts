import { i18n } from '../i18n';

import { baseUrl, defaultImages } from './const';

const buildQuery = (params: { [k: string]: string | number | boolean }) => (
    Object.entries(params)
        .reduce((acc, [key, val]) => acc + `&${key}=${val}`, '')
        .slice(1)
);

export const initialPropsFetch = async (
    type: string, req: any, params: { [k: string]: string | number | boolean } = {},
) => {
    try {
        const url = `${baseUrl}${type}.json`;
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

export const getDefaultImage = (type: 'event') => {
    const images = defaultImages[type];
    return images[Math.floor(Math.random() * images.length)];
};

export const chunkArray = (array: any[], chunk_size: number) => {
    const results = [];

    while (array.length) {
        results.push(array.splice(0, chunk_size));
    }

    return results;
};
