import React, { useState, useEffect, useCallback } from 'react';
import { Announcement } from '../../lib/types';
import { fetchData } from '../../lib/helpers';
import Alert from 'react-bootstrap/Alert';

const curDate = new Date().toISOString().split('T')[0];
const storageKey = 'viewedAlerts';

const getIsViewed = (slug: string) => {
    const viewedAlerts = window.localStorage.getItem(storageKey);
    if (viewedAlerts) {
        return JSON.parse(viewedAlerts)[slug];
    }
    return false;
};

const getAlertVariant = (level: Announcement['alert_level']) => level.toLowerCase() as 'danger' | 'warning' | 'info';

const storeIsViewed = (slug: string) => {
    let parsed: { [key: string]: true } = {};

    const viewedAlerts = window.localStorage.getItem(storageKey);
    if (viewedAlerts) {
        parsed = JSON.parse(viewedAlerts);
    }

    parsed[slug] = true;

    localStorage.setItem(storageKey, JSON.stringify(parsed));
};

const getAlert = async () => {
    const announcements = await fetchData(`announcements`, null, {
        alert_level__in: 'DANGER,WARNING,INFO',
        start_date__lte: curDate,
        end_date__gt: curDate,
        page_size: 1,
    });

    return announcements?.results?.[0] as Announcement || null;
};

export const AlertLoader = () => {
    const [alert, setAlert] = useState<Announcement | null>(null);
    const [show, setShow] = useState(true);

    useEffect(() => {
        initAlert();
    }, []);

    const initAlert = useCallback(async () => {
        const alert = await getAlert();
        if (alert && !getIsViewed(alert.slug)) {
            setAlert(alert);
        }
    }, []);

    const closeAlert = useCallback(() => {
        if (alert) {
            storeIsViewed(alert.slug);
        }
        setShow(false);
    }, [alert?.slug]);

    if (!alert || !show) {
        return null;
    }

    return (
        <Alert variant={getAlertVariant(alert.alert_level)} dismissible={true} onClose={closeAlert}>
            <Alert.Heading>
                <i className='fas fa-info-circle' />
                {alert.title}
            </Alert.Heading>
            <p dangerouslySetInnerHTML={{ __html: alert.description }} />
        </Alert>
    );
};

export default AlertLoader;
