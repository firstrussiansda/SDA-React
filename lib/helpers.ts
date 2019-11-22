import { i18n } from '../i18n';
import { getLocalizedMonths } from './const';
import { ReqParams } from './types';

const buildQuery = (params: ReqParams) => (
    Object.entries(params)
        .reduce((acc, [key, val]) => acc + `&${key}=${val}`, '')
        .slice(1)
);

export const fetchData = async (
    path: string,
    req: any,
    params: ReqParams = {},
) => {
    try {
        // tslint:disable-next-line:no-console
        console.log('API_SITE_URL', process.env.API_SITE_URL);
        const url = process.env.API_SITE_URL + path;

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
        if (req) {
            // tslint:disable-next-line:no-console
            console.error(e);
        } else {
            // tslint:disable-next-line:no-console
            console.error('Error occurred while fetching API data');
        }
        return null;
    }
};

export const formatDate = (dateStr: string, attributes: string[], lang: string = 'ru' ) => {
    // have to do it to mitigate TZ issue
    const rawDate = new Date(`${dateStr}T12:00:00`);

    const methods = {
        day: rawDate.getDate(),
        month: getLocalizedMonths(lang)[rawDate.getMonth()],
        year: rawDate.getFullYear(),
    } as { [k: string]: string | number };

    return attributes.reduce((acc, attr) => {
        if (attr in methods) {
            acc += methods[attr];
        } else {
            acc = acc.slice(0, -1) + attr;
        }
        return acc + ' ';
    }, '');
};
