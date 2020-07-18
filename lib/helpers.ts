import { DEFAULT_PAGE_SIZE } from './config';
import { ReqParams } from './types';
import { i18n } from '../i18n';

export const isDevelopment = process.env.NODE_ENV !== 'production';

const buildQuery = (params: ReqParams) => (
    Object.entries(params)
        .reduce((acc, [key, val]) => {
            if (Array.isArray(val)) {
                return acc + val.map(v => `&${key}=${v}`).join('');
            }

            return acc + `&${key}=${val}`;
        }, '')
        .slice(1)
);

export const fetchData = async <T = any>(
    path: string,
    req: any,
    params: ReqParams = {},
) => {
    try {
        const url = process.env.MY_SITE_URL + path;

        // server side
        if (req) {
            const fetch = (await import('node-fetch')).default;

            params.lang = req.language;
            const reqUrl = url + `/?${buildQuery(params)}`;

            const response = await fetch(reqUrl);
            const json = await response.json();

            // node-fetch doesn't throw on unsuccessful request
            if (!response.ok) {
                if (response.status !== 404) {
                    // tslint:disable-next-line:no-console
                    console.error(`Error fetching url: ${reqUrl}. Reason: ${json}`);
                }
                return null;
            }

            return json as T;
        } else {
            // client side
            params.lang = i18n.language;

            const response = await fetch(url + `/?${buildQuery(params)}`);
            return await response.json() as T;
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

export const getLocalizedMonths = (lan?: string) => {
    const months = {
        ru: [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
            'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
        ],
        uk: [
            'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень',
            'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень',
        ],
        en: [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December',
        ],
    } as { [k: string]: string[] };

    if (lan && lan in months) {
        return months[lan];
    }

    return [];
};

export const formatDate = (dateStr: string, attributes: string[], lang: string = 'ru' ) => {
    // have to do this to mitigate TZ issue
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

export const getPageCount = (count: number, page_size: number = DEFAULT_PAGE_SIZE) =>   Math.ceil(count / page_size);

export const getImgUrl = (
    url: string,
    width: number,
    height?: number,
    fit = 'crop',
) => (
    `${url}?auto=format&fit=${fit}&q=80&w=${width}${ height ? `&h=${height}` : ''}`
);
