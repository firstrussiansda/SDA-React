import { WithTranslation } from 'react-i18next';
import Link from 'next/link';
import React from 'react';

import { ArrowCircleRightIcon } from '../icons';
import { event } from '../../lib/gtag';
import './GatherOnline.style.scss';

interface GatherOnlineLocale {
    contact: string;
    body: string[];
    title: string;
}

export const GatherOnline = ({ t }: WithTranslation) => {
    const localizedText = t('gatherOnline', { returnObjects: true }) as GatherOnlineLocale;
    return (
        <section className='component-gather-online'>
            <h2 className='text-center title'>{localizedText.title}</h2>
            <div className='body'>
                {localizedText.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className='get-meeting-details'>
                    {localizedText.contact}
                    <Link href='/contact'>
                        <a
                            className='btn btn-outline-warning custom-warning hvr-icon-forward visit contact-btn'
                            role='button'
                            onClick={() => event({ action: 'link_click', category: 'Contact (Zoom)' })}
                        >
                            {t('contactUs')}&nbsp;
                            <ArrowCircleRightIcon className='hvr-icon' />
                        </a>
                    </Link>
                </div>
        </section>
    );
};
