import { i18n } from '../i18n';
import { pythonAPI, nodeAPI, defaultImages, months } from './const';
import { ReqParams } from './interfaces';

const buildQuery = (params: ReqParams) => (
    Object.entries(params)
        .reduce((acc, [key, val]) => acc + `&${key}=${val}`, '')
        .slice(1)
);

export const fetchData = async (
    type: string,
    req: any,
    params: ReqParams = {},
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

export const getDate = (dateStr: string, attributes: string[] ) => {
    const rawDate = new Date(dateStr);

    const methods = {
        day: rawDate.getDay(),
        month: months[rawDate.getMonth()],
        year: rawDate.getFullYear(),
    } as { [k: string]: string | number };

    return attributes.reduce((acc, attr) => {
        if (attr in methods) {
            acc += methods[attr];
        } else {
            acc += attr;
        }
        return acc + ' ';
    }, '');
};

export const formatDate = (rawDate: string) => {
    try {
        return (new Date(rawDate)).toLocaleDateString(i18n.language, {
            weekday: 'long', month: 'long', day: 'numeric',
        });
    } catch (_e) {
        return rawDate;
    }
};

export const getDefaultImage = (type: 'event') => {
    const images = defaultImages[type];
    return images[Math.floor(Math.random() * images.length)];
};
