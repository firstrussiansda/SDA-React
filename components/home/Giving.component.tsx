import { WithTranslation } from 'react-i18next';
import React from 'react';
import { FauxButton } from '../ui';
import './Giving.style.scss';

export const Giving = ({ t }: WithTranslation) => {

    return (
        <section className='component-giving'>
            <h2>{t('givingHeader')}</h2>
            <FauxButton
                type='filled'
                url='https://adventistgiving.org/#/org/AN48FN/envelope/start'
                target='_blank'
                className='giving-button'
            >
                {t('givingButton')}
            </FauxButton>
        </section>
    );
};
