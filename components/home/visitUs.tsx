import { WithTranslation } from 'react-i18next';
import Link from 'next/link';
import React from 'react';

import { ArrowCircleRightIcon } from '../icons';
import { event } from '../../lib/gtag';

interface ServicesTypes {
    name: string;
    time: string;
}
interface VisitUsLocales {
    title: string;
    location: {
        name: string;
        area: string;
        address: string;
        header: string;
    };
    servicesHeader: string;
    services: ServicesTypes[];
}

const VisitUs: React.FunctionComponent<WithTranslation> = ({ t, tReady }) => {
    // Make sure translations are loaded before render
    if (!tReady) {
        return null;
    }

    const localizedText = t<VisitUsLocales>('visitUs', { returnObjects: true });
    return (
        <section id='visit-block' className='card card-lg pb-5'>
            <h2 id='directions-title' className='title text-center'>{localizedText.title}</h2>
            <div className='row'>
                <div className='col-md-6 m-b-lg'>
                    <div className='visit text-xs m-b-lg text-sm-left'>
                        <strong>{localizedText.location.name}</strong>
                        &nbsp;
                        {localizedText.location.area}
                    </div>
                    <address className='visit m-b-lg'>
                        <span><strong>{localizedText.location.header}</strong></span>
                        &nbsp;
                        {localizedText.location.address}
                    </address>
                    <div className='visit'>
                        <strong>{localizedText.servicesHeader}</strong>
                        <table>
                            <tbody>
                                {
                                    localizedText.services.map((service, idx) => (
                                        <tr key={idx}>
                                            <td>{service.time}</td>
                                            <td>{service.name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <Link href='/contact'>
                        <a
                            className='btn btn-outline-warning custom-warning hvr-icon-forward visit contact-btn'
                            role='button'
                            onClick={() => event({ action: 'link_click', category: 'Contact (Visit Us)' })}
                        >
                            {t('contactUs')}&nbsp;
                            <ArrowCircleRightIcon className='hvr-icon' />
                        </a>
                    </Link>
                </div>
                <div className='col-md-6'>
                    <iframe
                        title='map'
                        width='100%'
                        max-height='80vh'
                        height='350'
                        frameBorder='0'
                        src='https://www.google.com/maps/embed/v1/place?q=1913%20W%207th%20St%2C%20New%20York%2C%20New%20York%2011223&key=AIzaSyCEp8zGhVStHmupL_fwpqiRZiSqxCSCD3U'
                        allowFullScreen={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default VisitUs;
