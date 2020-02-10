import React from 'react';
import { WithTranslation } from 'react-i18next';
import { Quote } from '../../lib/types';
import { event } from '../../lib/gtag';

interface PrayerRequestLocales {
    title: string;
    quote: Quote;
    name: string;
    email: string;
    namePlaceholder: string;
    prayerNeed: string;
    prayerNeedPlaceholder: string;
    sendPrayerNeed: string;
}

const reportToGA = () => {
    event({
        action: 'submit_form',
        category: 'Prayer',
    });
};

const PrayerRequest: React.FunctionComponent<WithTranslation> = ({ t, tReady }) => {
    // Make sure translations are loaded before render
    if (!tReady) {
        return null;
    }

    const localizedText = t<PrayerRequestLocales>('prayerRequest', { returnObjects: true });

    return (
        <section id='praying-request'>
            <h2 className='title text-center'>{localizedText.title}</h2>
            <div className='row'>
                <div className='col-md-6 m-auto'>
                    <div className='text-center'>
                        <blockquote className='blockquote'>
                            <h5 className='m-4 mb-0'>
                                &quot;
                                    {localizedText.quote.text}
                                &quot;
                            </h5>
                            <footer className='blockquote-footer'>{localizedText.quote.origin}</footer>
                        </blockquote>
                    </div>
                </div>
                <div className='col-md-6'>
                    <form
                        action='https://formspree.io/firstrussianprayer@gmail.com'
                        method='POST'
                        onSubmit={reportToGA}
                    >
                        <div className='row'>
                            <div className='col-lg-6 mt-2 form-group'>
                                <label htmlFor='name-field'>{localizedText.name}</label>
                                <input
                                    id='name-field'
                                    type='text'
                                    name='name'
                                    className='form-control'
                                    placeholder={localizedText['namePlaceholder']}
                                    aria-describedby='emailHelp'
                                    required={true}
                                />
                            </div>
                            <div className='col-lg-6 mt-2 form-group'>
                                <label htmlFor='email-field'>{localizedText.email}</label>
                                <input
                                    id='email-field'
                                    type='email'
                                    name='_replyto'
                                    className='form-control'
                                    placeholder='email@gmail.com'
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col form-group'>
                                <label htmlFor='prayer_request'>{localizedText['prayerNeed']}</label>
                                <textarea
                                    className='form-control'
                                    id='prayer_request'
                                    name='prayer_request'
                                    placeholder={localizedText['prayerNeedPlaceholder']}
                                    rows={3}
                                    required={true}
                                />
                            </div>
                        </div>
                        <button
                            type='submit'
                            role='button'
                            className='btn btn-outline-warning'
                        >
                            {localizedText['sendPrayerNeed']}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PrayerRequest;
