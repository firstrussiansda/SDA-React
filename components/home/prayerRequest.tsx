import React from 'react';
import { WithTranslation } from 'react-i18next';
import { Quote } from '../../lib/interfaces';

interface PrayerRequestLocales {
    title: string;
    quote: Quote;
    name: string;
    email: string;
    'namePlaceholder': string;
    'prayerNeed': string;
    'prayerNeedPlaceholder': string;
    'sendPrayerNeed': string;
}

const PrayerRequest: React.FunctionComponent<WithTranslation> = ({ t, tReady }) => {
    // TODO: this leads to server and client side HTML not matching sometimes. Hope to fix before PROD release
    if (!tReady) {
        return null;
    }

    const localizedText = t<PrayerRequestLocales>('prayerRequest', { returnObjects: true });

    return (
        <section id='praying-request'>
            <h2 className='title text-center'>{localizedText.title}</h2>
            <div className='row'>
                <div className='col-sm-12 col-md-6 m-auto'>
                    <div className='text-center'>
                        <blockquote className='blockquote'>
                            <h5 className='m-4 mb-0 dispa'>
                                &quot;
                                    {localizedText.quote.text}
                                &quot;
                                </h5>
                            <footer className='blockquote-footer'>{localizedText.quote.origin}</footer>
                        </blockquote>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <form>
                        <div className='row'>
                            <div className='col-sm-6 col-md-6 mt-2 form-group'>
                                <label htmlFor='name-field'>{localizedText.name}</label>
                                <input
                                    id='name-field'
                                    type='text'
                                    className='form-control'
                                    placeholder={localizedText['namePlaceholder']}
                                    aria-describedby='emailHelp'
                                    required={true}
                                />
                            </div>
                            <div className='col-sm-6 col-md-6 mt-2 form-group'>
                                <label htmlFor='email-field'>{localizedText.email}</label>
                                <input
                                    id='email-field'
                                    type='email'
                                    className='form-control'
                                    placeholder='email@gmail.com'
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-sm-12 col-md-12 form-group'>
                                <label htmlFor='prayer_request'>{localizedText['prayerNeed']}</label>
                                <textarea
                                    className='form-control'
                                    id='prayer_request'
                                    placeholder={localizedText['prayerNeedPlaceholder']}
                                    rows={3}
                                    required={true}
                                />
                            </div>
                        </div>
                        <button type='submit' className='btn btn-outline-warning'>
                            {localizedText['sendPrayerNeed']}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PrayerRequest;
