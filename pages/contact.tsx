import { WithTranslation } from 'react-i18next';
import React from 'react';

import { EnvelopeIcon, InstagramIcon, FacebookIcon, MapMarkerIcon } from '../components/icons';
import { GOOGLE_MAPS_EMBED } from '../lib/config';
import { withTranslation } from '../i18n';
import { event } from '../lib/gtag';

class Contact extends React.Component<WithTranslation> {
    static async getInitialProps() {
        return { namespacesRequired: ['contact'] };
    }

    render() {
        return (
            <div id='contactUs'>
                <h1 className='text-center my-3'>{this.props.t('title')}</h1>
                <h2 className='text-center'>{this.props.t('header')}</h2>
                <div className='row justify-content-md-center top-space'>
                    <form
                        className='col-md-6 col-sm-12 m-3 pb-4'
                        action='https://formspree.io/firstrussiansdachurch@gmail.com'
                        method='POST'
                        onSubmit={() => event({ action: 'submit_form', category: 'Contact' })}
                    >
                        <div className='form-field string required'>
                            <label htmlFor='nameInput'>
                                {this.props.t('name')}
                            </label>
                            <input
                                id='nameInput'
                                type='text'
                                name='name'
                                className='form-control'
                                placeholder={this.props.t('namePlaceholder')}
                                required={true}
                            />
                        </div>
                        <div className='form-field string required'>
                            <label htmlFor='email-input'>{this.props.t('email')}</label>
                            <input
                                type='email'
                                name='_replyto'
                                className='form-control'
                                id='email-input'
                                aria-describedby='emailHelp'
                                placeholder='email@gmail.com'
                                required={true}
                            />
                            <small id='emailHelp' className='form-text text-muted'>
                                {this.props.t('neverShare')}
                            </small>
                        </div>

                        <div className='form-field string required'>
                            <label htmlFor='message-input'>
                                {this.props.t('message')}
                            </label>
                            <textarea
                                className='form-control'
                                id='message-input'
                                rows={5}
                                placeholder={this.props.t('messagePlaceholder')}
                                required={true}
                                name='message'
                            />
                        </div>
                        <input
                            type='submit'
                            name='Submit'
                            value={this.props.t<string>('send')}
                            role='button'
                            id='submit-btn'
                            className='btn btn-outline-warning custom-warning hvr-icon-forward'
                        />
                    </form>

                    <section id='contactUs-table' className='pt-5'>
                        <table>
                            <tbody>
                                <tr>
                                    <td><MapMarkerIcon /></td>
                                    <td>Brooklyn, NY</td>
                                </tr>
                                <tr>
                                    <td><EnvelopeIcon /></td>
                                    <td>firstrussiansdachurch@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='box facebook hvr-wobble-vertical'>
                                            <a href='https://www.facebook.com/%D0%A2%D0%B2%D0%BE%D0%B8-%D0%B4%D1%80%D1%83%D0%B7%D1%8C%D1%8F-%D0%B2-NYC-141818969217488/?__tn__=%2Cdk%2CP-R&eid=ARDkX64MnnE3mMUEAFCdA0Uk804LPzHbzOevV1tkPonAU5frQEWQnFZRLRqUsGI5dzHUhtvCDg6cNWfM' target='_blank'>
                                                <FacebookIcon />
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='box instagram hvr-wobble-vertical'>
                                            <a href='https://www.instagram.com/youthgroupfriends/' target='_blank'>
                                                <InstagramIcon />
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='box maps hvr-wobble-vertical'>
                                            <a href='https://goo.gl/maps/LwzPnmftqMkyLJKE9' target='_blank'>
                                                <MapMarkerIcon height={22} width={22} />
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <section>
                            <iframe
                                width='90%'
                                max-height='30vh'
                                height='150'
                                frameBorder='0'
                                allowFullScreen={true}
                                src={GOOGLE_MAPS_EMBED}
                            />
                        </section>
                    </section>
                </div>
            </div>
        );
    }
}

export default withTranslation('contact')(Contact);
