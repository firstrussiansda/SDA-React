import { BaseApiResponse, ReqParams } from './types';
import { DEFAULT_PAGE_SIZE } from './config';
import { i18n } from '../i18n';

export const isDevelopment = process.env.NODE_ENV !== 'production';

export class ResponseError extends Error {
    constructor(message: string, public code: number) {
        super(message);
    }
}

export const buildQuery = (params: ReqParams) => (
    Object.entries(params)
        .reduce((acc, [key, val]) => {
            if (Array.isArray(val)) {
                return acc + val.map(v => `&${key}=${v}`).join('');
            }

            return acc + `&${key}=${val}`;
        }, '')
        .slice(1)
);

export const fetchData = async <T extends BaseApiResponse = BaseApiResponse>(
    path: string, req: any, params: ReqParams = {}
) => {
    try {
        const url = process.env.MY_SITE_URL + path;
        params.lang = req?.language || i18n.language;
        params.format = 'json';

        const response = await fetch(encodeURI(url + `/?${buildQuery(params)}`));
        const json = await response.json() as T;

        // fetch doesn't throw on error response codes 🤦‍♂️
        if (!response.ok) {
            throw new ResponseError(
                `API Error (${response.status}): ${json.detail || 'Unknown error'}`,
                response.status,
            );
        }

        return json;
    } catch (e) {
        if (!(e instanceof ResponseError) || e.code !== 404) {
            console.error('Error occurred while fetching API data', e);
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
