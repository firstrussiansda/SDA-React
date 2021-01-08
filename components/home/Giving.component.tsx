import { WithTranslation } from 'react-i18next';
import React from 'react';

import { event } from '../../lib/gtag';
import { FauxButton } from '../ui';
import './Giving.style.scss';

const handleGivingClick = () =>
    event({ action: 'link_click', category: 'Giving Header Desktop' });

export const Giving = ({ t }: WithTranslation) => {
    return (
        <section className="component-giving">
            <h2>{t('givingHeader')}</h2>
            <FauxButton
                type="filled"
                url="https://adventistgiving.org/#/org/AN48FN/envelope/start"
                target="_blank"
                className="giving-button"
                onClick={handleGivingClick}
            >
                {t('givingButton')}
            </FauxButton>
        </section>
    );
};
