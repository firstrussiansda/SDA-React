export const GA_TRACKING_ID = 'UA-150983899-1';

declare global {
    interface Window {
        gtag: any;
    }
}

interface EventOptions {
    action: string;
    category: string;
    label?: string;
    value?: number;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (page_path: string) => {
    window.gtag('config', GA_TRACKING_ID, { page_path });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: EventOptions) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
    });
};
