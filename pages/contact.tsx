import React from 'react';

// import { withTranslation } from '../i18n';
import { WithTranslation } from 'react-i18next';

class Contact extends React.Component<WithTranslation> {
    getInitialProps = async () => ({
        namespacesRequired: ['common'],
    })

    render() {
        return (
            <div id='contact-us'>
                <h1 className='text-center title'>Contact Us</h1>
                <h2 className='text-center'>Stop By and Say 'hi'. Or Send Us a Note.</h2>
                <div className='row justify-content-md-center'>
                    <form
                        className='col-md-6 col-sm-12 m-3 pb-4'
                        action='https://formspree.io/skaistrenko@gmail.com'
                        method='POST'
                    >
                        <div className='form-field string required'>
                            <label htmlFor='nameInput'>Name</label>
                            <input
                                id='nameInput'
                                type='text'
                                name='name'
                                className='form-control'
                                placeholder='Ivan Ivanov'
                                required={true}
                            />
                        </div>
                        <div className='form-field string required'>
                            <label htmlFor='email-input'>Email address</label>
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
                                We'll never share your email with anyone else.
                            </small>
                        </div>

                        <div className='form-field string required'>
                            <label htmlFor='message-input'>Message</label>
                            <textarea
                                className='form-control'
                                id='message-input'
                                rows={5}
                                placeholder='Enter your message'
                                required={true}
                                name='message'
                            />
                        </div>
                        <input
                            type='submit'
                            name='Submit'
                            value='Contact us'
                            role='button'
                            id='submit-btn'
                            className='btn btn-outline-warning hvr-icon-forward'
                        />
                    </form>

                    <section id='contact-us-table' className='pt-5'>
                        <table>
                            <tr>
                                <td><i className='fas fa-map-marker-alt' /></td>
                                <td>Brooklyn, NY</td>
                            </tr>
                            <tr>
                                <td><i className='fas fa-phone' /></td>
                                <td>555-555-5555</td>
                            </tr>
                            <tr>
                                <td><i className='far fa-envelope' /></td>
                                <td>frsda@gmail.com</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td>
                                    <div className='box facebook hvr-wobble-vertical'>
                                        <a href='https://www.facebook.com/%D0%A2%D0%B2%D0%BE%D0%B8-%D0%B4%D1%80%D1%83%D0%B7%D1%8C%D1%8F-%D0%B2-NYC-141818969217488/?__tn__=%2Cdk%2CP-R&eid=ARDkX64MnnE3mMUEAFCdA0Uk804LPzHbzOevV1tkPonAU5frQEWQnFZRLRqUsGI5dzHUhtvCDg6cNWfM' target='_blank'>
                                            <i className='fab fa-facebook-f' />
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <div className='box instagram hvr-wobble-vertical'>
                                        <a href='https://www.instagram.com/youthgroupfriends/' target='_blank'>
                                            <i className='fab fa-instagram' />
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <div className='box youtube hvr-wobble-vertical'>
                                        <i className='fab fa-youtube' />
                                    </div>
                                </td>
                                <td>
                                    <div className='box maps hvr-wobble-vertical'>
                                        <a href='https://www.google.com/maps?ll=40.600665,-73.978986&z=15&t=m&hl=ru-RU&gl=US&mapclient=embed&q=1913+W+7th+St+Brooklyn,+NY+11223' target='_blank'>
                                            <i className='fas fa-map-marker-alt' />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <section>
                            <iframe
                                width='90%'
                                max-height='30vh'
                                height='150'
                                frameBorder='0'
                                allowFullScreen={true}
                                src='https://www.google.com/maps/embed/v1/place?q=1913%20W%207th%20St%2C%20New%20York%2C%20New%20York%2011223&key=AIzaSyCEp8zGhVStHmupL_fwpqiRZiSqxCSCD3U'
                            />
                        </section>
                    </section>
                </div>
            </div>
        );
    }
}

// export default withTranslation('contact')(Contact);
export default Contact;
