export const pythonAPI = 'https://firstrussian-api.miki725.com/api/';
export const defaultImages = {
    event: [
        'https://images.unsplash.com/photo-1512131852012-622823c149e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&',
        'https://images.unsplash.com/photo-1478033332825-3418438ab019?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&',
        'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&',
    ],
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
    } else {
        return [];
    }
};

export const isDevelopment = process.env.NODE_ENV !== 'production';
export const nodeAPI = isDevelopment ? 'http://localhost:3000/api/' : 'https://firstrussian.miki725.com/api/';
